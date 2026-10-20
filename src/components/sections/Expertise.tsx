import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-ink-line py-24">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Expertise"
          title="Capability, shown through evidence."
          description="No percentage bars. Each item points to a paper, repository, or verified role."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.id} className="rounded-3xl border border-ink-line p-6">
              <h3 className="text-lg text-mist">{group.title}</h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm text-signal">{item.name}</p>
                    <p className="mt-1 text-sm text-mist-muted">{item.evidence}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
