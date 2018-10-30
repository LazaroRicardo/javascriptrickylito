//Reducir la cantidad de líneas metiendo el parseo en una función y relacionándola con lo demás.//
//Después hemos separado la pulsación del botón de saludo de loa amigos face y los amigos spoty mediante una mezcla de parámetros un poco liosa.//

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

$('#cargarbtnface').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b7a3100002914474d58",
    }).done(function (data) {
        console.log(data)

        generarHtml('#amigosface',data);

        $('#amigosface .saludabtn').click(function () {
            alert('Holinha ' + $(this).attr('data-value') + "!!");
        })
    });
})

$('#cargarbtnspoti').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b7a3100002914474d58",
    }).done(function (data) {
        console.log(data)

        generarHtml('#amigosspoti',data);

        $('#amigosspoti .saludabtn').click(function () {
            alert('Holinha ' + $(this).attr('data-value') + "!!");
        })
    });
})

