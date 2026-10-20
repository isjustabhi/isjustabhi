import { Research } from "@/components/sections/Research";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Publications by Abhiram Varma Nandimandalam, including LLM-HyPZ and IEEE IConSCEPT 2024.",
};

export default function ResearchPage() {
  return (
    <div className="pt-16">
      <Container>
        <p className="text-xs uppercase tracking-[0.22em] text-signal">Publications</p>
        <h1 className="display mt-4 max-w-3xl text-4xl text-mist sm:text-6xl">
          Papers with DOIs, not slide titles.
        </h1>
      </Container>
      <Research />
    </div>
  );
}
