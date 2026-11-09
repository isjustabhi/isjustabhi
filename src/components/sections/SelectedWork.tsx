import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { selectedProjects, signatureProjects } from "@/data/projects";
import Link from "next/link";

export function SelectedWork() {
  const lab = selectedProjects.filter((project) => project.tier !== "signature");

  return (
    <section id="work" className="scroll-mt-24 py-4 sm:py-5">
      <Container panel>
        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="Two systems worth inspecting."
            description="Published pipeline and PersonaeAI synthetic survey research. Lab software follows."
          />
          <Link href="/projects" className="text-sm text-mist-muted underline-offset-4 hover:underline">
            Full archive
          </Link>
        </div>
        <div className="space-y-3">
          {signatureProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} variant="figure" />
          ))}
        </div>
        {lab.length ? (
          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.26em] text-mist-faint">In the lab</p>
            <div className="mt-4">
              {lab.map((project) => (
                <ProjectCard key={project.slug} project={project} variant="row" />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
