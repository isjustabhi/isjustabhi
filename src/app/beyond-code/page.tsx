import { CourtField } from "@/components/beyond/CourtField";
import { Container } from "@/components/ui/Container";
import { interests } from "@/data/interests";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond the code",
  description: "Badminton and the rest of Abhi, off the laptop.",
  alternates: { canonical: "/beyond-code" },
};

export default function BeyondCodePage() {
  const badminton = interests[0];

  return (
    <div className="py-28">
      <Container panel>
        <p className="text-[11px] uppercase tracking-[0.28em] text-signal">Beyond the code</p>
        <h1 className="display mt-6 max-w-4xl text-5xl text-mist sm:text-7xl">
          Smash. Recover. Repeat.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-mist-muted">{badminton.line}</p>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-[17px] leading-8 text-mist-muted">
            {badminton.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Other interests can land here later. I am not going to invent a hobby list to look
              well-rounded.
            </p>
          </div>
          <CourtField />
        </div>
      </Container>
    </div>
  );
}
