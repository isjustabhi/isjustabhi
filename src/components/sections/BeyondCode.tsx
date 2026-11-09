import { CourtField } from "@/components/beyond/CourtField";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { interests } from "@/data/interests";
import Link from "next/link";

export function BeyondCode() {
  const badminton = interests[0];

  return (
    <section id="beyond" className="scroll-mt-24 py-4 sm:py-5">
      <Container panel className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            index="08"
            eyebrow="Beyond the code"
            title="Sometimes I put the laptop away."
            description={badminton.line}
          />
          <div className="mt-8 space-y-5 text-[16px] leading-7 text-mist-muted">
            {badminton.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/beyond-code"
            className="mt-8 inline-block text-sm text-signal underline-offset-4 hover:underline"
          >
            The court, in full
          </Link>
        </div>
        <CourtField />
      </Container>
    </section>
  );
}
