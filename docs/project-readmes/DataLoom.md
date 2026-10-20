# DataLoom Studio

DataLoom Studio is a single-page Vite + React application that turns uploaded CSV or Excel datasets into a four-stage analytics pipeline: ingest, refine, enrich, and deploy. The app profiles uploaded data in the browser, uses the OpenAI Chat Completions API for refinement and analytics recommendations, renders interactive charts with Recharts, and exports cleaned data plus deployment artifacts with no backend required.

**Classification:** personal deployed demo / prototype. Not an enterprise data platform.

## Product overview

Analysts often bounce between spreadsheets, notebooks, and BI tools to clean a file, chart it, and hand off a pipeline. DataLoom keeps that loop in one browser session.

## Architecture

```
CSV / XLSX / XLS (≤ 10 MB)
        │
        ▼
 PapaParse / SheetJS ingest
        │
        ▼
 In-browser profiling (nulls, types, uniques, summaries)
        │
        ▼
 OpenAI Chat Completions → proposed transforms
        │
        ▼
 Local JavaScript apply + Recharts enrich
        │
        ▼
 Export CSV, Markdown report, Python pipeline script
```

There is no application server. Files do not upload to a custom backend.

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- Recharts
- PapaParse
- SheetJS / XLSX
- OpenAI Chat Completions API via `fetch`

## Features (implemented)

- Upload CSV, XLSX, and XLS files up to 10 MB
- Client-side profiling for nulls, types, unique values, and numeric/string summaries
- AI-guided refine stage that proposes transformations and applies them locally in JavaScript
- AI-guided enrich stage that generates KPIs, charts, insights, anomalies, and pipeline code
- Deploy stage with downloadable CSV, Markdown report, and Python pipeline script
- Sticky four-stage pipeline navigator

## Setup

```bash
npm install
cp .env.example .env.local
```

```env
VITE_OPENAI_API_KEY=sk-your-key-here
```

```bash
npm run dev
```

## Security

`VITE_*` variables are exposed to the browser. Do not use a production OpenAI key in this app. For any shared deployment, proxy the model call through a server route and keep the secret on the server.

## Limitations

- 10 MB file ceiling
- LLM-proposed transforms can be wrong; review before trusting exports
- No authentication, audit log, or dataset governance
- Not suitable for regulated or highly sensitive data in its current form

## Deployment

Import the repository in Vercel as a Vite app. Prefer a server-side key proxy before any public production use.

## Roadmap

- Server-proxied model calls
- Tests around type inference and transform application
- Sampled preview for larger files
