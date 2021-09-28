/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
let isPrime = 0;
let bil_prima;

for (let i = 2; i <= 100; i++){ 
    for (let j = 1; j <= i; j++)
        if (i%j === 0){
            isPrime++;
        }
}
    if (isPrime === 2){
        console.log(i)
    }
    isPrime = 0;

console.log(bil_prima)
  
/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
let i = 2;
let fiftiethNumberOfPrime;

while (primeCounter < fiftiethPrime) {
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      isPrime++;
    }
  }

  if (isPrime == 2) {
    fiftiethNumberOfPrime = i;
    primeCounter++;
  }
  isPrime = 0;
  i++;
}

console.log(fiftiethNumberOfPrime);


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let fiftiethNumberOfOdd;
i = 0;

do {
  if (i % 2 !== 0) {
    fiftiethNumberOfOdd = i;
    oddCounter++;
  }
  i++;
} while (oddCounter < fiftiethOdd);

console.log(fiftiethNumberOfOdd);
