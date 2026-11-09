"use client";

import { isIntroComplete, INTRO_EVENT } from "@/lib/intro";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

export function useIntroReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      if (isIntroComplete()) setReady(true);
    };
    sync();
    window.addEventListener(INTRO_EVENT, sync);
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-intro"],
    });
    return () => {
      window.removeEventListener(INTRO_EVENT, sync);
      observer.disconnect();
    };
  }, []);

  return ready;
}

export function BuildIn({
  children,
  className,
  delay = 0,
  amount = 0.22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const ready = useIntroReady();
  const hidden = { opacity: 0, y: 28, filter: "blur(16px)", scale: 0.985 };
  const shown = { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 };

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : hidden}
      animate={!reduce && !ready ? hidden : undefined}
      whileInView={reduce || !ready ? undefined : shown}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
