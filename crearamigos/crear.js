let amigos = [


    {
        id: 32143,
        nombre: 'Ricardo',
        edad: '41',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32144,
        nombre: 'Carlos',
        edad: '22', shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32145,
        nombre: 'adela',
        edad: '20',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32146,
        nombre: 'marta',
        edad: '25',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32147,
        nombre: 'elena',
        edad: '23',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32148,
        nombre: 'carmen',
        edad: '21',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32149,
        nombre: 'rocio',
        edad: '32',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }

    },

    {
        id: 32150,
        nombre: 'selena',
        edad: '22',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },
];

//parsear
function parseamigos(listami) {
    let listaUl = document.getElementById('lista_amigos');

    for (let index = 0; index < listami.length; index++) {
        // listaUl.innerHTML =listaUl.innerHTML+'<li>' +listami[index].nombre+'</li>';
        listaUl.innerHTML += `<li>
        <span>${listami[index].nombre}</span>
        <span>${listami[index].edad}</span>
        <div><button class='saluda' data-value='${listami[index].nombre}${listami[index].edad}'>Saludar</button></div>
        </li>`;
    }
}
parseamigos(amigos);


//procesar
function saludaramigos(classBtn, attrib) {
    let saludarbtns = document.getElementsByClassName(classBtn);
    for (let index = 0; index < saludarbtns.length; index++) {
        saludarbtns[index].onclick = function () {
            alert(this.getAttribute(attrib));
        }
    }
}

saludaramigos('saluda', 'data-value')