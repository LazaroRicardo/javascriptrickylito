let notasMusicales=[
    {nombre:'do', sonido:'./wav/c1.wav', tono:'true'},
    {nombre:'dos', sonido:'./wav/c1.wav', tono:'false'},
    {nombre:'re', sonido:'./wav/d1.wav', tono:'true'},
]

for (let index = 0; index < notasMusicales.length; index++) {
    notasMusicales[index].onclick = function () {
        notasMusicales.setAttribute('src', 'sonido.wav');
    }
    
}