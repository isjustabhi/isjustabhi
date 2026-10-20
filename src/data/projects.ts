export type ProjectStatus =
  | "prototype"
  | "research"
  | "deployed-demo"
  | "hackathon"
  | "internal"
  | "coursework";

export type ProjectTier = "signature" | "featured" | "archive";

export type Project = {
  slug: string;
  title: string;
  positioning: string;
  problem: string;
  contribution: string;
  summary: string;
  year: number;
  status: ProjectStatus;
  collaborative: boolean;
  team?: string[];
  mentors?: string[];
  tech: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  language?: string;
  updated?: string;
  stars?: number;
  sourcePublic: boolean;
  disclaimer?: string;
  cover: string;
  categories: Array<
    "genai" | "healthcare" | "research" | "data" | "product" | "ml"
  >;
  tier: ProjectTier;
  selected?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rural-health-kiosk",
    title: "Rural Health Kiosk / Dr. Dexter",
    positioning:
      "Award-winning graduate capstone for AI-supported rural care access.",
    problem:
      "Rural communities face delayed triage and thin clinical coverage. The team built a kiosk-style assistant that can be used by voice, text, and a real-time avatar rather than a conventional chatbot.",
    contribution:
      "Collaborative graduate capstone team member. Public materials describe RAG, a fine-tuned MedGemma model, and Claude for culturally sensitive symptom assessment, triage, and personalized guidance. Individual code ownership cannot be verified because the repository is not public.",
    summary:
      "University of Arizona College of Information Science capstone presented at iShowcase Spring 2026. The product is a prototype, not a deployed clinical system.",
    year: 2026,
    status: "prototype",
    collaborative: true,
    team: [
      "Ameya Subramanian",
      "Rishinath Enugala",
      "Abhighyan Bommerla",
      "Usha Gourigari",
      "Matthew Qi Lan Thompson",
      "Abhiram Varma Nandimandalam",
    ],
    mentors: ["Ash Black", "Nitika Sharma, PhD", "Catherine Brooks"],
    tech: ["RAG", "MedGemma", "Claude", "Python", "Voice interfaces"],
    caseStudy: "/work/rural-health-kiosk",
    sourcePublic: false,
    disclaimer:
      "Prototype / nonclinical. Not FDA-cleared and not a substitute for professional medical care. Source code is not public.",
    cover: "/images/projects/rural-health-kiosk.svg",
    categories: ["genai", "healthcare"],
    tier: "signature",
    selected: true,
  },
  {
    slug: "llm-hypz",
    title: "LLM-HyPZ",
    positioning:
      "Published LLM-assisted pipeline for hardware vulnerability discovery.",
    problem:
      "Hardware weaknesses persist across product lifecycles, but hardware CWE lists have historically relied on expert Delphi surveys rather than large-scale CVE evidence.",
    contribution:
      "Third author. Role in MITHRA Lab, College of Information Science, University of Arizona. Public descriptions cite data preprocessing, pipeline organization, and experimental coordination. The paper does not itemize per-author engineering tasks.",
    summary:
      "Zero-shot LLM classification, 3072-d embeddings, K-means clustering, and prompt-driven summarization over 114,836 CVE records from 2021–2024.",
    year: 2025,
    status: "research",
    collaborative: true,
    tech: [
      "Python",
      "LLMs",
      "OpenAI embeddings",
      "K-means",
      "Prompt engineering",
      "CVE / NVD",
    ],
    demo: "https://arxiv.org/abs/2509.00647",
    caseStudy: "/work/llm-hypz",
    sourcePublic: false,
    cover: "/images/projects/llm-hypz.svg",
    categories: ["research", "genai"],
    tier: "signature",
    selected: true,
  },
  {
    slug: "dataloom",
    title: "DataLoom",
    positioning:
      "Browser-native AI data pipeline studio from CSV to exportable analytics.",
    problem:
      "Analysts often bounce between spreadsheets, notebooks, and BI tools just to clean a file, chart it, and hand off a pipeline.",
    contribution:
      "Sole public author of the GitHub repository. Implemented a four-stage Vite + React pipeline: ingest, refine, enrich, and deploy.",
    summary:
      "Uploads CSV/Excel up to 10 MB, profiles quality in the browser, uses OpenAI Chat Completions for refine/enrich suggestions, renders Recharts, and exports CSV, Markdown, and a Python pipeline script. No backend.",
    year: 2026,
    status: "deployed-demo",
    collaborative: false,
    tech: [
      "React 18",
      "Vite 5",
      "Tailwind CSS",
      "Recharts",
      "PapaParse",
      "SheetJS",
      "OpenAI API",
    ],
    github: "https://github.com/isjustabhi/DataLoom",
    demo: "https://data-loom-isjustabhi.vercel.app/",
    caseStudy: "/work/dataloom",
    language: "JavaScript",
    updated: "2026-04-24",
    stars: 0,
    sourcePublic: true,
    disclaimer:
      "Client-side demo. An OpenAI key in VITE_OPENAI_API_KEY is exposed to the browser by design of the current repo; treat as a prototype, not a production data platform.",
    cover: "/images/projects/dataloom.svg",
    categories: ["data", "genai", "product"],
    tier: "signature",
    selected: true,
  },
  {
    slug: "triagelens",
    title: "TriageLens",
    positioning:
      "Explainable ESI 1–5 emergency triage co-pilot for education and demos.",
    problem:
      "Emergency departments misclassify triage severity frequently enough that a transparent second-look tool is useful for training, even if it cannot be used clinically.",
    contribution:
      "Sole public author. Built a client-side React app around the Emergency Severity Index with chain-of-thought reasoning, factor charts, and a Kanban queue.",
    summary:
      "Nurses or students enter vitals and a chief complaint. Anthropic Claude (Sonnet) streams ESI reasoning. Simulation mode generates fictional patients. Codex Creator Challenge project.",
    year: 2026,
    status: "hackathon",
    collaborative: false,
    tech: ["React", "Tailwind CSS", "Recharts", "Anthropic Claude API"],
    github: "https://github.com/isjustabhi/TRIAGELENS",
    demo: "https://triagelens.vercel.app",
    language: "JavaScript",
    updated: "2026-04-23",
    sourcePublic: true,
    disclaimer:
      "Demonstration and educational tool. Not FDA-approved, not clinically validated, and not a substitute for professional medical judgment.",
    cover: "/images/projects/triagelens.svg",
    categories: ["healthcare", "genai", "product"],
    tier: "featured",
    selected: true,
  },
  {
    slug: "systematic-review-processor",
    title: "Systematic Review Processor",
    positioning:
      "Lab-facing Claude coder for social connectedness systematic reviews.",
    problem:
      "LSCH needed a way to code research PDFs against a structured prompt and export results without sending the whole corpus through an ad-hoc chat window.",
    contribution:
      "Public author and Data Scientist listed in the README for the Social Connectedness & Health lab. Built CLI and FastAPI local web UI.",
    summary:
      "Processes up to 400 PDFs per run, sequentially for API rate limits, and writes JSON, CSV, and a change log of papers that could not be coded.",
    year: 2026,
    status: "internal",
    collaborative: false,
    tech: ["Python", "FastAPI", "Claude", "PDF processing"],
    github: "https://github.com/isjustabhi/systematic-review-processor",
    demo: "https://isjustabhi.github.io/systematic-review-processor/",
    language: "Python",
    updated: "2026-06-18",
    stars: 1,
    sourcePublic: true,
    cover: "/images/projects/systematic-review.svg",
    categories: ["research", "genai", "data"],
    tier: "featured",
    selected: true,
  },
  {
    slug: "sensitivity-analysis",
    title: "Sensitivity Analysis",
    positioning:
      "R Shiny app for mixed-model power and sensitivity curves on clustered and twin data.",
    problem:
      "Lab studies on clustered or twin samples need power and sensitivity curves that match mixed-model assumptions, not a generic calculator.",
    contribution:
      "Author of the private LSCH Shiny app. GitHub description: mixed-model power/sensitivity curves using simr and lme4 for clustered/twin data.",
    summary:
      "Internal research software. Source is private; demo available on request. Not a public web product.",
    year: 2026,
    status: "internal",
    collaborative: false,
    tech: ["R", "Shiny", "simr", "lme4"],
    language: "R",
    sourcePublic: false,
    cover: "/images/projects/sensitivity.svg",
    categories: ["research", "data", "ml"],
    tier: "featured",
    selected: true,
  },
  {
    slug: "ava",
    title: "Associational Variable Analysis",
    positioning:
      "R Shiny research software for guided correlation screening and incremental validity.",
    problem:
      "Associational analyses in the lab needed a repeatable path from correlation screening to incremental validity, semi-partial R², and bootstrapped indirect effects.",
    contribution:
      "Author of the private AVA Shiny application and the related reproducible AVA research-software repository. Source is not public.",
    summary:
      "Provides guided correlation screening, incremental validity analysis, semi-partial R² interpretation, and bootstrapped indirect-effect workflows. Internal LSCH tooling.",
    year: 2026,
    status: "internal",
    collaborative: false,
    tech: ["R", "Shiny", "regression", "bootstrap"],
    language: "R",
    sourcePublic: false,
    cover: "/images/projects/ava.svg",
    categories: ["research", "data"],
    tier: "featured",
    selected: true,
  },
  {
    slug: "methylation-pipeline",
    title: "Methylation Bioinformatics Pipeline",
    positioning:
      "Lab bioinformatics pipeline for DNA methylation processing at LSCH.",
    problem:
      "Behavioral and health studies in the lab depend on a maintained methylation and omics processing path, not one-off notebooks.",
    contribution:
      "Scientific Analyst responsible for maintaining the DNA methylation bioinformatics pipeline in the current LSCH role. Implementation is internal; there is no public repository.",
    summary:
      "Ongoing research-infrastructure work under David A. Sbarra. Details stay internal because the pipeline handles research data.",
    year: 2026,
    status: "internal",
    collaborative: true,
    tech: ["R", "Python", "bioinformatics", "DNA methylation"],
    sourcePublic: false,
    cover: "/images/projects/methylation.svg",
    categories: ["research", "data", "healthcare"],
    tier: "featured",
    selected: true,
  },
  {
    slug: "ai-student-care",
    title: "AI Student Care",
    positioning:
      "Campus support prototype for UA students spanning resources, mood, and chat.",
    problem:
      "Students hunt across disconnected campus pages for CAPS, academic help, and crisis contacts. The app consolidates navigation and an empathetic assistant.",
    contribution:
      "Sole public author of the Next.js 14 TypeScript app. Includes Aria chat, resource directory, mood dashboard, and a mock AI fallback.",
    summary:
      "Supports OpenAI, Claude, or a pattern-matching mock provider. Crisis keywords escalate to 988, 911, and CAPS. README does not document a LangChain production RAG deployment.",
    year: 2026,
    status: "prototype",
    collaborative: false,
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "OpenAI", "Claude"],
    github: "https://github.com/isjustabhi/ai-student-care",
    demo: "https://ai-student-care.vercel.app",
    language: "TypeScript",
    updated: "2026-04-23",
    sourcePublic: true,
    disclaimer:
      "Student project, not a substitute for professional medical or mental health care.",
    cover: "/images/projects/ai-student-care.svg",
    categories: ["genai", "healthcare", "product"],
    tier: "featured",
    selected: true,
  },
  {
    slug: "healthmate",
    title: "HealthMate",
    positioning:
      "Full-stack wellness tracker with Gemini symptom guidance.",
    problem:
      "People collect sleep, mood, and exercise fragments without a single place that can chart them and offer nonclinical guidance.",
    contribution:
      "Sole public author. Next.js frontend, Express API, Supabase PostgreSQL, JWT auth, Gemini 1.5 Flash.",
    summary:
      "Built for the ML Empowerment Build Challenge (AI for Health). Tracks metrics, computes a 0–100 health score, and stores symptom checks. Explicitly not medical advice.",
    year: 2026,
    status: "hackathon",
    collaborative: false,
    tech: [
      "Next.js 14",
      "Express",
      "TypeScript",
      "Supabase",
      "Gemini 1.5 Flash",
      "Recharts",
    ],
    github: "https://github.com/isjustabhi/healthmate",
    demo: "https://healthmate-abhi.vercel.app/",
    language: "TypeScript",
    updated: "2026-06-19",
    stars: 1,
    sourcePublic: true,
    disclaimer: "General wellness information only. Not medical advice.",
    cover: "/images/projects/healthmate.svg",
    categories: ["healthcare", "product", "genai"],
    tier: "featured",
  },
  {
    slug: "drift",
    title: "DRIFT",
    positioning:
      "AI location reports that mix livability stats with a day-in-the-life narrative.",
    problem:
      "City research tools surface tourist facts. Drift asks what daily life feels like, then compares two places.",
    contribution:
      "Sole public author. Single-file React + Vite app using GPT-4o with web search. API key stays in React state only.",
    summary:
      "Codex Creator Challenge project. Radar scores across cost, safety, weather, culture, food, and walkability, plus compare mode.",
    year: 2026,
    status: "hackathon",
    collaborative: false,
    tech: ["React 18", "Tailwind CSS", "Recharts", "GPT-4o", "Vite"],
    github: "https://github.com/isjustabhi/DRIFT",
    demo: "https://drift-life.vercel.app/",
    language: "JavaScript",
    updated: "2026-04-23",
    sourcePublic: true,
    disclaimer:
      "AI-generated location data can be wrong. Verify before relocation decisions.",
    cover: "/images/projects/drift.svg",
    categories: ["genai", "product"],
    tier: "featured",
  },
  {
    slug: "reviewiq",
    title: "ReviewIQ",
    positioning:
      "NLP dashboard that turns clothing reviews into sentiment and complaint structure.",
    problem:
      "Product teams drown in unstructured reviews and need ranked features, complaints, and exportable summaries.",
    contribution:
      "Sole public author. Next.js frontend, Express backend, Hugging Face facebook/bart-large-mnli, Python preprocessing script.",
    summary:
      "AI x Data 2.0 Hackathon project. Upload or paste reviews, analyze, then inspect charts, word cloud, and PDF/JSON export.",
    year: 2026,
    status: "hackathon",
    collaborative: false,
    tech: [
      "Next.js 14",
      "Express",
      "TypeScript",
      "Hugging Face Inference API",
      "Recharts",
    ],
    github: "https://github.com/isjustabhi/ReviewIQ",
    demo: "https://review-iq-smoky.vercel.app",
    language: "TypeScript",
    updated: "2026-05-23",
    sourcePublic: true,
    cover: "/images/projects/reviewiq.svg",
    categories: ["ml", "data", "product"],
    tier: "featured",
  },
  {
    slug: "earlyeco",
    title: "EarlyEco",
    positioning:
      "Participatory health intelligence platform with FastAPI backend work.",
    problem:
      "Community health signals are delayed when check-ins, vitals, and local risk live in separate tools.",
    contribution:
      "Public GitHub contributor on EarlyEco/be (FastAPI). EarlyEco/ui lists other contributors. Backend vs UI ownership should be described as backend contribution unless more commits are shown.",
    summary:
      "Backend supports JWT auth, health check-ins, risk classification, community summaries, and optional LLM assessment. UI is a separate React + Leaflet app.",
    year: 2026,
    status: "prototype",
    collaborative: true,
    tech: ["FastAPI", "MongoDB", "JWT", "React", "Leaflet"],
    github: "https://github.com/EarlyEco/be",
    demo: "https://earlyeco.health/",
    sourcePublic: true,
    disclaimer: "Health prototype. Not a clinical diagnostic product.",
    cover: "/images/projects/earlyeco.svg",
    categories: ["healthcare", "product"],
    tier: "archive",
  },
  {
    slug: "ai-interview-system",
    title: "AI Interview System",
    positioning: "Mock interview coach with JD/resume-conditioned questions.",
    problem:
      "Candidates need structured practice that is tied to a specific job description, not a generic question bank.",
    contribution:
      "Sole public author. Next.js + Zustand + OpenAI with a deterministic fallback when no key is present.",
    summary:
      "Upload a job description and resume, generate 8–12 questions, collect answers, and return scored feedback with Recharts.",
    year: 2026,
    status: "deployed-demo",
    collaborative: false,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "OpenAI API"],
    github: "https://github.com/isjustabhi/Ai-Interview-system",
    demo: "https://ai4-interview.vercel.app/",
    language: "TypeScript",
    updated: "2026-04-27",
    sourcePublic: true,
    cover: "/images/projects/interview.svg",
    categories: ["genai", "product"],
    tier: "archive",
  },
  {
    slug: "sleeplens",
    title: "SleepLens",
    positioning:
      "Sleep intake to an educational cardiometabolic risk report.",
    problem:
      "Sleep quality, chronotype, and cardiometabolic risk are usually discussed in separate reports.",
    contribution:
      "Sole public author. Vite + React client calling GPT-4o, with a local demo report if no API key is set.",
    summary:
      "Educational sleep intelligence report. Not medical advice.",
    year: 2026,
    status: "deployed-demo",
    collaborative: false,
    tech: ["React 19", "Vite", "Tailwind CSS", "Recharts", "GPT-4o"],
    github: "https://github.com/isjustabhi/sleeplens",
    demo: "https://sleeplens.vercel.app",
    language: "JavaScript",
    updated: "2026-09-06",
    stars: 1,
    sourcePublic: true,
    disclaimer: "Educational only. Not medical advice.",
    cover: "/images/projects/sleeplens.svg",
    categories: ["healthcare", "genai"],
    tier: "archive",
  },
  {
    slug: "verifyhire",
    title: "VerifyHire",
    positioning:
      "E-Verify employer search for OPT, STEM OPT, and H-1B students.",
    problem:
      "International students need a faster way to check whether an employer participates in E-Verify.",
    contribution: "Sole public author of the TypeScript repository.",
    summary: "AI-powered employer search app deployed on Vercel.",
    year: 2026,
    status: "deployed-demo",
    collaborative: false,
    tech: ["TypeScript"],
    github: "https://github.com/isjustabhi/VerifyHire",
    demo: "https://verify-hire.vercel.app",
    language: "TypeScript",
    updated: "2026-07-08",
    sourcePublic: true,
    cover: "/images/projects/verifyhire.svg",
    categories: ["product"],
    tier: "archive",
  },
  {
    slug: "diabuddy",
    title: "DiaBuddy AI",
    positioning:
      "Diabetes companion described as ADA/NIH/CDC-grounded RAG chat.",
    problem:
      "Daily diabetes follow-through is fragmented across logs, education, and visit summaries.",
    contribution:
      "Listed on the previous portfolio with a Lovable demo. No public GitHub repository was found under isjustabhi.",
    summary:
      "Previous portfolio describes glucose/food/activity tracking, RAG chat, and 28+ curated medical knowledge chunks. Treat as a hosted prototype until source is published.",
    year: 2026,
    status: "prototype",
    collaborative: false,
    tech: ["React", "Supabase", "pgvector", "Gemini", "RAG"],
    demo: "https://dia-wise-ai.lovable.app",
    sourcePublic: false,
    disclaimer:
      "Prototype / nonclinical. Public source code was not found. Confirm the live demo before citing architecture details.",
    cover: "/images/projects/diabuddy.svg",
    categories: ["healthcare", "genai"],
    tier: "archive",
  },
  {
    slug: "bio-scholar-ai",
    title: "Bio Scholar AI",
    positioning: "PubMed-oriented paper summarizer and entity extractor.",
    problem:
      "Biomedical readers need structured findings, methods, and clinical relevance from a PMID or URL.",
    contribution:
      "Listed on the previous portfolio with a Lovable demo. No public GitHub repository was found under isjustabhi.",
    summary:
      "Previous portfolio describes RAG over PubMed with Gemini and Supabase/pgvector. Source is not public.",
    year: 2026,
    status: "prototype",
    collaborative: false,
    tech: ["React", "RAG", "PubMed API", "Gemini", "Supabase"],
    demo: "https://bio-cite-scribe.lovable.app",
    sourcePublic: false,
    cover: "/images/projects/bioscholar.svg",
    categories: ["research", "genai"],
    tier: "archive",
  },
  {
    slug: "skin-disease-classification",
    title: "Multi-Class Skin Disease Classification",
    positioning:
      "Transfer-learning study later published at IEEE IConSCEPT 2024.",
    problem:
      "23-class dermatology image classification with a small balanced dataset.",
    contribution:
      "Co-author (N. Abhiram Varma). Public notebook repo: Enhancing-Multi-class-Skin-Disease-Classification.",
    summary:
      "VGG19 83.69% and ResNet50 82.82% accuracy on the paper’s test split. Research experiment, not a diagnostic device.",
    year: 2024,
    status: "research",
    collaborative: true,
    tech: ["Python", "VGG19", "ResNet50", "Transfer learning"],
    github:
      "https://github.com/isjustabhi/Enhancing-Multi-class-Skin-Disease-Classification",
    language: "Jupyter Notebook",
    updated: "2024-11-19",
    sourcePublic: true,
    disclaimer: "Research prototype. Not a clinical diagnostic system.",
    cover: "/images/projects/skin.svg",
    categories: ["ml", "healthcare", "research"],
    tier: "archive",
  },
  {
    slug: "emotion-classification",
    title: "Emotion Classification from Tweets",
    positioning: "TF-IDF + logistic regression baseline for tweet emotions.",
    problem: "Classic NLP classification on noisy social text.",
    contribution: "Public Jupyter notebook author.",
    summary:
      "Course-style experiment. Useful as evidence of classical ML/NLP, not as a product.",
    year: 2025,
    status: "coursework",
    collaborative: false,
    tech: ["Python", "TF-IDF", "Logistic Regression", "scikit-learn"],
    github: "https://github.com/isjustabhi/Emotion-Classification-Tweets",
    language: "Jupyter Notebook",
    updated: "2025-05-04",
    sourcePublic: true,
    cover: "/images/projects/emotion.svg",
    categories: ["ml"],
    tier: "archive",
  },
  {
    slug: "compositional-vae",
    title: "Compositional generative modeling",
    positioning: "Toy joint and conditional VAEs for shape and color.",
    problem:
      "Understand joint versus conditional generative structure on a controlled toy domain.",
    contribution:
      "Public notebooks: compositional-generative-toy, shape_color_joint_vae, and two conditional variants.",
    summary: "Research/course notebooks, not a deployed model service.",
    year: 2025,
    status: "coursework",
    collaborative: false,
    tech: ["Python", "VAEs", "Jupyter"],
    github: "https://github.com/isjustabhi/compositional-generative-toy",
    language: "Jupyter Notebook",
    sourcePublic: true,
    cover: "/images/projects/vae.svg",
    categories: ["ml", "research"],
    tier: "archive",
  },
  {
    slug: "parkinsons",
    title: "Parkinson's Disease Detection System",
    positioning: "Classical ML pipeline on biomedical signal features.",
    problem: "Explore early-stage classification from structured biomedical features.",
    contribution: "Public Jupyter notebook author.",
    summary:
      "Course/research notebook. Accuracy claims on the previous portfolio are not repeated here without the notebook metrics in view.",
    year: 2024,
    status: "coursework",
    collaborative: false,
    tech: ["Python", "scikit-learn", "XGBoost"],
    github:
      "https://github.com/isjustabhi/Parkinson-s-Disease-Detection-System",
    language: "Jupyter Notebook",
    updated: "2024-11-14",
    sourcePublic: true,
    disclaimer: "Educational ML experiment. Not a diagnostic system.",
    cover: "/images/projects/parkinsons.svg",
    categories: ["ml", "healthcare"],
    tier: "archive",
  },
];

export const selectedProjects = projects.filter((project) => project.selected);
export const featuredProjects = projects.filter(
  (project) => project.tier === "featured" || project.tier === "signature",
);
export const signatureProjects = projects.filter(
  (project) => project.tier === "signature",
);
export const archiveProjects = projects.filter(
  (project) => project.tier === "archive",
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
