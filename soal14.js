const prompt = require('prompt-sync')()

let angka = Number(prompt('Masukkan Nilai Anda: '))

if (angka > 100) {
  console.log("Nilai Kamu Sempurna!")
}