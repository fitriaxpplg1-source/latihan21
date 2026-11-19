const prompt = require('prompt-sync')();

let angka = Number(prompt('Masukkan Angka Anda: '))

if (angka % 7 !== 0) {
  console.log("Anda belum Beruntung")
} else {
  console.log("Kelipatan 7")
}