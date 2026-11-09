import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { caseStudies } from "@/content/case-studies";
import { getProject } from "@/data/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.positioning,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const study = caseStudies[slug];
  if (!project || !study) notFound();

  return (
    <article className="pb-16">
      <div className="py-28">
        <Container panel>
          <ProjectCover
            src={project.cover}
            alt={`${project.title} visual`}
            priority
            className="mb-10 aspect-[16/9]"
          />
          <p className="text-[11px] uppercase tracking-[0.28em] text-signal">{study.eyebrow}</p>
          <h1 className="display mt-8 max-w-5xl text-5xl leading-[0.95] text-mist sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-snug text-mist-muted">{project.positioning}</p>
        </Container>
      </div>
      <Container panel className="mb-12 mt-4 grid gap-16 lg:grid-cols-[220px_1fr]">
        <aside className="space-y-5 text-sm text-mist-muted lg:sticky lg:top-28 lg:self-start">
          <p>{study.classification}</p>
          {project.github ? (
            <Button href={project.github} variant="secondary" external>
              GitHub
            </Button>
          ) : null}
          {project.demo ? (
            <Button href={project.demo} variant="ghost" external>
              Paper / demo
            </Button>
          ) : null}
        </aside>
        <div className="space-y-16">
          <Section title="Problem" body={study.problem} />
          <Section title="Context and constraints" body={study.context} />
          <Section title="My specific role" body={study.role} />
          <div>
            <h2 className="display text-3xl text-mist">System architecture</h2>
            <div className="mt-6">
              <ArchitectureDiagram
                caption={study.architecture.caption}
                nodes={study.architecture.nodes}
                note={study.architecture.note}
              />
            </div>
          </div>
          <div>
            <h2 className="display text-3xl text-mist">Technologies</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span key={tech} className="border border-ink-line px-3 py-1 text-sm text-mist-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <Pair title="Engineering decisions" items={study.decisions} />
          <Pair title="Challenges and trade-offs" items={study.challenges} />
          <Pair title="Results and evidence" items={study.results} />
          <div>
            <h2 className="display text-3xl text-mist">What I learned</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-mist-muted">
              {study.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl text-mist">Potential improvements</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-mist-muted">
              {study.improvements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {project.disclaimer ? (
            <p className="border-t border-ink-line pt-6 text-sm text-mist-muted">{project.disclaimer}</p>
          ) : null}
        </div>
      </Container>
    </article>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="display text-3xl text-mist">{title}</h2>
      <p className="mt-5 max-w-3xl text-[17px] leading-8 text-mist-muted">{body}</p>
    </section>
  );
}

function Pair({
  title,
  items,
}: {
  title: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section>
      <h2 className="display text-3xl text-mist">{title}</h2>
      <div className="mt-6">
        {items.map((item) => (
          <div key={item.title} className="border-t border-ink-line py-6">
            <h3 className="text-mist">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
