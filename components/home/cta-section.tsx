"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/ui/book-card";
import { ArrowRight, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".cta-anim", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".cta-book", {
        scale: 0.8,
        opacity: 0,
        rotationY: 30,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.to(".cta-pulse", {
        scale: 1.15,
        opacity: 0.3,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.8,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary-500 py-32 lg:py-48 px-6 overflow-hidden rounded-t-[3rem] -mt-12 z-50 shadow-[0_-30px_80px_rgba(0,0,0,0.5)]"
    >
      {/* Pulsing Background Circles */}
      <div className="cta-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary-400 rounded-full opacity-20 pointer-events-none" />
      <div className="cta-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary-400 rounded-full opacity-10 pointer-events-none" />
      <div className="cta-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-primary-400 rounded-full opacity-5 pointer-events-none" />

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-40 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Book Display */}
          <div className="cta-book w-full max-w-[280px] lg:max-w-[320px] aspect-[2/3] shrink-0 perspective-[2000px]">
            <BookCard
              src="/imgs/book-front.jpg"
              alt="Synthetic Heart"
              rotate={8}
              className="w-full h-full shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)] border-[6px] border-white/20"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <span className="cta-anim inline-block py-2 px-6 rounded-full bg-white/10 text-white/90 font-bold tracking-[0.25em] uppercase text-xs border border-white/20 backdrop-blur-sm">
              Available Now
            </span>

            <h2 className="cta-anim text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-[1.05] tracking-tight">
              Ready to question <br />
              <span className="text-secondary-950 italic font-medium">everything?</span>
            </h2>

            <div className="cta-anim h-px w-20 bg-white/30" />

            <p className="cta-anim text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-xl">
              Get your copy of Synthetic Heart today—and discover why readers and critics are calling it the most thought-provoking thriller of the decade.
            </p>

            <div className="cta-anim flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Button
                href="/shop"
                size="lg"
                variant="secondary"
                tone="solid"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="w-full sm:w-auto shadow-2xl shadow-secondary-950/40"
              >
                Get Your Copy
              </Button>
              <Button
                href="#newsletter"
                size="lg"
                variant="ghost"
                icon={<Mail size={20} />}
                iconPosition="left"
                className="w-full sm:w-auto text-white border-white/20"
              >
                Join the List
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
