/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error : telah terjadi kesalahan tipe
/// - Reference Error : referensi ilegal telah terjadi
/// - Range Error : telah terjadi angka "di luar jangkauan"
/// - Syntax Error : terjadi kesalahan sintaks


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// jawab: akan terjadi ReferenceError dengan pesan "Cannot access 'salaryWithConst' before initialization"

/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// jawab: Reference Error

/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi
/// jawab: karena pada program yang dijalankan dulu adalah console.log (untuk menampilkan sesuatu), namun variabel yang akan ditampilkan dideklarasikan setelah console.log. Sehingga akan terjadi error

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
