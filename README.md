# Reprehensible Thoughts — Vite + React + Tailwind

This is a production-ready build for Netlify.

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Preview production build
```bash
npm run preview
```

## Deploy to Netlify
- Connect this folder to a new Netlify site (via Git) **or** drag the built `dist/` folder in the Netlify UI.
- Settings:
  - **Build command:** `npm run build`
  - **Publish directory:** `dist`
- Included: `netlify.toml` for convenience.
