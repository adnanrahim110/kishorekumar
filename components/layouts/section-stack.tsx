"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STACK_SECTION_SELECTOR = ".stacked-page > section";

export function SectionStack() {
  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>(STACK_SECTION_SELECTOR);

    if (sections.length < 2) return;

    ScrollTrigger.saveStyles(sections);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(sections, {
        "--stack-blur": "0px",
        "--stack-brightness": 1,
        "--stack-dim-bottom": 0,
        "--stack-dim-mid": 0,
        "--stack-dim-top": 0,
        "--stack-edge-bottom": 0.22,
        "--stack-edge-top": 0.11,
        "--stack-recede": 0,
        "--stack-rim-light": 0,
        "--stack-saturate": 1,
        "--stack-shadow-depth": 0,
        "--stack-texture-opacity": 0.2,
        transformPerspective: 1200,
        transformOrigin: "top center",
        willChange: "transform, filter",
      });

      sections.forEach((section, index) => {
        gsap.set(section, { zIndex: 20 + index * 10 });

        const nextSection = sections[index + 1];
        if (!nextSection) return;

        ScrollTrigger.create({
          trigger: nextSection,
          start: "top bottom",
          end: "top top",
          pin: section,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        gsap.to(section, {
          "--stack-blur": "1.25px",
          "--stack-brightness": 0.84,
          "--stack-dim-bottom": 0.18,
          "--stack-dim-mid": 0.05,
          "--stack-dim-top": 0.2,
          "--stack-edge-bottom": 0.48,
          "--stack-edge-top": 0.19,
          "--stack-recede": 1,
          "--stack-rim-light": 0.035,
          "--stack-saturate": 0.9,
          "--stack-shadow-depth": 0.3,
          "--stack-texture-opacity": 0.44,
          rotationX: 1.35,
          y: -46,
          scale: 0.948,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: nextSection,
            start: "top bottom",
            end: "top 10%",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });

        gsap.fromTo(
          nextSection,
          {
            "--stack-blur": "0px",
            "--stack-brightness": 1,
            "--stack-dim-bottom": 0,
            "--stack-dim-mid": 0,
            "--stack-dim-top": 0,
            "--stack-edge-bottom": 0.22,
            "--stack-edge-top": 0.11,
            "--stack-recede": 0,
            "--stack-rim-light": 0,
            "--stack-saturate": 1,
            "--stack-shadow-depth": 0,
            "--stack-texture-opacity": 0.2,
            rotationX: 0,
            y: 112,
            scale: 0.982,
          },
          {
            rotationX: 0,
            y: 0,
            scale: 1,
            ease: "none",
            force3D: true,
            immediateRender: false,
            scrollTrigger: {
              trigger: nextSection,
              start: "top bottom",
              end: "top 16%",
              scrub: 0.75,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      return () => {
        gsap.set(sections, {
          clearProps:
            "transform,filter,transformPerspective,willChange,zIndex,--stack-blur,--stack-brightness,--stack-dim-bottom,--stack-dim-mid,--stack-dim-top,--stack-edge-bottom,--stack-edge-top,--stack-recede,--stack-rim-light,--stack-saturate,--stack-shadow-depth,--stack-texture-opacity",
        });
      };
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(sections, {
        clearProps:
          "transform,filter,transformPerspective,willChange,--stack-blur,--stack-brightness,--stack-dim-bottom,--stack-dim-mid,--stack-dim-top,--stack-edge-bottom,--stack-edge-top,--stack-recede,--stack-rim-light,--stack-saturate,--stack-shadow-depth,--stack-texture-opacity",
      });
    });

    return () => mm.revert();
  });

  return null;
}
