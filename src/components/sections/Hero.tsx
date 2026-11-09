"use client";

import { HeroField } from "@/components/layout/HeroField";
import { useIntroReady } from "@/components/ui/BuildIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { build, staggerBuild } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();
  const ready = useIntroReady();
  const play = Boolean(reduce) || ready;

  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden">
      <HeroField />
      <Container className="relative flex min-h-[100dvh] flex-col justify-end pb-20 pt-32 sm:justify-center sm:pb-24">
        <motion.div
          variants={reduce ? undefined : staggerBuild}
          initial={reduce ? undefined : "hidden"}
          animate={play && !reduce ? "show" : reduce ? undefined : "hidden"}
          className="max-w-4xl"
        >
          <motion.p
            variants={build}
            className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blue-400"
          >
            isjustabhi · 2026
          </motion.p>
          <motion.h1 variants={build} className="display hero-name mt-7 text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
            Abhi.
          </motion.h1>
          <motion.p
            variants={build}
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-200/90 sm:text-xl"
          >
            {profile.heroLine}
          </motion.p>
          <motion.div variants={build} className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#work">See the work</Button>
            <Button href={profile.links.resume} variant="secondary" external>
              Resume
            </Button>
            <Button href="/beyond-code" variant="ghost" className="text-zinc-200 hover:text-white">
              Beyond the code
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
