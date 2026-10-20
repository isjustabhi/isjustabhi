"use client";

import { projects } from "@/data/projects";
import { navItems } from "@/lib/site";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const commands = [
  ...navItems.map((item) => ({
    href: item.href,
    label: item.label,
    group: "Navigate",
  })),
  { href: "/research", label: "Research", group: "Navigate" },
  ...projects.map((project) => ({
    href: project.caseStudy ?? `/projects#${project.slug}`,
    label: project.title,
    group: "Projects",
  })),
];

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    return commands.filter((command) => command.label.toLowerCase().includes(q));
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/50 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="mx-auto mt-[12vh] max-w-lg overflow-hidden rounded-2xl border border-ink-line bg-ink-surface shadow-glow"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search work, research, pages…"
          className="w-full border-b border-ink-line bg-transparent px-4 py-3 text-sm text-mist outline-none"
        />
        <ul className="max-h-80 overflow-auto py-2">
          {results.length === 0 ? (
            <li className="px-4 py-3 text-sm text-mist-muted">No matches.</li>
          ) : (
            results.map((command) => (
              <li key={`${command.group}-${command.label}`}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-mist hover:bg-ink-elevated"
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                    router.push(command.href);
                  }}
                >
                  <span>{command.label}</span>
                  <span className="text-xs uppercase tracking-widest text-mist-faint">
                    {command.group}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
