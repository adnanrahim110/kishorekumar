"use client";

import { premiumEase, revealViewport } from "@/utils/animations";
import { cn } from "@/utils/cn";
import { motion, useReducedMotion } from "motion/react";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center" | "right";
  headingClassName?: string;
}

export function SectionHeading({
  id,
  title,
  subtitle,
  className,
  alignment = "left",
  headingClassName,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = title.split(" ");

  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
      viewport={revealViewport}
      transition={{ duration: 0.2, ease: premiumEase }}
      className={cn("flex flex-col gap-3", alignments[alignment], className)}
    >
      {subtitle && (
        <motion.span
          initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
          viewport={revealViewport}
          transition={{ duration: 0.6, ease: premiumEase }}
          className="text-primary-500 font-bold uppercase tracking-widest text-sm md:text-base"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        id={id}
        className={cn(
          "text-4xl md:text-6xl font-heading font-bold text-secondary-900 leading-tight flex flex-wrap gap-[0.25em] perspective-[1000px]",
          headingClassName,
        )}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={
              shouldReduceMotion
                ? false
                : { y: 40, opacity: 0, rotateX: -45 }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : { y: 0, opacity: 1, rotateX: 0 }
            }
            viewport={revealViewport}
            transition={{
              duration: 0.74,
              delay: (subtitle ? 0.12 : 0) + i * 0.04,
              ease: premiumEase,
            }}
            className="inline-block origin-bottom"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </motion.div>
  );
}
