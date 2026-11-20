# Portfolio Rafi Ahmad Habibi — Hero Baru

Hero telah didesain ulang menjadi editorial dua kolom dengan foto profil penuh (bukan kartu biru). Foto formal disertakan di `assets/images/rafi-profile.webp` dan path-nya sudah terpasang di `js/data.js`.

Seluruh bagian proyek AGAVI, 4 proyek lain, publications, dan slideshow tetap dipertahankan.

Untuk mengganti foto kemudian: ganti gambar di `assets/images/rafi-profile.webp`, atau ubah `profile.photo` pada `js/data.js` sesuai nama file baru.

---

# Portfolio Rafi Ahmad Habibi

Website portfolio statis yang responsif, dengan gambar asli proyek yang sudah dikonversi ke WebP.

## Cara menjalankan

1. Ekstrak folder `rafi-portfolio`.
2. Buka folder di Visual Studio Code.
3. Cara mudah: pasang ekstensi **Live Server**, klik kanan `index.html` → **Open with Live Server**.
4. Alternatif tanpa ekstensi (Python): buka terminal di folder proyek, jalankan `py -m http.server 8000` di Windows (atau `python -m http.server 8000`). Buka `http://localhost:8000`.
5. Tidak perlu instal Node.js, npm, React, ataupun dependensi lain.

## Gambar sudah disiapkan

Folder `assets/images/` memuat 7 gambar WebP dari screenshot/foto proyek yang kamu kirim:
- `segmentasi-umkm.webp` — gambar utama proyek segmentasi
- `segmentasi-detail.webp` — detail cluster
- `segmentasi-ringkasan.webp` — ringkasan segmen
- `machine-condition.webp` — aplikasi dan hasil klasifikasi
- `ternax.webp` — dashboard chart
- `ternax-produksi.webp` — tampilan produksi
- `running-led.webp` — foto prototipe fisik

Kelima kartu proyek sudah otomatis menampilkan gambar utama. Klik **Screenshots** untuk melihat galeri.

## Cara menambahkan konten

Semua informasi ada di `js/data.js`.
- Edit `profile` untuk informasi diri, email, LinkedIn, dan foto.
- Edit `projects` untuk proyek. Tambahkan objek baru ke akhir array `projects` untuk menambah kartu tanpa mengubah HTML.
- Edit `skillCategories`, `education`, `experiences`, dan `certifications` sesuai kebutuhan.
- `null` menandakan informasi yang belum tersedia, jadi tidak mengarah ke link palsu.

### Menambahkan foto profil
Simpan `assets/images/rafi-profile.jpg`, lalu ubah pada `js/data.js`:

```js
photo: 'assets/images/rafi-profile.jpg',
```

### Menambahkan CV
Simpan `assets/cv/rafi-ahmad-habibi-cv.pdf`, lalu ubah:

```js
cvFile: 'assets/cv/rafi-ahmad-habibi-cv.pdf',
```

Tombol Download CV sengaja tidak aktif sampai file CV benar-benar tersedia.

### Menambahkan demo proyek
Isi properti `demo` pada proyek terkait dengan URL aplikasi yang aktif. Kalau belum ada, biarkan `null`.

## Deploy gratis via GitHub Pages

1. Login ke GitHub dan pilih **New repository**.
2. Buat repository publik, misalnya `rafi-portfolio`.
3. Upload isi folder `rafi-portfolio` ke **root repository** (pastikan `index.html` berada di root).
4. Buka **Settings** → **Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main`, folder `/(root)`, lalu **Save**.
7. Setelah proses deploy selesai, akses `https://USERNAME.github.io/rafi-portfolio/` dengan USERNAME GitHub kamu.

Jika profil GitHub kamu adalah `rafihabibi16`, kemungkinan URL-nya `https://rafihabibi16.github.io/rafi-portfolio/` apabila repositori diberi nama `rafi-portfolio` dan Pages berhasil aktif.

## Pengingat

- Gambar proyek merupakan screenshot/foto yang diberikan oleh pemilik portofolio. Tidak ada screenshot aplikasi yang dibuat-buat.
- Belum ada foto wajah atau CV. Keduanya tetap placeholder/disabled.
- Nama kegiatan organisasi, tahun sertifikasi, issuer dua kursus, dan sebagian URL demo belum diberikan sehingga belum diisi dengan klaim palsu.
- Form kontak menggunakan `mailto:`; pengunjung harus memiliki aplikasi email yang dikonfigurasi dan mengirim sendiri pesannya.
- Gambar sudah dipadatkan; pastikan tidak ada informasi sensitif di screenshot sebelum website diterbitkan.


## Update: navigasi smooth scroll

Klik menu Home/About/Skills/Projects/Journey/Contact, tombol Lihat Proyek, dan Back to Top kini memakai animasi scroll yang diatur di `js/main.js`. Scroll mouse/touchpad tetap mengikuti browser. Jika pengaturan perangkat *reduced motion* aktif, animasi otomatis dinonaktifkan demi aksesibilitas.


## Publications & Research

Satu publikasi jurnal sudah dimasukkan pada bagian **Publications & Research**.
Untuk menambah publikasi baru, edit array `publications` di `js/data.js`.
Kartu publikasi dibuat otomatis oleh `js/main.js`.

- Artikel: https://ejurnal.undana.ac.id/index.php/jme/article/view/28590
- PDF: https://ejurnal.undana.ac.id/index.php/jme/article/download/28590/10685/
- DOI: https://doi.org/10.35508/jme.v0i0.28590

Semua aset gambar proyek sebelumnya tetap dipertahankan.


## Update: kartu proyek bisa diklik + detail kontribusi

Klik **gambar proyek, judul, area kartu, atau tombol Detail & Kontribusi**. Jendela detail menampilkan:
- Ringkasan proyek dan screenshot utama.
- **Kontribusi Saya** dan peran (`role`, `contributions`).
- Fitur & cakupan proyek (`highlights`).
- Teknologi, tombol galeri, tautan GitHub / demo jika tersedia.

**Penting:** pada data yang diberikan, tugas individu masing-masing proyek belum dijelaskan secara terperinci. Karena itu saya tidak mengklaim kontribusi spesifik yang belum dikonfirmasi. Bagian kontribusi sementara menampilkan placeholder, sementara fitur proyek yang sudah diketahui tetap ditampilkan.

### Cara mengisi kontribusi pribadi

Buka `js/data.js`, cari proyek berdasarkan `id`, misalnya `id: 'segmentasi-umkm'`, lalu edit properti ini:

```js
role: 'Isi peranmu yang sebenarnya',
contributions: [
  'Jelaskan apa yang kamu kerjakan sendiri pada proyek ini.',
  'Tulis tugas teknis yang benar-benar kamu tangani.',
  'Tulis hasil atau dampak pekerjaanmu jika memang ada.'
],
```

Gunakan tindakan yang jelas dan terukur bila tersedia, misalnya **"Membuat dashboard di Streamlit"** hanya bila memang kamu yang mengerjakannya. Jika proyek dikerjakan tim, jelaskan batas peranmu dan jangan mengeklaim seluruh hasil sebagai pekerjaan individu.

Tidak perlu mengubah `index.html` atau `main.js`. Mengedit `contributions` saja sudah cukup. Fitur ini juga bekerja untuk proyek baru yang ditambahkan ke daftar `projects`.


## Proyek AGAVI — November 2026

Proyek **Food Safety Consultation Platform** telah ditambahkan paling atas pada `js/data.js` dengan peran **Project Leader**, tim 4 orang, dan status **In Progress / Prototype**.

Galeri screenshot AGAVI berada di `assets/images/`:

- `agavi-admin.webp`
- `agavi-konsultan.webp`
- `agavi-client.webp`

Untuk menambah gambar pada proyek, simpan gambar baru ke folder `assets/images/`, lalu tambahkan satu objek `{ src: 'assets/images/nama-file.webp', caption: 'Keterangan gambar' }` pada array `gallery` proyek di `js/data.js`. Tombol panah, titik navigasi, dan penghitung foto akan ditampilkan otomatis pada dialog detail proyek. Swipe kiri-kanan juga tersedia di ponsel. Klik **Perbesar** untuk galeri layar besar.

### Penting terkait akurasi

- Screenshot AGAVI menggunakan data **dummy** dan menampilkan **prototipe**, bukan hasil implementasi live.
- Stack bahasa pemrograman/framework AGAVI belum diberikan, sehingga pada detail proyek digunakan label **Methods & Focus**. Isi stack sebenarnya hanya setelah kamu memastikan teknologinya.
- Jangan menulis klaim implementasi/testing/deployment tuntas sebelum ada bukti pengerjaannya.
