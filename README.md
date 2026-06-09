# 🚀 Next-Gen Web Developer Portfolio

[![GitHub license](https://img.shields.io/github/license/NF2077/Portfolio?style=flat-square&color=38bdf8)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/NF2077/Portfolio?style=flat-square&color=818cf8)](https://github.com/NF2077/Portfolio/stargazers)
[![Live Demo](https://img.shields.io/badge/demo-live-22c55e?style=flat-square)](https://nf2077.github.io/Portfolio/)

Selamat datang di repositori portofolio utama saya. Ruang ini merupakan panggung interaktif untuk memamerkan keahlian teknis saya dalam membangun aplikasi web berperforma tinggi, responsif, dan berpusat pada kenyamanan pengguna (*User-Centric UI/UX*).

Desain arsitektur proyek ini mengusung tema **Cyberpunk Minimalis Dark Mode** dengan pendekatan kode modular berbasis **Vanilla JavaScript** tanpa bergantung pada framework eksternal yang berat.

---

## 🛠️ Fitur & Arsitektur Kode

* **🌐 Core Landing Page:** Menggunakan HTML5 semantik untuk optimasi SEO yang bersih, aksesibilitas (*A11y*), serta variabel CSS3 modern untuk manajemen tema yang konsisten.
* **⚡ Integrated Labs Feature (Widget Collection v3.0):** Dashboard mini-apps terisolasi di dalam sub-direktori `/widgets` yang dapat diakses langsung dari halaman utama.
* **📱 Responsive Component Design:** Fleksibilitas penuh di berbagai ukuran perangkat menggunakan sistem CSS Grid dan Flexbox modern tanpa *bloatware* CSS.

---

## 🧮 Sorotan Modul Eksperimental (Widgets v3.0)

Di dalam folder `widgets/`, terdapat 7 micro-apps interaktif yang mendemonstrasikan manipulasi DOM mutakhir:

1. **Scientific Calculator:** Menggunakan *sharp/box-shaped precision layout* yang memproses fungsi matematika tingkat lanjut ($sin$, $cos$, $tan$, $\sqrt{x}$, $\pi$) secara akurat menggunakan konversi radian ke derajat.
2. **Multi-Asset Crypto Tracker:** Sistem pemantauan volatilitas harga real-time terenkapsulasi untuk **Bitcoin (BTC)**, **Ethereum (ETH)**, dan **Solana (SOL)** dengan kalkulasi algoritma fluktuasi pasar finansial independen.
3. **Dynamic Todo List:** Aplikasi manajemen tugas (*micro-CRUD*) yang memanfaatkan efisiensi memori array lewat metode `.splice()` dan manajemen *scroll viewport* otomatis.
4. **Smart Weather Simulator:** Simulasi visual kondisi cuaca acak lengkap dengan transisi warna ikonik berdasarkan data objek *mock*.
5. **Cyberpunk Music Player:** Player musik minimalis dengan pemanfaatan CSS keyframe animation untuk piringan hitam (*vinyl disc rotation*) yang dikontrol via status boolean JS.

---

## 📂 Struktur Repositori

Proyek ini terstruktur secara modular agar mudah dirawat (*maintainable*):

```text
NF2077/Portfolio/
├── index.html          # Halaman Utama Portofolio
├── style.css           # Arsitektur CSS Utama (Variabel Pemfokusan)
├── script.js           # Logika Efek Scroll & Navigasi Dinamis
└── widgets/            # 🧪 LABORATORIUM WIDGET INTERAKTIF (v3.0)
    ├── index.html      # Struktur Dashboard Widget
    ├── style.css       # Desain Grid & Sharp Precision Box
    └── script.js       # Engine Utama Kalkulator & Crypto Tracker
