export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  supervisor?: string;
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
    role: "Scientific Analyst – Data, AI & Bioinformatics",
    organization:
      "University of Arizona · Department of Psychology · Laboratory for Social Connectedness & Health",
    location: "Tucson, AZ",
    start: "Jun 2026",
    end: "Present",
    current: true,
    supervisor: "Dr. David A. Sbarra, Professor of Psychology and PI",
    officialNote:
      "Title and bullets reconciled from the latest CV/resume. LinkedIn may also list Data Scientist @ University of Arizona | LSCH.",
    summary:
      "Research staff building statistical software, AI/NLP workflows, and interactive analytics for behavioral science, psychology, and health research under David A. Sbarra.",
    bullets: [
      "Lead technical development of Associational Variable Analysis (AVA), an R Shiny research tool for nonexperimental, cross-sectional data — zero-order and covariate-adjusted associations, multiple regression, semi-partial R², incremental validity, and bootstrap-based indirect-association analyses.",
      "Developed a 12-pattern classification framework across four associational conditions with automated interpretation, configurable thresholds, input validation, and interactive visualizations.",
      "Designed and deployed a mixed-effects power and sensitivity analysis application using R, simr, and lme4 for hierarchical, clustered, and twin datasets.",
      "Built PersonaeAI, an LLM-powered synthetic survey research pipeline with Python, Anthropic Claude, Pandas, and the ANES 2024 Pilot dataset for 1,500 respondent profiles.",
      "Ran human-vs-synthetic survey experiments reporting a 33% reduction in mean total variation distance with politically enriched AI personas versus baseline.",
      "Independently developed an LLM-assisted systematic literature review platform and expanded literature processing from a 20-paper pilot to 309 research papers.",
      "Collaborate with academic researchers and quantitative methodologists on reproducibility, validation, and interpretability.",
    ],
    metrics: [
      {
        label: "Literature scale-up",
        value: "20 → 309",
        attribution: "Self-reported on the latest CV/resume",
      },
      {
        label: "Synthetic survey TVD",
        value: "−33%",
        attribution: "Self-reported on the latest CV/resume (PersonaeAI)",
      },
    ],
    relatedProjects: [
      "personaeai",
      "ava",
      "sensitivity-analysis",
      "systematic-review-processor",
      "methylation-pipeline",
    ],
    link: "https://psychology.arizona.edu/person/abhiram-nandimandalam",
  },
  {
    id: "stealth",
    role: "Founder",
    organization: "Stealth Startup",
    location: "United States",
    start: "Jun 2026",
    end: "Present",
    current: true,
    summary:
      "Independent startup focused on technology-driven solutions. Product details stay private while the company is in stealth.",
    bullets: [
      "Founded an independent startup focused on developing technology-driven solutions.",
    ],
  },
  {
    id: "housing",
    role: "Graduate Assistant – Data Science",
    organization:
      "University of Arizona · Housing & Residential Life (OASI)",
    location: "Tucson, AZ",
    start: "Aug 2025",
    end: "May 2026",
    supervisor: "Linda Scheu, Director of Organizational Assessment & Strategic Initiatives",
    summary:
      "Graduate assistant supporting institutional assessment, housing operations, and student-support analytics with dashboards, ETL, and NLP on care records.",
    bullets: [
      "Developed and maintained 10+ interactive Tableau dashboards for institutional assessment, student engagement, housing operations, and strategic planning, with automated daily refreshes.",
      "Designed automated reporting workflows that reduced manual reporting effort by approximately 60%.",
      "Built NLP workflows with Python and TF-IDF to analyze unstructured student-care records and summarize themes related to stress, mental health, and physical well-being.",
      "Extracted, cleaned, transformed, and integrated datasets from Microsoft SQL Server, SIS, and institutional platforms into scheduled ETL pipelines.",
      "Collaborated with Housing & Residential Life, Campus Health, and the Dean of Students on dashboards and reports under responsible data-handling practices.",
    ],
    metrics: [
      {
        label: "Dashboards",
        value: "10+",
        attribution: "Latest CV/resume",
      },
      {
        label: "Reporting effort",
        value: "−60%",
        attribution: "Self-reported on the latest CV/resume",
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
    supervisor: "Rachel Abraham, MPH, Evaluation Manager",
    summary:
      "Healthcare data analyst supporting evaluation of student health programs through analytical datasets, dashboards, and reports.",
    bullets: [
      "Designed interactive Tableau and Power BI dashboards covering utilization, mental health, AOD, program participation, and student health trends.",
      "Contributed to survey reporting improvements associated with a reported 25% increase in survey response rates.",
      "Ran cohort comparisons, EDA, and trend assessments in Python and SQL to evaluate health-program outcomes.",
      "Integrated assessment, survey, and health-information sources with cleaning, consistency checks, and validation under institutional privacy procedures.",
    ],
    metrics: [
      {
        label: "Survey engagement",
        value: "+25%",
        attribution: "Self-reported on the latest CV/resume",
      },
    ],
  },
  {
    id: "mithra-gra",
    role: "Graduate Research Assistant",
    organization:
      "University of Arizona · MITHRA Lab · College of Information Science",
    location: "Tucson, AZ",
    start: "Aug 2024",
    end: "Aug 2025",
    supervisor:
      "Dr. Rozhin Yasaei, Assistant Professor and Director, MITHRA Lab",
    summary:
      "Graduate research assistant on LLM-assisted hardware vulnerability discovery, contributing to LLM-HyPZ (IEEE ICDMW 2025) and related LLM4Sec workshop work.",
    bullets: [
      "Contributed to LLM-HyPZ, applying LLMs and information retrieval to hardware cybersecurity vulnerability discovery over 114,836 CVE records (2021–2024).",
      "Supported large-scale preprocessing, dataset organization, experimental coordination, RAG/embedding experimentation, and prompt-driven classification.",
      "Supported research contributing evidence to the MITRE 2025 Most Important Hardware Weaknesses initiative.",
      "Co-authored the IEEE ICDMW 2025 paper and contributed to research presented at the ICDM 2025 LLM4Sec Workshop.",
      "Collaborated with interdisciplinary researchers, including contributors affiliated with Intel, on project development and documentation.",
    ],
    relatedProjects: ["llm-hypz"],
    link: "https://sites.arizona.edu/yasaei/people/",
  },
  {
    id: "meebuddy",
    role: "Data Analyst",
    organization: "MeeBuddy · Rural India's Digital Buddy",
    location: "Remote · India",
    start: "Jan 2023",
    end: "Jul 2024",
    summary:
      "Data analyst supporting engagement analytics and rural KPI dashboards for a digital companion product.",
    bullets: [
      "Analyzed user engagement, service adoption, and platform utilization across rural segments with Python, SQL, and EDA.",
      "Built interactive Tableau dashboards tracking activity, engagement trends, and digital-service adoption.",
      "Translated segment insights into recommendations supporting digital-service access in rural and underserved communities.",
    ],
  },
];
