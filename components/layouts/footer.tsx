import { StackCard } from "@/components/layouts/stack-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <StackCard
      as="footer"
      variant="footer"
      aria-labelledby="footer-heading"
      className="pt-14 pb-7 md:pt-28"
    >
      <div className="absolute -top-8 left-0 w-full overflow-hidden pointer-events-none select-none opacity-3">
        <h2 className="mt-3 text-center font-heading text-[17vw] font-bold leading-none whitespace-nowrap">
          SYNTHETIC HEART
        </h2>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-secondary-800/80 pb-8 md:flex-row md:items-center">
          <h3
            id="footer-heading"
            className="max-w-4xl font-heading text-3xl font-bold leading-tight text-primary-300 md:text-4xl lg:text-6xl"
          >
            Ready to explore the depths of love and deception?
          </h3>
          <Button
            href="/book"
            variant="primary"
            size="md"
            icon={
              <span className="rounded-full bg-white/20 p-1">
                <ArrowRight size={16} />
              </span>
            }
            iconPosition="right"
            className="shrink-0"
          >
            Discover the Book
          </Button>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-9 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="mb-3">
              <Image
                src="/imgs/logo-w.png"
                width={720}
                height={400}
                className="w-auto h-18"
                alt="Kishore Kumar - Logo"
              />
            </div>
            <p className="mb-5 max-w-sm leading-relaxed text-secondary-400">
              Pediatrician, life coach, and author exploring the complex
              intersections of ambition, vulnerability, and the human heart.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="rounded-full border border-secondary-800 bg-secondary-900 p-2.5 text-primary-400 transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                href="#"
                className="rounded-full border border-secondary-800 bg-secondary-900 p-2.5 text-primary-400 transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-secondary-800 bg-secondary-900 p-2.5 text-primary-400 transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          <nav
            className="md:col-span-3 md:col-start-8"
            aria-label="Footer navigation"
          >
            <h5 className="mb-4 text-3xl tracking-wide font-bold text-white">
              Navigation
            </h5>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-secondary-400 hover:text-primary-300 transition-colors inline-flex w-fit"
              >
                Home
              </Link>
              <Link
                href="/book"
                className="text-secondary-400 hover:text-primary-300 transition-colors inline-flex w-fit"
              >
                About the Book
              </Link>
              <Link
                href="/about-me"
                className="text-secondary-400 hover:text-primary-300 transition-colors inline-flex w-fit"
              >
                Meet the Author
              </Link>
              <Link
                href="/contact"
                className="text-secondary-400 hover:text-primary-300 transition-colors inline-flex w-fit"
              >
                Get in Touch
              </Link>
            </div>
          </nav>

          <nav className="md:col-span-2" aria-label="Legal navigation">
            <h5 className="mb-4 text-3xl tracking-wide font-bold text-white">
              Legal
            </h5>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="text-secondary-400 hover:text-primary-300 transition-colors inline-flex w-fit"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-secondary-400 hover:text-primary-300 transition-colors inline-flex w-fit"
              >
                Terms of Service
              </Link>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-secondary-800 pt-5 md:flex-row">
          <p className="text-sm text-secondary-500">
            &copy; {new Date().getFullYear()} Dr. Kishor K Tewary. All rights
            reserved.
          </p>
        </div>
      </div>
    </StackCard>
  );
}
