import { Container } from "@/components/ui/Container";

const items = [
  {
    label: "University of Arizona",
    detail: "Scientific Analyst, Department of Psychology / LSCH",
  },
  {
    label: "IEEE ICDM 2025 Workshops",
    detail: "LLM-HyPZ, third author, hardware CVE mining",
  },
  {
    label: "Distinguished Graduate Scholar",
    detail: "College of Information Science, Spring 2026",
  },
  {
    label: "Co-Lab Award",
    detail: "Graduate capstone, iShowcase Spring 2026, team-reported",
  },
];

export function Credibility() {
  return (
    <section className="border-b border-ink-line py-10">
      <Container>
        <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-mist-faint">
          Selected public record · not an institutional endorsement
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label}>
              <p className="text-sm font-medium text-mist">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
