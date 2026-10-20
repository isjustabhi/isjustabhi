import { profile } from "@/data/profile";

export const site = {
  name: profile.professionalName,
  title: `${profile.professionalName} — AI Engineer & Data Scientist`,
  description: profile.supporting,
  url: "https://abhiramvarma.vercel.app",
  ogImage: "/og.png",
};

export const navItems = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#research", label: "Research", id: "research" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/projects", label: "Archive", id: "archive" },
  { href: "/#contact", label: "Contact", id: "contact" },
];
