import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-signal">404</p>
      <h1 className="display mt-4 max-w-xl text-5xl text-mist">This path is not in the record.</h1>
      <p className="mt-4 max-w-lg text-mist-muted">
        The page does not exist. Return to selected work, research, or the project archive.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Home</Button>
        <Button href="/projects" variant="secondary">
          Archive
        </Button>
      </div>
    </Container>
  );
}
