import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-8 sm:py-12">
      <Container panel className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading index="01" eyebrow="About" title="A little about me." />
        <div>
          <div className="space-y-6 text-[17px] leading-8 text-mist-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-mist-faint">{profile.headline}</p>
          <dl className="mt-10 grid gap-8 border-t border-ink-line pt-8 sm:grid-cols-2">
            {profile.education.map((item) => (
              <div key={item.degree}>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-mist-faint">
                  {item.period}
                </dt>
                <dd className="mt-2 text-mist">{item.degree}</dd>
                <dd className="mt-1 text-sm text-mist-muted">{item.institution}</dd>
                <dd className="mt-2 text-sm leading-relaxed text-mist-faint">{item.details}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
