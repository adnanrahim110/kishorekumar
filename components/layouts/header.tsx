"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { LayoutGroup, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/", count: "01" },
  { label: "Book", href: "/about-book", count: "02" },
  { label: "Author", href: "/about-author", count: "03" },
  { label: "Contact", href: "/contact", count: "04" },
];

const premiumEase = [0.22, 1, 0.36, 1] as const;

const layoutTransition = {
  layout: {
    duration: 0.52,
    ease: premiumEase,
  },
};

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const logoExpanded = !scrolled || logoOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-100 pointer-events-none px-3 pt-3 sm:px-5 lg:px-8">
      <LayoutGroup id="header-logo">
        <motion.div
          layout
          transition={layoutTransition}
          onHoverStart={() => setLogoOpen(true)}
          onHoverEnd={() => setLogoOpen(false)}
          onFocus={() => setLogoOpen(true)}
          onBlur={() => setLogoOpen(false)}
          className="pointer-events-auto fixed left-3 top-3 isolate overflow-hidden rounded-xl border border-white/12 bg-secondary-950/82 p-1.5 text-white shadow-[0_22px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:left-5 sm:top-5 lg:left-8 lg:top-8"
        >
          <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_48%,rgba(76,136,171,0.16))]" />

          <Link
            href="/"
            className="group relative z-10 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            aria-label="Synthetic Heart home"
          >
            <motion.span
              layout
              transition={layoutTransition}
              className="relative grid h-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-primary-500 px-2.5 shadow-[0_0_40px_rgba(208,78,76,0.42)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_56%)]" />
              <motion.span
                layout
                transition={layoutTransition}
                className="relative grid place-items-center"
              >
                <Image
                  src="/imgs/icon.png"
                  alt=""
                  width={720}
                  height={720}
                  priority
                  className="h-8 w-auto object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.24)]"
                />
              </motion.span>
            </motion.span>

            <motion.span
              layout
              transition={layoutTransition}
              animate={{
                width: logoExpanded ? "auto" : 0,
                opacity: logoExpanded ? 1 : 0,
                filter: logoExpanded ? "blur(0px)" : "blur(4px)",
              }}
              className="relative flex h-10 min-w-0 items-center overflow-hidden"
            >
              <motion.span
                layout
                transition={layoutTransition}
                animate={{
                  x: logoExpanded ? 0 : -10,
                  paddingLeft: logoExpanded ? 16 : 0,
                  paddingRight: logoExpanded ? 16 : 0,
                }}
                className="relative flex h-10 shrink-0 items-start"
              >
                <span className="block whitespace-nowrap font-heading text-[1.35rem] font-black leading-none tracking-wide uppercase text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.22)] sm:text-[2.2rem]">
                  Kishore Kumar
                </span>
                <motion.span
                  aria-hidden="true"
                  animate={{ scaleX: logoExpanded ? 0.75 : 0 }}
                  transition={{
                    duration: 0.42,
                    ease: premiumEase,
                  }}
                  className="absolute bottom-1.5 left-4 right-4 h-px origin-left bg-linear-to-r from-primary-400/90 via-white/20 to-transparent group-hover:scale-x-100"
                />
              </motion.span>
            </motion.span>
          </Link>
        </motion.div>
      </LayoutGroup>

      <LayoutGroup id="header-navigation">
        <motion.nav
          layout
          transition={layoutTransition}
          className="pointer-events-auto fixed right-3 top-3 isolate overflow-hidden border border-white/10 bg-secondary-950/78 p-1.5 text-white shadow-[0_18px_58px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:right-5 sm:top-5 lg:right-8 lg:top-8 rounded-xl"
          aria-label="Primary navigation"
        >
          <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.07),transparent_42%,rgba(208,78,76,0.13))]" />

          <motion.div
            layout
            transition={layoutTransition}
            className={cn(
              "relative z-10 flex",
              scrolled ? "flex-col items-stretch gap-0" : "items-center gap-2",
            )}
          >
            {navLinks.map((item) => (
              <motion.div
                key={item.href}
                layout="position"
                transition={layoutTransition}
                className="shrink-0"
              >
                <HeaderNavLink
                  href={item.href}
                  label={item.label}
                  count={item.count}
                  isActive={pathname === item.href}
                  layout={scrolled ? "column" : "row"}
                />
              </motion.div>
            ))}

            <motion.div
              layout="position"
              transition={layoutTransition}
              className="shrink-0"
            >
              <Button
                href="/shop"
                variant="primary"
                tone="solid"
                size="sm"
                icon={<AmazonIcon />}
                iconPosition="right"
                className={cn(
                  "h-10 rounded-lg border-primary-500 bg-primary-500 px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-none",
                  scrolled && "w-full mt-2",
                )}
              >
                Buy Book
              </Button>
            </motion.div>
          </motion.div>
        </motion.nav>
      </LayoutGroup>
    </header>
  );
}

function AmazonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 448 512"
      width={18}
      height={18}
      fill="currentColor"
      focusable="false"
      className="block shrink-0"
    >
      <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" />
    </svg>
  );
}

function HeaderNavLink({
  href,
  label,
  count,
  isActive,
  layout,
}: {
  href: string;
  label: string;
  count: string;
  isActive: boolean;
  layout: "row" | "column";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center rounded-lg px-3 py-3 text-xs uppercase leading-none text-white/70 transition-colors duration-320 after:pointer-events-none after:absolute after:left-3 after:right-3 after:bottom-2 after:h-px after:origin-right after:scale-x-0 after:bg-primary-300 after:transition-transform after:duration-420 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 motion-reduce:after:transition-none",
        isActive && "text-white after:origin-left after:scale-x-100",
        layout === "column" && "justify-between",
      )}
    >
      <span
        className={cn(
          "relative z-10 shrink-0 font-heading text-[11px] font-black tracking-[0.12em]",
          isActive
            ? "text-primary-200"
            : "text-primary-400 group-hover:text-primary-200",
        )}
      >
        {count}
      </span>
      <span
        className={cn(
          "relative z-10 ml-3 shrink-0 whitespace-nowrap font-bold tracking-[0.09em]",
          layout === "column" ? "text-xs" : "text-[11px]",
        )}
      >
        {label}
      </span>
    </Link>
  );
}
