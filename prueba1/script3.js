var mis_numeros_hex=[8,9,"A","B","C","D","E","F","G"];
console.log(mis_numeros_hex);

mis_numeros_hex[3]=45;
mis_numeros_hex[9]='XX';
 
console.log(mis_numeros_hex);

for (let index = 0; index < mis_numeros_hex.length; index++) {
    console.log('El valor en el índice:',index,'es',mis_numeros_hex[index]);
}

for (let index = 0; index < mis_numeros_hex.length; index=index+2) {
    console.log('El valor en el índice:',index,'es',mis_numeros_hex[index]);
}