# Run and deploy

This repository is both the GitHub profile README and the Next.js site for **https://isjustabhi.com**.

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

No secrets are required. Medium posts come from `https://medium.com/feed/@isjustabhi` (revalidated hourly). GitHub repo cards fall back to `src/data/github.ts` if the public API is down. Do not put a GitHub token in frontend code.

## Vercel

1. Import this GitHub repository in Vercel.
2. Framework preset: Next.js.
3. Root directory: repository root.
4. Build command: `npm run build`.
5. After the first deploy, open **Project → Settings → Domains**.

### Connecting isjustabhi.com

Do not guess DNS records. Add the domain in the Vercel dashboard and use **the values Vercel displays for this project**.

Typical flow:

1. Add `isjustabhi.com` and `www.isjustabhi.com` in Vercel → Domains.
2. Set **isjustabhi.com** as the production / canonical domain (redirect `www` → apex, or the reverse — pick one and keep it).
3. At your registrar, create the DNS records Vercel shows (often an A record for the apex and a CNAME for `www`). Copy them from the Vercel UI.
4. Wait for DNS to propagate. Vercel then issues HTTPS certificates automatically.
5. Confirm the site loads at `https://isjustabhi.com` and that `www` redirects to it (or vice versa, matching the canonical you chose).

The app’s canonical URL in code is `https://isjustabhi.com` (`src/lib/site.ts`, metadata, sitemap, JSON-LD, README).

## Search Console

1. Add `https://isjustabhi.com` as a URL-prefix property.
2. Verify with the HTML tag, DNS TXT, or the Vercel integration — whichever Google offers for your account.
3. Submit `https://isjustabhi.com/sitemap.xml`.
4. `robots.txt` already points at that sitemap.

## After deploy, click through

- Home, `/projects`, `/research`, `/writing`, `/beyond-code`
- `/work/llm-hypz`, `/work/rural-health-kiosk`, `/work/pdf-qa-rag`
- Writing cards (or the empty-state link to Medium if the feed is down)
- 404 at a fake path
- `/sitemap.xml` and `/robots.txt`
- Light and dark theme
- Command palette (`⌘K`)

## GitHub profile README

GitHub renders root `README.md` on [github.com/isjustabhi](https://github.com/isjustabhi). Push `README.md` and `assets/brand/github-header.svg` for the profile banner to update.
