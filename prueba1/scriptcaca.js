function operar_numeros(num1, num2, op) {
    if (op == '+') {return num1 + num2;}
    else if (op == '-') {return num1 - num2;}
    else if (op == '*'){return num1*num2;}
    else if (op == '/') {
        if(num2==0) return 0;
        return num1 / num2;
    }
}

console.log(operar_numeros(4, 8,'-'))
console.log(operar_numeros(4, 8,'+'))
console.log(operar_numeros(4, 8,'*'))
console.log(operar_numeros(4, 8,'/'))
console.log(operar_numeros(4, 0,'/'))

var array_ejemplo=[2,4,6,8,9];


function oparray(arr, op) {
    for (let index = 0; index < arr.length; index++) {
        ;
        
    }
}

console.log(oparray(array_ejemplo,'+'))