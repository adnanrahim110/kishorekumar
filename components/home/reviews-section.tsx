"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    id: 1,
    text: "A masterful exploration of AI consciousness. Dr. Tewary brings a chillingly authentic medical precision to the emotional heart of this thriller. I couldn't put it down.",
    author: "Sarah Jenkins",
    role: "NYT Bestselling Author",
  },
  {
    id: 2,
    text: "Synthetic Heart doesn't just ask 'what if?'—it forces you to experience the terrifying, beautiful answer. The prose is as elegant as it is provocative.",
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

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Reveal animation for header
      gsap.from(".review-header-anim", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Background floating elements
      gsap.to(".review-shape", {
        y: -60,
        x: 40,
        rotation: 10,
        duration: 7,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 1.5,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-secondary-950 py-32 overflow-hidden rounded-t-[3rem] -mt-12 z-40 shadow-[0_-20px_60px_rgba(0,0,0,0.4)] border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary-900/20 via-secondary-950 to-secondary-950 opacity-60 pointer-events-none" />
      <div className="review-shape absolute top-[10%] left-[10%] w-[20vw] h-[20vw] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="review-shape absolute bottom-[20%] right-[-5%] w-[30vw] h-[30vw] bg-secondary-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="review-header-anim mb-16 md:mb-24 px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <SectionHeading
            title="The World is Reacting."
            subtitle="03 // Critical Acclaim"
            className="text-white mb-0"
          />
          <div className="flex gap-1 text-primary-500 pb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden flex flex-col gap-8 pb-12">
          <div className="flex w-fit animate-marquee hover:pause-animation">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div
                key={`${review.id}-${i}`}
                className="w-75 md:w-112.5 shrink-0 mx-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group cursor-grab active:cursor-grabbing"
              >
                <div className="flex gap-1 text-primary-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-secondary-200 text-lg md:text-xl font-light italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
                <div className="flex flex-col">
                  <span className="text-white font-heading font-bold text-lg tracking-wide">
                    {review.author}
                  </span>
                  <span className="text-primary-400 text-sm tracking-widest uppercase mt-1">
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-fit animate-marquee-reverse hover:pause-animation">
            {[...REVIEWS, ...REVIEWS].reverse().map((review, i) => (
              <div
                key={`rev-${review.id}-${i}`}
                className="w-75 md:w-112.5 shrink-0 mx-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group cursor-grab active:cursor-grabbing"
              >
                <div className="flex gap-1 text-primary-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-secondary-200 text-lg md:text-xl font-light italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
                <div className="flex flex-col">
                  <span className="text-white font-heading font-bold text-lg tracking-wide">
                    {review.author}
                  </span>
                  <span className="text-primary-400 text-sm tracking-widest uppercase mt-1">
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
