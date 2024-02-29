let boki = [];

let nazwy = ["a", "b", "c"];
for(let i=0; i < 3; i++) {
    boki.push(parseFloat(prompt(`Bok numer ${nazwy[i]}:`)));
}
boki.sort((a, b) => {return a - b});

let max = boki.pop();
let ab = boki.reduce((sum, b) => sum + b);

let obw = ab+max;
if(ab > max) {
    let p = obw / 2;
    let pole = Math.sqrt(p*(p-boki[0])*(p-boki[1])*(p-max)); // wzór Herona: sqrt(p*(p-a)*(p-b)*(p-c))

    alert(`Trójkąt istnieje. Pole: ${pole}`);
}else {
    alert("Trójkąt nie istnieje!");
}