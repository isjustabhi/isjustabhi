const notices = [
  "Tucson · Scientific Analyst – Data, AI & Bioinformatics, LSCH",
  "PersonaeAI · AVA · LLM-HyPZ",
  "Writing as @isjustabhi",
  "Just Abhi. Building things, chasing ideas, and smashing shuttlecocks.",
];

export function StatusMarquee() {
  const items = [...notices, ...notices, ...notices, ...notices];

  return (
    <div className="overflow-hidden border-b border-blue-500/10 bg-blue-500/5 py-3">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {items.map((notice, index) => (
          <span
            key={`${notice}-${index}`}
            className="mx-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400 md:text-xs"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
            {notice}
          </span>
        ))}
      </div>
    </div>
  );
}
