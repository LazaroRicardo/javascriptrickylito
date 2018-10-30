

function tocarTeclas() {
    let arraudios = document.getElementsByClassName('audio');

    for (let index = 0; index < arraudios.length; index++) {
        arraudios[index].parentNode.onclick = function () {
            this.childNodes[0].play();
        }
    }
}

tocarTeclas();
