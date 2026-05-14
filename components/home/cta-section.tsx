"use client";

import { StackCard } from "@/components/layouts/stack-card";
import { BookCard } from "@/components/ui/book-card";
import { Button } from "@/components/ui/button";
import { premiumEase, revealProps } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, BookOpen, HeartPulse, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ctaDetails = [
  { label: "Genre", value: "Romantic Thriller" },
  { label: "Pulse", value: "AI and Humanity" },
  { label: "Status", value: "Available Now" },
];

type CtaDetail = {
  label: string;
  value: string;
};

type CtaAction = {
  href: string;
  label: string;
};

type CtaSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  details?: CtaDetail[];
  primaryAction?: CtaAction;
  secondaryAction?: CtaAction;
  backdropText?: string;
  bookAlt?: string;
};

export function CtaSection({
  id = "buy",
  eyebrow = "Final Chapter",
  title = "Hold the story before it rewrites you.",
  description = "Step into Synthetic Heart, where love, memory, and machine logic collide inside a thriller built to stay with you after the final page.",
  details = ctaDetails,
  primaryAction = { href: "/shop", label: "Buy the Book" },
  secondaryAction = { href: "#newsletter", label: "Join Updates" },
  backdropText = "Synthetic Heart",
  bookAlt = "Synthetic Heart book cover",
}: CtaSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const bookStageRef = useRef<HTMLDivElement>(null);
  const backdropWordRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current || shouldReduceMotion) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (bookStageRef.current) {
          gsap.fromTo(
            bookStageRef.current,
            { y: 56, rotateZ: -2.5 },
            {
              y: -34,
              rotateZ: 2,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.35,
              },
            },
          );
        }

        if (backdropWordRef.current) {
          gsap.fromTo(
            backdropWordRef.current,
            { xPercent: 4 },
            {
              xPercent: -7,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.35,
              },
            },
          );
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [shouldReduceMotion] },
  );

  const reveal = revealProps(shouldReduceMotion, { duration: 0.68, y: 28 });

  return (
    <StackCard
      ref={sectionRef}
      id={id}
      variant="primary"
      aria-labelledby="buy-heading"
      className="px-4 py-28 sm:px-6 md:py-36 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.04)_28%,rgba(26,42,55,0.16)_62%,rgba(26,42,55,0.48)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] bg-secondary-950/90 [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)] lg:block" />
      <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light bg-[linear-gradient(135deg,rgba(255,255,255,0.45)_0_1px,transparent_1px_18px)]" />

      <div
        ref={backdropWordRef}
        className="pointer-events-none absolute -bottom-8 left-1/2 w-full -translate-x-1/2 select-none whitespace-nowrap text-center font-heading text-[18vw] font-black uppercase leading-none text-white/10"
      >
        {backdropText}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] lg:gap-20">
        <div className="flex flex-col items-start">
          <motion.div
            {...reveal}
            className="mb-8 inline-flex items-center gap-3 border-y border-white/20 py-3 text-xs font-black uppercase tracking-[0.32em] text-white/90"
          >
            <HeartPulse size={16} className="text-secondary-950" />
            {eyebrow}
          </motion.div>

          <motion.h2
            id="buy-heading"
            {...reveal}
            transition={{ duration: 0.82, delay: 0.06, ease: premiumEase }}
            className="max-w-5xl text-5xl font-black leading-[0.94] tracking-normal text-white md:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h2>

          <motion.p
            {...reveal}
            transition={{ duration: 0.76, delay: 0.12, ease: premiumEase }}
            className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/80 md:text-xl"
          >
            {description}
          </motion.p>

          <motion.div
            {...reveal}
            transition={{ duration: 0.76, delay: 0.18, ease: premiumEase }}
            className="mt-10 grid w-full max-w-3xl grid-cols-1 border-y border-white/20 sm:grid-cols-3"
          >
            {details.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 border-b border-white/15 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              >
                <span className="text-xs font-bold uppercase tracking-[0.26em] text-secondary-950">
                  {item.label}
                </span>
                <span className="font-heading text-2xl font-medium tracking-wide text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.76, delay: 0.24, ease: premiumEase }}
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <Button
              href={primaryAction.href}
              size="lg"
              variant="secondary"
              tone="solid"
              icon={<ArrowUpRight size={20} />}
              iconPosition="right"
              className="w-full border-white/10 bg-secondary-950 px-8 text-white shadow-[0_20px_42px_rgba(26,42,55,0.32)] sm:w-auto"
            >
              {primaryAction.label}
            </Button>
            <Button
              href={secondaryAction.href}
              size="lg"
              variant="ghost"
              icon={<Mail size={20} />}
              iconPosition="left"
              className="w-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm sm:w-auto"
            >
              {secondaryAction.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          {...reveal}
          transition={{ duration: 0.84, delay: 0.14, ease: premiumEase }}
          className="relative mx-auto flex w-full max-w-88 items-center justify-center lg:max-w-none"
        >
          <div
            ref={bookStageRef}
            className="relative w-full max-w-[20rem] perspective-[1800px] sm:max-w-92 lg:max-w-100"
          >
            <div className="absolute -inset-8 rounded-[2.25rem] bg-secondary-950/26 blur-3xl" />
            <div className="absolute left-8 top-8 aspect-2/3 w-[82%] rotate-6 overflow-hidden rounded-[1.6rem] border border-white/10 bg-secondary-950/70 shadow-[0_38px_80px_rgba(26,42,55,0.42)]">
              <Image
                src="/imgs/book-back.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 70vw, 22rem"
                className="object-cover opacity-75 saturate-90"
              />
            </div>

            <div className="relative aspect-2/3 w-[82%]">
              <BookCard
                src="/imgs/book-front.jpg"
                alt={bookAlt}
                rotate={-5}
                className="h-full w-full border-[6px] border-white/24 shadow-[0_46px_95px_-34px_rgba(0,0,0,0.72)]"
              />
            </div>

            <div className="absolute -bottom-8 right-0 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(26,42,55,0.28)] backdrop-blur-md">
              <BookOpen size={17} />
              <span>Now Reading</span>
            </div>
          </div>
        </motion.div>
      </div>
    </StackCard>
  );
}
