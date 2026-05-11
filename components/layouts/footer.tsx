import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Mail } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative -mt-12 z-[60] bg-secondary-950 text-secondary-50 pt-24 pb-8 overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] border-t border-white/5">
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-5">
        <h2 className="text-[15vw] font-heading font-bold whitespace-nowrap text-center leading-none mt-8">
          SYNTHETIC HEART
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-primary-300 mb-6 max-w-2xl">
            Ready to explore the depths of love and deception?
          </h3>
          <Button
            href="/about-book"
            variant="primary"
            size="lg"
            icon={
              <span className="bg-white/20 p-1.5 rounded-full">
                <ArrowRight size={18} />
              </span>
            }
            iconPosition="right"
          >
            Discover the Book
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-5">
            <h4 className="text-2xl font-heading font-bold text-white mb-4">
              Dr. Kishor K Tewary
            </h4>
            <p className="text-secondary-400 max-w-sm mb-8 leading-relaxed">
              Pediatrician, life coach, and author exploring the complex
              intersections of ambition, vulnerability, and the human heart.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-3 rounded-full bg-secondary-900 border border-secondary-800 text-primary-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="p-3 rounded-full bg-secondary-900 border border-secondary-800 text-primary-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="/contact"
                className="p-3 rounded-full bg-secondary-900 border border-secondary-800 text-primary-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <h5 className="text-lg font-bold text-white mb-6">Navigation</h5>
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-secondary-400 hover:text-primary-300 transition-colors inline-flex w-fit"
              >
                Home
              </Link>
              <Link
                href="/about-book"
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
          </div>

          <div className="md:col-span-2">
            <h5 className="text-lg font-bold text-white mb-6">Legal</h5>
            <div className="flex flex-col gap-4">
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
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-500">
            &copy; {new Date().getFullYear()} Dr. Kishor K Tewary. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-secondary-500">
            Designed with{" "}
            <Heart size={14} className="text-primary-500 fill-primary-500" />{" "}
            for storytelling
          </div>
        </div>
      </div>
    </footer>
  );
}
