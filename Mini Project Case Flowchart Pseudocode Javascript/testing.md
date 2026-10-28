
 # Hasil Pengujian `hitungCheckout`

| No. | Harga | Jumlah | Member | Skenario | Hasil |
|:---:|:---:|:---:|:---:|---|---|
| 1 | Rp100.000 | 2 | Ya | Member, total setelah diskon di bawah Rp250.000 | Rp195.000 |
| 2 | Rp100.000 | 1 | Tidak | Non-member, total di bawah Rp250.000 | Rp115.000 |
| 3 | Rp250.000 | 1 | Tidak | Total tepat Rp250.000 | Rp250.000 |
| 4 | Rp300.000 | 1 | Tidak | Total di atas Rp250.000 | Rp300.000 |
| 5 | Rp250.000 | 1 | Ya | Diskon membuat total setelah diskon di bawah Rp250.000 | Rp240.000 |
| 6 | Rp100.000 | 0 | Ya | Jumlah nol | Input tidak valid |
| 7 | Rp100.000 | -1 | Tidak | Jumlah negatif | Input tidak valid |
| 8 | Rp100.000 | 1,5 | Ya | Jumlah pecahan | Input tidak valid |
| 9 | Rp100.000 | "aku" | Tidak | Jumlah bukan angka | Input tidak valid |
| 10 | Rp0 | 1 | Ya | Harga tidak positif | Input tidak valid |
| 11 | Rp100.000 | 1 | "ya" | Status member bukan boolean | Input tidak valid |