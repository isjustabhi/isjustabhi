import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-mist-muted">
        {index ? <span className="text-signal">{index}</span> : null}
        {eyebrow ? <span>{eyebrow}</span> : null}
      </div>
      <h2 className="display text-3xl font-medium tracking-tight text-mist sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
