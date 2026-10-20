import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { selectedProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-ink-line py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="Six projects that show engineering judgment."
            description="Signature research, a judged capstone, and public repositories with inspectable architecture. Live demos are labeled as prototypes when that is what they are."
          />
          <Button href="/projects" variant="secondary">
            Project archive
          </Button>
        </div>
        <div className="grid gap-8">
          {selectedProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index < 3}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
