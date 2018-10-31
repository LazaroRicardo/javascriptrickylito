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
            // url: "http://www.mocky.io/v2/5bd973312f00006f0006d126",//caso false
            url: "http://www.mocky.io/v2/5bd977ac2f00003e0006d155",//caso true
            data: { 
                usuario: document.getElementById('usuario').value, 
                contraseña:document.getElementById('errorcontraseña').value 
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
        //mostrar mensaje y no enviar
        // document.getElementById('mensaje').innerHTML="Datos Incorrectos";

     

            if (!document.getElementById('usuario').checkValidity()) {
                document.getElementById('errorusuario').classList.remove('esconder');
            }

            if (!document.getElementById('contraseña').checkValidity()) {
                document.getElementById('errorcontraseña').classList.remove('esconder');
            }
    }
});