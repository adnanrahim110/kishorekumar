"use client";

import React, { useRef, ReactNode } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

type ButtonBaseProps = {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  tone?: "solid" | "soft";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
};

export type ButtonProps = ButtonBaseProps & 
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

const HOVER_MAP: Record<string, { bg: string; text: string }> = {
  primary:   { bg: "#d04e4c", text: "#ffffff" },
  secondary: { bg: "#1a2a37", text: "#ffffff" },
  outline:   { bg: "#d04e4c", text: "#ffffff" },
  ghost:     { bg: "#f4f8fb", text: "#1a2a37" },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  tone = "solid",
  icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  className,
  href,
  ...props
}: ButtonProps) {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isDisabled = disabled || loading;

  useGSAP(
    () => {
      if (isDisabled || !containerRef.current || !bgRef.current || !contentRef.current) return;

      const btn = containerRef.current;
      const bg = bgRef.current;
      const content = contentRef.current;
      const { text } = HOVER_MAP[variant] || HOVER_MAP.primary;

      let originalColor = "";

      const handleMouseEnter = () => {
        originalColor = getComputedStyle(content).color;

        gsap.to(btn, {
          scale: 1.04,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
        });

        gsap.to(bg, {
          scaleY: 1,
          duration: 0.45,
          ease: "power3.inOut",
        });

        gsap.to(content, {
          color: text,
          duration: 0.3,
          delay: 0.1,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(bg, {
          scaleY: 0,
          duration: 0.45,
          ease: "power3.inOut",
        });

        gsap.to(content, {
          color: originalColor,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef, dependencies: [isDisabled, variant] }
  );

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    icon: "p-3",
  };

  const variants = {
    primary: {
      solid: "bg-primary-50 text-primary-600 border border-primary-200 shadow-md shadow-primary-200/50",
      soft: "bg-primary-50 text-primary-600 border border-transparent",
    },
    secondary: {
      solid: "bg-secondary-50 text-secondary-800 border border-secondary-200 shadow-md shadow-secondary-200/50",
      soft: "bg-secondary-50 text-secondary-800 border border-transparent",
    },
    outline: {
      solid: "bg-transparent text-primary-600 border-2 border-primary-500",
      soft: "bg-transparent text-secondary-600 border border-secondary-200",
    },
    ghost: {
      solid: "bg-transparent text-primary-600 border border-transparent",
      soft: "bg-transparent text-secondary-600 border border-transparent",
    },
  };

  const disabledStyles = "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed shadow-none";

  const baseClasses = cn(
    "relative inline-flex items-center justify-center rounded-full font-medium overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
    sizes[size],
    isDisabled ? disabledStyles : variants[variant][tone],
    className
  );

  const { bg: hoverBgColor } = HOVER_MAP[variant] || HOVER_MAP.primary;

  const innerContent = (
    <>
      {!isDisabled && (
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full origin-bottom"
          style={{ backgroundColor: hoverBgColor, transform: "scaleY(0)" }}
        />
      )}

      <div ref={contentRef} className="relative z-10 flex items-center justify-center gap-2 w-full">
        {loading && disabled ? (
          <Loader2 className="animate-spin text-gray-400" size={size === "sm" ? 16 : 20} />
        ) : (
          <>
            {iconPosition === "left" && icon && <span className="shrink-0 flex items-center">{icon}</span>}
            {children && <span>{children}</span>}
            {iconPosition === "right" && icon && <span className="shrink-0 flex items-center">{icon}</span>}
          </>
        )}
      </div>
    </>
  );

  if (href && !isDisabled) {
    return (
      <Link href={href} ref={containerRef as any} className={baseClasses} {...(props as any)}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      ref={containerRef as any}
      type="button"
      disabled={isDisabled}
      className={baseClasses}
      {...(props as any)}
    >
      {innerContent}
    </button>
  );
}
