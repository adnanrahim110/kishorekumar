"use client";

import { BookCard } from "@/components/ui/book-card";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Circle, Plus } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".hero-text-anim", {
        y: 80,
        opacity: 0,
        rotateZ: 2,
        duration: 1.4,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.1,
      });

      gsap.to(".shape-float", {
        y: -40,
        rotation: 15,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      gsap.to(".particle", {
        y: -20,
        rotation: 45,
        scale: 1.2,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      gsap.to(".hero-book", {
        y: (i, el) => parseFloat(el.getAttribute("data-speed") || "0") * 150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-primary-500 overflow-hidden flex flex-col items-center justify-center pt-32 md:pt-40 pb-24"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-primary-400/20 to-primary-600/20 z-0 pointer-events-none" />

      <div className="shape-float absolute top-[-5%] right-[5%] w-[45vw] h-[45vw] md:w-[35vw] md:h-[35vw] bg-primary-400 rounded-full opacity-60 mix-blend-multiply z-0 blur-2xl" />
      <div className="shape-float absolute bottom-[10%] left-[-5%] w-[50vw] h-[35vw] bg-primary-600 rounded-[100px] opacity-40 z-0 rotate-[-25deg] blur-2xl" />
      <div className="shape-float absolute top-[30%] left-[10%] w-32 h-32 border-4 border-primary-300 rounded-full opacity-40 z-0" />

      <div className="particle absolute top-[20%] right-[20%] text-primary-300 opacity-50 z-0">
        <Plus size={40} strokeWidth={3} />
      </div>
      <div className="particle absolute bottom-[40%] left-[25%] text-primary-200 opacity-50 z-0">
        <Circle size={24} strokeWidth={4} />
      </div>
      <div className="particle absolute top-[50%] right-[10%] text-primary-200 opacity-40 z-0">
        <Plus size={24} strokeWidth={4} />
      </div>

      <div className="container relative z-10 w-full px-6 flex flex-col items-center flex-1 justify-center">
        <div className="hero-text-anim overflow-hidden mb-8 md:mb-12">
          <span className="inline-block py-2.5 px-8 rounded-full bg-white/10 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm border border-white/20 backdrop-blur-md shadow-xl">
            A Romantic Thriller
          </span>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center mb-16 md:mb-24">
          <h1 className="hero-text-anim text-[16vw] md:text-[12vw] font-heading font-black text-white leading-[0.8] tracking-tighter drop-shadow-2xl z-20">
            SYNTHETIC
          </h1>

          <div className="relative w-full flex justify-center">
            <h1 className="hero-text-anim text-[16vw] md:text-[12vw] font-heading font-black text-secondary-900 leading-[0.8] tracking-tighter italic md:-mt-8 ml-8 md:ml-48 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20">
              HEART
            </h1>

            <div className="hero-text-anim absolute right-[10%] md:right-[25%] bottom-[-20%] md:bottom-[10%] z-30 rotate-12">
              <div className="bg-secondary-900 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-full border-2 border-primary-500 shadow-xl">
                Bestseller
              </div>
            </div>
          </div>

          <div
            className="hero-book absolute top-[-30%] md:top-[-10%] left-[5%] md:left-[10%] w-[35vw] md:w-[22vw] max-w-65 aspect-2/3 z-10 -rotate-12 hidden sm:block"
            data-speed="-1"
          >
            <BookCard
              src="/imgs/book-front.jpg"
              alt="Synthetic Heart Cover Left"
              rotate={-12}
              className="w-full h-full shadow-2xl shadow-secondary-900/40 border-[6px] border-white/10"
            />
          </div>
        </div>

        <div className="hero-text-anim flex flex-col items-center max-w-3xl mt-auto z-40">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-4xl md:rounded-[3rem] shadow-2xl text-center">
            <p className="text-lg md:text-2xl text-white/95 font-light leading-relaxed mb-10">
              In a world where algorithms dictate connection, can a purely
              synthetic mind comprehend the profound irrationality of human
              love?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                href="#story"
                size="lg"
                variant="secondary"
                tone="solid"
                className="w-full sm:w-auto shadow-xl shadow-secondary-900/30"
              >
                Enter the Narrative
              </Button>

              <button className="group flex items-center justify-center gap-3 w-full sm:w-auto text-primary-100 hover:text-white font-medium transition-colors">
                <span className="p-3.5 rounded-full bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all">
                  <ArrowDown size={20} className="group-hover:animate-bounce" />
                </span>
                <span className="text-sm md:text-base tracking-wide uppercase font-bold">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
