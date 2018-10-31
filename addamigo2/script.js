
//Parte de amigos:

function generarHtml(amigosface,dataParam) {
    $(amigosface).html(function () {
        let htmlAmigos = '';
        dataParam.forEach(unamigo => {
            htmlAmigos += `<li>
            <div>${unamigo.nombre}</div>
            <div>${unamigo.edad}</div>
            <div><button class='saludabtn' data-value="${unamigo.nombre}">Saludar</button></div>    
            </li>`;
        });
        return htmlAmigos;
    });
}

function asociarClick(paramSelector) {
    $(paramSelector).click(function () {
        alert('Holinha ' + $(this).attr('data-value') + "!!");
    })
}

$('#cargarbtnface').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b7a3100002914474d58",
    }).done(function (data) {
        console.log(data)

        generarHtml('#amigosface',data);
        asociarClick('#amigosface .saludabtn');
    });
})

$('#cargarbtnspoti').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b7a3100002914474d58",
    }).done(function (data) {
        console.log(data)

        generarHtml('#amigosspoti',data);
        asociarClick('#amigosspoti .saludabtn');
    });
})

//Parte de formulario:

document.getElementById('accederbtn').onclick=(function (event) {
    console.log(event);
    event.preventDefault();

    document.querySelectorAll('.error').forEach(element=>{
        element.classList.add('esconder');
    });

    let formValid= document.getElementById('loginForm').checkValidity();
    if(formValid){
        //Enviar
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd973312f00006f0006d126",//caso true
            // url: "http://www.mocky.io/v2/5bd977ac2f00003e0006d155",//caso false
            data: { 
                usuario: document.getElementById('usuario').value, 
                contraseña:document.getElementById('erroredad').value 
            }
          }).done(function (data) {
              console.log(data);
              if (data.result) {
                window.location.href='dashboard.html';
              }else{
                document.getElementById('mensaje').classList.remove('esconder');
              }
          });

    }else{
            if (!document.getElementById('usuario').checkValidity()) {
                document.getElementById('errorusuario').classList.remove('esconder');
            }
            if (!document.getElementById('edad').checkValidity()) {
                document.getElementById('erroredad').classList.remove('esconder');
            }
    }
});