import { BuildIn } from "@/components/ui/BuildIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { awards, certifications } from "@/data/awards";

export function Awards() {
  return (
    <section id="awards" className="scroll-mt-24 py-8 sm:py-12">
      <Container panel>
        <SectionHeading
          index="06"
          eyebrow="Recognition"
          title="Awards with sources, not trophies."
        />
        <div className="mt-12">
          {awards.map((award) => (
            <BuildIn key={award.id}>
            <article className="border-t border-ink-line py-8">
              <p className="text-xs uppercase tracking-[0.2em] text-signal">{award.year}</p>
              <h3 className="display mt-3 text-2xl text-mist">{award.title}</h3>
              <p className="mt-2 text-sm text-mist-muted">{award.org}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist-muted">{award.description}</p>
              <a
                href={award.href}
                className="mt-5 inline-block text-sm text-signal"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </article>
            </BuildIn>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <BuildIn key={cert.id}>
            <a
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              className="block border-t border-ink-line py-5 hover:text-signal"
            >
              <p className="text-sm text-mist">{cert.title}</p>
              <p className="mt-2 text-xs text-mist-faint">{cert.note}</p>
            </a>
            </BuildIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
