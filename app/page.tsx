import { AuthorIntro } from "@/components/home/author-intro";
import { BookIntro } from "@/components/home/book-intro";
import { CtaSection } from "@/components/home/cta-section";
import { Hero } from "@/components/home/hero";
import { ReviewsSection } from "@/components/home/reviews-section";

export default function Home() {
  return (
    <>
      <Hero />
      <BookIntro />
      <AuthorIntro />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}
