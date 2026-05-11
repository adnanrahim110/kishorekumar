"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function AuthorIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Image reveal animation
      gsap.from(".author-image-wrapper", {
        y: 150,
        opacity: 0,
        rotationZ: -5,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Text stagger animation
      gsap.from(".author-anim", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".author-text-container",
          start: "top 80%",
        },
      });

      // Background shapes
      gsap.to(".author-shape", {
        y: -40,
        rotation: 15,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 2,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-secondary-50 py-32 lg:py-48 px-6 overflow-hidden rounded-t-[3rem] -mt-12 z-30 shadow-[0_-30px_80px_rgba(0,0,0,0.6)]"
    >
      {/* Editorial Background Text */}
      <div className="absolute top-[10%] left-[-5%] text-[20vw] font-heading font-black text-secondary-200/30 whitespace-nowrap pointer-events-none select-none z-0">
        AUTHOR
      </div>
      
      {/* Subtle Background Shapes */}
      <div className="author-shape absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary-100 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply opacity-60" />
      <div className="author-shape absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] bg-secondary-200 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-multiply opacity-50" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-secondary-200 pb-8 gap-6">
          <SectionHeading 
            title="The Mind Behind the Machine." 
            subtitle="02 // The Author"
            className="text-secondary-950 mb-0"
          />
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Author Image (5 columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="author-image-wrapper relative w-full max-w-[450px] aspect-[4/5] rounded-t-full rounded-b-[3rem] p-4 bg-white shadow-2xl border border-secondary-100">
              <div className="relative w-full h-full rounded-t-full rounded-b-[2.5rem] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" 
                  alt="Dr. Kishor K. Tewary" 
                  fill 
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary-950/10 mix-blend-overlay pointer-events-none" />
              </div>
              
              {/* Floating decorative badge */}
              <div className="absolute bottom-12 -right-6 md:-right-12 bg-primary-500 text-white p-6 rounded-full shadow-2xl shadow-primary-500/40 w-32 h-32 flex flex-col items-center justify-center rotate-12">
                <span className="font-heading font-bold text-2xl leading-none">M.D.</span>
                <span className="text-[10px] uppercase tracking-widest mt-1 opacity-90 text-center">Author &<br/>Doctor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Details (7 columns) */}
          <div className="author-text-container lg:col-span-7 flex flex-col gap-8">
            
            <div className="author-anim">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-secondary-950 leading-[1.1] tracking-tight mb-6">
                Bridging the gap between <br />
                <span className="text-primary-500 italic font-medium">science</span> and <span className="text-secondary-500 italic font-medium">storytelling.</span>
              </h3>
            </div>
            
            <div className="author-anim h-px w-24 bg-secondary-300" />
            
            <div className="author-anim relative">
              <span className="absolute -top-10 -left-6 text-8xl font-heading text-secondary-200 opacity-50 select-none">"</span>
              <p className="text-xl md:text-3xl text-secondary-800 font-medium leading-snug italic relative z-10 pl-6 border-l-4 border-primary-500">
                I've spent my career decoding the biology of the human heart, only to realize its greatest mysteries are written in fiction.
              </p>
            </div>
            
            <p className="author-anim text-lg text-secondary-600 leading-relaxed font-light mt-4">
              Dr. Kishor K. Tewary is a practicing physician who intertwines his profound understanding of human anatomy with gripping psychological narratives. His transition from medicine to fiction explores the very limits of what makes us human—and what happens when technology attempts to replicate our deepest emotions.
            </p>
            
            <div className="author-anim pt-8 flex flex-col sm:flex-row gap-6">
              <Button 
                href="/about-author" 
                size="lg" 
                variant="primary"
                className="shadow-xl shadow-primary-500/20 w-full sm:w-auto"
              >
                Read Full Biography
              </Button>
              <Button 
                href="#contact" 
                size="lg" 
                variant="outline"
                className="border-secondary-300 text-secondary-700 w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
