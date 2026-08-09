# Portfolio Efan S. Bachtiar - React + Tailwind

## Fitur Baru
- ✅ Toggle Dark/Light Mode
- ✅ Form Contact langsung ke email efan.sb@live.com via Formspree
- ✅ Animasi Framer Motion
- ✅ Responsive Mobile

## Install
npm install

## Jalankan Lokal
npm run dev

## Build
npm run build

## Setup Form Email
1. Daftar di https://formspree.io dengan email efan.sb@live.com
2. Buat Form baru, copy Endpoint ID
3. Ganti `action="https://formspree.io/f/xxx"` di App.jsx

## Deploy ke Vercel - 3 Menit
1. Push ke Github: github.com/efansb/efan-portfolio
2. Login vercel.com pakai efan.sb@live.com
3. New Project > Import efan-portfolio > Deploy
4. Selesai. Domain: efan-portfolio.vercel.app

## Deploy ke Github Pages
1. npm i gh-pages -D
2. package.json tambah:
   "homepage": "https://efansb.github.io/efan-portfolio",
   "scripts": { "deploy": "gh-pages -d dist" }
3. npm run build && npm run deploy