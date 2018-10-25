let u1_name="Ricardo";
let u1_surname="Fernández";

let u2_name= "Rafael";
let u2_surname= "Stilinsky";

let u3_name="Chema";
let u3_surname="ElTuercas";

console.log(u1_name+' '+u1_surname);
console.log(u2_name+' '+u2_surname);
console.log(u3_name+' '+u3_surname);

function generarNombreCompleto(unNombre, unApellido){
    return unNombre+ " " +unApellido;
}

console.log(generarNombreCompleto(u1_name, u1_surname) );
console.log(generarNombreCompleto(u2_name, u2_surname) );
console.log(generarNombreCompleto(u3_name, u3_surname) );