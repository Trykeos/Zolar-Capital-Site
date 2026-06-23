# Zolar Capital Website

This repo recreates the Emergent preview as a clean Vite + React project for GitHub.

## What is included

- React source recreated from the uploaded Emergent bundle
- Zolar sun logo component
- Cinematic intro animation
- Platform dropdown
- Home page
- Solutions page
- Dynamic product pages
- Consulting page
- Contact page
- Tailwind + custom Zolar styling
- GitHub Pages fallback helper
- Original uploaded bundle preserved in `original-bundle/bundle.js`

## Tech stack

- Vite
- React
- React Router
- Framer Motion
- Tailwind CSS
- Lucide React
- Axios
- TanStack React Query

## Local setup

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Contact form API

The contact page posts to:

```text
/api/leads
```

Set `VITE_ZOLAR_API_URL` if your API is on another domain.

Example `.env.local`:

```bash
VITE_ZOLAR_API_URL=https://api.zolarcapital.com
```

The final request will go to:

```text
https://api.zolarcapital.com/api/leads
```

## GitHub setup

```bash
git init
git add .
git commit -m "Initial Zolar Capital website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/zolarcapital-site.git
git push -u origin main
```

## Deployment options

### Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Netlify

1. Push this repo to GitHub.
2. Import the repo in Netlify.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. `_redirects` is included for client-side routing.

### GitHub Pages

Use GitHub Actions or a Vite GitHub Pages deployment workflow. Because the site uses React Router, keep the included `public/404.html` fallback.

## Notes

The source was reconstructed from the uploaded `bundle.js`. The `original-bundle` folder is included for traceability and comparison, but the maintainable code lives in `src/`.
