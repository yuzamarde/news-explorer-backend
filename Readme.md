# Backend Penjelajah Berita

Backend News Explorer adalah komponen sisi server dari aplikasi News Explorer. Ini menyediakan titik akhir API dan manajemen basis data untuk aplikasi. Di bawah ini adalah detail dan petunjuk untuk menyiapkan dan menerapkan backend.

## Mulai

Untuk memulai Backend Penjelajah Berita, ikuti langkah-langkah berikut:

1. Kloning repositori ini ke mesin lokal Anda:
 `git clone <url-repositori>`

2. Navigasikan ke direktori proyek:
 `cd berita-penjelajah-backend`

3. Instal dependensi yang diperlukan:
 `instal npm`

4. Konfigurasikan variabel lingkungan:

Buat file `.env` di root proyek dan atur variabel lingkungan yang diperlukan, termasuk detail koneksi database dan konfigurasi lain yang diperlukan.

5. Mulai server:

Anda dapat memulai server menggunakan salah satu perintah berikut:

- `npm start`: Memulai server dalam mode produksi.
- `npm run dev`: Memulai server menggunakan Nodemon untuk memuat ulang otomatis selama pengembangan.

6. Server akan mulai dan dapat diakses di `http://localhost:3000`. Anda sekarang dapat berinteraksi dengan API backend.

## Titik Akhir API

Backend Penjelajah Berita menyediakan titik akhir API berikut:

- `GET /articles`: Mengambil daftar artikel.
- `GET /articles/:articleId`: Mengambil artikel tertentu berdasarkan ID.
- `POST /artikel`: Membuat artikel baru.
- `DELETE /articles/:articleId`: Menghapus artikel tertentu berdasarkan ID.
- `POST /pendaftaran`: Daftarkan pengguna baru.
- `POST /signin`: Masuk ke pengguna yang sudah ada.

### Akses Server

Aplikasi disebarkan ke server dengan tautan berikut:

- Front end:
- API Backend:

