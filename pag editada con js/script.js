//Para asociar a un botón con un texto y hacer que al pulsarlo en la primera opción el texto se pone en mayuscula y en la segunda opción en minúscula//

let mayBtn=document.getElementById('mayBtn');
mayBtn.onclick=function(){

    let eltitulo=document.getElementById('parrafo');
    eltitulo.innerHTML=eltitulo.innerHTML.toUpperCase();
}

let minBtn=document.getElementById('minBtn');
minBtn.onclick=function(){

    let eltitulo=document.getElementById('parrafo');
    eltitulo.innerHTML=eltitulo.innerHTML.toLowerCase();
}