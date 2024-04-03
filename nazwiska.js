let nazwisko = prompt("Napisz nazwisko:", "");

let koncowka = nazwisko.slice(nazwisko.length-2, nazwisko.length);

let message = "";

if(nazwisko === "") message = "Brak nazwiska";

if(koncowka == 'ki' || koncowka == 'ka') {
    message = "polskie";
}else {
    message = "niepolskie";
}

document.write(message);