// Daftar barang
let barang = [
    { nama: "beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
];

// Fungsi
function hitungTotal(barang) {
    let totalBelanja = 0;
    for (let item of barang) {
        totalBelanja += item.harga * item.jumlah;
    }
    return totalBelanja;
}

let totalBelanja = hitungTotal(barang);
// total belanja
console.log("Total belanja Bu Astuti adalah: Rp " + totalBelanja);
