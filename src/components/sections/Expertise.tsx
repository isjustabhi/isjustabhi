import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 py-8 sm:py-12">
      <Container panel>
        <SectionHeading
          index="05"
          eyebrow="Expertise"
          title="Capability, shown through evidence."
          description="No percentage bars. Each item points to a paper, repository, or verified role from the latest resume."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.id} className="border-t border-ink-line pt-6">
              <h3 className="display text-2xl text-mist">{group.title}</h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm font-medium text-signal">{item.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-mist-muted">{item.evidence}</p>
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
