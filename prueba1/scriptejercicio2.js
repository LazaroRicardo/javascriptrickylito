var mascotitas = [];

for (let indice = 0; indice < 1000; indice++) {
    mascotitas[indice] = 'perrito ' + indice;
}

console.log(mascotitas);

for (let index = 0; index < 1000; index++) {
    if (index == 0) {
        console.log('Perrito1 no tiene hermano')
    } else {
        console.log("La mascota " + index + " es hermano de " + mascotitas[index - 1]);
    }


}

