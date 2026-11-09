export const skillGroups = [
  {
    id: "genai",
    title: "Generative AI & NLP",
    items: [
      {
        name: "Large language models",
        evidence: "PersonaeAI (Claude); LLM-HyPZ; systematic review coder; private PDF QA",
      },
      {
        name: "RAG & semantic retrieval",
        evidence: "LLM-HyPZ RAG/embedding work; private PDF QA; Rural Health Kiosk (team)",
      },
      {
        name: "Prompt engineering",
        evidence: "LLM-HyPZ classification/summarization; systematic-review configurable prompts",
      },
      {
        name: "Vector embeddings",
        evidence: "OpenAI embeddings + clustering in LLM-HyPZ; resume lists vector embeddings / semantic retrieval",
      },
      {
        name: "Classical NLP",
        evidence: "TF-IDF on Housing student-care records; NLP graduate certificate",
      },
    ],
  },
  {
    id: "stats",
    title: "Statistics & Modeling",
    items: [
      {
        name: "Mixed-effects models",
        evidence: "LSCH power/sensitivity Shiny app with simr and lme4",
      },
      {
        name: "Associational methods",
        evidence: "AVA: semi-partial R², incremental validity, bootstrap indirect associations, 12-pattern framework",
      },
      {
        name: "Power & sensitivity analysis",
        evidence: "Simulation-based evaluation for hierarchical, clustered, and twin datasets",
      },
      {
        name: "Hypothesis testing & regression",
        evidence: "Listed on latest CV; used across LSCH and campus analytics roles",
      },
    ],
  },
  {
    id: "data-eng",
    title: "Programming & Data",
    items: [
      {
        name: "Python",
        evidence: "PersonaeAI, systematic-review-processor, Housing NLP, research pipelines",
      },
      {
        name: "R",
        evidence: "AVA and sensitivity Shiny apps; LSCH statistical workflows",
      },
      {
        name: "SQL / Microsoft SQL Server",
        evidence: "Housing & Campus Health ETL from SQL Server, SIS, and institutional platforms",
      },
      {
        name: "ETL pipelines",
        evidence: "Automated cleaning, QA, validation, and scheduled reporting for Housing OASI",
      },
      {
        name: "Pandas / NumPy",
        evidence: "Listed on latest CV; used in PersonaeAI and analytics workflows",
      },
    ],
  },
  {
    id: "viz",
    title: "Visualization & Apps",
    items: [
      {
        name: "Tableau",
        evidence: "10+ Housing dashboards; Campus Health; MeeBuddy rural KPIs",
      },
      {
        name: "Power BI",
        evidence: "Campus Health dashboards; Microsoft Power BI Data Analyst Associate",
      },
      {
        name: "R Shiny",
        evidence: "Private AVA and Sensitivity Analysis applications for LSCH",
      },
      {
        name: "Streamlit / Plotly",
        evidence: "PersonaeAI research dashboards for distributions and agreement",
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
    ],
  },
  {
    id: "research-eng",
    title: "Research Engineering",
    items: [
      {
        name: "Reproducible research software",
        evidence: "AVA, sensitivity analysis, PersonaeAI, systematic-review-processor",
      },
      {
        name: "Bioinformatics",
        evidence: "Current LSCH title includes bioinformatics; DNA methylation pipeline maintained in role",
      },
      {
        name: "Human-in-the-loop evaluation",
        evidence: "PersonaeAI human-vs-synthetic experiments; LLM-HyPZ expert-guided prompting",
      },
      {
        name: "Responsible data handling",
        evidence: "Campus Health and Housing work under institutional privacy procedures",
      },
    ],
  },
] as const;
