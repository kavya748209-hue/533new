# 5333 GARAGE

Futuristic 3D e-commerce site (Vite, vanilla JS).

## Run locally
```
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs /dist
npm run preview
```

## Edit content
- Products & prices: `src/main.js` (the `P` object near the top)
- WhatsApp number / Instagram: `WA` and `IG` constants in `src/main.js`
- Styles: `src/styles.css`   - Images: `public/images/`
- Reviews are SAMPLES in `index.html` (section `#rev`) - replace with real customer reviews before launch.

## Deploy
Push to GitHub, import the repo in Vercel (Framework: Vite, build `npm run build`, output `dist`).
