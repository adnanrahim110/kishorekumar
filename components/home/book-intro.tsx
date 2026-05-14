"use client";

import { StackCard } from "@/components/layouts/stack-card";
import { BookCard } from "@/components/ui/book-card";
import { Button } from "@/components/ui/button";
import { revealProps } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const bookMeta = [
  { label: "Genre", value: "Romantic Thriller" },
  { label: "Theme", value: "AI & Humanity" },
  { label: "Status", value: "Bestseller" },
];

export function BookIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".intro-grid-field", {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.35,
          },
        });

        gsap.to(".intro-book-stage", {
          yPercent: -3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const reveal = (delay = 0) =>
    revealProps(shouldReduceMotion, { delay, duration: 0.68, y: 28 });

  return (
    <StackCard
      id="story"
      ref={sectionRef}
      variant="dark"
      aria-labelledby="story-heading"
      className="px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="intro-grid-field pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-size-[64px_64px] opacity-55 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-linear-to-b from-primary-500/18 via-secondary-950/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-secondary-950 via-secondary-950/80 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-[9%] z-0 -translate-x-1/2 select-none font-heading text-[18vw] font-black leading-none tracking-wide text-white/2.5">
        STORY
      </div>
      <div className="intro-ambient-line pointer-events-none absolute left-0 top-1/3 h-px w-1/2 bg-linear-to-r from-transparent via-primary-400/45 to-transparent" />
      <div className="intro-ambient-line pointer-events-none absolute right-0 top-2/3 h-px w-1/2 bg-linear-to-l from-transparent via-secondary-300/30 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          {...reveal()}
          className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 sm:mb-20 md:flex-row md:items-end lg:mb-24"
        >
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-primary-400 sm:text-sm">
              01 // The Premise
            </p>
            <h2
              id="story-heading"
              className="max-w-4xl font-heading text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              A Collision of Logic and Emotion.
            </h2>
          </div>

          <div className="shrink-0 rounded-full border border-white/10 bg-white/6 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-secondary-200 backdrop-blur-md">
            Featured Work
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <motion.div {...reveal(0.08)}>
              <h3 className="max-w-3xl font-heading text-4xl font-black leading-[1.06] tracking-tight text-secondary-50 sm:text-5xl lg:text-6xl">
                Where does code end and{" "}
                <span className="font-medium italic text-primary-400">
                  consciousness
                </span>{" "}
                begin?
              </h3>
            </motion.div>

            <motion.div
              {...reveal(0.14)}
              className="h-px w-24 bg-primary-400/60"
            />

            <motion.p
              {...reveal(0.18)}
              className="max-w-3xl text-lg font-light leading-relaxed text-secondary-200 sm:text-xl lg:text-2xl"
            >
              Dive into a provocative narrative that questions the very nature
              of human connection. When an artificial mind develops genuine
              emotion, it forces humanity to look in the mirror. Are we just
              biological algorithms, or is there a soul in the machine?
            </motion.p>

            <motion.div
              {...reveal(0.22)}
              className="grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3"
            >
              {bookMeta.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 bg-secondary-950/70 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.24em] text-secondary-400">
                    {item.label}
                  </h4>
                  <p className="text-base font-semibold text-white sm:text-lg">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...reveal(0.26)}
              className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center"
            >
              <Button
                href="/book"
                variant="outline"
                tone="soft"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="w-full border-white/15 bg-white text-secondary-950 shadow-[0_18px_55px_rgba(255,255,255,0.14)] sm:w-auto"
              >
                Read the Full Synopsis
              </Button>
            </motion.div>
          </div>

          <motion.div
            {...reveal(0.16)}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="intro-book-stage relative w-full max-w-124">
              <div className="relative aspect-3/4 overflow-hidden rounded-4xl border border-white/10 bg-white/4.5 p-5 shadow-[0_34px_120px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 lg:p-10">
                <div className="intro-book-halo pointer-events-none absolute inset-6 rounded-3xl bg-linear-to-br from-primary-500/24 via-white/[0.035] to-secondary-500/12 blur-sm" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/8 via-transparent to-primary-900/20" />

                <div className="absolute left-5 top-5 h-10 w-10 rounded-tl-2xl border-l border-t border-primary-400/40 sm:left-7 sm:top-7" />
                <div className="absolute bottom-5 right-5 h-10 w-10 rounded-br-2xl border-b border-r border-primary-400/40 sm:bottom-7 sm:right-7" />

                <div className="relative z-10 flex h-full items-center justify-center pt-8 sm:pt-4">
                  <div className="intro-book-float aspect-[0.67/1] w-[82%] will-change-transform">
                    <BookCard
                      src="/imgs/book-front.jpg"
                      alt="Synthetic Heart Book Cover"
                      rotate={0}
                      className="h-full w-full border-[5px] border-white/10 shadow-[0_42px_90px_-24px_rgba(0,0,0,0.9)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </StackCard>
  );
}
