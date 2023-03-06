let a = 5;
let b = 10;
let c = 3;

let max = a;
let min = a;

if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
if (b < min) {
    min = b;
}
if (c < min) {
    min = c;
}

console.log(`Cel mai mare numar: ${max}`);
console.log(`Cel mai mic numar: ${min}`);