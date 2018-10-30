
$.ajax({
    url: "http://www.mocky.io/v2/5bd888aa310000f63a474f0c",
}).done(function (data) {
    console.log(data)
    generateStructure(data, 'piano');
})


function generateStructure(arrNotes, divN) {
    let finalHtml = '';
 
    arrNotes.forEach(element => {
        finalHtml += element.tono ? `<div class="note" data-snd="${element.sonido}"></div>` : `<div class="note semi" data-snd="${element.sonido}"></div>`;
    });
 
    document.getElementById(divN).innerHTML = finalHtml;
    associateAndPlayNotes();
}
 
 function associateAndPlayNotes() {
    let player = document.getElementById('player');
 
    document.querySelectorAll('.note').forEach(element => {
        element.onclick = function () {
            player.src = this.getAttribute('data-snd');
            player.play();
        }
    });
}
 
