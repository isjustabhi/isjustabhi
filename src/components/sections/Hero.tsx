"use client";

import { BrandMark } from "@/components/layout/BrandMark";
import { HeroField } from "@/components/layout/HeroField";
import { useIntroReady } from "@/components/ui/BuildIn";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { build, staggerBuild } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function Hero() {
  const reduce = useReducedMotion();
  const ready = useIntroReady();
  const play = Boolean(reduce) || ready;

  return (
    <section id="home" className="relative min-h-[88dvh] overflow-hidden bg-[#000510] text-white sm:min-h-[92dvh]">
      <HeroField />

      {/* Floating mark — matches reference top-left A */}
      <div className="absolute left-5 top-6 z-20 sm:left-8 sm:top-8 md:left-10 md:top-10">
        <Link
          href="/"
          className="inline-flex text-white focus-ring rounded-md"
          aria-label="isjustabhi home"
        >
          <BrandMark size={42} />
        </Link>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[88dvh] w-full max-w-site flex-col justify-center px-5 pb-14 pt-24 sm:min-h-[92dvh] sm:px-8 lg:px-10">
        <motion.div
          variants={reduce ? undefined : staggerBuild}
          initial={reduce ? undefined : "hidden"}
          animate={play && !reduce ? "show" : reduce ? undefined : "hidden"}
          className="max-w-3xl"
        >
          <motion.h1
            variants={build}
            className="font-sans text-[clamp(4.8rem,18vw,11rem)] font-bold leading-[0.85] tracking-[-0.06em] text-white"
          >
            Abhi<span className="text-white">.</span>
          </motion.h1>
          <motion.p
            variants={build}
            className="mt-7 max-w-md text-base leading-relaxed text-white/70 sm:mt-8 sm:text-lg"
          >
            {profile.heroLine}
          </motion.p>
          <motion.div variants={build} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#work">See the work</Button>
            <Button
              href={profile.links.resume}
              variant="secondary"
              external
              className="border-white/15 bg-white/5 text-white hover:border-white/30"
            >
              Resume
            </Button>
            <Button href="/beyond-code" variant="ghost" className="text-white/70 hover:text-white">
              Beyond the code
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile-safe scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35">
        scroll
      </div>
    </section>
  );
}
