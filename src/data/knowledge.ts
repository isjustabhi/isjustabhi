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
      "Abhiram Varma Nandimandalam (Abhi) is a Scientific Analyst in the Laboratory for Social Connectedness & Health at the University of Arizona Department of Psychology. He maintains a DNA methylation bioinformatics pipeline and internal R Shiny tools for sensitivity analysis and associational variable analysis, alongside LLM applications, RAG, and healthcare AI prototypes. Faculty supervisor: David A. Sbarra.",
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
      "methylation",
      "bioinformatics",
      "shiny",
      "ava",
      "sensitivity",
    ],
    answer:
      "Official title: Scientific Analyst, Laboratory for Social Connectedness & Health, University of Arizona Department of Psychology. Current lab work includes maintaining a DNA methylation bioinformatics pipeline and private R Shiny tools: mixed-model sensitivity analysis (simr + lme4) and Associational Variable Analysis (AVA). LinkedIn also uses Data Scientist @ University of Arizona | LSCH.",
  },
  {
    id: "education",
    questions: ["What did he study?"],
    keywords: ["education", "degree", "masters", "gpa", "certificate", "nlp", "arizona"],
    answer:
      "M.S. in Data Science, University of Arizona (2024–2026), plus an NLP Graduate Certificate. Public materials list a 4.0 GPA. He is a Spring 2026 Distinguished Graduate Scholar in the College of Information Science. Undergraduate: B.Tech CSE (Data Science), MITS / JNTUA.",
  },
  {
    id: "research",
    questions: ["What research has he published?"],
    keywords: ["research", "paper", "publication", "arxiv", "ieee", "hypz", "citation", "mithra"],
    answer:
      "Featured paper: LLM-HyPZ, IEEE ICDM 2025 Workshops, doi 10.1109/ICDMW69685.2025.00150, arXiv:2509.00647. He is third author from a Graduate Research Assistant role in MITHRA Lab, College of Information Science. Earlier: Multi-Class Skin Disease Classification, IEEE IConSCEPT 2024, doi 10.1109/IConSCEPT61884.2024.10627847. Google Scholar also lists a 2026 OSF systematic mapping with David Sbarra; contribution details need confirmation.",
  },
  {
    id: "kiosk",
    questions: ["What is the Rural Health Kiosk?"],
    keywords: ["kiosk", "dexter", "rural", "capstone", "colab", "co-lab", "ishowcase"],
    answer:
      "Rural Health Kiosk / Dr. Dexter is a Spring 2026 University of Arizona graduate capstone. Public descriptions mention RAG, fine-tuned MedGemma, and Claude, with voice, text, and avatar interaction for rural care access. It is a collaborative team prototype, not a clinical product, and the source is not public. The team reports a Co-Lab Award at iShowcase; an official winners page was not found.",
  },
  {
    id: "projects",
    questions: ["What are his strongest projects?"],
    keywords: ["project", "portfolio", "github", "demo", "work"],
    answer:
      "Signature work: Rural Health Kiosk (team capstone), LLM-HyPZ (published research), and DataLoom. LSCH lab software includes a systematic-review processor, a private Shiny sensitivity-analysis app (simr + lme4), private AVA software, and a DNA methylation bioinformatics pipeline. Other public demos include TriageLens, AI Student Care, HealthMate, DRIFT, and ReviewIQ.",
  },
  {
    id: "stack",
    questions: ["What technologies does he use?"],
    keywords: ["stack", "skills", "python", "react", "llm", "rag", "tableau"],
    answer:
      "Verified through repos and papers: Python, React, TypeScript, Next.js, FastAPI, Express, SQL/PostgreSQL, Tableau, Power BI, OpenAI/Claude/Gemini APIs, embeddings, clustering, and RAG-style retrieval in selected prototypes. Proficiency is shown by projects, not percentage bars.",
  },
  {
    id: "contact",
    questions: ["How can I contact him?"],
    keywords: ["contact", "email", "linkedin", "hire", "github"],
    answer:
      "Professional: abhivn.connect@gmail.com. University: abhiramn@arizona.edu. GitHub: github.com/isjustabhi. LinkedIn: linkedin.com/in/isjustabhi. Scholar: citations?user=nhEzRmAAAAAJ.",
  },
  {
    id: "metrics",
    questions: ["Are the impact numbers verified?"],
    keywords: ["250k", "dashboard", "85%", "28%", "metric", "impact", "accuracy"],
    answer:
      "Several numbers on older public bios are self-reported: 250K+ records, 15+ dashboards, 85%+ forecast accuracy, +28% RAG retrieval, 40% fewer data errors, 25% survey uplift, 60% lower AI wait times. They are not independently audited. Prefer paper-backed figures from LLM-HyPZ and IConSCEPT when making hiring claims.",
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

  if (scored[0].hit === 0) {
    return "I can only answer from the public portfolio record. Try asking about LSCH, LLM-HyPZ, Rural Health Kiosk, DataLoom, education, or contact details. If a fact is not on the site, it will not be invented.";
  }

  return scored[0].entry.answer;
}
