//Estamos editando h1 y botón mediantw jquery.

console.log($('#hola').html());

//$:idempotente, el objeto resultante de la operación de este objeto es del mismo tipo que el objeto inicial.
//$: es un objeto de tipo jquery, y sempre devuelve el mismo objeto, pero transformado.

$('#hola').click(function() {
    alert( "Hi Boys." );
  });

$('h1').html('Hola!!').click(function () {
      alert('Este es el título');
  }).html('Otro título');

let amigos = [
    { id: 32143,nombre: 'Ricardo',edad: '41'},
    { id: 32148,nombre: 'Carlinhos',edad: '87'},
  ];
//Voy a montar html con este código://

$('#amigos').html(function () {
    let htmlAmigos='';
    amigos.forEach(unamigo =>{
        htmlAmigos += `<li>
        <div>${unamigo.nombre} ${unamigo.edad}</div>
        <div><button class='saludabtn' data-value="${unamigo.nombre}">Saludar</button></div>    
        </li>`;
    });
    return htmlAmigos;
});
//Con lo siguiente hago que al pulsar los botones recien montados me envíen un mensaje con un nombre específico://

$('.saludabtn').click(function () {    
    alert('Holinha: '+$(this).attr('data-value')+ "!!");
})
//para borrar.

$('#borra').click(function () {
    $('#amigos').toggle();
});