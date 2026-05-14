"use client";

import { StackCard } from "@/components/layouts/stack-card";
import { BookCard } from "@/components/ui/book-card";
import { Button } from "@/components/ui/button";
import { premiumEase, revealProps } from "@/utils/animations";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  HeartPulse,
  Star,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const bookStats = [
  { label: "Genre", value: "Romantic Thriller" },
  { label: "Theme", value: "AI and Humanity" },
  { label: "Pages", value: "Novel Length" },
];

export function BookHero() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (delay = 0) =>
    revealProps(shouldReduceMotion, { delay, duration: 0.72, y: 30 });

  return (
    <StackCard
      id="book"
      variant="hero"
      aria-labelledby="book-hero-heading"
      className="min-h-screen bg-secondary-950 px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_14%,rgba(208,78,76,0.36),transparent_34rem),radial-gradient(circle_at_78%_18%,rgba(76,136,171,0.2),transparent_32rem),linear-gradient(135deg,rgba(208,78,76,0.14),transparent_44%,rgba(26,42,55,0.92))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-secondary-950 via-secondary-950/80 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-28 hidden h-px w-[42vw] bg-linear-to-r from-transparent via-primary-400/60 to-transparent lg:block" />
      <div className="pointer-events-none absolute right-0 top-[42%] hidden h-px w-[36vw] bg-linear-to-l from-transparent via-white/24 to-transparent lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:gap-20">
        <div className="flex flex-col items-start">
          <motion.div
            {...reveal()}
            className="mb-8 inline-flex items-center gap-3 border-y border-white/14 py-3 text-xs font-black uppercase tracking-[0.32em] text-primary-300"
          >
            <HeartPulse size={16} />
            Synthetic Heart
          </motion.div>

          <motion.h1
            id="book-hero-heading"
            {...reveal(0.04)}
            transition={{ duration: 0.84, delay: 0.04, ease: premiumEase }}
            className="max-w-4xl font-heading text-5xl font-black leading-[0.92] tracking-normal text-white sm:text-6xl lg:text-8xl"
          >
            Love becomes the most dangerous algorithm.
          </motion.h1>

          <motion.p
            {...reveal(0.1)}
            className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-secondary-200 sm:text-xl"
          >
            A romantic thriller where memory, medicine, and machine logic
            collide. Synthetic Heart follows a love story that should be
            impossible, until the impossible starts making choices of its own.
          </motion.p>

          <motion.div
            {...reveal(0.2)}
            className="mt-10 grid w-full max-w-3xl grid-cols-1 border-y border-white/14 sm:grid-cols-3"
          >
            {bookStats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 border-b border-white/12 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.26em] text-primary-300">
                  {item.label}
                </span>
                <span className="font-heading text-2xl tracking-wide font-bold text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...reveal(0.26)}
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <Button
              href="/shop"
              size="lg"
              variant="primary"
              icon={<ArrowUpRight size={20} />}
              iconPosition="right"
              className="w-full border-primary-500 bg-primary-500 px-8 text-white sm:w-auto"
            >
              Buy the Book
            </Button>
            <Button
              href="#book-details"
              size="lg"
              variant="ghost"
              icon={<ArrowDownRight size={20} />}
              iconPosition="right"
              className="w-full border-white/18 bg-white/8 px-8 text-white backdrop-blur-md sm:w-auto"
            >
              Explore Details
            </Button>
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.08)}
          className="relative mx-auto flex w-full max-w-2xl items-center justify-center"
        >
          <div className="absolute -inset-x-10 top-1/2 h-36 -translate-y-1/2 rounded-full bg-primary-500/18 blur-3xl" />
          <div className="relative grid w-full grid-cols-[0.72fr_1fr] items-end gap-4 sm:gap-6">
            <div className="relative mb-8 aspect-2/3 overflow-hidden rounded-3xl border border-white/10 bg-white/6 shadow-[0_34px_80px_rgba(0,0,0,0.42)]">
              <Image
                src="/imgs/book-back.jpg"
                alt="Synthetic Heart back cover"
                fill
                sizes="(max-width: 768px) 38vw, 18rem"
                className="object-cover opacity-86 saturate-90"
              />
              <div className="absolute inset-0 bg-linear-to-r from-secondary-950/30 via-transparent to-primary-500/10" />
            </div>

            <div className="relative aspect-2/3">
              <BookCard
                src="/imgs/book-front.jpg"
                alt="Synthetic Heart book cover"
                rotate={-3}
                className="h-full w-full border-[6px] border-white/14 shadow-[0_52px_120px_-40px_rgba(0,0,0,0.92)]"
              />
            </div>
          </div>

          <motion.div
            {...reveal(0.28)}
            className="absolute bottom-4 right-0 flex items-center gap-3 rounded-full border border-white/16 bg-secondary-950/76 px-5 py-3 text-sm font-bold text-white shadow-[0_18px_54px_rgba(0,0,0,0.38)] backdrop-blur-xl"
          >
            <BookOpen size={17} className="text-primary-300" />
            <span>Available Now</span>
          </motion.div>
        </motion.div>
      </div>
    </StackCard>
  );
}
