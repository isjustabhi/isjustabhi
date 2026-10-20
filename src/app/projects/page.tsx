"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { projects, type Project } from "@/data/projects";
import { useMemo, useState } from "react";

const filters = [
  { id: "all", label: "All" },
  { id: "genai", label: "GenAI" },
  { id: "healthcare", label: "Healthcare" },
  { id: "research", label: "Research" },
  { id: "data", label: "Data" },
  { id: "product", label: "Product" },
  { id: "ml", label: "ML" },
] as const;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        filter === "all" || project.categories.includes(filter as Project["categories"][number]);
      const haystack = `${project.title} ${project.summary} ${project.tech.join(" ")}`.toLowerCase();
      return matchesFilter && haystack.includes(query.toLowerCase());
    });
  }, [filter, query]);

  return (
    <div className="py-20">
      <Container>
        <p className="text-xs uppercase tracking-[0.22em] text-signal">Archive</p>
        <h1 className="display mt-4 text-4xl text-mist sm:text-6xl">All public work.</h1>
        <p className="mt-4 max-w-2xl text-mist-muted">
          Search and filter the inspectable record. Prototype, research, and demo statuses are
          explicit.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.14em] ${
                  filter === item.id
                    ? "border-signal text-signal"
                    : "border-ink-line text-mist-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects"
            className="h-10 rounded-full border border-ink-line bg-transparent px-4 text-sm text-mist outline-none focus:border-signal"
          />
        </div>
        <div className="mt-10 grid gap-6">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
