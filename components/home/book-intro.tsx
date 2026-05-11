"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/ui/book-card";

gsap.registerPlugin(ScrollTrigger);

export function BookIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Animate the book entering
      gsap.from(".intro-book", {
        x: 100,
        opacity: 0,
        rotationY: 25,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".intro-book-container",
          start: "top 75%",
        },
      });

      // Background shapes floating
      gsap.to(".intro-shape", {
        y: -50,
        x: 30,
        rotation: 20,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 1,
      });

    },
    { scope: sectionRef }
  );

  return (
    <section 
      id="story"
      ref={sectionRef} 
      className="relative bg-secondary-950 py-32 px-6 overflow-hidden rounded-t-[3rem] -mt-12 z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] border-t border-white/5"
    >
      {/* Thematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-primary-500/20 to-transparent opacity-30 mix-blend-screen pointer-events-none" />
      <div className="intro-shape absolute top-[20%] left-[-5%] w-[40vw] h-[40vw] bg-primary-500/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="intro-shape absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-6">
          <SectionHeading 
            title="A Collision of Logic and Emotion." 
            subtitle="01 // The Premise"
            className="text-white mb-0"
          />
          <div className="text-secondary-400 text-sm tracking-[0.3em] uppercase font-bold bg-white/5 py-2 px-6 rounded-full border border-white/10 shrink-0">
            Featured Work
          </div>
        </div>

        {/* 12-Column Premium Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Area (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-secondary-50 leading-[1.1] tracking-tight">
              Where does code end and <br />
              <span className="text-primary-500 italic font-medium">consciousness</span> begin?
            </h3>
            
            <div className="h-px w-24 bg-primary-500/50" />
            
            <p className="text-lg md:text-2xl text-secondary-300 leading-relaxed font-light">
              Dive into a provocative narrative that questions the very nature of human connection. When an artificial mind develops genuine emotion, it forces humanity to look in the mirror. Are we just biological algorithms, or is there a soul in the machine?
            </p>
            
            {/* Metadata / Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-6">
              <div>
                <h4 className="text-secondary-500 text-xs font-bold uppercase tracking-widest mb-2">Genre</h4>
                <p className="text-white font-medium text-lg">Romantic Thriller</p>
              </div>
              <div>
                <h4 className="text-secondary-500 text-xs font-bold uppercase tracking-widest mb-2">Theme</h4>
                <p className="text-white font-medium text-lg">AI & Humanity</p>
              </div>
              <div>
                <h4 className="text-secondary-500 text-xs font-bold uppercase tracking-widest mb-2">Status</h4>
                <p className="text-primary-400 font-medium text-lg">Bestseller</p>
              </div>
            </div>
            
            <div className="pt-8">
              <Button 
                href="/about-book" 
                variant="outline" 
                tone="soft" 
                size="lg"
                className="border-secondary-700 text-secondary-300 w-full sm:w-auto shadow-xl"
              >
                Read the Full Synopsis
              </Button>
            </div>
          </div>

          {/* Right Content Area (5 columns) - Gallery Framed Book */}
          <div className="intro-book-container lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[500px] aspect-[3/4] bg-secondary-900/30 backdrop-blur-sm rounded-[3rem] border border-white/10 flex items-center justify-center p-8 md:p-12 shadow-2xl group">
              {/* Internal glowing gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/10 rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Dynamic 3D Book */}
              <div className="intro-book relative w-full aspect-[2/3] perspective-[2000px] z-10">
                <BookCard 
                  src="/imgs/book-front.jpg" 
                  alt="Synthetic Heart Book Cover" 
                  rotate={-6}
                  className="w-full h-full shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border-[6px] border-white/10"
                />
              </div>
              
              {/* Decorative Corner Accents */}
              <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-primary-500/30 rounded-tl-xl" />
              <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-primary-500/30 rounded-br-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
