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
    name: "healthmate",
    description:
      "HealthMate is an AI-powered web app that tracks daily wellness metrics and uses Google Gemini to deliver symptom guidance and personalized health insights.",
    htmlUrl: "https://github.com/isjustabhi/healthmate",
    homepage: "https://healthmate-abhi.vercel.app/",
    language: "TypeScript",
    stars: 1,
    updatedAt: "2026-06-19T00:00:00Z",
  },
  {
    name: "sleeplens",
    description:
      "AI-powered sleep health intelligence platform with cardiometabolic risk assessment and personalized 7-day plans. Built with React + GPT-4o.",
    htmlUrl: "https://github.com/isjustabhi/sleeplens",
    homepage: "https://sleeplens.vercel.app",
    language: "JavaScript",
    stars: 1,
    updatedAt: "2026-09-06T00:00:00Z",
  },
  {
    name: "DataLoom",
    description:
      'DataLoom — AI Data Pipeline Studio. "Weave raw data into analytics-ready insights."',
    htmlUrl: "https://github.com/isjustabhi/DataLoom",
    homepage: "https://data-loom-isjustabhi.vercel.app/",
    language: "JavaScript",
    stars: 0,
    updatedAt: "2026-04-24T00:00:00Z",
  },
  {
    name: "TRIAGELENS",
    description:
      "AI-powered emergency triage co-pilot that predicts ESI acuity levels with explainable chain-of-thought clinical reasoning.",
    htmlUrl: "https://github.com/isjustabhi/TRIAGELENS",
    homepage: "https://triagelens.vercel.app",
    language: "JavaScript",
    stars: 0,
    updatedAt: "2026-04-23T00:00:00Z",
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
];
