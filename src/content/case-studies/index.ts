export type ArchitectureNode = {
  id: string;
  label: string;
  detail: string;
};

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  problem: string;
  context: string;
  role: string;
  architecture: {
    caption: string;
    nodes: ArchitectureNode[];
    note: string;
  };
  technologies: string[];
  decisions: { title: string; body: string }[];
  challenges: { title: string; body: string }[];
  results: { title: string; body: string }[];
  learned: string[];
  improvements: string[];
  classification: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "rural-health-kiosk": {
    slug: "rural-health-kiosk",
    eyebrow: "Graduate capstone · team prototype",
    problem:
      "Rural and underserved patients often meet the healthcare system late, after travel, wait time, or uncertainty about whether a symptom is urgent. A kiosk in a trusted local setting can lower that first barrier if it is usable without a smartphone-native workflow.",
    context:
      "This is a University of Arizona College of Information Science graduate capstone presented at iShowcase Spring 2026. Public materials describe Dr. Dexter as an assistant that supports culturally sensitive symptom assessment, triage, and personalized guidance through voice, text, and a real-time avatar. The work is a collaborative team project. Mentors publicly named: Ash Black; Nitika Sharma, PhD; Catherine Brooks. Team members publicly named: Ameya Subramanian, Rishinath Enugala, Abhighyan Bommerla, Usha Gourigari, Matthew Qi Lan Thompson, and Abhiram Varma Nandimandalam. Source code is not in a public GitHub repository, so this case study does not invent a microservice map.",
    role:
      "Team contributor on a six-person capstone. Individual commit history cannot be verified from public source. Do not read this page as sole ownership of the model, avatar stack, or RAG corpus.",
    architecture: {
      caption: "Publicly described interaction and model stack",
      nodes: [
        {
          id: "channels",
          label: "Voice, text, avatar",
          detail: "Kiosk interaction modes described in public writeups",
        },
        {
          id: "rag",
          label: "Retrieval-Augmented Generation",
          detail: "Grounding layer named by the team; corpus not public",
        },
        {
          id: "medgemma",
          label: "Fine-tuned MedGemma",
          detail: "Domain model named in public materials",
        },
        {
          id: "claude",
          label: "Claude",
          detail: "Public GitHub biography specifies Claude Opus 4.6; confirm version on request",
        },
        {
          id: "output",
          label: "Assessment, triage, guidance",
          detail: "Nonclinical prototype outputs, with human care remaining authoritative",
        },
      ],
      note: "Diagram reconstructed from public descriptions, not from a public repo.",
    },
    technologies: [
      "RAG",
      "MedGemma",
      "Claude",
      "Python",
      "Voice interfaces",
      "Avatar interaction",
    ],
    decisions: [
      {
        title: "Multimodal access instead of a chat URL",
        body: "A kiosk that speaks and shows an avatar is a product decision about literacy, connectivity, and trust. It is slower to build than a web chatbot, which is the point of a rural access prototype.",
      },
      {
        title: "Retrieve, then generate",
        body: "The team describes RAG plus a fine-tuned medical model rather than unconstrained generation. That is the correct shape for a health assistant even when the system is still a prototype.",
      },
      {
        title: "Keep the clinical boundary explicit",
        body: "Capstone healthcare software should be labeled as decision support for access, not as autonomous diagnosis. This page treats Dr. Dexter as a prototype.",
      },
    ],
    challenges: [
      {
        title: "Evidence versus narrative",
        body: "The award story is strong. The missing public repository is a constraint. Recruiters should ask for a private walkthrough rather than infer production readiness from the iShowcase stage.",
      },
      {
        title: "Team attribution",
        body: "Six students and three mentors. Any portfolio that implies solo construction would be inaccurate.",
      },
      {
        title: "Safety",
        body: "Symptom assessment systems fail dangerously if they over-claim. The correct trade-off is conservative guidance, escalation language, and no treatment orders.",
      },
    ],
    results: [
      {
        title: "Co-Lab Award, iShowcase Spring 2026",
        body: "Publicly announced by the team as the Co-Lab Award for Graduate Capstone, Applied Research & Industry Impact. An official college winners listing was not located during this rebuild.",
      },
      {
        title: "Capstone demonstration",
        body: "Presented to industry and community judges at the College of Information Science iShowcase. That is a judged academic demo, not a deployed clinic integration.",
      },
    ],
    learned: [
      "Healthcare AI is constrained first by access, language, and trust, then by model choice.",
      "A capstone can be technically ambitious and still be a prototype. Those facts can coexist.",
      "Team projects need explicit authorship if they are going to survive recruiter scrutiny.",
    ],
    improvements: [
      "Publish an architecture README and evaluation card even if the full repo stays private.",
      "Document the RAG corpus, retrieval metrics, and failure cases.",
      "Add a measured human-in-the-loop escalation study before any field pilot language.",
    ],
    classification: "Collaborative academic prototype. Not a deployed clinical product.",
  },
  "llm-hypz": {
    slug: "llm-hypz",
    eyebrow: "IEEE ICDM 2025 Workshops · third author",
    problem:
      "Hardware vulnerabilities are expensive because they persist after deployment. MITRE’s 2021 hardware CWE list relied on expert Delphi ranking. Software has a data-driven CWE Top 25; hardware did not have an equivalent evidence pipeline over CVE text.",
    context:
      "CVE descriptions mix hardware, firmware, and software language, at a scale of more than 100,000 recent records. The 2021–2024 snapshot used in the paper contains 114,836 entries. Manual labeling cannot keep up, and keyword filters miss semantic overlap. LLM-HyPZ was built as a three-stage, minimally supervised mining framework and later used to narrow candidates for MITRE’s 2025 Most Important Hardware Weaknesses update.",
    role:
      "Graduate Research Assistant in MITHRA Lab and third author. IEEE lists the author affiliation as College of Information Science, University of Arizona. Public bios describe data preprocessing, pipeline organization, RAG-related workflows, and experimental coordination. The paper does not include a CRediT contribution table, so this page does not invent a sole-architect claim.",
    architecture: {
      caption: "Three-stage pipeline from the paper (Figure 2 / Algorithm 1)",
      nodes: [
        {
          id: "cve",
          label: "CVE corpus 2021–2024",
          detail: "114,836 vulnerability descriptions",
        },
        {
          id: "cls",
          label: "Stage 1 · zero-shot LLM classification",
          detail: "Prompted hardware vs software labels, human-in-the-loop prompt refinement",
        },
        {
          id: "embed",
          label: "Stage 2 · embeddings + K-means",
          detail: "OpenAI text-embedding-3-large, 3072 dimensions; k chosen with the elbow method",
        },
        {
          id: "sum",
          label: "Stage 3 · n-grams + LLM summarization",
          detail: "Frequency features plus prompt-driven cluster labels in hardware-security language",
        },
        {
          id: "out",
          label: "1,742 hardware CVEs · five themes",
          detail: "411 of 1,026 CVEs later used in MIHW 2025 analysis",
        },
      ],
      note: "Architecture taken from the IEEE/arXiv paper, not from a public application repository.",
    },
    technologies: [
      "Python",
      "Prompted LLMs (seven models benchmarked; LLaMA 3.3 70B at 99.5% on the validation set)",
      "OpenAI text-embedding-3-large",
      "K-means clustering",
      "n-gram analysis",
      "CVE / NVD text mining",
    ],
    decisions: [
      {
        title: "Zero-shot before supervised training",
        body: "Hardware CVE labels are scarce. The paper uses prompt-conditioned LLMs as a pre-filter instead of waiting on a large annotated set.",
      },
      {
        title: "Embeddings over LDA",
        body: "Related work used LDA and sequence labeling. Contextual embeddings plus clustering keep semantic neighborhood structure that topic models flatten.",
      },
      {
        title: "Keep experts in the loop",
        body: "Figure 3 in the paper contrasts brittle rule filters with LLM screening plus human prompt revision. That is the right control for a security corpus.",
      },
    ],
    challenges: [
      {
        title: "Ambiguous CVE language",
        body: "Entries conflate firmware, drivers, and silicon. Binary hardware/software labels are a modeling choice, not a physical truth.",
      },
      {
        title: "Validation versus corpus scale",
        body: "99.5% accuracy is reported on a curated validation set, not as a claim that every one of 114,836 records is perfectly labeled.",
      },
      {
        title: "Closed research code",
        body: "There is no public isjustabhi/LLM-HyPZ application repo. Reproducibility for outsiders depends on the paper, not a README.",
      },
    ],
    results: [
      {
        title: "1,742 hardware-related CVEs",
        body: "Filtered from 114,836 records (2021–2024).",
      },
      {
        title: "Five recurring themes",
        body: "Firmware/BIOS privilege escalation, memory corruption in mobile and IoT systems, physical-access exploits, and related confidentiality/availability failures, as labeled in the paper.",
      },
      {
        title: "Downstream MIHW 2025 support",
        body: "The pipeline surfaced 411 of the 1,026 CVEs used in later MIHW analysis, reducing expert search space.",
      },
      {
        title: "Publication",
        body: "IEEE ICDM 2025 Workshops, pp. 1268–1273, doi: 10.1109/ICDMW69685.2025.00150. Also arXiv:2509.00647.",
      },
    ],
    learned: [
      "Security NLP is a retrieval and labeling problem before it is a chatbot problem.",
      "Hybrid pipelines beat end-to-end generation when the corpus is large and the labels are expensive.",
      "Publication is the evaluation: reviewers, a DOI, and a numbered contribution to MITRE’s process.",
    ],
    improvements: [
      "Release a sanitized reproduction notebook for the clustering and labeling stages.",
      "Publish per-author task notes so contribution is not inferred from author order alone.",
      "Measure calibration of the hardware/software classifier on newer CVE years.",
    ],
    classification:
      "Peer-reviewed research experiment and data-mining framework. Not a commercial product.",
  },
  dataloom: {
    slug: "dataloom",
    eyebrow: "Public source · deployed Vite demo",
    problem:
      "A spreadsheet is not a pipeline. Analysts still spend the first hour of a dataset on nulls, types, chart choices, and a handoff script someone else can rerun.",
    context:
      "DataLoom Studio is a single-page Vite + React application. There is no backend. Files stay in the browser. OpenAI Chat Completions are called from the client for refine and enrich suggestions. The live demo is a prototype for analysts, not a governed enterprise ETL platform.",
    role:
      "Sole public GitHub author (isjustabhi/DataLoom). Product design, pipeline UX, client-side profiling, and export generation.",
    architecture: {
      caption: "Four-stage client pipeline from the repository README",
      nodes: [
        {
          id: "ingest",
          label: "Ingest",
          detail: "CSV / XLSX / XLS up to 10 MB via PapaParse and SheetJS",
        },
        {
          id: "profile",
          label: "Profile",
          detail: "Nulls, types, unique values, numeric and string summaries in-browser",
        },
        {
          id: "refine",
          label: "Refine",
          detail: "OpenAI proposes transforms; JavaScript applies them locally",
        },
        {
          id: "enrich",
          label: "Enrich",
          detail: "KPIs, Recharts, insights, anomalies, generated PySpark-style code",
        },
        {
          id: "deploy",
          label: "Deploy / export",
          detail: "Downloadable CSV, Markdown report, and Python pipeline script",
        },
      ],
      note: "Taken from the public README and described stack. No invented microservices.",
    },
    technologies: [
      "React 18",
      "Vite 5",
      "Tailwind CSS 3",
      "Recharts",
      "PapaParse",
      "SheetJS / XLSX",
      "OpenAI Chat Completions via fetch",
    ],
    decisions: [
      {
        title: "No backend on purpose",
        body: "Keeping transforms in the browser avoids uploading sensitive CSVs to a custom server. The cost is that the OpenAI key currently lives in a Vite env var, which is visible to the client.",
      },
      {
        title: "Four named stages",
        body: "Ingest → Refine → Enrich → Deploy is a teaching architecture. It makes the product legible in a demo without hiding the work behind a single chat box.",
      },
      {
        title: "Export a script, not only a chart",
        body: "A cleaned CSV plus a generated pipeline file is closer to how analysts actually hand off work.",
      },
    ],
    challenges: [
      {
        title: "Secret handling",
        body: "VITE_OPENAI_API_KEY is a frontend secret. That is acceptable for a personal demo and unacceptable for a company deployment. A future version should proxy the model call.",
      },
      {
        title: "Ten megabyte ceiling",
        body: "Browser profiling will not replace Spark. The product is honest about file size and should stay that way.",
      },
      {
        title: "Model suggestions versus correctness",
        body: "LLM-proposed transforms can be wrong. Local application of transforms is good; automatic trust of the proposal is not.",
      },
    ],
    results: [
      {
        title: "Working public demo",
        body: "https://data-loom-isjustabhi.vercel.app/ with source at github.com/isjustabhi/DataLoom.",
      },
      {
        title: "Complete documented path",
        body: "README covers stack, env, features, and Vercel deployment. This is one of the few public repos where the architecture can be inspected without a paper.",
      },
    ],
    learned: [
      "Productized data science is often UX around profiling and exports, not a new algorithm.",
      "Client-side pipelines are a privacy feature and a security footgun at the same time.",
      "A four-stage navigator is a better demo than a wall of notebooks.",
    ],
    improvements: [
      "Move model calls behind a server route so keys never ship to the browser.",
      "Add tests around transform application and type inference.",
      "Support parquet and a sampled preview for files above 10 MB.",
    ],
    classification:
      "Deployed personal demo / prototype. Not an enterprise data platform.",
  },
};
