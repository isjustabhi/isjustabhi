import { BuildIn } from "@/components/ui/BuildIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-8 sm:py-12">
      <Container panel>
        <SectionHeading
          index="07"
          eyebrow="Experience"
          title="Official titles, then the work underneath."
          description="Reconciled from the latest CV and resume. Self-reported metrics stay attributed."
        />
        <div className="mt-12">
          {experience.map((item) => (
            <BuildIn key={item.id}>
              <article className="interactive-row grid gap-6 border-t border-ink-line py-10 lg:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-sm text-signal">
                    {item.start} — {item.end}
                  </p>
                  <p className="mt-2 text-sm text-mist-muted">{item.location}</p>
                  {item.supervisor ? (
                    <p className="mt-4 text-xs leading-relaxed text-mist-faint">{item.supervisor}</p>
                  ) : null}
                </div>
                <div>
                  <h3 className="text-xl text-mist">{item.role}</h3>
                  <p className="mt-1 text-sm text-mist-muted">{item.organization}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist-muted">
                    {item.summary}
                  </p>
                  <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-mist-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {item.metrics ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {item.metrics.map((metric) => (
                        <div key={metric.label} className="border border-ink-line p-4">
                          <p className="text-lg text-mist">{metric.value}</p>
                          <p className="text-xs uppercase tracking-[0.16em] text-mist-faint">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-xs text-mist-faint">{metric.attribution}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {item.officialNote ? (
                    <p className="mt-4 text-xs text-mist-faint">{item.officialNote}</p>
                  ) : null}
                </div>
              </article>
            </BuildIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
