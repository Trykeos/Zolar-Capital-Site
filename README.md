# Zolar Capital Website

GitHub-ready recreation of the Emergent Zolar Capital site.

## Important: avoid the GitHub Pages white screen

Do not publish the raw source folder directly as GitHub Pages. This is a React/Vite app and must be built first.

This repo includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

That workflow installs dependencies, runs `npm run build`, and deploys the generated `dist` folder to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Local production preview

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Push this folder to the `main` branch.
3. In GitHub, go to **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main`, or manually run the workflow under the **Actions** tab.

The app uses `HashRouter` so GitHub Pages can serve it from either a project URL like:

```text
https://your-user.github.io/your-repo/
```

or a custom domain like:

```text
https://zolarcapital.com/
```

without blank pages on refresh or nested routes.

## Contact form API

Create `.env.local` if you have a backend endpoint:

```bash
VITE_ZOLAR_API_URL=https://api.zolarcapital.com
```

The contact form posts to:

```text
${VITE_ZOLAR_API_URL}/api/leads
```

If this is not set, it falls back to the original preview backend URL from the Emergent build.

## Included pages

- Home
- Solutions
- Product detail pages
- Consulting
- Contact

## Notes

- The app was reconstructed from the uploaded Emergent `bundle.js`.
- The source version is the recommended GitHub repo.
- The compiled static bundle is useful only as a reference or short-term fallback.
