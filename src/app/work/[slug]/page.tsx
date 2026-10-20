import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/content/case-studies";
import { getProject } from "@/data/projects";
import type { Metadata } from "next";
import Image from "next/image";
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
    <article className="pb-24">
      <div className="relative h-[42vh] min-h-72 overflow-hidden border-b border-ink-line">
        <Image
          src={project.cover}
          alt={`${project.title} visual`}
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 pb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-signal">{study.eyebrow}</p>
          <h1 className="display mt-3 max-w-4xl text-4xl text-mist sm:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-mist-muted">{project.positioning}</p>
        </Container>
      </div>
      <Container className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="space-y-4 text-sm text-mist-muted lg:sticky lg:top-24 lg:self-start">
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
        <div className="space-y-12">
          <Section title="Problem" body={study.problem} />
          <Section title="Context and constraints" body={study.context} />
          <Section title="My specific role" body={study.role} />
          <div>
            <h2 className="display text-2xl text-mist">System architecture</h2>
            <div className="mt-5">
              <ArchitectureDiagram
                caption={study.architecture.caption}
                nodes={study.architecture.nodes}
                note={study.architecture.note}
              />
            </div>
          </div>
          <div>
            <h2 className="display text-2xl text-mist">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-ink-line px-3 py-1 text-sm text-mist-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <Pair title="Engineering decisions" items={study.decisions} />
          <Pair title="Challenges and trade-offs" items={study.challenges} />
          <Pair title="Results and evidence" items={study.results} />
          <div>
            <h2 className="display text-2xl text-mist">What I learned</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-mist-muted">
              {study.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-2xl text-mist">Potential improvements</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-mist-muted">
              {study.improvements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {project.disclaimer ? (
            <p className="rounded-2xl border border-ink-line p-5 text-sm text-mist-muted">
              {project.disclaimer}
            </p>
          ) : null}
        </div>
      </Container>
    </article>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="display text-2xl text-mist">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-mist-muted">{body}</p>
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
      <h2 className="display text-2xl text-mist">{title}</h2>
      <div className="mt-5 grid gap-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-ink-line p-5">
            <h3 className="text-mist">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
