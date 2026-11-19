const prompt = require('prompt-sync')();

let total = Number(prompt("Masukkan harga Anda: "))

if (total >= 200000) {
  diskon = total * 0.075
} else {
  diskon = 0
}

let totalAkhir = total - diskon
console.log(`
Diskon: ${diskon}
Total Bayar: ${totalAkhir}`)