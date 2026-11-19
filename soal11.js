const prompt = require('prompt-sync')({})

let xrpl1 = Number(prompt("Masukkan jumlah siswa X RPL 1: "))
let xrpl2 = Number(prompt("Masukkan jumlah siswa X RPL 2: "))
let xtkj1 = Number(prompt("Masukkan jumlah siswa X TKJ 1: "))
let xtkj2 = Number(prompt("Masukkan jumlah siswa X TKJ 2: "))
let totalSiswa = xrpl1 + xrpl2 + xtkj1 + xtkj2
console.log (`
Total Siswa: ${totalSiswa}
`)