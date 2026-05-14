"use client";

import { StackCard } from "@/components/layouts/stack-card";
import { Button } from "@/components/ui/button";
import { revealProps } from "@/utils/animations";
import {
  ArrowRight,
  Feather,
  HeartPulse,
  Mail,
  Stethoscope,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const authorDetails = [
  { label: "Discipline", value: "Medicine" },
  { label: "Voice", value: "Psychological Fiction" },
  { label: "Focus", value: "Human Emotion" },
];

export function AuthorIntro() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    revealProps(shouldReduceMotion, { delay, duration: 0.68, y: 28 });

  return (
    <StackCard
      id="author"
      variant="light"
      aria-labelledby="author-heading"
      className="px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,42,55,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(26,42,55,0.03)_1px,transparent_1px)] bg-size-[72px_72px] opacity-55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-white via-secondary-50/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-secondary-50 via-secondary-50/86 to-transparent" />
      <div className="pointer-events-none absolute -left-[5%] top-[7%] select-none font-heading text-[18vw] font-black leading-none tracking-wide text-secondary-200/45">
        AUTHOR
      </div>
      <div className="pointer-events-none absolute right-[-12%] top-[18%] h-[30vw] w-[30vw] rounded-full bg-primary-100/60 blur-[64px] mix-blend-multiply" />
      <div className="pointer-events-none absolute bottom-[6%] left-[-10%] h-[24vw] w-[24vw] rounded-full bg-secondary-200/55 blur-[58px] mix-blend-multiply" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          {...reveal()}
          className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-secondary-200 pb-8 sm:mb-20 md:flex-row md:items-end lg:mb-24"
        >
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-primary-600 sm:text-sm">
              02 // The Author
            </p>
            <h2
              id="author-heading"
              className="max-w-4xl font-heading text-4xl font-black leading-[1.02] tracking-tight text-secondary-950 sm:text-5xl lg:text-6xl"
            >
              The Mind Behind the Machine.
            </h2>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-secondary-200 bg-white/85 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-secondary-700 shadow-[0_14px_40px_rgba(26,42,55,0.08)]">
            <Stethoscope size={15} />
            Doctor + Author
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            {...reveal(0.08)}
            className="flex justify-center lg:col-span-5 lg:justify-start"
          >
            <div className="relative w-full max-w-[29rem]">
              <div className="pointer-events-none absolute -inset-4 rounded-t-full rounded-b-[3rem] border border-primary-300/30" />
              <div className="pointer-events-none absolute -inset-8 rounded-t-full rounded-b-[3.5rem] border border-secondary-300/20" />

              <div className="relative overflow-hidden rounded-t-full rounded-b-[3rem] border border-secondary-200 bg-white p-3 shadow-[0_34px_90px_rgba(26,42,55,0.18)]">
                <div className="relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-[2.55rem] bg-secondary-100">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=900&auto=format&fit=crop"
                    alt="Dr. Kishor K. Tewary"
                    fill
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 42vw, 29rem"
                    className="object-cover saturate-95 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-secondary-950/22 via-transparent to-white/16" />
                </div>

                <div className="absolute left-6 top-8 rounded-full border border-white/55 bg-white/88 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary-800 shadow-[0_12px_34px_rgba(26,42,55,0.14)]">
                  Clinical Lens
                </div>

                <div className="absolute -right-2 bottom-10 flex h-31 w-31 rotate-6 flex-col items-center justify-center rounded-full bg-primary-500 p-5 text-center text-white shadow-[0_24px_70px_rgba(208,78,76,0.34)] sm:-right-7 sm:h-34 sm:w-34">
                  <HeartPulse size={24} className="mb-2" />
                  <span className="font-heading text-2xl font-black leading-none">
                    M.D.
                  </span>
                  <span className="mt-1 text-[10px] font-black uppercase leading-tight tracking-[0.18em]">
                    Author
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-8 left-5 right-5 rounded-2xl border border-secondary-200 bg-white/92 p-4 shadow-[0_18px_50px_rgba(26,42,55,0.12)] sm:left-10 sm:right-auto sm:w-72">
                <div className="mb-3 flex items-center gap-2 text-primary-600">
                  <Feather size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                    Narrative Method
                  </span>
                </div>
                <p className="text-sm font-medium leading-relaxed text-secondary-700">
                  Medical precision shaped into emotional suspense.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8 lg:col-span-7">
            <motion.div {...reveal(0.1)}>
              <h3 className="max-w-3xl font-heading text-4xl font-black leading-[1.06] tracking-tight text-secondary-950 sm:text-5xl lg:text-6xl">
                Bridging the gap between{" "}
                <span className="font-medium italic text-primary-600">
                  science
                </span>{" "}
                and{" "}
                <span className="font-medium italic text-secondary-600">
                  storytelling.
                </span>
              </h3>
            </motion.div>

            <motion.div
              {...reveal(0.14)}
              className="h-px w-24 bg-secondary-300"
            />

            <motion.figure
              {...reveal(0.18)}
              className="relative border-l-4 border-primary-500 pl-6"
            >
              <span className="pointer-events-none absolute -left-4 -top-11 select-none font-heading text-8xl font-black leading-none text-primary-100">
                &quot;
              </span>
              <blockquote className="relative z-10 max-w-3xl text-xl font-medium italic leading-snug text-secondary-800 sm:text-2xl lg:text-3xl">
                I&apos;ve spent my career decoding the biology of the human heart,
                only to realize its greatest mysteries are written in fiction.
              </blockquote>
            </motion.figure>

            <motion.p
              {...reveal(0.22)}
              className="max-w-3xl text-lg font-light leading-relaxed text-secondary-700 sm:text-xl"
            >
              Dr. Kishor K. Tewary is a practicing physician who intertwines
              his understanding of human anatomy with gripping psychological
              narratives. His transition from medicine to fiction explores the
              limits of what makes us human and what happens when technology
              attempts to replicate our deepest emotions.
            </motion.p>

            <motion.div
              {...reveal(0.26)}
              className="grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-secondary-200 bg-white/72 shadow-[0_18px_55px_rgba(26,42,55,0.08)] sm:grid-cols-3"
            >
              {authorDetails.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-secondary-200 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.24em] text-secondary-500">
                    {item.label}
                  </p>
                  <p className="text-base font-semibold text-secondary-950 sm:text-lg">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...reveal(0.3)}
              className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center"
            >
              <Button
                href="/about-author"
                size="lg"
                variant="primary"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="w-full bg-primary-50 text-primary-700 shadow-[0_18px_50px_rgba(208,78,76,0.18)] sm:w-auto"
              >
                Read Full Biography
              </Button>
              <Button
                href="#contact"
                size="lg"
                variant="outline"
                icon={<Mail size={18} />}
                iconPosition="right"
                className="w-full border-secondary-300 bg-white/65 text-secondary-800 shadow-[0_14px_38px_rgba(26,42,55,0.08)] sm:w-auto"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </StackCard>
  );
}
