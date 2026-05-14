"use client";

import { StackCard } from "@/components/layouts/stack-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { premiumEase, revealProps } from "@/utils/animations";
import { Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { A11y, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const REVIEWS = [
  {
    id: 1,
    text: "A masterful exploration of AI consciousness. Dr. Tewary brings a chillingly authentic medical precision to the emotional heart of this thriller. I couldn't put it down.",
    author: "Sarah Jenkins",
    role: "NYT Bestselling Author",
  },
  {
    id: 2,
    text: "Synthetic Heart doesn't just ask 'what if?' - it forces you to experience the terrifying, beautiful answer. The prose is as elegant as it is provocative.",
    author: "Marcus Thorne",
    role: "Tech & Ethics Review",
  },
  {
    id: 3,
    text: "Part romance, part psychological thriller, completely unforgettable. The way the narrative maps the biology of human feeling against lines of code is genius.",
    author: "Dr. Elena Rostova",
    role: "Neuroscientist",
  },
  {
    id: 4,
    text: "A gripping page-turner that seamlessly blends hard science with profound emotional depth. This is speculative fiction at its absolute finest.",
    author: "James Aldrin",
    role: "Sci-Fi Digest",
  },
  {
    id: 5,
    text: "Tewary's background as a physician shines in every chapter. The anatomy of heartbreak has never been dissected quite like this. A triumph.",
    author: "Lillian Cross",
    role: "Literary Critic",
  },
];

const swiperModules = [Autoplay, FreeMode, A11y];
const reviewRows = [...REVIEWS, ...REVIEWS];
const reverseReviewRows = [...reviewRows].reverse();

export function ReviewsSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = revealProps(shouldReduceMotion, { duration: 0.68, y: 28 });

  return (
    <StackCard
      id="reviews"
      variant="dark"
      aria-labelledby="reviews-heading"
      className="py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary-900/20 via-secondary-950 to-secondary-950 opacity-60" />
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-[20vw] w-[20vw] rounded-full bg-primary-500/10 blur-[58px] mix-blend-screen" />
      <div className="pointer-events-none absolute bottom-[20%] right-[-5%] h-[30vw] w-[30vw] rounded-full bg-secondary-500/10 blur-[58px] mix-blend-screen" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            className="mb-16 flex flex-col items-start justify-between gap-6 px-6 md:mb-24 md:flex-row md:items-end"
          >
            <SectionHeading
              id="reviews-heading"
              title="The World is Reacting."
              subtitle="03 // Critical Acclaim"
              className="mb-0"
              headingClassName="text-white"
            />
            <div className="flex gap-1 pb-2 text-primary-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={24} fill="currentColor" />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...reveal}
          transition={{ duration: 0.72, delay: 0.1, ease: premiumEase }}
        >
          <div className="relative isolate flex w-full flex-col gap-8 overflow-hidden pb-12 before:pointer-events-none before:absolute before:bottom-12 before:left-0 before:top-0 before:z-10 before:w-[clamp(4.5rem,10vw,11rem)] before:bg-[linear-gradient(to_right,var(--color-secondary-950),rgba(26,42,55,0.92)_34%,rgba(26,42,55,0))] before:content-[''] after:pointer-events-none after:absolute after:bottom-12 after:right-0 after:top-0 after:z-10 after:w-[clamp(4.5rem,10vw,11rem)] after:bg-[linear-gradient(to_left,var(--color-secondary-950),rgba(26,42,55,0.92)_34%,rgba(26,42,55,0))] after:content-['']">
            <ReviewSwiper
              ariaLabel="Reader reviews"
              disabled={shouldReduceMotion}
              reviews={reviewRows}
            />
            <ReviewSwiper
              ariaLabel="Reader reviews reverse"
              disabled={shouldReduceMotion}
              reviews={reverseReviewRows}
              reverse
            />
          </div>
        </motion.div>
      </div>
    </StackCard>
  );
}

type ReviewSwiperProps = {
  ariaLabel: string;
  disabled: boolean | null;
  reviews: typeof REVIEWS;
  reverse?: boolean;
};

function ReviewSwiper({
  ariaLabel,
  disabled,
  reviews,
  reverse = false,
}: ReviewSwiperProps) {
  return (
    <Swiper
      aria-label={ariaLabel}
      modules={swiperModules}
      slidesPerView="auto"
      spaceBetween={32}
      loop={!disabled}
      speed={disabled ? 0 : 12000}
      allowTouchMove
      freeMode={{ enabled: true, momentum: false }}
      autoplay={
        disabled
          ? false
          : {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: reverse,
              waitForTransition: true,
            }
      }
      wrapperClass="items-stretch !ease-linear will-change-transform"
      className="w-full overflow-visible px-[clamp(1rem,3vw,2.5rem)] [mask-image:linear-gradient(to_right,transparent,#000_7rem,#000_calc(100%-7rem),transparent)]"
    >
      {reviews.map((review, index) => (
        <SwiperSlide
          key={`${review.id}-${index}-${reverse ? "reverse" : "forward"}`}
          className="h-auto! w-68! [contain:layout_paint] md:w-100!"
        >
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

type ReviewCardProps = {
  review: (typeof REVIEWS)[number];
};

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="group flex h-full cursor-grab flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:bg-white/10 active:cursor-grabbing md:p-7">
      <div className="mb-5 flex gap-1 text-primary-500 opacity-80 transition-opacity group-hover:opacity-100">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mb-7 text-base font-light italic leading-relaxed text-secondary-200 md:text-lg">
        &quot;{review.text}&quot;
      </p>
      <div className="mt-auto flex flex-col">
        <span className="font-heading text-lg font-bold tracking-wide text-white">
          {review.author}
        </span>
        <span className="mt-1 text-sm uppercase tracking-widest text-primary-400">
          {review.role}
        </span>
      </div>
    </article>
  );
}
