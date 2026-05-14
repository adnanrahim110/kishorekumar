import { cn } from "@/utils/cn";
import { forwardRef, type ReactNode, type Ref } from "react";

type StackCardTag = "section" | "footer";
type StackCardVariant = "hero" | "dark" | "light" | "primary" | "footer";

type StackCardProps = {
  as?: StackCardTag;
  id?: string;
  variant: StackCardVariant;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
};

const variantClasses: Record<StackCardVariant, string> = {
  hero: "mt-0 min-h-screen rounded-none border-t-0 bg-secondary-950 text-white shadow-none",
  dark: "-mt-12 rounded-t-[3rem] border-t border-white/5 bg-secondary-950 text-white shadow-[0_-30px_90px_rgba(0,0,0,0.46)]",
  light:
    "-mt-12 rounded-t-[3rem] border-t border-secondary-200/40 bg-secondary-50 text-secondary-950 shadow-[0_-30px_90px_rgba(0,0,0,0.46)]",
  primary:
    "-mt-12 rounded-t-[3rem] border-t border-white/5 bg-primary-500 text-white shadow-[0_-30px_90px_rgba(0,0,0,0.46)]",
  footer:
    "-mt-12 rounded-t-[3rem] border-t border-white/5 bg-secondary-950 text-secondary-50 shadow-[0_-20px_60px_rgba(0,0,0,0.46)]",
};

const textureLayer =
  "pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_12px),linear-gradient(to_bottom,rgba(255,255,255,0.12),transparent_7rem),radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.1),transparent_28rem),radial-gradient(circle_at_82%_12%,rgba(208,78,76,0.11),transparent_24rem)]";

const dimLayer =
  "pointer-events-none absolute inset-0 z-[30] rounded-[inherit] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.24))] opacity-0 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.38),0_-32px_70px_rgba(0,0,0,0.28)]";

export const StackCard = forwardRef<HTMLElement, StackCardProps>(
  function StackCard(
    {
      as = "section",
      id,
      variant,
      className,
      children,
      "aria-labelledby": ariaLabelledBy,
    },
    ref,
  ) {
    const classes = cn(
      "relative isolate overflow-hidden [backface-visibility:hidden]",
      variantClasses[variant],
      className,
    );

    const content = (
      <>
        <div aria-hidden="true" className={textureLayer} />
        {children}
        <div aria-hidden="true" data-stack-dim className={dimLayer} />
      </>
    );

    if (as === "footer") {
      return (
        <footer
          ref={ref as Ref<HTMLElement>}
          id={id}
          data-stack-card
          data-stack-variant={variant}
          aria-labelledby={ariaLabelledBy}
          className={classes}
        >
          {content}
        </footer>
      );
    }

    return (
      <section
        ref={ref as Ref<HTMLElement>}
        id={id}
        data-stack-card
        data-stack-variant={variant}
        aria-labelledby={ariaLabelledBy}
        className={classes}
      >
        {content}
      </section>
    );
  },
);
