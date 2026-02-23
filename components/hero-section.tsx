import Link from "next/link"
import { NewsletterForm } from "./newsletter-form"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Global Community
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
            The place to talk about data
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Join a global community of data enthusiasts. Discuss data science,
            machine learning, and engineering. Attend weekly events and learn
            from free courses.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <NewsletterForm />
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
            <Link
              href="/slack"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              Join our Slack
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="/events"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              View Events
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="/courses"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              Free Courses
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
