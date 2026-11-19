const prompt = require('prompt-sync')();

let x = Number(prompt('Masukkan nilai x:'));
let y = Number(prompt('Masukkan nilai y:'));
let z = Number(prompt('Masukkan nilai z:'));

let max = Math.max(x, y, z)
let min = Math.min(x,y,z)

console.log(`Terbesar: ${max}`);
console.log(`Terkecil: ${min}`);