import { Hero } from "@/components/home/hero";
import { BookIntro } from "@/components/home/book-intro";
import { AuthorIntro } from "@/components/home/author-intro";
import { ReviewsSection } from "@/components/home/reviews-section";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary-950">
      <Hero />
      <BookIntro />
      <AuthorIntro />
      <ReviewsSection />
      <CtaSection />
    </main>
  );
}
