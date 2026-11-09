"use client";

import { useEffect, useRef, useState } from "react";

export function CourtField() {
  const area = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 72, y: 48 });
  const [smashes, setSmashes] = useState(0);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setFine(media.matches && !motion.matches);
    sync();
    media.addEventListener("change", sync);
    motion.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div
      ref={area}
      className="court-field relative min-h-[280px] overflow-hidden rounded-3xl border border-ink-line bg-ink-muted/40"
      onPointerMove={(event) => {
        if (!fine) return;
        const box = area.current?.getBoundingClientRect();
        if (!box) return;
        setPos({ x: event.clientX - box.left, y: event.clientY - box.top });
      }}
      onClick={() => setSmashes((value) => value + 1)}
    >
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width="100%" height="100%" fill="transparent" />
        <line x1="8%" y1="12%" x2="92%" y2="12%" stroke="currentColor" className="text-ink-line" />
        <line x1="8%" y1="88%" x2="92%" y2="88%" stroke="currentColor" className="text-ink-line" />
        <line x1="8%" y1="12%" x2="8%" y2="88%" stroke="currentColor" className="text-ink-line" />
        <line x1="92%" y1="12%" x2="92%" y2="88%" stroke="currentColor" className="text-ink-line" />
        <line x1="50%" y1="12%" x2="50%" y2="88%" stroke="currentColor" className="text-signal" />
        <line x1="8%" y1="50%" x2="92%" y2="50%" stroke="currentColor" className="text-ink-line" />
      </svg>
      <span
        className="pointer-events-none absolute h-3 w-3 rounded-full bg-mist shadow-[0_0_0_6px_color-mix(in_srgb,var(--cyan)_18%,transparent)]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: fine ? 1 : 0,
        }}
        aria-hidden="true"
      />
      <p className="relative z-10 max-w-sm p-6 text-sm text-mist-muted">
        {smashes >= 5
          ? "15–love. Still not a ranking — just a shuttle and a grin."
          : "Move across the court. Tap the lines a few times if you want the easter egg."}
      </p>
    </div>
  );
}
