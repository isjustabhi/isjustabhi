import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { Credibility } from "@/components/sections/Credibility";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { SelectedWork } from "@/components/sections/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Credibility />
      <About />
      <SelectedWork />
      <Experience />
      <Research />
      <Awards />
      <Expertise />
      <GitHubActivity />
      <Contact />
    </>
  );
}
