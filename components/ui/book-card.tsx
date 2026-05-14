"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";
import { premiumEase } from "@/utils/animations";

interface BookCardProps {
  src: string;
  alt: string;
  className?: string;
  rotate?: number;
}

export function BookCard({ src, alt, className, rotate = 0 }: BookCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl md:rounded-4xl overflow-hidden shadow-2xl transition-shadow duration-300 hover:shadow-primary-500/20 group",
        className,
      )}
      initial={false}
      whileHover={{
        rotateX: -2,
        rotateY: 4,
        rotateZ: rotate + 1,
        scale: 1.012,
      }}
      transition={{ duration: 0.5, ease: premiumEase }}
      style={{
        rotateZ: rotate,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-tr from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl md:rounded-4xl pointer-events-none" />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover scale-[1.05] rounded-xl transition-transform duration-500 group-hover:scale-[1.08] md:rounded-4xl"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
}
