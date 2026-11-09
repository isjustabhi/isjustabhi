import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container panel className="mt-28 flex min-h-[60vh] flex-col justify-center">
      <p className="text-[11px] uppercase tracking-[0.28em] text-signal">Out of bounds</p>
      <h1 className="display mt-6 max-w-2xl text-6xl text-mist sm:text-7xl">
        The shuttle landed off the court.
      </h1>
      <p className="mt-5 max-w-lg text-mist-muted">
        This path isn&apos;t on isjustabhi.com. Serve again from home, or pick up a project, a
        paper, or a Medium note.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/">Home</Button>
        <Button href="/projects" variant="ghost">
          Work
        </Button>
        <Button href="/writing" variant="ghost">
          Writing
        </Button>
        <Button href="/beyond-code" variant="ghost">
          Beyond
        </Button>
      </div>
    </Container>
  );
}
