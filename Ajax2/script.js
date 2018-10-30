
$('#cargarbtnface').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b7a3100002914474d58",
    }).done(function (data) {
        console.log(data)

//Inyectar amigos del servidor//

        $('#amigosface').html(function () {
            let htmlAmigos = '';
            data.forEach(unamigo => {
                htmlAmigos += `<li>
                <div>${unamigo.nombre}</div>
                <div>${unamigo.edad}</div>
                <div><button class='saludabtn' data-value="${unamigo.nombre}">Saludar</button></div>    
                </li>`;
            });
            return htmlAmigos;
        });

//hacer que el botón de saludar funcione:// 

        $('.saludabtn').click(function () {
            alert('Holinha ' + $(this).attr('data-value') + "!!");
        })
    });
})

//Duplicar el archivo anterior para meterlo en 2 botones diferentes, solo hay que cambiar la dirección id y el nombre del botón.//

$('#cargarbtnspoti').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b7a3100002914474d58",
    }).done(function (data) {
        console.log(data)

//Inyectar amigos del servidor//

        $('#amigosspoti').html(function () {
            let htmlAmigos = '';
            data.forEach(unamigo => {
                htmlAmigos += `<li>
                <div>${unamigo.nombre}</div>
                <div>${unamigo.edad}</div>
                <div><button class='saludabtn' data-value="${unamigo.nombre}">Saludar</button></div>    
                </li>`;
            });
            return htmlAmigos;
        });

//hacer que el botón de saludar funcione:// 

        $('.saludabtn').click(function () {
            alert('Holinha ' + $(this).attr('data-value') + "!!");
        })
    });
})

