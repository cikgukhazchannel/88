# MONOPOLI SEJARAH STPM

**Idea dan Dibangunkan oleh Cikgu Nur Hafiza Juni**

Permainan papan pendidikan luar talian untuk membantu pelajar Tingkatan 6 mengukuhkan fakta Sejarah STPM melalui strategi aset, soalan objektif, kad pembelajaran dan pengurusan Koin Sejarah.

## Membuka permainan

1. Muat turun atau salin keseluruhan folder projek.
2. Buka `index.html` menggunakan pelayar moden (Chrome, Edge atau Firefox).
3. Tiada pelayan, akaun, Internet, framework atau pangkalan data diperlukan.
4. Pilih **Mula Permainan**, isi pemain, pilih tiga bab dan mula membaling dadu.

> Data seperti tetapan, soalan, kad, token yang dimuat naik dan permainan semasa disimpan dalam `localStorage` pelayar. Jangan gunakan mod inkognito jika data perlu dikekalkan.

## Pengurusan guru

- **Urus Bab**: Tukar tajuk, tema, penerangan, warna dan status aktif bab. Bab boleh diduplikasi atau dipulihkan kepada contoh asal. Pilih tepat tiga bab pada halaman mula.
- **Urus Soalan**: Tambah, edit, cari, tapis, duplikasi, aktif/nyahaktif dan padam soalan objektif. Gunakan **Eksport JSON** sebagai sandaran atau **Import JSON** untuk memasukkan bank soalan.
- **Urus Kad**: Ubah teks dan kesan Kad Chance atau Community Chest tanpa menulis kod. Kesan yang disokong termasuk koin, pergerakan, penjara, kad bebas penjara dan kos bangunan.
- **Tetapan**: Ubah koin permulaan, bonus MULA, had pusingan, mod sewa, soalan, lelongan, bunyi dan mod gelap.
- **Token**: Dalam Mula Permainan, pilih token sedia ada atau tekan **Muat Naik Gambar Token**. Fail imej dikekalkan secara tempatan; **Padam Gambar Token** menghapuskan salinannya.

## Simpan, eksport dan laporan

Permainan disimpan secara automatik selepas tindakan dan boleh diteruskan melalui **Sambung Permainan**. Butang **Simpan** menyimpan segera. Gunakan menu **Laporan** untuk mencetak atau mengeksport JSON prestasi pemain. Untuk mengosongkan semuanya, gunakan **Reset Semua Data** (pengesahan diperlukan).

## Audio dan gambar

Folder `audio/` dan `images/` disediakan supaya guru boleh menyimpan aset luar talian sendiri. Versi asas menggunakan ikon Unicode dan tidak bergantung pada fail audio; permainan kekal berjalan jika tiada audio. Untuk menambah audio, letakkan fail seperti `audio/dadu.mp3` dan sambungkan pada fungsi audio dalam `script.js` jika dikehendaki.

## Struktur fail

```text
index.html       Antara muka dan semua halaman
style.css        Tema sejarah responsif
script.js        Enjin permainan dan localStorage
questions.js     15 soalan contoh (5 bagi setiap bab)
cards.js         16 Kad Chance dan 16 Community Chest
images/          Ruang imej tempatan
audio/           Ruang audio tempatan
```

## Masalah biasa

- **Sambung permainan tidak berfungsi**: pastikan permainan telah dimulakan dalam pelayar dan localStorage tidak dipadamkan.
- **Fail import ditolak**: gunakan fail JSON yang mengandungi senarai soalan dan medan `text`, `options`, `answer`.
- **Papan terlalu kecil**: gunakan mod landskap atau skrin penuh, terutama pada tablet.
- **Token hilang**: imej token disimpan mengikut pelayar/peranti; muat naik semula selepas membersihkan data pelayar.
