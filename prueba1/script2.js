var meses_del_año =['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
console.log(meses_del_año,meses_del_año[0],meses_del_año[6],meses_del_año[10],meses_del_año[meses_del_año.length-1]);
var peso=59;
var altura=170;
var esta_cachas=false;
if(peso <=altura-100-20){
    esta_cachas=false;
    console.log('Come más!!')
}
else if(peso <= altura-100){
    esta_cachas=true;
    console.log('Qué cachas estás!!');
}else{
    esta_cachas=false;
    console.log('ponte a hacer ejercicio, te sobran:',peso -(altura-100));
}

var num1=3
var num2=17
var num3=28
if(num1>(num2&&num3)){
    console.log('num1 es el mayor!!');
}
else if(num2>(num1&&num3)){
    console.log('num2 es el mayor!!');
}
else{
    console.log('num3 es el mayor!!');
}