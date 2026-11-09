"use client";

import { isIntroComplete, markIntroDone } from "@/lib/intro";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function CinematicIntro() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(true);
  const [progress, setProgress] = useState(0.5);
  const [holding, setHolding] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const holdingRef = useRef(false);
  const enteredRef = useRef(false);

  const enter = useCallback(() => {
    if (enteredRef.current) return;
    enteredRef.current = true;
    markIntroDone();
    setActive(false);
  }, []);

  useEffect(() => {
    if (isIntroComplete() || reduce) {
      enteredRef.current = true;
      markIntroDone();
      setActive(false);
      return;
    }

    document.documentElement.dataset.intro = "playing";

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!holdingRef.current) {
        setProgress((value) => Math.min(100, value + dt / 80));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        holdingRef.current = true;
        setHolding(true);
      }
      if (event.key === "Enter" || event.key === "a" || event.key === "A") {
        event.preventDefault();
        enter();
      }
      if (event.key === "Escape") enter();
    };
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        holdingRef.current = false;
        setHolding(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [enter, reduce]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let particles: Particle[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(110, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.4,
      }));
    };

    const draw = () => {
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, width, height);
      const speed = holdingRef.current ? 0.35 : 1;

      for (const particle of particles) {
        particle.x += particle.vx * speed;
        particle.y += particle.vy * speed;
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
      }

      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.16 * (1 - dist / 110)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const particle of particles) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(191, 219, 254, 0.85)";
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) draw();
    else {
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, width, height);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active, reduce]);

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          key="intro"
          className="cinematic-intro fixed inset-0 z-[99999] min-h-[100dvh] overflow-hidden bg-[#0a0f18]"
          style={{ height: "100dvh" }}
          role="dialog"
          aria-modal="true"
          aria-label="Cinematic intro. Click A or press Enter to enter. Hold Space to keep playing."
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(18px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="text-[11px] font-medium uppercase tracking-[0.42em] text-white/50"
              initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              2026 Portfolio
            </motion.p>
            <motion.button
              type="button"
              onClick={enter}
              aria-label="Enter the site"
              className={`mt-6 text-[clamp(4.5rem,18vw,11rem)] font-bold leading-none tracking-tight text-white transition hover:scale-[1.03] ${
                progress >= 100 ? "animate-pulse" : ""
              }`}
              initial={{ opacity: 0, scale: 1.12, filter: "blur(28px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.15, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              A
            </motion.button>
            <motion.p
              className="mt-4 text-lg font-semibold tracking-tight text-white/80"
              initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              isjustabhi
            </motion.p>
            <motion.p
              className="mt-8 text-[10px] font-medium uppercase tracking-[0.28em] text-white/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Click A or press Enter
            </motion.p>
          </div>
          <div
            className={`pointer-events-none fixed left-1/2 top-8 z-[99999] -translate-x-1/2 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-xl transition ${
              holding
                ? "border-white/30 bg-white/15 text-white"
                : "border-white/10 bg-white/5 text-white/70"
            }`}
          >
            Hold Space to keep playing
          </div>
          <button
            type="button"
            className="fixed bottom-24 left-1/2 z-[100000] -translate-x-1/2 rounded-full border border-white/12 bg-white/[0.03] px-8 py-3 text-sm font-bold text-white shadow-2xl backdrop-blur-3xl transition hover:bg-white/[0.08] active:scale-95"
            onClick={enter}
          >
            SKIP INTRO
          </button>
          <p className="pointer-events-none fixed bottom-8 left-1/2 z-[99999] -translate-x-1/2 text-xs font-medium text-white/80">
            {Math.round(progress)}%
          </p>
          <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-[99999] h-2 bg-black/40">
            <div
              className="progress-glow h-full transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
