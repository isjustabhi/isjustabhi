import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-b border-ink-line py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Research methods, then systems people can run."
        />
        <div className="space-y-5 text-lg leading-relaxed text-mist-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
