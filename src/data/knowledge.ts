export type KnowledgeEntry = {
  id: string;
  questions: string[];
  keywords: string[];
  answer: string;
};

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "who",
    questions: ["Who is Abhiram?", "Tell me about Abhi"],
    keywords: ["who", "about", "introduce", "abhi", "abhiram", "bio"],
    answer:
      "Abhiram Varma Nandimandalam (Abhi) is a Scientific Analyst for Data, AI & Bioinformatics in the Laboratory for Social Connectedness & Health at the University of Arizona Department of Psychology, under David A. Sbarra. He builds research software spanning AVA, mixed-model sensitivity analysis, PersonaeAI synthetic surveys, and LLM-assisted literature review, and co-authored LLM-HyPZ (IEEE ICDMW 2025).",
  },
  {
    id: "role",
    questions: ["What is his current role?"],
    keywords: [
      "role",
      "job",
      "title",
      "scientific analyst",
      "lsch",
      "current",
      "bioinformatics",
      "shiny",
      "ava",
      "personae",
      "sensitivity",
    ],
    answer:
      "Official title on the latest CV: Scientific Analyst – Data, AI & Bioinformatics, LSCH, University of Arizona Department of Psychology. Current work includes AVA (R Shiny), mixed-effects power/sensitivity analysis (simr/lme4), PersonaeAI (Claude + ANES 2024), and an LLM-assisted literature platform scaled to 309 papers. He is also listed as Founder of a stealth startup (Jun 2026–Present).",
  },
  {
    id: "education",
    questions: ["What did he study?"],
    keywords: ["education", "degree", "masters", "gpa", "certificate", "nlp", "arizona", "btech"],
    answer:
      "M.S. in Data Science, University of Arizona (Aug 2024–May 2026), plus a Graduate Certificate in NLP, GPA 4.0/4.0. Spring 2026 Distinguished Graduate Scholar, College of Information Science. B.Tech in Artificial Intelligence and Data Science, Madanapalle Institute of Technology and Sciences (Aug 2020–May 2024).",
  },
  {
    id: "research",
    questions: ["What research has he published?"],
    keywords: ["research", "paper", "publication", "arxiv", "ieee", "hypz", "citation", "mithra", "llm4sec"],
    answer:
      "Featured paper: LLM-HyPZ, IEEE ICDM 2025 Workshops, doi 10.1109/ICDMW69685.2025.00150, arXiv:2509.00647. Third author from a GRA role in MITHRA Lab under Dr. Rozhin Yasaei (Aug 2024–Aug 2025). Also contributed to ICDM 2025 LLM4Sec Workshop research. Earlier: Multi-Class Skin Disease Classification, IEEE IConSCEPT 2024.",
  },
  {
    id: "personaeai",
    questions: ["What is PersonaeAI?"],
    keywords: ["personae", "personaeai", "synthetic", "anes", "survey", "tvd"],
    answer:
      "PersonaeAI is an LLM-powered synthetic survey research pipeline built at LSCH with Python, Anthropic Claude, Pandas, and the ANES 2024 Pilot dataset for 1,500 respondent profiles. The latest resume reports a 33% reduction in mean total variation distance with politically enriched AI personas versus baseline, with Streamlit/Plotly dashboards for agreement and discrepancies. Source is not public.",
  },
  {
    id: "pdf-qa",
    questions: ["What is the PDF QA system?"],
    keywords: ["pdf", "qa", "rag", "retrieval", "cybersecurity", "document"],
    answer:
      "A private retrieval-augmented PDF question-answering system, previously listed publicly as a cybersecurity RAG / PDF QA project available as a demo on request. It follows the standard RAG loop: PDF ingest, chunking, embeddings, retrieval, and grounded generation. The repository is not public.",
  },
  {
    id: "projects",
    questions: ["What are his strongest projects?"],
    keywords: ["project", "portfolio", "github", "demo", "work", "pdf", "rag"],
    answer:
      "Signature work: LLM-HyPZ (published research) and PersonaeAI (LSCH synthetic survey pipeline). Lab software also includes AVA, mixed-model sensitivity analysis, the systematic-review processor (20→309 papers), and a private PDF QA RAG system.",
  },
  {
    id: "stack",
    questions: ["What technologies does he use?"],
    keywords: ["stack", "skills", "python", "react", "llm", "rag", "tableau", "shiny", "claude"],
    answer:
      "From the latest CV: Python, SQL, R, Pandas, NumPy, ETL, Microsoft SQL Server; mixed-effects models, regression, bootstrap, power/sensitivity analysis; LLMs, RAG, embeddings, prompt engineering, Anthropic Claude; Tableau, Power BI, R Shiny, Streamlit, Plotly; simr and lme4. Full-stack demos also use React/TypeScript/Next.js.",
  },
  {
    id: "contact",
    questions: ["How can I contact him?"],
    keywords: ["contact", "email", "linkedin", "hire", "github", "phone", "resume", "cv"],
    answer:
      "University: abhiramn@arizona.edu. Professional: abhivn.connect@gmail.com. Phone on the latest resume: +1 (484) 447-2590. Book time: calendly.com/abhiramn-arizona. Site: isjustabhi.com. Resume/CV PDFs are available on the site under /resume. GitHub: github.com/isjustabhi. LinkedIn: linkedin.com/in/isjustabhi.",
  },
  {
    id: "writing",
    questions: ["Where does he write?"],
    keywords: ["medium", "writing", "blog", "article", "journal"],
    answer:
      "He writes on Medium as @isjustabhi (medium.com/@isjustabhi). The writing page lists posts from that public RSS feed. If the feed is down, the site will not invent articles.",
  },
  {
    id: "badminton",
    questions: ["Does he play badminton?"],
    keywords: ["badminton", "hobby", "court", "shuttle", "sport"],
    answer:
      "Yes. Badminton is how Abhi unplugs. There are no published rankings or tournament titles on the site. The Beyond the Code page is personal, not a sports resume.",
  },
  {
    id: "metrics",
    questions: ["Are the impact numbers verified?"],
    keywords: ["250k", "dashboard", "85%", "28%", "metric", "impact", "accuracy", "33%", "60%", "309"],
    answer:
      "Prefer paper-backed figures from LLM-HyPZ and IConSCEPT. Latest resume/CV self-reports include: 10+ Housing dashboards, ~60% reporting-effort reduction, 25% Campus Health survey response uplift, PersonaeAI −33% mean TVD, and literature scale-up 20→309 papers. Older bio numbers like 250K+ records or +28% RAG retrieval are not repeated from the latest resume.",
  },
];

export function answerFromKnowledge(query: string): string {
  const normalized = query.toLowerCase().trim();
  if (!normalized) {
    return "Ask about Abhiram’s role, publications, projects, or how to get in touch. Answers stay inside verified public information.";
  }

  const scored = knowledgeBase
    .map((entry) => {
      const hit = entry.keywords.reduce(
        (count, keyword) =>
          normalized.includes(keyword) ? count + keyword.length : count,
        0,
      );
      return { entry, hit };
    })
    .sort((a, b) => b.hit - a.hit);

  if (scored[0]?.hit > 0) return scored[0].entry.answer;
  return "I only answer from Abhiram’s verified public record. Try asking about LSCH, PersonaeAI, LLM-HyPZ, writing, badminton, or contact details.";
}
