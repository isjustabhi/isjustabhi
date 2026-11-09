"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let t = 0;

    type Spark = { x: number; y: number; r: number; s: number; a: number };
    let sparks: Spark[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sparks = Array.from({ length: Math.min(48, Math.floor(width / 28)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.4,
        s: Math.random() * 0.25 + 0.05,
        a: Math.random() * 0.45 + 0.15,
      }));
    };

    const draw = () => {
      t += 0.004;
      ctx.clearRect(0, 0, width, height);

      for (const spark of sparks) {
        spark.y -= spark.s;
        if (spark.y < -8) {
          spark.y = height + 8;
          spark.x = Math.random() * width;
        }
        const pulse = 0.55 + Math.sin(t * 4 + spark.x) * 0.35;
        ctx.beginPath();
        ctx.fillStyle = `rgba(147, 197, 253, ${spark.a * pulse})`;
        ctx.arc(spark.x, spark.y, spark.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = "rgba(96, 165, 250, 0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < sparks.length; i += 1) {
        for (let j = i + 1; j < sparks.length; j += 1) {
          const a = sparks[i];
          const b = sparks[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.globalAlpha = 1 - dist / 130;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src="/images/hero/field.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-80 dark:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--bg)_78%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full mix-blend-screen opacity-70" />
    </div>
  );
}
