import { BookDetailsSection } from "@/components/book/book-details-section";
import { BookHero } from "@/components/book/book-hero";
import { BookReviewsSection } from "@/components/book/book-reviews-section";
import { CtaSection } from "@/components/home/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synthetic Heart Book - Dr. Kishor K Tewary",
  description:
    "Explore Synthetic Heart, a romantic thriller about love, deception, artificial intelligence, and the human choices that follow.",
};

export default function BookPage() {
  return (
    <>
      <BookHero />
      <BookDetailsSection />
      <BookReviewsSection />
      <CtaSection
        eyebrow="Book Edition"
        title="Get Your Copy of Synthetic Heart"
        description="Get Synthetic Heart and enter a story where desire, memory, and machine intelligence keep pulling the same secret into the light."
        details={[
          { label: "Format", value: "Print Edition" },
          { label: "Mood", value: "Tense and Intimate" },
          { label: "Status", value: "Available Now" },
        ]}
        primaryAction={{ href: "/shop", label: "Buy Your Copy" }}
        secondaryAction={{ href: "#book-reviews", label: "Read Reviews" }}
        backdropText="Book Copy"
      />
    </>
  );
}
