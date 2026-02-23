import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

// Sample podcast data - in production, this would come from your data source
const latestEpisodes = [
  {
    title: "Mastering Data Engineering as a Remote Worker",
    guest: "Jose Maria",
    season: 15,
    episode: 8,
    slug: "mastering-data-engineering-remote",
  },
  {
    title: "Democratizing Causality",
    guest: "Aleksander Molak",
    season: 15,
    episode: 7,
    slug: "democratizing-causality",
  },
  {
    title: "The Good, the Bad and the Ugly of GPT",
    guest: "Sandra Kublik",
    season: 15,
    episode: 6,
    slug: "gpt-good-bad-ugly",
  },
  {
    title: "LLMs for Everyone",
    guest: "Meryem Arik",
    season: 15,
    episode: 5,
    slug: "llms-for-everyone",
  },
  {
    title: "Investing in Open-Source Data Tools",
    guest: "Bela Wiertz",
    season: 15,
    episode: 4,
    slug: "investing-open-source-data-tools",
  },
]

export function PodcastSection() {
  return (
    <section className="border-t border-border bg-secondary/30 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Latest
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Podcast Episodes</h2>
          </div>
          <Link
            href="/podcast"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All episodes
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latestEpisodes.slice(0, 3).map((episode, index) => (
            <Link
              key={index}
              href={`/podcast/${episode.slug}`}
              className="group rounded-lg border border-border bg-card p-5 transition-colors hover:bg-secondary/50"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-muted-foreground">
                  S{episode.season} E{episode.episode}
                </span>
                <Play className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <h3 className="mt-3 font-medium leading-snug group-hover:underline">
                {episode.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                with {episode.guest}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          {latestEpisodes.slice(3).map((episode, index) => (
            <Link
              key={index}
              href={`/podcast/${episode.slug}`}
              className="flex items-center justify-between py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>
                {episode.title}{" "}
                <span className="text-muted-foreground/60">
                  with {episode.guest}
                </span>
              </span>
              <ArrowRight className="h-3 w-3 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
