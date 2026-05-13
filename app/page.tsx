import { Hero } from "@/components/home/hero";
import { BookIntro } from "@/components/home/book-intro";
import { AuthorIntro } from "@/components/home/author-intro";
import { ReviewsSection } from "@/components/home/reviews-section";
import { CtaSection } from "@/components/home/cta-section";
import { SectionStack } from "@/components/layouts/section-stack";

export default function Home() {
  return (
    <main className="stacked-page min-h-screen bg-secondary-950">
      <SectionStack />
      <Hero />
      <BookIntro />
      <AuthorIntro />
      <ReviewsSection />
      <CtaSection />
    </main>
  );
}
