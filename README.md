# 🏠 Rumah Dekat IPB Clone

Clone dari website [rumahdekatipb.com](https://rumahdekatipb.com) menggunakan HTML, CSS, dan JavaScript murni tanpa framework.

## 🚀 Demo

Buka `index.html` di browser atau serve via HTTP server.

## 📂 Struktur Folder

```
rumahdekatipb-clone/
├── index.html          # Halaman utama (13 section)
├── css/
│   └── style.css       # Styling lengkap + responsive
├── js/
│   └── main.js         # Data properti + interaktivitas
├── assets/
│   └── images/         # (placeholder untuk gambar lokal)
└── README.md
```

## 🎨 Sections

1. **Navbar** — Sticky header dengan logo, nav links, CTA
2. **Hero** — Headline + search filters (zona, tipe, budget)
3. **Partner Logos** — Developer-developer ternama
4. **Quick Search** — Kategori populer mahasiswa
5. **Rekomendasi Populer** — Property carousel
6. **Paling Dekat Kampus** — Properti dekat kampus
7. **Budget Pelajar** — Properti termurah
8. **Kenapa Pilih Kami** — 4 keunggulan
9. **Jelajahi Properti** — Tab filter (Semua / Rumah / Kostan)
10. **Testimoni** — Review mahasiswa
11. **FAQ** — Accordion 6 pertanyaan umum
12. **CTA Daftar Properti** — Untuk pemilik properti
13. **CTA Bottom** — Call to action akhir
14. **Footer** — 4 kolom (brand, navigasi, bantuan, kontak)

## ⚙️ Teknologi

- **HTML5** semantic markup
- **CSS3** custom properties, flexbox, grid, animations
- **Vanilla JavaScript** (ES6+) tanpa library
- **Font Awesome** icons
- **Google Fonts** (Poppins)
- **Unsplash** placeholder images

## 📱 Responsive

- Desktop (1024px+)
- Tablet (768px–1024px)
- Mobile (< 768px)
- Small mobile (< 480px)

## 📋 Data Properti

8 properti sample dengan data:
- Nama, lokasi, jarak, foto, harga, rating, fasilitas

## 🔧 Cara Jalankan Lokal

```bash
# Method 1: Buka langsung di browser
open index.html

# Method 2: Serve dengan Python
python3 -m http.server 8080
# lalu buka http://localhost:8080

# Method 3: Serve dengan Node.js
npx serve .
```

## 📚 Deployment Options

- ✅ Vercel (`vercel deploy`)
- ✅ Cloudflare Pages (`npx wrangler pages deploy`)
- ✅ Netlify (`npx netlify deploy`)
- ✅ VPS Self-hosted (Nginx + Cloudflare Tunnel)
- ✅ GitHub Pages (push ke repo)

## 🛡️ Fitur Interaktif

- ✨ Sticky navbar dengan scroll effect
- ✨ Hero dengan floating cards animation
- ✨ Chip selector untuk zona
- ✨ Carousel navigasi untuk rekomendasi
- ✨ Tab filter (Semua / Rumah / Kostan)
- ✨ Accordion FAQ
- ✨ Hamburger menu (mobile)
- ✨ Smooth scroll & hover effects
- ✨ Animasi loading & transisi

---
Dibuat oleh Joko (Hermes Agent) ¹ 2024
