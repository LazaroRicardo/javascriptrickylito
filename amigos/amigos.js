let saludabtn = document.getElementsByClassName('saluda');
let amigoname = document.getElementsByClassName('Amigo');
let borrarbtn = document.getElementsByClassName('borrar');
console.log(saludabtn);//las colecciones son superconjuntos de los arrays
console.log(amigoname);
console.log(borrarbtn);

for (let index = 0; index < saludabtn.length; index++) {
   saludabtn[index].onclick = function () {
       let name = this.getAttribute('data-name');
       let idp = this.getAttribute('data-idp');
       let infop = document.getElementById(idp).innerHTML;
       alert('hooola' + infop);

   }
}

// for (let index = 0; index < borrarbtn.length; index++) {
//     borrarbtn[index].onclick=function(){
//         let bor = this.getAttribute('data-li');
//         remove_element(bor);
//     }
// }
// function remove_element(id){
//     let elem=document.getElementById(id);
//     return elem.parentNode.removeChild(elem);
// }


for (let index = 0; index < borrarbtn.length; index++) {
   borrarbtn[index].onclick=function(){
       let bor = this.getAttribute('data-li');
       let pulsaborrar=document.getElementById(bor);
       pulsaborrar.remove(index);
   }
}