export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  officialNote?: string;
  summary: string;
  bullets: string[];
  metrics?: { label: string; value: string; attribution: string }[];
  relatedProjects?: string[];
  link?: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "lsch",
    role: "Scientific Analyst, Data Science",
    organization:
      "University of Arizona · Department of Psychology · Laboratory for Social Connectedness & Health",
    location: "Tucson, AZ",
    start: "Jun 2026",
    end: "Present",
    current: true,
    officialNote:
      "Official university directory title is Scientific Analyst. LinkedIn also lists Data Scientist @ University of Arizona | LSCH.",
    summary:
      "Research staff supporting AI-driven methods, reproducible research workflows, and computational tools for behavioral and health science under faculty supervisor David A. Sbarra.",
    bullets: [
      "Build AI methods and analytical infrastructure for social connectedness and health research.",
      "Convert notebook-style analyses into reviewable Python and R workflows with documented assumptions.",
      "Maintain research engineering practices around code review, versioned pipelines, and tests on critical transforms.",
      "Public lab tooling includes an AI-assisted systematic review PDF coder used with Claude and CSV export.",
    ],
    relatedProjects: ["systematic-review-processor"],
    link: "https://psychology.arizona.edu/person/abhiram-nandimandalam",
  },
  {
    id: "housing",
    role: "Graduate Assistant, Data Science",
    organization: "University of Arizona · Housing & Residential Life",
    location: "Tucson, AZ",
    start: "Aug 2025",
    end: "May 2026",
    summary:
      "Graduate assistant supporting organizational assessment and strategic planning with dashboards, ETL, and institutional analytics.",
    bullets: [
      "Designed interactive Tableau dashboards for housing operations and student-support reporting.",
      "Engineered ETL workflows that moved operational records into analysis-ready tables.",
      "Supported leadership reporting with Python, SQL, and Tableau Server workflows.",
    ],
    metrics: [
      {
        label: "Dashboards",
        value: "15+",
        attribution: "Self-reported in public GitHub profile biography",
      },
      {
        label: "Records processed",
        value: "250K+",
        attribution: "Self-reported in public GitHub profile biography",
      },
      {
        label: "Forecast accuracy",
        value: "85%+",
        attribution: "Self-reported in public GitHub profile biography",
      },
    ],
    relatedProjects: ["residence-hall-programming"],
  },
  {
    id: "campus-health",
    role: "Data Analyst",
    organization: "University of Arizona · Campus Health Services",
    location: "Tucson, AZ",
    start: "May 2025",
    end: "Aug 2025",
    summary:
      "Healthcare data analyst intern building Power BI reporting for campus clinical and utilization data.",
    bullets: [
      "Designed a Power BI dashboard suite covering demographics, mental health, AOD, physical health, sexual health, and utilization.",
      "Built end-to-end pipelines from raw extracts to production dashboards used by Campus Health staff.",
    ],
    metrics: [
      {
        label: "Data error reduction",
        value: "40%",
        attribution: "Self-reported in public GitHub profile biography",
      },
      {
        label: "Survey engagement",
        value: "+25%",
        attribution: "Self-reported in public GitHub profile biography",
      },
    ],
  },
  {
    id: "mithra-gra",
    role: "Graduate Research Assistant, AI / NLP",
    organization:
      "University of Arizona · MITHRA Lab · College of Information Science",
    location: "Tucson, AZ",
    start: "Jan 2025",
    end: "Aug 2025",
    summary:
      "Graduate research assistant in MITHRA Lab on LLM-assisted hardware vulnerability discovery, contributing to LLM-HyPZ, later published at IEEE ICDM 2025 Workshops.",
    bullets: [
      "Third author on LLM-HyPZ, an LLM-assisted hybrid pipeline for zero-shot hardware CVE discovery and thematic refinement.",
      "Worked with a 2021–2024 CVE corpus of 114,836 entries; the paper reports 1,742 hardware-related vulnerabilities and five recurring themes.",
      "Supported data preprocessing, pipeline organization, prompt-driven classification, and experimental coordination with faculty collaborators.",
      "The published pipeline later surfaced 411 of 1,026 CVEs used in downstream MITRE MIHW 2025 analysis, according to the paper.",
    ],
    metrics: [
      {
        label: "RAG retrieval improvement",
        value: "+28%",
        attribution:
          "Self-reported in public GitHub profile biography; not a numbered claim in the LLM-HyPZ paper",
      },
    ],
    relatedProjects: ["llm-hypz"],
    link: "https://sites.arizona.edu/yasaei/people/",
  },
  {
    id: "meebuddy",
    role: "Data Analyst",
    organization: "MeeBuddy · Rural India's Digital Buddy",
    location: "India",
    start: "Jan 2023",
    end: "Aug 2024",
    summary:
      "Data analyst supporting engagement analytics and rural KPI dashboards for a digital companion product.",
    bullets: [
      "Built engagement analytics and rural KPI dashboards used to monitor product usage.",
      "Supported reporting for a rural-focused digital product before graduate study in the United States.",
    ],
  },
];
