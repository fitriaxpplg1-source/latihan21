const prompt = require('prompt-sync')();

let nama = prompt('Masukkan nama anda: ')
let nilai = Number(prompt('Masukkan nilai anda: '))

if (nilai >= 100) {
  grade = 'A'
} else if (nilai >= 89) {
  grade = 'B'
} else if (nilai >= 79) {
  grade = 'C'
} else if (nilai >= 69) {
  grade = 'D'
} else if (nilai <= 60) {
  grade = 'E' }

console.log (`
Nama: ${nama}
Grade: ${grade}`)