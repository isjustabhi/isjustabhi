"use client";

import { NeuralField } from "@/components/canvas/NeuralField";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { fadeUp, stagger } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-ink-line">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <NeuralField />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/55 to-ink" />
      </div>
      <Container className="relative grid min-h-[88vh] items-end pb-20 pt-28 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          variants={reduce ? undefined : stagger}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.28em] text-signal"
          >
            {profile.officialTitle} · LSCH · University of Arizona
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="display mt-6 max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight text-mist sm:text-7xl lg:text-[5.6rem]"
          >
            ABHIRAM
            <br />
            VARMA
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-xl leading-snug text-mist sm:text-2xl"
          >
            {profile.heroLine}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-mist-muted"
          >
            {profile.supporting}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
            {profile.identityLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-ink-line px-3 py-1 text-xs uppercase tracking-[0.16em] text-mist-muted"
              >
                {label}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Button href="#work">Explore My Work</Button>
            <Button href="#research" variant="secondary">
              View Research
            </Button>
            <Button href={profile.links.github} variant="ghost" external>
              GitHub
            </Button>
            <Button href={profile.links.linkedin} variant="ghost" external>
              LinkedIn
            </Button>
            <Button href={`mailto:${profile.emails.professional}`} variant="ghost" external>
              Contact
            </Button>
          </motion.div>
        </motion.div>
        <div className="mt-12 hidden max-w-sm justify-self-end rounded-3xl border border-ink-line bg-ink-surface/80 p-6 backdrop-blur lg:block">
          <p className="text-xs uppercase tracking-[0.2em] text-mist-faint">Now</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Scientific Analyst in the Laboratory for Social Connectedness & Health, building
            AI methods and research infrastructure under David A. Sbarra.
          </p>
          <p className="mt-4 text-sm text-mist-muted">
            IEEE ICDM 2025 Workshops · Distinguished Graduate Scholar, Spring 2026
          </p>
        </div>
      </Container>
    </section>
  );
}
