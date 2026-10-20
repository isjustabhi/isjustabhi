import { AskAbhiram } from "@/components/assistant/AskAbhiram";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

const links = [
  { label: "Email", href: `mailto:${profile.emails.professional}` },
  { label: "University email", href: `mailto:${profile.emails.university}` },
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Google Scholar", href: profile.links.scholar },
  { label: "ORCID", href: profile.links.orcid },
  { label: "UA Psychology", href: profile.links.university },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <p className="text-xs uppercase tracking-[0.22em] text-signal">08 · Contact</p>
        <h2 className="display mt-4 max-w-3xl text-4xl text-mist sm:text-6xl">
          Let&apos;s build something meaningful.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist-muted">
          I am interested in AI engineer, applied scientist, ML engineer, research engineer, and
          data scientist roles where the work has to survive contact with real data and real users.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-ink-line px-4 py-2 text-mist hover:border-signal hover:text-signal"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-mist-faint">
          Prefer email? {profile.emails.professional}. A contact form is not included because there
          is no submission backend configured.
        </p>
        <div className="mt-12">
          <AskAbhiram />
        </div>
      </Container>
    </section>
  );
}
