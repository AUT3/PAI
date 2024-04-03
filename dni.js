const dzis = new Date();

let dzien = parseInt(prompt("Podaj dzien (liczbowo)", dzis.getDay()));
let miesiac = parseInt(prompt("Podaj miesiac (liczbowo)", dzis.getMonth()));

if(dzien > 31 || dzien < 1) {
    alert("Podales zly dzien!");
    dzien = prompt("Podaj dzien", dzis.getDay());
}

if(miesiac > 12 || miesiac < 1) {
    alert("Podales zly miesiac!");
    miesiac = prompt("Podaj miesiac", dzis.getMonth());
}

let odPoczatku = 0;
// Switch, miesiac do tylu (np. dla grudnia dodajemy liczbe miesiecy listopada)
// + bez break zeby dodalo wszystkie dni do tego msc-1
switch(miesiac) {
    case 12:
        odPoczatku += 30;
    case 11:
        odPoczatku += 31;
    case 10:
        odPoczatku += 30;
    case 9:
        odPoczatku += 31;
    case 8:
        odPoczatku += 31;
    case 7:
        odPoczatku += 30;
    case 6:
        odPoczatku += 31;
    case 5:
        odPoczatku += 30;
    case 4:
        odPoczatku += 31;
    case 3:
        odPoczatku += 28;
    case 2:
        odPoczatku += 31;
    case 1:
        odPoczatku += 31;

}

// dodajemy ilosc dni, ktore minely w tym miesiacu
odPoczatku += dzien;

document.write(`Liczba dni od poczatku roku do dzisiaj: ${odPoczatku}`);