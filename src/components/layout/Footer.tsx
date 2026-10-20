import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-ink-line py-10">
      <Container className="flex flex-col gap-4 text-sm text-mist-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.fullName}
          <span className="mx-2 text-mist-faint">·</span>
          Scientific Analyst, LSCH
        </p>
        <p className="text-mist-faint">
          Built as a custom Next.js portfolio. No university endorsement implied.
        </p>
      </Container>
    </footer>
  );
}
