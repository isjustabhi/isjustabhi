"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  r: number;
};

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let nodes: Node[] = [];
    let pointer = { x: -9999, y: -9999 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = mobile
        ? Math.min(42, Math.floor((width * height) / 22000))
        : Math.min(90, Math.floor((width * height) / 16000));

      nodes = Array.from({ length: count }, () => {
        const bias = mobile ? Math.random() : 0.42 + Math.random() * 0.58;
        return {
          x: bias * width,
          y: Math.random() * height,
          z: Math.random(),
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.8 + 0.6,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // soft nebula on the right
      const nebulaX = mobile ? width * 0.5 : width * 0.72;
      const glow = ctx.createRadialGradient(nebulaX, height * 0.42, 0, nebulaX, height * 0.42, width * 0.45);
      glow.addColorStop(0, "rgba(30, 144, 255, 0.22)");
      glow.addColorStop(0.45, "rgba(14, 70, 160, 0.1)");
      glow.addColorStop(1, "rgba(0, 5, 16, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const linkDist = mobile ? 100 : 140;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < width * (mobile ? 0 : 0.28) || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const dx = node.x - pointer.x;
        const dy = node.y - pointer.y;
        const d = Math.hypot(dx, dy);
        if (d < 160) {
          node.x += (dx / (d || 1)) * 0.35;
          node.y += (dy / (d || 1)) * 0.35;
        }
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.55;
            ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const radius = node.r * (0.7 + node.z * 0.8);
        ctx.beginPath();
        ctx.fillStyle = `rgba(226, 242, 255, ${0.55 + node.z * 0.45})`;
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `rgba(56, 189, 248, ${0.12 + node.z * 0.2})`;
        ctx.arc(node.x, node.y, radius * 3.2, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    if (reduce) {
      // still draw one static frame
      draw();
      cancelAnimationFrame(raf);
    } else {
      draw();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#000510]" />
      <Image
        src="/images/hero/constellation.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right opacity-55 md:opacity-70 md:object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000510] via-[#000510]/80 to-transparent md:via-[#000510]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000510] via-transparent to-[#000510]/40" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
