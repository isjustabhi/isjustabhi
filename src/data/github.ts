export type RepoCard = {
  name: string;
  description: string;
  htmlUrl: string;
  homepage?: string;
  language?: string;
  stars: number;
  updatedAt: string;
  topics?: string[];
};

/** Repos that should never appear in the Open Source section. */
export const hiddenRepos = new Set([
  "sleeplens",
  "healthmate",
  "VerifyHire",
  "AI4HC",
  "isjustabhi.github.io",
  "terminal-bench-log-report",
  "shape_color_cond1_color_given_shape",
  "shape_color_cond2_shape_given_color",
  "shape_color_joint_vae",
  "isjustabhi",
  "DataLoom",
  "TRIAGELENS",
  "TriageLens",
]);

export const fallbackRepos: RepoCard[] = [
  {
    name: "systematic-review-processor",
    description:
      "AI-assisted systematic review PDF coder for the Social Connectedness & Health lab (Claude + CSV export, local web UI)",
    htmlUrl: "https://github.com/isjustabhi/systematic-review-processor",
    homepage: "https://isjustabhi.github.io/systematic-review-processor/",
    language: "Python",
    stars: 1,
    updatedAt: "2026-06-18T00:00:00Z",
    topics: ["ai", "claude", "fastapi", "pdfprocessing", "psychology"],
  },
  {
    name: "DRIFT",
    description:
      "AI-powered location life report generator — search any city and get real data, vibe scores, and immersive narratives.",
    htmlUrl: "https://github.com/isjustabhi/DRIFT",
    homepage: "https://drift-life.vercel.app/",
    language: "JavaScript",
    stars: 0,
    updatedAt: "2026-04-23T00:00:00Z",
  },
  {
    name: "ai-student-care",
    description:
      "AI-powered student support platform built for University of Arizona Wildcats.",
    htmlUrl: "https://github.com/isjustabhi/ai-student-care",
    homepage: "https://ai-student-care.vercel.app",
    language: "TypeScript",
    stars: 0,
    updatedAt: "2026-04-23T00:00:00Z",
  },
  {
    name: "ReviewIQ",
    description: "Turn reviews into insights. AI extracts what matters.",
    htmlUrl: "https://github.com/isjustabhi/ReviewIQ",
    homepage: "https://review-iq-smoky.vercel.app",
    language: "TypeScript",
    stars: 0,
    updatedAt: "2026-05-23T00:00:00Z",
  },
  {
    name: "Ai-Interview-system",
    description: "Mock interview coach with JD and resume-conditioned questions.",
    htmlUrl: "https://github.com/isjustabhi/Ai-Interview-system",
    homepage: "https://ai4-interview.vercel.app/",
    language: "TypeScript",
    stars: 0,
    updatedAt: "2026-04-27T00:00:00Z",
  },
  {
    name: "Enhancing-Multi-class-Skin-Disease-Classification",
    description:
      "Transfer-learning study for multi-class skin disease classification (VGG19 / ResNet50).",
    htmlUrl:
      "https://github.com/isjustabhi/Enhancing-Multi-class-Skin-Disease-Classification",
    language: "Jupyter Notebook",
    stars: 0,
    updatedAt: "2024-11-19T00:00:00Z",
  },
];
