/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// 1. jumlah variable pada javascript 
/// jawab: blocks, global scope, dan local scope

/// 2. jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - blocks : code yang ada pada curly braces {}
/// - global scope : variabel yang dapat kita akses dimanapun dalam suatu file
/// - local scope : mendeklrasikan variabel didalam blocks seperti function, conditional, dan looping


///Implementasi setiap blocks
///1. blocks
{
  var angka = 1
}

///2. global scope
let makanan = 'bakso';

function makan(){
  return makanan;
}

console.log(makanan);

/// 3. local scope
function makan(){
  let makanan = 'bakso'
  return makanan;
}

console.log(makan())
console.log(makanan);

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// - Yang akan tampil pada console.log adalah Mariah Carey
/// - karena variabel name yang berada pada function adalah variabel yang tidak bisa diubah nilainya dan scopenya global. sedangkan variabel name yang didalam fungsi adalah parameter yang scope nya local, hanya dapat diakses didalam fungsi printFirstName()

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
