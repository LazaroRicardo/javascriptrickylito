let amigos = [
    {id: 32143,nombre: 'Ricardo',edad: '41',},
    {id: 32143,nombre: 'Pedro',edad: '37',},
    {id: 32143,nombre: 'Juan',edad: '38',},
    {id: 32143,nombre: 'Rodrigo',edad: '42',},
];
window.localStorage.setItem('palabra_almacenada','valor de la palabra');

window.localStorage.setItem('lista_amigos',JSON.stringify(amigos));