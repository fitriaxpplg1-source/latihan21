const prompt = require('prompt-sync')({})

let r = Number(prompt("Masukkan jari-jari (r): "))
let volume = (4/3) * Math.PI * (r ** 3)
let luas = 4 * Math.PI * (r ** 2)
console.log (`
Volume: ${volume}
Luas Permukaan: ${luas}`)