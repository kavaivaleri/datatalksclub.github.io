import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ValueProps } from "@/components/value-props"
import { EventsSection } from "@/components/events-section"
import { PodcastSection } from "@/components/podcast-section"
import { BooksSection } from "@/components/books-section"
import { ArticlesSection } from "@/components/articles-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ValueProps />
        <EventsSection />
        <PodcastSection />
        <BooksSection />
        <ArticlesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
