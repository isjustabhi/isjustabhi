import { BuildIn } from "@/components/ui/BuildIn";
import { ProjectCover } from "@/components/ui/ProjectCover";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectCard({
  project,
  index,
  variant = "row",
}: {
  project: Project;
  featured?: boolean;
  index?: number;
  variant?: "figure" | "row";
}) {
  const number = index !== undefined ? String(index + 1).padStart(2, "0") : String(project.year);
  const figure = variant === "figure";

  return (
    <BuildIn delay={index ? Math.min(index * 0.08, 0.32) : 0}>
      <article
        id={project.slug}
        className={
          figure
            ? "group overflow-hidden rounded-[28px] border border-ink-line bg-ink-elevated/40 backdrop-blur-md"
            : "interactive-row grid gap-4 border-t border-ink-line py-6 sm:grid-cols-[88px_1fr_auto] sm:gap-10"
        }
      >
        {figure ? (
          <>
            <ProjectCover
              src={project.cover}
              alt={`${project.title} visual`}
              priority={index === 0}
              className="aspect-[21/9] rounded-none border-0 border-b border-ink-line sm:aspect-[16/7]"
            />
            <div className="grid gap-5 p-5 sm:gap-6 sm:p-7 lg:grid-cols-[72px_1fr_auto]">
              <p className="display text-4xl text-mist-faint sm:text-5xl">{number}</p>
              <div>
                <h3 className="display text-4xl text-mist sm:text-6xl">{project.title}</h3>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-muted">
                  {project.positioning}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-mist-faint">
                  {project.year} · {project.status.replace("-", " ")} ·{" "}
                  {project.collaborative ? "Team" : "Individual"}
                </p>
                <p className="mt-5 max-w-2xl text-sm text-mist-muted">
                  {project.tech.slice(0, 5).join("  ·  ")}
                </p>
              </div>
              <div className="flex flex-wrap items-start gap-x-5 gap-y-2 text-sm sm:flex-col sm:items-end sm:pt-2 sm:text-right">
                {project.caseStudy ? (
                  <Link href={project.caseStudy} className="inline-flex items-center gap-1 text-signal">
                    Case study <ArrowUpRight size={14} />
                  </Link>
                ) : null}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist-muted hover:text-mist"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="text-mist-faint">Private</span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist-muted hover:text-mist"
                  >
                    Live
                  </a>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="pt-1 text-sm text-mist-faint">{number}</p>
            <div className="grid gap-4 sm:grid-cols-[140px_1fr] sm:items-start">
              <ProjectCover
                src={project.cover}
                alt=""
                className="aspect-[4/3] hidden sm:block"
              />
              <div>
                <h3 className="display text-2xl text-mist sm:text-3xl">{project.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist-muted">
                  {project.positioning}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-mist-faint">
                  {project.year} · {project.status.replace("-", " ")} ·{" "}
                  {project.collaborative ? "Team" : "Individual"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-start gap-x-5 gap-y-2 text-sm sm:flex-col sm:items-end sm:pt-2 sm:text-right">
              {project.caseStudy ? (
                <Link href={project.caseStudy} className="inline-flex items-center gap-1 text-signal">
                  Case study <ArrowUpRight size={14} />
                </Link>
              ) : null}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-mist-muted hover:text-mist"
                >
                  GitHub
                </a>
              ) : (
                <span className="text-mist-faint">Private</span>
              )}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-mist-muted hover:text-mist"
                >
                  Live
                </a>
              ) : null}
            </div>
          </>
        )}
      </article>
    </BuildIn>
  );
}
