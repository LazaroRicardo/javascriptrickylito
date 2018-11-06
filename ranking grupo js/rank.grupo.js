let rankGrupo=[
    {Posición: "1ª", Clan:"Calentaos", baresVisitados:63},
    {Posición: "2º", Clan: "Zozor", baresVisitados:54},
    {Posición: "3º", Clan: "PowerLove", baresVisitados:23},
    {Posición: "4º", Clan: "Bears", baresVisitados:12},
    {Posición: "5º", Clan: "Blurp", baresVisitados:6},
]

//parsear
function parseranking(rank) {
    let listaOl = document.getElementById('rank_grupo');

    for (let index = 0; index < rank.length; index++) {
        listaOl.innerHTML += `<tr>
        <td>${rank[index].Posición}</td>
        <td>${rank[index].Clan}</td>
        <td>${rank[index].baresVisitados}</td>
        </tr>`;
    }
}
parseranking(rankGrupo);