import { NewsletterForm } from "./newsletter-form"

export function CTASection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-lg border border-border bg-card p-8 md:p-12">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold">Stay in the loop</h2>
            <p className="mt-2 text-muted-foreground">
              Get weekly updates about upcoming events, new podcast episodes,
              and community highlights. No spam, unsubscribe anytime.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
