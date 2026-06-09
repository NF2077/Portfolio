# 🚀 Cyber-Minimalist Web Developer Portfolio

[![GitHub license](https://img.shields.io/github/license/NF2077/Portfolio?style=flat-square&color=38bdf8)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/NF2077/Portfolio?style=flat-square&color=818cf8)](https://github.com/NF2077/Portfolio/stargazers)
[![Live Demo](https://img.shields.io/badge/demo-live-22c55e?style=flat-square)](https://nf2077.github.io/Portfolio/)

Selamat datang di ruang pameran digital saya. Repositori ini menyimpan kode sumber (*source code*) portofolio utama saya yang dirancang dengan estetika **Cyberpunk Minimalis (Dark Mode)**, performa tinggi, dan struktur kode modular yang bersih.

Proyek ini dibangun menggunakan **Pure Vanilla JavaScript (ES6+)** dan CSS3 modern tanpa ketergantungan pada *framework* berat, membuktikan pemahaman mendalam pada fundamental web (*Core Web Vitals*).

---

## ⚡ Sorotan Utama: Laboratorium Widget v3.0

Selain halaman portofolio, proyek ini mengintegrasikan sebuah sub-dashboard eksperimental di dalam direktori `/widgets`. Berikut adalah modul mikro yang berhasil diimplementasikan:

| Nama Widget | Fitur Utama | Pendekatan Teknis |
| :--- | :--- | :--- |
| **🧮 Scientific Calculator** | Operasi tingkat lanjut ($sin$, $cos$, $\sqrt{x}$, $\pi$) | Grid layout presisi, konversi Radian ke Derajat |
| **📈 Crypto Live Tracker** | Simulasi fluktuasi harga BTC, ETH, SOL | Algoritma matematika volatilitas independen |
| **📝 Dynamic Todo List** | Manajemen tugas interaktif (Micro-CRUD) | Efisiensi memori dengan `.splice()`, auto-scroll |
| **🌤️ Weather Simulator** | Perubahan kondisi cuaca acak (Dynamic State) | Manipulasi kelas DOM & transisi warna fluida |
| **🎵 Cyberpunk Player** | Pemutar musik dengan animasi piringan hitam | Toggling status boolean JS & CSS Keyframes |

---

## 🛠️ Fitur Arsitektur Portofolio

* **🌐 Semantic HTML5:** Struktur ramah SEO, ramah mesin pembaca (*Screen Reader*), dan memenuhi standar aksesibilitas web (A11y).
* **🎨 CSS3 Custom Properties (Variables):** Manajemen palet warna neon terpusat, memudahkan skalabilitas jika ingin menambahkan fitur *Light/Dark mode* di masa depan.
* **📱 Ultra-Responsive Layout:** Penataan elemen menggunakan CSS Flexbox dan Grid yang fleksibel di layar *smartphone*, tablet, hingga monitor *ultrawide*.
* **📉 Zero Dependencies:** Kecepatan *load* super cepat karena tidak menggunakan library pihak ketiga yang memperlambat performa situs.

---

## 📂 Struktur Repositori

```text
NF2077/Portfolio/
├── index.html          # Gerbang Utama Portofolio (Showcase & CTA)
├── style.css           # Arsitektur Desain Global & Variabel Warna
├── script.js           # Logika Interaksi UI (Dynamic Navbar Scroll)
└── widgets/            # 🧪 SUB-DIREKTORI LABORATORIUM WIDGET (v3.0)
    ├── index.html      # Tata Letak Dashboard Widget Koleksi
    ├── style.css       # Desain Precision Box & Kerapian UI Widget
    └── script.js       # Engine Utama (Kalkulator, Crypto Tracker, dll)
