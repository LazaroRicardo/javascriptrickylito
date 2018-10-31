let w= new Worker(`./worker.js`);

w.postMessage('Hola !')

w.onmessage=function(mess){
    console.log(mess.data);
}
