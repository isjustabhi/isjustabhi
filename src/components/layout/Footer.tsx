import { BrandMark } from "@/components/layout/BrandMark";
import { StatusMarquee } from "@/components/layout/StatusMarquee";
import { BuildIn } from "@/components/ui/BuildIn";
import { profile } from "@/data/profile";
import { ArrowUpRight, Github, Globe, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/projects" },
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "All projects", href: "/projects" },
      { label: "Writing", href: "/writing" },
      { label: "Research", href: "/research" },
      { label: "Resume", href: "/resume/Abhiram_Varma_Nandimandalam_Resume.pdf" },
      { label: "Beyond the code", href: "/beyond-code" },
    ],
  },
];

const social = [
  { label: "GitHub", href: profile.links.github, icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
  { label: "Medium", href: profile.links.medium, icon: Globe },
  { label: "Google Scholar", href: profile.links.scholar, icon: Globe },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-ink-line bg-ink-muted/50 pb-24 backdrop-blur-xl md:pb-16">
      <StatusMarquee />
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <BuildIn className="grid w-full gap-10 xl:grid-cols-3 xl:gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <BrandMark />
              <span>
                <span className="block text-lg font-bold tracking-tight text-mist">Abhi</span>
                <span className="block text-xs text-mist-muted">Portfolio 2026</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-mist-muted">{profile.tagline}</p>
            <p className="text-xs text-mist-faint">
              © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-mist-muted">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1.5 text-sm text-mist-muted transition-colors hover:text-mist"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-mist-muted">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${profile.emails.professional}`}
                    className="inline-flex items-center gap-1.5 text-sm text-mist-muted transition-colors hover:text-mist"
                  >
                    <Mail size={14} />
                    {profile.emails.professional}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.links.site}
                    className="group inline-flex items-center gap-1.5 text-sm text-mist-muted transition-colors hover:text-mist"
                  >
                    <Globe size={14} />
                    isjustabhi.com
                    <ArrowUpRight size={12} className="opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href={profile.links.university}
                    className="group inline-flex items-center gap-1.5 text-sm text-mist-muted transition-colors hover:text-mist"
                    target="_blank"
                    rel="noreferrer"
                  >
                    UA Psychology
                    <ArrowUpRight size={12} className="opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-mist-muted">
                Social
              </h3>
              <ul className="space-y-3">
                {social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-mist-muted transition-colors hover:text-mist"
                    >
                      <item.icon size={14} />
                      {item.label}
                      <ArrowUpRight size={12} className="opacity-0 transition group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BuildIn>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-8 text-xs text-mist-muted sm:flex-row">
          <span>Built with Next.js & Tailwind CSS</span>
          <div className="flex items-center gap-4">
            <Link href="/#about" className="hover:text-mist">
              About
            </Link>
            <Link href="/writing" className="hover:text-mist">
              Writing
            </Link>
            <Link href="/#contact" className="hover:text-mist">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
