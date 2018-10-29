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


document.getElementById("nusebtn").onclick = function () {
    var parraf = document.getElementById("parrafo").innerHTML;
    let palabrasTransf = [];
    separat = parraf.split(" ");
 
    for (let index = 0; index < separat.length; index++) {
 
        palabrasTransf[index] = separat[index].toLowerCase().replace(separat[index].toLowerCase().charAt(0), separat[index].charAt(0).toUpperCase());
 
    }
    var palabrasTransfJunto = palabrasTransf.join(" ");
    // console.log(palabrasTransfJunto);
 
    document.getElementById("parrafo").innerHTML = palabrasTransfJunto;
 }