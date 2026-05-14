"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";
import { stackDefaults } from "@/utils/animations";

gsap.registerPlugin(ScrollTrigger);

const STACK_CARD_SELECTOR = "[data-stack-card]";
const STACK_DIM_SELECTOR = "[data-stack-dim]";

export function StackScene({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        rootRef.current.querySelectorAll(STACK_CARD_SELECTOR),
      );
      const dimLayers = gsap.utils.toArray<HTMLElement>(
        rootRef.current.querySelectorAll(STACK_DIM_SELECTOR),
      );

      if (cards.length < 2) return;

      ScrollTrigger.saveStyles([...cards, ...dimLayers]);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(cards, {
          transformPerspective: 1200,
          transformOrigin: "top center",
          opacity: 1,
          willChange: "transform, opacity",
        });
        gsap.set(dimLayers, {
          opacity: 0,
          willChange: "opacity",
        });

        cards.forEach((card, index) => {
          gsap.set(card, { zIndex: 20 + index * 10 });

          const nextCard = cards[index + 1];
          if (!nextCard) return;
          const dimLayer = card.querySelector<HTMLElement>(STACK_DIM_SELECTOR);

          ScrollTrigger.create({
            trigger: nextCard,
            start: "top bottom",
            end: "top top",
            pin: card,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

          const stackTimeline = gsap.timeline({
            defaults: { ease: "none", force3D: true },
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom",
              end: stackDefaults.outgoingEnd,
              scrub: stackDefaults.scrub,
              invalidateOnRefresh: true,
            },
          });

          stackTimeline.to(
            card,
            {
              opacity: stackDefaults.outgoingOpacity,
              rotationX: 0.8,
              y: stackDefaults.outgoingY,
              scale: stackDefaults.outgoingScale,
            },
            0,
          );

          if (dimLayer) {
            stackTimeline.to(
              dimLayer,
              {
                opacity: stackDefaults.dimOpacity,
              },
              0,
            );
          }

          gsap.fromTo(
            nextCard,
            {
              rotationX: 0,
              y: stackDefaults.incomingY,
              scale: 0.982,
              opacity: 1,
            },
            {
              rotationX: 0,
              y: 0,
              scale: 1,
              ease: "none",
              force3D: true,
              immediateRender: false,
              scrollTrigger: {
                trigger: nextCard,
                start: "top bottom",
                end: stackDefaults.incomingEnd,
                scrub: stackDefaults.scrub,
                invalidateOnRefresh: true,
              },
            },
          );
        });

        return () => {
          gsap.set(cards, {
            clearProps:
              "transform,opacity,transformPerspective,willChange,zIndex",
          });
          gsap.set(dimLayers, {
            clearProps: "opacity,willChange",
          });
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(cards, {
          clearProps: "transform,opacity,transformPerspective,willChange",
        });
        gsap.set(dimLayers, {
          clearProps: "opacity,willChange",
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="relative flex min-h-screen flex-1 flex-col bg-secondary-950 [background:radial-gradient(circle_at_50%_0%,rgba(208,78,76,0.16),transparent_34rem),var(--color-secondary-950)]"
    >
      {children}
    </div>
  );
}
