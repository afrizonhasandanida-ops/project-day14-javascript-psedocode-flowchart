# Sistem Checkout Produk Sederhana

## Deskripsi

Proyek ini menerapkan computational thinking untuk memodelkan checkout produk sederhana menggunakan problem decomposition, flowchart, pseudocode, dan JavaScript. Program menerima harga produk, jumlah produk, serta status member, kemudian mengembalikan total pembayaran atau pesan jika input tidak valid.

## Aturan Perhitungan

- Harga produk harus berupa angka positif dan jumlah produk harus berupa bilangan bulat positif.
- Subtotal dihitung dari harga produk dikali jumlah produk.
- Member mendapat diskon 10% dari subtotal; non-member tidak mendapat diskon.
- Ongkos kirim gratis jika total setelah diskon minimal Rp250.000. Jika kurang, ongkos kirim sebesar Rp15.000.
- Total pembayaran adalah total setelah diskon ditambah ongkos kirim.

## Cara Menjalankan

Pastikan Node.js sudah terpasang. Buka terminal di folder proyek dan jalankan:

```bash
node checkout.js
```

Program menjalankan sepuluh skenario uji dan menampilkan hasilnya di terminal. Rincian skenario dan hasil dapat dilihat di `testing.md`.

## Isi Proyek

- `analysis.md` — problem decomposition: input, proses, output, pattern recognition, dan abstraction.
- `Flowchart -Project-Day 14.drawio.xml` dan `Flowchart-Project.drawio.png` — flowchart dalam format sumber dan gambar.
- `pseudocode.txt` — urutan langkah dan aturan checkout.
- `checkout.js` — implementasi fungsi `hitungCheckout`.
- `testing.md` — skenario uji dan hasil pengujian.

## Ringkasan Penggunaan AI

AI digunakan untuk membantu menyusun problem decomposition di `analysis.md`, merapikan laporan pengujian di `testing.md`, dan menyusun `README.md`. Flowchart, pseudocode, kode JavaScript, serta pengujiannya dikerjakan secara mandiri, tapi AI juga digunakan sebagai alat untuk mereview dan memahami error serta untuk berdiskusi.
