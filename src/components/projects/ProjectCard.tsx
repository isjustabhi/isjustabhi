import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      id={project.slug}
      className={cn(
        "group overflow-hidden rounded-3xl border border-ink-line bg-ink-surface transition hover:border-signal/40",
        featured && "lg:grid lg:grid-cols-2",
      )}
    >
      <div className={cn("relative min-h-56 bg-ink-muted", featured && "min-h-72")}>
        <Image
          src={project.cover}
          alt={`${project.title} visual`}
          fill
          unoptimized
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-mist-faint">
          <span>{project.year}</span>
          <span>{project.status.replace("-", " ")}</span>
          {project.collaborative ? <span>Team</span> : <span>Individual</span>}
        </div>
        <h3 className="display mt-3 text-2xl text-mist">{project.title}</h3>
        <p className="mt-2 text-sm text-signal">{project.positioning}</p>
        <p className="mt-4 text-sm leading-relaxed text-mist-muted">{project.problem}</p>
        <p className="mt-3 text-sm leading-relaxed text-mist-muted">
          <span className="text-mist">Contribution. </span>
          {project.contribution}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink-line px-2.5 py-1 text-xs text-mist-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {project.caseStudy ? (
            <Link href={project.caseStudy} className="inline-flex items-center gap-1 text-signal">
              Case study <ArrowUpRight size={14} />
            </Link>
          ) : null}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-mist-muted hover:text-signal">
              GitHub
            </a>
          ) : (
            <span className="text-mist-faint">No public source</span>
          )}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-mist-muted hover:text-signal">
              Live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
