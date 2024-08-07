const a = 4;
const r = 3;

// Inisialisasi variabel untuk menyimpan jumlah dari 10 suku pertama
let sum = 0;

// Menggunakan perulangan untuk menghitung jumlah dari 10 suku pertama
for (let i = 0; i < 10; i++) {
    // Menghitung suku ke-i dari deret geometri
    const term = a * Math.pow(r, i);
    // Menambahkan suku tersebut ke dalam jumlah
    sum += term;
}

console.log(`Jumlah 10 suku pertama dari deret geometri adalah: ${sum}`);
