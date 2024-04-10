const tajne = parseInt(Math.random() * 100);

console.log(tajne);

let wejscie = 0, proby = 0;
while(wejscie != tajne) {
    let msg = "";

    if(wejscie > tajne) msg = "Za duzo";
    else if(wejscie == 0) msg = "Podaj liczbe:";
    else msg = "Za malo";

    wejscie = prompt(`(${++proby}) ` + msg);

    if(wejscie == "") break;
}

document.write(`Brawo! Liczba to: ${tajne}. Wykorzystano prob: ${proby}`);