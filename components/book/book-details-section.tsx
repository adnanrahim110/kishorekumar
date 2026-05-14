"use client";

import { StackCard } from "@/components/layouts/stack-card";
import { BookCard } from "@/components/ui/book-card";
import { Button } from "@/components/ui/button";
import { premiumEase, revealProps } from "@/utils/animations";
import { ArrowUpRight, Brain, HeartPulse, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const detailCards = [
  {
    icon: HeartPulse,
    title: "Emotional Stakes",
    text: "A love story shaped by memory, fear, desire, and decisions that refuse to stay clinical.",
  },
  {
    icon: Brain,
    title: "Synthetic Mind",
    text: "The book pushes the boundary between engineered behavior and the first signs of consciousness.",
  },
  {
    icon: ShieldCheck,
    title: "Moral Pressure",
    text: "Every breakthrough carries a cost, and every intimate choice becomes a question of control.",
  },
];

const bookFacts = [
  { term: "Title", detail: "Synthetic Heart" },
  { term: "Author", detail: "Dr. Kishor K. Tewary" },
  { term: "Category", detail: "Romantic Thriller" },
  { term: "Core Theme", detail: "Love, deception, AI, and humanity" },
];

export function BookDetailsSection() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (delay = 0) =>
    revealProps(shouldReduceMotion, { delay, duration: 0.68, y: 28 });

  return (
    <StackCard
      id="book-details"
      variant="light"
      aria-labelledby="book-details-heading"
      className="px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-linear-to-b from-white via-secondary-50/84 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(208,78,76,0.14),transparent_28rem)]" />
      <div className="pointer-events-none absolute left-1/2 top-12 z-0 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[18vw] font-black leading-none text-secondary-900/5">
        THE BOOK
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          {...reveal()}
          className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-secondary-950/10 pb-8 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-primary-600 sm:text-sm">
              01 // Book Details
            </p>
            <h2
              id="book-details-heading"
              className="font-heading text-4xl font-black leading-[1.02] tracking-tight text-secondary-950 sm:text-5xl lg:text-6xl"
            >
              A thriller built around the question no machine should answer.
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-18">
          <motion.div
            {...reveal(0.08)}
            className="flex flex-col gap-8 lg:col-span-7"
          >
            <div>
              <h3 className="max-w-3xl font-heading text-3xl font-black leading-[1.08] tracking-tight text-secondary-950 sm:text-4xl lg:text-5xl">
                The story begins with a human need and turns into a system no
                one fully controls.
              </h3>
              <div className="mt-7 h-px w-24 bg-primary-500/70" />
            </div>

            <p className="max-w-3xl text-lg font-light leading-relaxed text-secondary-700 sm:text-xl">
              Synthetic Heart follows the collision between human intimacy and
              artificial intelligence. What starts as a search for connection
              becomes a dangerous test of loyalty, memory, and truth. The book
              keeps the emotional scale intimate while the consequences expand
              into something far larger.
            </p>

            <div className="grid grid-cols-1 gap-5">
              {detailCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.article
                    key={card.title}
                    {...reveal(0.12 + index * 0.04)}
                    className="rounded-2xl border border-secondary-950/10 bg-white/78 p-6 shadow-[0_22px_60px_rgba(26,42,55,0.08)]"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-500 text-white shadow-[0_14px_30px_rgba(208,78,76,0.24)]">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-heading text-4xl font-medium tracking-wide text-secondary-950">
                        {card.title}
                      </h4>
                    </div>
                    <p className="mt-5 font-light leading-relaxed text-secondary-700">
                      {card.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              {...reveal(0.24)}
              className="flex flex-col gap-4 pt-2 sm:flex-row"
            >
              <Button
                href="/shop"
                size="lg"
                variant="primary"
                icon={<ArrowUpRight size={19} />}
                iconPosition="right"
                className="w-full border-primary-500 bg-primary-500 px-8 text-white shadow-[0_18px_46px_rgba(208,78,76,0.24)] sm:w-auto"
              >
                Get Your Copy
              </Button>
            </motion.div>
          </motion.div>

          <motion.aside
            {...reveal(0.12)}
            transition={{ duration: 0.72, delay: 0.12, ease: premiumEase }}
            className="lg:col-span-5"
            aria-label="Book facts"
          >
            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-primary-500/12 blur-3xl" />
              <div className="relative rounded-4xl border border-secondary-950/10 bg-white shadow-[0_30px_90px_rgba(26,42,55,0.14)]">
                <div className="relative aspect-[0.67/1] overflow-hidden">
                  <BookCard
                    src="/imgs/book-front.jpg"
                    alt="Synthetic Heart book cover"
                    rotate={0}
                    className="h-full w-full border-5 border-white/20 shadow-none"
                  />
                </div>

                <dl className="py-2 px-5 md:px-7 divide-y divide-secondary-950/10">
                  {bookFacts.map((item) => (
                    <div
                      key={item.term}
                      className="grid grid-cols-[0.42fr_1fr] gap-4 py-4"
                    >
                      <dt className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-600">
                        {item.term}
                      </dt>
                      <dd className="text-sm font-semibold leading-relaxed text-secondary-800">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </StackCard>
  );
}
