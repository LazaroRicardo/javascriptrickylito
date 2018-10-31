console.log(window.localStorage.getItem('palabra_almacenada'));

let amigosRetStr=window.localStorage.getItem('lista_amigos');
let amigosRet=JSON.parse(amigosRetStr);

document.getElementById('amigos').innerHTML=(function(){
    let html='';
    amigosRet.forEach(element=>{
        html+=`<li>${element.nombre} / ${element.edad} / ${element.id}</li>`; 
    });
    return html;
}) ();