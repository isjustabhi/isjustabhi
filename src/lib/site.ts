import { profile } from "@/data/profile";

export const site = {
  name: "isjustabhi",
  title: "isjustabhi — Just Abhi. Building things, chasing ideas, and smashing shuttlecocks.",
  description: `${profile.headline}. ${profile.heroLine}`,
  url: "https://isjustabhi.com",
  ogImage: "/og.png",
};

export const navItems = [
  { href: "/", label: "Home", id: "home" },
  { href: "/projects", label: "Work", id: "work" },
  { href: "/writing", label: "Writing", id: "writing" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#contact", label: "Contact", id: "contact" },
];
