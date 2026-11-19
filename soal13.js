const prompt = require('prompt-sync')({})

let hm = Number(prompt('Masukkan Harga Makanan: '))
let pajak = hm * 0.10
let fee = hm * 0.05
let total = hm + pajak + fee
console.log (`
Harga Makanan: ${hm}
Pajak: ${pajak}
Fee: ${fee}
Harga Bayar: ${total}`)