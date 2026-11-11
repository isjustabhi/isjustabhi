import { AskAbhiram } from "@/components/assistant/AskAbhiram";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

const links = [
  { label: "University email", href: `mailto:${profile.emails.university}` },
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Google Scholar", href: profile.links.scholar },
  { label: "ORCID", href: profile.links.orcid },
  { label: "Medium", href: profile.links.medium },
  { label: "UA Psychology", href: profile.links.university },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-4 sm:py-5">
      <Container panel>
        <p className="text-[11px] uppercase tracking-[0.28em] text-signal">10 · Contact</p>
        <h2 className="display mt-6 max-w-4xl text-5xl text-mist sm:text-7xl">
          Collaborations, roles, and a conversation.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-muted">
          Open to AI engineer, applied scientist, ML engineer, research engineer, and data scientist
          roles where systems meet real data and real users.
        </p>
        <a
          href={`mailto:${profile.emails.university}`}
          className="display mt-12 block break-all text-3xl text-mist transition-colors hover:text-signal sm:text-5xl"
        >
          {profile.emails.university}
        </a>
        <p className="mt-4 text-sm text-mist-muted">{profile.phone}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={profile.links.appointment} external>
            Book an appointment
          </Button>
          <Button href={profile.links.resume} variant="secondary" external>
            Download resume
          </Button>
          <Button href={profile.links.cv} variant="ghost" external>
            Download CV
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="border-b border-ink-line pb-1 text-mist-muted hover:text-mist"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-16">
          <AskAbhiram />
        </div>
      </Container>
    </section>
  );
}
