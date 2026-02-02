import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

// Sample book data - in production, this would come from your data source
const currentBook = {
  title: "Designing Machine Learning Systems",
  author: "Chip Huyen",
  description:
    "An iterative process for developing ML systems that are deployable, reliable, and scalable.",
  slug: "designing-ml-systems",
  startDate: "Jan 15",
  endDate: "Jan 22",
}

const recentBooks = [
  {
    title: "Fundamentals of Data Engineering",
    author: "Joe Reis & Matt Housley",
    slug: "fundamentals-data-engineering",
  },
  {
    title: "Machine Learning Engineering",
    author: "Andriy Burkov",
    slug: "ml-engineering",
  },
  {
    title: "Building Machine Learning Pipelines",
    author: "Hannes Hapke & Catherine Nelson",
    slug: "building-ml-pipelines",
  },
]

export function BooksSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              This Week
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Book of the Week</h2>
          </div>
          <Link
            href="/books"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All books
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Featured book */}
          <Link
            href={`/books/${currentBook.slug}`}
            className="group rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-12 shrink-0 items-center justify-center rounded bg-secondary">
                <BookOpen className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">
                  {currentBook.startDate} - {currentBook.endDate}
                </p>
                <h3 className="mt-1 text-lg font-medium leading-snug group-hover:underline">
                  {currentBook.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  by {currentBook.author}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {currentBook.description}
                </p>
              </div>
            </div>
          </Link>

          {/* Recent books list */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              Recent books
            </p>
            {recentBooks.map((book, index) => (
              <Link
                key={index}
                href={`/books/${book.slug}`}
                className="group flex items-center justify-between border-b border-border pb-4 last:border-0"
              >
                <div>
                  <p className="font-medium leading-snug group-hover:underline">
                    {book.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    by {book.author}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
