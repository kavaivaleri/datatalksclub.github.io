import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Sample articles data - in production, this would come from your data source
const latestArticles = [
  {
    title: "How to Build a Data Engineering Portfolio",
    author: "Alexey Grigorev",
    slug: "data-engineering-portfolio",
    excerpt:
      "A comprehensive guide to building a portfolio that showcases your data engineering skills.",
  },
  {
    title: "Getting Started with MLOps",
    author: "Victoria Lo",
    slug: "getting-started-mlops",
    excerpt:
      "Learn the fundamentals of MLOps and how to implement it in your organization.",
  },
  {
    title: "Data Science Interview Tips",
    author: "Luke Whipps",
    slug: "data-science-interview-tips",
    excerpt:
      "Practical advice for preparing and succeeding in data science interviews.",
  },
  {
    title: "Python Best Practices for Data Scientists",
    author: "Katharine Jarmul",
    slug: "python-best-practices",
    excerpt:
      "Write cleaner, more maintainable Python code for your data science projects.",
  },
]

export function ArticlesSection() {
  return (
    <section className="border-t border-border bg-secondary/30 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Latest
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Articles</h2>
          </div>
          <Link
            href="/articles"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All articles
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {latestArticles.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${article.slug}`}
              className="group border-b border-border pb-6 last:border-0 md:border-0 md:pb-0"
            >
              <h3 className="font-medium leading-snug group-hover:underline">
                {article.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                by {article.author}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
