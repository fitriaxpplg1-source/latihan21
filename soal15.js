const prompt = require('prompt-sync')();

let kode = Number(prompt('Masukkan kode anda: '))

if (kode == 78821) {
  console.log("You are authenticated")
} else {
  console.log("You have no access")
}
