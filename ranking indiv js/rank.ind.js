let rankInd=[
    {posicion: "1º", nombre: "Charlie", baresVisitados:63},
    {posicion: "2º", nombre: "Er_Palancas", baresVisitados:54},
    {posicion: "3º", nombre: "Borji", baresVisitados:23},
    {posicion: "4º", nombre: "Rickylito", baresVisitados:12},
    {posicion: "5º", nombre: "Jorgio", baresVisitados:6},
]

//parsear
function parseranking(rank) {
    let listaOl = document.getElementById('rank_ind');

    for (let index = 0; index < rank.length; index++) {
        listaOl.innerHTML += `<tr>
        <td>${rank[index].posicion}</td>
        <td>${rank[index].nombre}</td>
        <td>${rank[index].baresVisitados}</td>
        </tr>`;
    }
}
parseranking(rankInd);