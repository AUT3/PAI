const funkcja = (msg) => {
    if(msg.length == 0) return;

    msg = msg.toLowerCase();
    let wyjscie = "";

    wyjscie += msg[msg.length-1].toUpperCase();
    for(let i=msg.length-2; i >= 0; i--) {
        wyjscie += msg[i];
    }
    return wyjscie;
}

let wejscie = prompt("Napisz cos:");

document.write(`Zamieniony string:<br>${funkcja(wejscie)}`);