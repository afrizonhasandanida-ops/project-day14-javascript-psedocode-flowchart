# Analysis: Sistem Checkout Produk Sederhana

## 1. Deskripsi Masalah

Program Sistem Checkout Produk Sederhana digunakan untuk menghitung pembayaran produk berdasarkan harga produk, jumlah produk yang dibeli, dan status member pelanggan. Program memeriksa validitas input terlebih dahulu. Jika input tidak valid, program menampilkan pesan error dan proses perhitungan dihentikan. Jika input valid, program menghitung subtotal, diskon jika pelanggan merupakan member, ongkos kirim, dan total pembayaran.

## 2. Problem Decomposition

### A. Input

Program menerima tiga input:

1. **Harga produk (`harga`)**: harga satu unit produk. Nilainya harus berupa angka positif.
2. **Jumlah produk (`jumlah`)**: jumlah unit produk yang dibeli. Nilainya harus berupa bilangan bulat positif.
3. **Status member (`isMember`)**: status pelanggan, yaitu member atau non-member.

Status member harus menggunakan nilai yang dikenali oleh program agar perhitungan diskon dapat dilakukan dengan benar.

### B. Proses

Urutan proses program adalah sebagai berikut:

1. Menerima harga produk, jumlah produk, dan status member.
2. Memvalidasi input:
   - Harga harus berupa angka positif.
   - Jumlah harus berupa bilangan bulat positif.
   - Status member harus valid.
3. Jika input tidak valid, tampilkan pesan **"Input tidak valid"** dan hentikan proses perhitungan.
4. Jika input valid, hitung subtotal dengan rumus:

   `subtotal = harga × jumlah`

5. Menentukan diskon berdasarkan status member:
   - Jika pelanggan member, diskon sebesar 10% dari subtotal.
   - Jika pelanggan non-member, diskon sebesar Rp0.
6. Menghitung total setelah diskon:

   `totalSetelahDiskon = subtotal - diskon`

7. Menentukan ongkos kirim berdasarkan total setelah diskon:
   - Jika total setelah diskon minimal Rp250.000, ongkos kirim gratis (Rp0).
   - Jika total setelah diskon kurang dari Rp250.000, ongkos kirim sebesar Rp15.000.
8. Menghitung total pembayaran:

   `totalPembayaran = totalSetelahDiskon + ongkir`

9. Menampilkan subtotal, diskon, ongkos kirim, dan total pembayaran.

### C. Output

Jika input valid, program menghasilkan:

- Subtotal pembelian.
- Besar diskon.
- Ongkos kirim.
- Total pembayaran setelah diskon dan ongkos kirim.

Jika input tidak valid, program menghasilkan pesan error **"Input tidak valid"** dan tidak melanjutkan perhitungan.

## 3. Aturan Keputusan

| Keputusan | Kondisi | Hasil |
|---|---|---|
| Validasi harga | Harga berupa angka positif | Input harga valid |
| Validasi jumlah | Jumlah bilangan bulat positif | Input jumlah valid |
| Validasi status member | Status sesuai nilai yang dikenali program | Input status valid |
| Status pelanggan | Member | Diskon 10% dari subtotal |
| Status pelanggan | Non-member | Diskon Rp0 |
| Gratis ongkir | Total setelah diskon >= Rp250.000 | Ongkir Rp0 |
| Ongkos kirim berbayar | Total setelah diskon < Rp250.000 | Ongkir Rp15.000 |

## 4. Pattern Recognition

Pola yang dapat dikenali dari masalah ini adalah:

1. **Perhitungan berdasarkan input**: subtotal selalu dihitung dari harga satu produk dikalikan jumlah produk.
2. **Percabangan berdasarkan kondisi**: diskon ditentukan oleh status member, sedangkan ongkos kirim ditentukan oleh total setelah diskon.
3. **Urutan proses yang berulang dan terstruktur**: input → validasi → perhitungan subtotal → diskon → ongkos kirim → total pembayaran → output.
4. **Penggunaan nilai ambang batas**: ongkos kirim berubah berdasarkan apakah total setelah diskon mencapai Rp250.000 atau belum.

## 5. Abstraction

Abstraksi dilakukan dengan berfokus pada informasi yang diperlukan untuk menghitung pembayaran, yaitu harga produk, jumlah produk, status member, subtotal, diskon, ongkos kirim, dan total pembayaran.

Informasi lain yang tidak memengaruhi perhitungan, seperti nama produk, warna produk, atau data pribadi pelanggan, tidak diperlukan dalam logika program ini.

Rincian perhitungan dapat disederhanakan menjadi rumus berikut:

- `subtotal = harga × jumlah`
- `diskon = subtotal × 10%` jika member; selain itu `0`
- `totalSetelahDiskon = subtotal - diskon`
- `ongkir = 0` jika `totalSetelahDiskon >= 250000`; selain itu `15000`
- `totalPembayaran = totalSetelahDiskon + ongkir`

## 6. Asumsi dan Batasan

1. Harga produk dimasukkan sebagai angka positif.
2. Jumlah produk harus berupa bilangan bulat positif.
3. Status member harus berupa nilai yang dikenali program, misalnya `true` untuk member dan `false` untuk non-member jika implementasi JavaScript menggunakan boolean.
4. Diskon member dihitung dari subtotal, bukan dari total setelah diskon.
5. Batas gratis ongkir dihitung berdasarkan total setelah diskon.
6. Program hanya menangani logika checkout sederhana. Program tidak mencakup antarmuka pengguna, API, database, atau deployment.

## 7. Kesimpulan

Program checkout ini menyelesaikan masalah melalui tahapan yang jelas: menerima dan memvalidasi input, menghitung subtotal, menentukan diskon berdasarkan status member, menentukan ongkos kirim berdasarkan total setelah diskon, lalu menghitung dan menampilkan total pembayaran. Pembagian proses ini membantu memastikan logika mudah dipahami, diuji, dan diimplementasikan dalam JavaScript.
