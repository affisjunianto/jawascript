Jawascript Documentation

Jawascript adalah transpiler berbasis JavaScript yang memungkinkan Anda menulis kode dalam Bahasa Jawa. Jawascript kompatibel dengan semua fitur JavaScript modern dan dapat digunakan seperti Node.js untuk membangun aplikasi.


---

Fitur Utama

1. Bahasa Lokal
Semua kata kunci JavaScript diterjemahkan ke dalam Bahasa Jawa.


2. Kompatibilitas Penuh
Jawascript mendukung seluruh pustaka Node.js dan dapat menggunakan NPM untuk menambah modul tambahan.


3. Transpiler Otomatis
File .jawa akan diterjemahkan menjadi JavaScript standar secara otomatis saat dijalankan.


4. Pesan Error Lokal
Jika terjadi kesalahan, pesan error akan ditampilkan dalam Bahasa Jawa.




---

Instalasi

1. Install Melalui NPM

Gunakan perintah berikut untuk menginstal Jawascript secara global:

npm i -g jawascript

2. Verifikasi Instalasi

Pastikan Jawascript telah terinstal dengan benar:

jawa --version


---

Penggunaan

1. REPL (Interactive Shell)

Untuk masuk ke mode interaktif seperti Node.js, gunakan perintah:

jawa

Contoh:

Sugeng Rawuh menyang Jawascript REPL
Ketik kode sampeyan. Ketik `.metu` kanggo metu.

jawa> tulis("Halo, Dunia!")
Halo, Dunia!
undefined

jawa> kanggo (var i = 0; i < 5; i++) { tulis(i) }
0
1
2
3
4
undefined

jawa> .metu
Matur nuwun! Sampai jumpa!

2. Menjalankan File .jawa

Buat file .jawa, misalnya contoh.jawa, dengan isi seperti berikut:

tulis("Sugeng rawuh menyang Jawascript!");

gawean tambah(a, b) {
    bali a + b;
}

var hasil = tambah(7, 8);
tulis("Hasil penjumlahan:", hasil);

yen (hasil > 10) {
    tulis("Hasil luwih saka sepuluh.");
} utawa {
    tulis("Hasil ora luwih saka sepuluh.");
}

Jalankan file tersebut dengan:

jawa contoh.jawa

Hasil output:

Sugeng rawuh menyang Jawascript!
Hasil penjumlahan: 15
Hasil luwih saka sepuluh.


---

Kata Kunci Jawascript


---

Example

1. Simple Script

File: halo.jawa

tulis("Sugeng rawuh menyang Jawascript!");

gawean sapaJeneng(jeneng) {
    bali "Halo, " + jeneng + "!";
}

var pesen = sapaJeneng("Budi");
tulis(pesen);

Jalankan dengan:

jawa halo.jawa

Output:

Sugeng rawuh menyang Jawascript!
Halo, Budi!


---

2. Server dengan Express.js

File: server.jawa

tekan express saka "express";

var app = express();

app.gunakake((req, res, next) => {
    tulis("Panjalukan mlebu:", req.awak);
    next();
});

app.rungokake(4000, () => {
    tulis("Server mlaku ing port 4000");
});

Jalankan dengan:

jawa server.jawa

Kunjungi http://localhost:4000.


---

Pesan Error

Jika terdapat kesalahan dalam kode .jawa, Jawascript akan memberikan pesan error dalam Bahasa Jawa.

Contoh error:

Kode:

yen (a > b) {
  tulis("Salah siji luwih gedhe");

Hasil:

Kesalahan Kode Jawascript: SyntaxError: Ana kurung tutup sing ilang


---

Lisensi

Jawascript dilisensikan di bawah lisensi MIT. Silakan gunakan, ubah, atau kontribusi sesuai kebutuhan.


---

Contributing

Kami membuka kontribusi untuk pengembangan Jawascript. Jika Anda ingin menambahkan fitur atau memperbaiki bug, silakan fork repository ini dan kirimkan pull request Anda.

