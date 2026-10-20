export const skillGroups = [
  {
    id: "genai",
    title: "GenAI",
    items: [
      {
        name: "Large language models",
        evidence: "LLM-HyPZ zero-shot classification; TriageLens and Drift GPT/Claude apps",
      },
      {
        name: "RAG",
        evidence: "Rural Health Kiosk (team); AI Student Care resource grounding; DiaBuddy described as RAG",
      },
      {
        name: "Prompt engineering",
        evidence: "LLM-HyPZ classification and cluster summarization prompts; systematic-review-processor coding prompt",
      },
      {
        name: "Embeddings & clustering",
        evidence: "OpenAI text-embedding-3-large (3072-d) + K-means in LLM-HyPZ",
      },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    items: [
      {
        name: "Python",
        evidence: "Systematic review processor, research notebooks, LLM-HyPZ pipeline work",
      },
      {
        name: "NLP",
        evidence: "NLP graduate certificate; tweet emotion classification; clinical NLP experiments",
      },
      {
        name: "Transfer learning",
        evidence: "IConSCEPT 2024 VGG19 / ResNet50 skin-disease study",
      },
      {
        name: "Model evaluation",
        evidence: "LLM-HyPZ validation accuracy; IConSCEPT reported accuracies",
      },
    ],
  },
  {
    id: "data-eng",
    title: "Data Engineering",
    items: [
      {
        name: "SQL",
        evidence: "Campus Health and Housing analytics roles; HealthMate PostgreSQL",
      },
      {
        name: "ETL / preprocessing",
        evidence: "Housing operational ETL; DataLoom ingest-refine-enrich-deploy pipeline",
      },
      {
        name: "CSV / Excel pipelines",
        evidence: "DataLoom PapaParse + SheetJS client pipeline",
      },
      {
        name: "Research data tooling",
        evidence: "systematic-review-processor JSON/CSV export and change log",
      },
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack",
    items: [
      {
        name: "React + TypeScript",
        evidence: "HealthMate, ReviewIQ, AI Student Care, AI Interview System",
      },
      {
        name: "Next.js / Vite",
        evidence: "Multiple deployed demos on Vercel",
      },
      {
        name: "Python APIs",
        evidence: "FastAPI systematic-review-processor; EarlyEco backend contributor",
      },
      {
        name: "Node / Express",
        evidence: "HealthMate and ReviewIQ backends",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    items: [
      {
        name: "Power BI",
        evidence: "Campus Health dashboard suite; Microsoft certification",
      },
      {
        name: "Tableau",
        evidence: "Housing GA work; public Tableau profile",
      },
      {
        name: "Statistical analysis",
        evidence: "LSCH scientific analyst role; graduate data science training",
      },
      {
        name: "Visualization",
        evidence: "Recharts in DataLoom, Drift, TriageLens, ReviewIQ",
      },
    ],
  },
  {
    id: "research-eng",
    title: "Research Engineering",
    items: [
      {
        name: "Reproducible pipelines",
        evidence: "LSCH workflows; systematic-review-processor CLI + UI",
      },
      {
        name: "Experiment documentation",
        evidence: "IEEE papers; case-study architecture notes",
      },
      {
        name: "Human-in-the-loop review",
        evidence: "LLM-HyPZ expert-guided prompting; PDF coding change log",
      },
      {
        name: "Responsible AI disclaimers",
        evidence: "Healthcare prototypes labeled nonclinical across repos",
      },
    ],
  },
] as const;
