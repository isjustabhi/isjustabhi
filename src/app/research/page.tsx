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
    <div className="pt-28">
      <Container panel>
        <p className="text-[11px] uppercase tracking-[0.28em] text-signal">Publications</p>
        <h1 className="display mt-6 max-w-3xl text-5xl text-mist sm:text-7xl">
          Papers with DOIs, not slide titles.
        </h1>
      </Container>
      <Research />
    </div>
  );
}
