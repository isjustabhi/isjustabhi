export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "conference" | "workshop" | "preprint" | "mapping";
  pages?: string;
  doi?: string;
  arxiv?: string;
  pdf?: string;
  scholar?: string;
  abstract: string;
  contribution?: string;
  citation: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    id: "llm-hypz",
    title:
      "LLM-HyPZ: Hardware Vulnerability Discovery Using an LLM-Assisted Hybrid Platform for Zero-Shot Knowledge Extraction and Refinement",
    authors: [
      "Yu-Zheng Lin",
      "Sujan Ghimire",
      "Abhiram Nandimandalam",
      "Jonah Michael Camacho",
      "Unnati Tripathi",
      "Rony Macwan",
      "Sicong Shao",
      "Setareh Rafatirad",
      "Rozhin Yasaei",
      "Pratik Satam",
      "Soheil Salehi",
    ],
    venue:
      "2025 IEEE International Conference on Data Mining Workshops (ICDMW), Washington, DC",
    year: 2025,
    type: "workshop",
    pages: "1268–1273",
    doi: "10.1109/ICDMW69685.2025.00150",
    arxiv: "https://arxiv.org/abs/2509.00647",
    pdf: "https://arxiv.org/pdf/2509.00647",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nhEzRmAAAAAJ&citation_for_view=nhEzRmAAAAAJ:d1gkVwhDpl0C",
    abstract:
      "LLM-HyPZ combines zero-shot LLM classification, contextualized embeddings, unsupervised clustering, and prompt-driven summarization to mine hardware-related CVEs at scale. On the 2021–2024 CVE corpus (114,836 entries), the framework identified 1,742 hardware-related vulnerabilities and distilled five recurring themes. LLaMA 3.3 70B reached 99.5% classification accuracy on a curated validation set. The pipeline surfaced 411 of 1,026 CVEs later used in MITRE MIHW 2025 analysis.",
    contribution:
      "Third author. Graduate Research Assistant in MITHRA Lab; IEEE lists College of Information Science, University of Arizona. Public sources describe contributions in data preprocessing, pipeline organization, RAG-related workflows, and experimental coordination. Exact task split is not itemized in the paper.",
    citation:
      "Y.-Z. Lin et al., “LLM-HyPZ: Hardware Vulnerability Discovery Using an LLM-Assisted Hybrid Platform for Zero-Shot Knowledge Extraction and Refinement,” in 2025 IEEE International Conference on Data Mining Workshops (ICDMW), Washington, DC, USA, 2025, pp. 1268–1273, doi: 10.1109/ICDMW69685.2025.00150.",
    featured: true,
  },
  {
    id: "skin-disease",
    title:
      "Multi-Class Skin Disease Classification: A Study of Transfer Learning Strategies for Deep Learning Models",
    authors: [
      "Paparao Mekala",
      "B. Surendiran",
      "P. Ramanathan",
      "K. Ramanjaneyulu",
      "S. Sai Manikanta Prakash",
      "T. Reddy Venkata Chetan",
      "N. Abhiram Varma",
    ],
    venue:
      "2024 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT)",
    year: 2024,
    type: "conference",
    doi: "10.1109/IConSCEPT61884.2024.10627847",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nhEzRmAAAAAJ&citation_for_view=nhEzRmAAAAAJ:u5HHmVD_uO8C",
    abstract:
      "The study uses a class-balanced 23-class dermatology dataset (192 training and 20 test images per class) with image processing and transfer learning. VGG19 and ResNet50 reach 83.69% and 82.82% accuracy respectively. This is a research prototype for classification, not a clinical diagnostic system.",
    contribution:
      "Co-author, listed as N. Abhiram Varma, Department of CSE (Data Science), Madanapalle Institute of Technology & Science. Author order places this as a collaborative undergraduate research paper.",
    citation:
      "P. Mekala et al., “Multi-Class Skin Disease Classification: A Study of Transfer Learning Strategies for Deep Learning Models,” 2024 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT), 2024, doi: 10.1109/IConSCEPT61884.2024.10627847.",
  },
  {
    id: "sbarra-mapping",
    title:
      "Altering Social Connections to Improve Health? A Preregistered Systematic Mapping of Experimental Evidence",
    authors: [
      "David A. Sbarra",
      "A. Chowdhary",
      "A. Farrell",
      "E. Marshall",
      "K. Nixon",
      "S. Stanton",
      "et al.",
    ],
    venue: "Deakin University / OSF (listed on Google Scholar, 2026)",
    year: 2026,
    type: "mapping",
    pdf: "https://osf.io/ydq57/",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nhEzRmAAAAAJ&citation_for_view=nhEzRmAAAAAJ:9yKSN-GCB0IC",
    abstract:
      "Google Scholar lists this preregistered systematic mapping of experimental evidence on altering social connections to improve health. Full author order and Abhiram’s specific contribution should be confirmed against the OSF record before treating this as a peer-reviewed journal article.",
    contribution:
      "Appears on Abhiram’s Google Scholar profile. Author position and contribution statement need confirmation from the OSF project.",
    citation:
      "D. Sbarra et al., “Altering Social Connections to Improve Health? A Preregistered Systematic Mapping of Experimental Evidence,” OSF, 2026. https://osf.io/ydq57/",
  },
];
