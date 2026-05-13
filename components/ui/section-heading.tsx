"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "@/utils/cn";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  alignment = "left",
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const words = title.split(" ");

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      if (subtitle) {
        tl.from(".subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      tl.from(
        ".word",
        {
          y: 40,
          opacity: 0,
          rotateX: -45,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        subtitle ? "-=0.4" : 0,
      );
    },
    { scope: containerRef },
  );

  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      ref={containerRef}
      className={cn("flex flex-col gap-3", alignments[alignment], className)}
    >
      {subtitle && (
        <span className="subtitle text-primary-500 font-bold uppercase tracking-widest text-sm md:text-base">
          {subtitle}
        </span>
      )}
      <h2
        className="text-4xl md:text-6xl font-heading font-bold text-secondary-900 leading-tight flex flex-wrap gap-[0.25em]"
        style={{ perspective: "1000px" }}
      >
        {words.map((word, i) => (
          <span key={i} className="word inline-block origin-bottom">
            {word}
          </span>
        ))}
      </h2>
    </div>
  );
}
