function hitungBola(diameter) {
    const jariJari = diameter / 2;
    const volume = (4 / 3) * Math.PI * Math.pow(jariJari, 3);
    const luasPermukaan = 4 * Math.PI * Math.pow(jariJari, 2);
    return { volume, luasPermukaan };
}

function hitungKerucut(diameter, tinggi) {
    const jariJari = diameter / 2;
    const volume = (1 / 3) * Math.PI * Math.pow(jariJari, 2) * tinggi;
    const garisPelukis = Math.sqrt(Math.pow(jariJari, 2) + Math.pow(tinggi, 2));
    const luasPermukaan = Math.PI * jariJari * (jariJari + garisPelukis);
    const luasSelimut = Math.PI * jariJari * garisPelukis;
    return { volume, luasPermukaan, luasSelimut };
}

function hitungTabung(diameter, tinggi) {
    const jariJari = diameter / 2;
    const volume = Math.PI * Math.pow(jariJari, 2) * tinggi;
    const luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);
    return { volume, luasPermukaan };
}

// Parameter
const diameterBola = 30;
const diameterKerucut = 20;
const tinggiKerucut = 40;
const diameterTabung = 15;
const tinggiTabung = 50;

//bola
const bola = hitungBola(diameterBola);
console.log(`Bola - Diameter: ${diameterBola} cm`);
console.log(`Volume: ${bola.volume.toFixed(2)} cm³`);
console.log(`Luas Permukaan: ${bola.luasPermukaan.toFixed(2)} cm²`);
console.log(`Luas Selimut: ${bola.luasPermukaan.toFixed(2)} cm²`);

//kerucut
const kerucut = hitungKerucut(diameterKerucut, tinggiKerucut);
console.log(`\nKerucut - Diameter: ${diameterKerucut} cm, Tinggi: ${tinggiKerucut} cm`);
console.log(`Volume: ${kerucut.volume.toFixed(2)} cm³`);
console.log(`Luas Permukaan: ${kerucut.luasPermukaan.toFixed(2)} cm²`);
console.log(`Luas Selimut: ${kerucut.luasSelimut.toFixed(2)} cm²`);

//tabung
const tabung = hitungTabung(diameterTabung, tinggiTabung);
console.log(`\nTabung - Diameter: ${diameterTabung} cm, Tinggi: ${tinggiTabung} cm`);
console.log(`Volume: ${tabung.volume.toFixed(2)} cm³`);
console.log(`Luas Permukaan: ${tabung.luasPermukaan.toFixed(2)} cm²`);
