# Systematic Review Processor

**Laboratory for Social Connectedness & Health** · Department of Psychology · University of Arizona  
PI: David Sbarra, Ph.D.  
Data Scientist: Abhiram Varma Nandimandalam

Interactive guide: https://isjustabhi.github.io/systematic-review-processor/

Code research PDFs for the lab’s social connectedness and health systematic review using Claude and a structured coding prompt (`Claude_Code_Prompting_v4.docx`).

**Classification:** internal research tooling with a public repository. Not a general-purpose literature review SaaS.

## Architecture

```
Pilot Papers/*.pdf  +  coding prompt .docx
              │
              ▼
 Sequential Claude calls (rate-limit stable)
              │
              ├── output/*.json
              ├── output/systematic_review_results.csv
              └── change log of papers that could not be coded
```

Two interfaces share the same processing path:

- CLI: `python3 run_review.py`
- Local web UI: `python3 run_server.py` → http://127.0.0.1:8000

## Features

- Up to 400 PDFs per run from the Pilot Papers folder
- Sequential processing for API rate limits
- JSON + CSV export
- Change log for papers that could not be coded
- FastAPI UI for lab users who should not run the CLI

## Setup

```bash
pip install -r requirements.txt
```

Create `.env`:

```env
ANTHROPIC_API_KEY=sk-ant-your-key
```

Place `Claude_Code_Prompting_v4.docx` in the project folder. PDFs go in `Pilot Papers/`.

## Usage

```bash
python3 run_review.py
```

Web UI:

```bash
python3 run_server.py
```

1. Paste Anthropic API key, or use `.env`
2. Upload the coding prompt `.docx`
3. Drag and drop PDFs (up to 400)
4. Start coding → download CSV and the change log

## Security and research practice

- API keys stay in `.env` or the local UI; do not commit them
- PDFs may contain unpublished manuscripts — keep runs local
- Model coding is assistive. Human review remains required
- The change log is part of the audit trail; do not discard it

## Limitations

- Depends on Anthropic availability and prompt quality
- Sequential, not massively parallel
- Not a hosted multi-user service

## License

MIT
