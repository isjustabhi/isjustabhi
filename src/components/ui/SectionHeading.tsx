"use client";

import { useIntroReady } from "@/components/ui/BuildIn";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

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
  const reduce = useReducedMotion();
  const ready = useIntroReady();
  const hidden = { opacity: 0, y: 24, filter: "blur(14px)", scale: 0.99 };
  const shown = { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 };

  return (
    <motion.div
      className={cn("max-w-3xl", className)}
      initial={reduce ? false : hidden}
      animate={!reduce && !ready ? hidden : undefined}
      whileInView={reduce || !ready ? undefined : shown}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mist-faint">
        {index ? <span className="text-signal">{index}</span> : null}
        {eyebrow ? <span>{eyebrow}</span> : null}
      </div>
      <h2 className="display text-[2.35rem] leading-[1.05] tracking-tight text-mist sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mist-muted">{description}</p>
      ) : null}
    </motion.div>
  );
}
