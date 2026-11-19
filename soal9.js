const prompt = require('prompt-sync')({})

console.log("PERHITUNGAN PERSEGI PANJANG")

let p = Number(prompt("Masukkan panjang (p): "))
let l = Number(prompt("Masukkan lebar (l)  : "))
let luas = p * l
let keliling = 2 * (p + l)

console.log(`
Luas: ${luas}
Keliling: ${keliling}`)