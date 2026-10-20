"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;
    let width = 0;
    let height = 0;
    const pointer = { x: 0.62, y: 0.38 };
    const nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const seed = () => {
      nodes.length = 0;
      const count = Math.min(68, Math.floor((width * height) / 18000));
      for (let i = 0; i < count; i += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
        });
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const styles = getComputedStyle(document.documentElement);
      const cyan = styles.getPropertyValue("--cyan").trim() || "#45D6FF";
      const violet = styles.getPropertyValue("--violet").trim() || "#8B5CF6";

      nodes.forEach((node, index) => {
        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
          node.x += (pointer.x * width - node.x) * 0.0008;
          node.y += (pointer.y * height - node.y) * 0.0008;
        }

        for (let j = index + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            context.strokeStyle = cyan;
            context.globalAlpha = (1 - dist / 130) * 0.22;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        context.globalAlpha = 0.7;
        context.fillStyle = index % 5 === 0 ? violet : cyan;
        context.beginPath();
        context.arc(node.x, node.y, index % 7 === 0 ? 2.4 : 1.4, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
    };

    resize();
    seed();
    draw();
    window.addEventListener("resize", () => {
      resize();
      seed();
      if (reduceMotion) draw();
    });
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
