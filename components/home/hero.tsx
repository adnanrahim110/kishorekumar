"use client";

import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power4.out" },
        });

        tl.from(".hero-split-left", {
          xPercent: -100,
          duration: 1.4,
          ease: "expo.out",
        })
          .from(
            ".hero-split-right",
            { xPercent: 100, duration: 1.4, ease: "expo.out" },
            0,
          )
          .from(
            ".hero-book-center",
            {
              scale: 0.5,
              opacity: 0,
              y: 80,
              duration: 1.6,
              ease: "expo.out",
            },
            0.3,
          )
          .from(
            ".hero-title-word",
            {
              y: 120,
              rotateZ: 6,
              opacity: 0,
              duration: 1.2,
              stagger: 0.08,
            },
            0.5,
          )
          .from(
            ".hero-subtitle-line",
            {
              y: 40,
              opacity: 0,
              duration: 0.9,
              stagger: 0.1,
            },
            0.9,
          )
          .from(".hero-cta-group", { y: 30, opacity: 0, duration: 0.8 }, 1.2)
          .from(".hero-scroll-cue", { y: -20, opacity: 0, duration: 0.6 }, 1.4)
          .from(
            ".hero-meta-item",
            {
              y: 20,
              opacity: 0,
              duration: 0.6,
              stagger: 0.08,
            },
            1.0,
          );

        gsap.to(".hero-ambient-orb", {
          y: -25,
          x: 15,
          scale: 1.05,
          duration: 7,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: 1.5,
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-secondary-950"
    >
      <div className="hero-split-left absolute top-0 left-0 w-1/2 h-full bg-primary-500 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary-400/40 via-transparent to-primary-700/30" />
        <div className="hero-ambient-orb absolute top-[15%] left-[10%] w-[35vw] h-[35vw] bg-primary-300/25 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-linear-to-t from-primary-700/40 to-transparent" />
      </div>

      <div className="hero-split-right absolute top-0 right-0 w-1/2 h-full bg-secondary-950 z-0">
        <div className="absolute inset-0 bg-linear-to-bl from-secondary-900/50 via-transparent to-secondary-950" />
        <div className="hero-ambient-orb absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-secondary-700/20 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-secondary-800/30 to-transparent" />
      </div>

      <div
        className="absolute inset-0 flex justify-center items-start pt-[30%] md:pt-[20%] pointer-events-none select-none z-1"
        style={{ perspective: "1600px" }}
      >
        <div
          className="text-center text-[28vw] md:text-[24vw] font-heading font-black text-white/5 leading-[0.75] whitespace-nowrap tracking-wide mix-blend-overlay"
          style={{
            transform: "rotateX(70deg)",
            transformStyle: "preserve-3d",
          }}
        >
          SYNTHETIC <br />
          HEART
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-28 md:pt-7 pb-40">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <div className="hero-book-center relative z-20 w-[90vw] sm:w-[75vw] md:w-[60vw] lg:w-[57vw] lg:-ml-10">
            <Image
              src="/imgs/book-mockup.png"
              alt="Synthetic Heart — A novel by Dr. Kishor K. Tewary"
              width={1200}
              height={800}
              className="w-full h-auto saturate-120"
              priority
            />
          </div>

          <div
            className="relative z-10 w-full max-w-2xl flex flex-col items-center mt-8 md:mt-28"
            style={{
              transform: "perspective(1200px) rotateX(55deg) rotateZ(0deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center top",
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-6">
              {[
                { label: "Genre", value: "Romantic Thriller" },
                { label: "Theme", value: "AI & Humanity" },
                { label: "Author", value: "Dr. Kishor K. Tewary" },
              ].map((item, i) => (
                <span
                  key={item.label}
                  className="hero-meta-item flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest"
                >
                  <span
                    className={cn(
                      " font-black drop-shadow-md",
                      i !== 1 ? "text-secondary" : "text-primary",
                    )}
                  >
                    {item.label}
                  </span>
                  <span className="w-4 h-px bg-white/50" />
                  <span className="text-white font-medium drop-shadow-md">
                    {item.value}
                  </span>
                </span>
              ))}
            </div>

            <p className="hero-subtitle-line text-center text-xl md:text-2xl lg:text-3xl text-white font-heading font-normal leading-relaxed mb-4 max-w-2xl drop-shadow-lg">
              In a world where algorithms dictate connection,
            </p>
            <p className="hero-subtitle-line text-center text-xl md:text-2xl lg:text-3xl text-white font-heading font-normal leading-relaxed mb-10 md:mb-14 max-w-2xl drop-shadow-lg">
              can a synthetic mind comprehend the{" "}
              <em className="text-primary-500 font-black not-italic drop-shadow-xl">
                irrationality of love?
              </em>
            </p>

            <div
              className="hero-cta-group flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                style={{ transform: "translateZ(30px)" }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="#story"
                  className="relative inline-flex items-center justify-center rounded-full font-black px-8 py-4 w-full uppercase tracking-widest text-sm bg-white text-secondary-950 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_0px_#a1a1aa,0_25px_30px_rgba(0,0,0,0.7)] active:translate-y-2 active:shadow-[0_2px_0px_#a1a1aa,0_10px_10px_rgba(0,0,0,0.6)] shadow-[0_8px_0px_#a1a1aa,0_20px_25px_rgba(0,0,0,0.6)]"
                >
                  Enter the Narrative
                </Link>
              </div>
              <div
                style={{ transform: "translateZ(30px)" }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/shop"
                  className="relative inline-flex items-center justify-center rounded-full font-black px-8 py-4 w-full uppercase tracking-widest text-sm text-white border-2 border-white/30 bg-secondary-950/60 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:bg-secondary-900 hover:shadow-[0_12px_0px_rgba(255,255,255,0.15),0_25px_30px_rgba(0,0,0,0.7)] active:translate-y-2 active:shadow-[0_2px_0px_rgba(255,255,255,0.15),0_10px_10px_rgba(0,0,0,0.6)] shadow-[0_8px_0px_rgba(255,255,255,0.15),0_20px_25px_rgba(0,0,0,0.6)]"
                >
                  Get Your Copy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
