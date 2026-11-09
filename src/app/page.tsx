import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Writing } from "@/components/sections/Writing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Writing />
      <Research />
      <Expertise />
      <Awards />
      <Experience />
      <BeyondCode />
      <GitHubActivity />
      <Contact />
    </>
  );
}
