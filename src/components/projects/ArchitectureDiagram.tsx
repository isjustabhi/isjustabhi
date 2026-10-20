import type { ArchitectureNode } from "@/content/case-studies";

export function ArchitectureDiagram({
  caption,
  nodes,
  note,
}: {
  caption: string;
  nodes: ArchitectureNode[];
  note: string;
}) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-ink-line bg-ink-surface">
      <figcaption className="border-b border-ink-line px-5 py-4 text-sm text-mist-muted">
        {caption}
      </figcaption>
      <div className="grid gap-px bg-ink-line sm:grid-cols-5">
        {nodes.map((node, index) => (
          <div key={node.id} className="bg-ink-surface p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-signal">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 text-sm font-medium text-mist">{node.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-muted">{node.detail}</p>
          </div>
        ))}
      </div>
      <p className="px-5 py-3 text-xs text-mist-faint">{note}</p>
    </figure>
  );
}
