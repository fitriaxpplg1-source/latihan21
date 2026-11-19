const prompt = require('prompt-sync')();

let karakter = String(prompt('Masukkan Huruf Anda: ')).toUpperCase()

if (karakter === 'A' || karakter === 'I' || karakter === 'U' || karakter === 'E' || karakter === 'O') {
  console.log("Vokal")
} else if (karakter >= 'A' && karakter <= 'Z' && karakter.length === 1) {
  console.log("Konsonan")
} else {
  console.log("Bukan Huruf")
}
