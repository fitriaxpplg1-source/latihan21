const prompt = require('prompt-sync')();

let input = Number(prompt('Masukkan Nomor Juara Anda: '))

if (input === 1) {
 console.log("Selamat Anda Juara Utama")
} else if (input === 2) {
  console.log("Selamat Anda Runner Up")
} else if (input === 3) {
  console.log("Selamat Anda Juara Ketiga")
} else {
  console.log("Inputan Anda Salah!")
}