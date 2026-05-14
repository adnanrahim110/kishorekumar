"use client";

import { StackCard } from "@/components/layouts/stack-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { premiumEase, revealProps } from "@/utils/animations";
import { Quote, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { A11y, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const BOOK_REVIEWS = [
  {
    id: 1,
    text: "The book moves like a thriller but lands like a question about what makes feeling real.",
    author: "Anika Mehra",
    role: "Early Reader",
  },
  {
    id: 2,
    text: "Synthetic Heart is tense, intimate, and unsettling in the best way. The emotional logic stays with you.",
    author: "Rohan Blake",
    role: "Book Reviewer",
  },
  {
    id: 3,
    text: "A sharp blend of romance, medical precision, and speculative pressure. It feels cinematic without losing its pulse.",
    author: "Maya Sterling",
    role: "Literary Journal",
  },
  {
    id: 4,
    text: "The story treats AI as more than a device. It becomes a mirror, and that is where the suspense works.",
    author: "Dev Arora",
    role: "Tech Fiction Notes",
  },
  {
    id: 5,
    text: "Elegant, readable, and surprisingly emotional. The deception is personal before it becomes technological.",
    author: "Claire Voss",
    role: "Reader Circle",
  },
];

const swiperModules = [Autoplay, FreeMode, A11y];
const reviewSlides = [...BOOK_REVIEWS, ...BOOK_REVIEWS];

export function BookReviewsSection() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = revealProps(shouldReduceMotion, { duration: 0.68, y: 28 });

  return (
    <StackCard
      id="book-reviews"
      variant="dark"
      aria-labelledby="book-reviews-heading"
      className="py-28 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(208,78,76,0.22),transparent_28rem),radial-gradient(circle_at_84%_28%,rgba(255,255,255,0.07),transparent_24rem),linear-gradient(180deg,var(--color-secondary-950),rgba(26,42,55,0.96))]" />
      <div className="pointer-events-none absolute left-1/2 top-18 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[17vw] font-black leading-none text-white/4">
        REVIEWS
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...reveal}
            className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:mb-20 md:flex-row md:items-end"
          >
            <SectionHeading
              id="book-reviews-heading"
              title="Readers are feeling the signal."
              subtitle="02 // Reader Response"
              className="mb-0"
              headingClassName="text-white"
            />

            <div className="flex items-center gap-4 pb-2 text-primary-400">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={22} fill="currentColor" />
                ))}
              </div>
              <span className="hidden text-xs font-black uppercase tracking-[0.26em] text-secondary-300 sm:inline">
                5.0 Reader Score
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...reveal}
          transition={{ duration: 0.72, delay: 0.1, ease: premiumEase }}
          className="relative isolate w-full overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-[clamp(4.5rem,10vw,11rem)] before:bg-[linear-gradient(to_right,var(--color-secondary-950),rgba(26,42,55,0.94)_36%,rgba(26,42,55,0))] before:content-[''] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-[clamp(4.5rem,10vw,11rem)] after:bg-[linear-gradient(to_left,var(--color-secondary-950),rgba(26,42,55,0.94)_36%,rgba(26,42,55,0))] after:content-['']"
        >
          <Swiper
            aria-label="Book reviews"
            modules={swiperModules}
            slidesPerView="auto"
            spaceBetween={28}
            loop={!shouldReduceMotion}
            speed={shouldReduceMotion ? 0 : 11000}
            allowTouchMove
            freeMode={{ enabled: true, momentum: false }}
            autoplay={
              shouldReduceMotion
                ? false
                : {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: true,
                  }
            }
            wrapperClass="items-stretch !ease-linear will-change-transform"
            className="w-full overflow-visible px-[clamp(1rem,3vw,2.5rem)] mask-[linear-gradient(to_right,transparent,#000_6rem,#000_calc(100%-6rem),transparent)]"
          >
            {reviewSlides.map((review, index) => (
              <SwiperSlide
                key={`${review.id}-${index}`}
                className="h-auto! w-72! contain-[layout_paint] md:w-96!"
              >
                <article className="flex h-full cursor-grab flex-col rounded-3xl border border-white/10 bg-white/5.5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-white/8.5 active:cursor-grabbing md:p-7">
                  <Quote size={28} className="mb-6 text-primary-400" />
                  <p className="mb-8 text-base font-light italic leading-relaxed text-secondary-200 md:text-lg">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="mt-auto border-t border-white/10 pt-5">
                    <h3 className="font-heading text-lg font-bold tracking-wide text-white">
                      {review.author}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-primary-400">
                      {review.role}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </StackCard>
  );
}
