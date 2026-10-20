# Run and deploy

This repository now contains both the GitHub profile README and a Next.js App Router portfolio.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npx tsc --noEmit
npm run build
```

No environment variables are required for the site. GitHub repository cards fall back to `src/data/github.ts` if the public API is unavailable. Do not add a GitHub token to frontend code.

## Vercel

1. Import this GitHub repository in Vercel.
2. Framework preset: Next.js.
3. Root directory: repository root (not a subfolder).
4. Build command: `npm run build`.
5. Output: Next.js default.
6. Assign the production domain `abhiramvarma.vercel.app` when ready.

After deploy, confirm:

- Home, `/projects`, `/research`, `/work/llm-hypz`, `/work/rural-health-kiosk`, `/work/dataloom`
- Dark and light themes
- Command palette (`⌘K` / `Ctrl+K`)
- 404 page at a fake route
- `/sitemap.xml` and `/robots.txt`

## GitHub profile README

GitHub renders the root `README.md` on [github.com/isjustabhi](https://github.com/isjustabhi) because this repository is named `isjustabhi`.

To publish README changes:

```bash
git add README.md assets/brand public/images/github-header.svg
git commit -m "Refresh GitHub profile README"
git push
```

Do not push until you have reviewed `CONTENT_VERIFICATION.md`.
