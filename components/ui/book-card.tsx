"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BookCardProps {
  src: string;
  alt: string;
  className?: string;
  rotate?: number;
}

export function BookCard({ src, alt, className, rotate = 0 }: BookCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!cardRef.current || !imageRef.current) return;

      const card = cardRef.current;
      const image = imageRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = card.getBoundingClientRect();
        
        // Calculate position relative to the center of the card
        const x = (clientX - (left + width / 2)) / (width / 2); // -1 to 1
        const y = (clientY - (top + height / 2)) / (height / 2); // -1 to 1

        gsap.to(card, {
          rotateX: -y * 10, // Max 10 degrees tilt
          rotateY: x * 10,
          rotateZ: rotate + x * 2,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(image, {
          x: -x * 10, // Parallax inner image
          y: -y * 10,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          rotateZ: rotate,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });

        gsap.to(image, {
          x: 0,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative rounded-xl md:rounded-[2rem] overflow-hidden shadow-2xl transition-shadow duration-300 hover:shadow-primary-500/20 group",
        className
      )}
      style={{
        transform: `rotate(${rotate}deg)`,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl md:rounded-[2rem] pointer-events-none" />
      <Image
        ref={imageRef as any}
        src={src}
        alt={alt}
        fill
        className="object-cover scale-[1.05] rounded-xl md:rounded-[2rem]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
