onmessage= function (mess) {
    let text=mess.data;
    console.log(text);
    this.postMessage("*"+text+"*");
}