"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About the Book", href: "/about-book" },
  { name: "About Me", href: "/about-me" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8 flex justify-center items-center pointer-events-none">
      <nav className="pointer-events-auto bg-white/80 backdrop-blur-md border border-primary-100 shadow-sm rounded-full px-6 py-3 flex items-center gap-6 transition-all duration-300">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={twMerge(
                clsx(
                  "text-sm md:text-base font-medium transition-colors duration-300 rounded-full px-4 py-2 hover:bg-primary-50 hover:text-primary-600",
                  isActive
                    ? "bg-primary-100 text-primary-700 shadow-inner"
                    : "text-secondary-700"
                )
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
