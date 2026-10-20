import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { awards, certifications } from "@/data/awards";

export function Awards() {
  return (
    <section id="awards" className="border-b border-ink-line py-24">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Recognition"
          title="Awards with sources, not trophies."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {awards.map((award) => (
            <article key={award.id} className="rounded-3xl border border-ink-line p-8">
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
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-ink-line p-5 hover:border-signal/40"
            >
              <p className="text-sm text-mist">{cert.title}</p>
              <p className="mt-2 text-xs text-mist-faint">{cert.note}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
