"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
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

const hoverBgClasses = {
  primary: "bg-primary-500",
  secondary: "bg-secondary-950",
  outline: "bg-primary-500",
  ghost: "bg-secondary-50",
};

const hoverTextClasses = {
  primary: "group-hover:text-white",
  secondary: "group-hover:text-white",
  outline: "group-hover:text-white",
  ghost: "group-hover:text-secondary-950",
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
  const isDisabled = disabled || loading;

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
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
    sizes[size],
    isDisabled ? disabledStyles : variants[variant][tone],
    className
  );

  const innerContent = (
    <>
      {!isDisabled && (
        <div
          className={cn(
            "absolute inset-0 h-full w-full origin-bottom scale-y-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100",
            hoverBgClasses[variant],
          )}
        />
      )}

      <div
        className={cn(
          "relative z-10 flex w-full items-center justify-center gap-2 transition-colors duration-300",
          !isDisabled && hoverTextClasses[variant],
        )}
      >
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
    const linkProps = props as Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof ButtonBaseProps
    >;

    return (
      <Link href={href} className={baseClasses} {...linkProps}>
        {innerContent}
      </Link>
    );
  }

  const buttonProps = props as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps
  >;

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={baseClasses}
      {...buttonProps}
    >
      {innerContent}
    </button>
  );
}
