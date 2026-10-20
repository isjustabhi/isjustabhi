# TriageLens

AI-powered emergency triage co-pilot with explainable ESI 1–5 reasoning.

**Classification:** demonstration and educational tool. Not FDA-approved, not clinically validated, and not a substitute for professional medical judgment.

Built for the Codex Creator Challenge.

## Problem

Emergency departments misclassify triage severity often enough that a transparent second-look tool is useful for training. Undertriage can be fatal in real settings; this app does not claim to operate in those settings.

## Architecture

```
Vitals + chief complaint
        │
        ▼
 Prompt with embedded ESI guidelines
        │
        ▼
 Anthropic Claude (Sonnet) chain-of-thought
        │
        ├── ESI 1–5 prediction
        ├── confidence
        ├── streamed reasoning trace
        └── factor contribution chart
                │
                ▼
 Kanban-style live queue (simulation patients allowed)
```

Single-page React app. No backend. No patient database.

## Tech stack

- React
- Tailwind CSS
- Recharts
- Anthropic Claude API (Sonnet)

## Features (implemented)

- Structured vitals plus free-text chief complaint
- ESI 1–5 prediction with chain-of-thought reasoning
- Explainability panel for factor contributions
- Live queue board color-coded by acuity
- Simulation mode with fictional patients
- Streamed reasoning trace

## Disclaimer

All simulation patients are fictional. Do not use TriageLens for real emergency triage.

## License

MIT
