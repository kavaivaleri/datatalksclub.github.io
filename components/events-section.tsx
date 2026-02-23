import Link from "next/link"
import { ArrowRight, Calendar, Video, Mic, Presentation } from "lucide-react"

// Sample events data - in production, this would come from your data source
const upcomingEvents = [
  {
    title: "Make Data Magical with Mage",
    speaker: "Matt Palmer",
    type: "workshop",
    date: "Sep 19, 2023",
    time: "17:00 UTC",
  },
  {
    title: "Mastering Data Engineering as a Remote Worker",
    speaker: "Jose Maria",
    type: "podcast",
    date: "Aug 14, 2023",
    time: "17:00 UTC",
  },
  {
    title: "Democratizing Causality",
    speaker: "Aleksander Molak",
    type: "podcast",
    date: "Aug 15, 2023",
    time: "17:00 UTC",
  },
  {
    title: "The Good, the Bad and the Ugly of GPT",
    speaker: "Sandra Kublik",
    type: "podcast",
    date: "Jul 31, 2023",
    time: "17:00 UTC",
  },
]

const typeIcons: Record<string, typeof Calendar> = {
  workshop: Presentation,
  podcast: Mic,
  webinar: Video,
}

const typeLabels: Record<string, string> = {
  workshop: "Workshop",
  podcast: "Podcast",
  webinar: "Webinar",
}

export function EventsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Upcoming
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Events</h2>
          </div>
          <Link
            href="/events"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="space-y-1">
          {upcomingEvents.map((event, index) => {
            const Icon = typeIcons[event.type] || Calendar
            return (
              <div
                key={index}
                className="group flex flex-col gap-2 border-b border-border py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium leading-snug group-hover:underline">
                      {event.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      with {event.speaker}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-7 sm:pl-0">
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                    {typeLabels[event.type]}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {event.date}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Subscribe to{" "}
          <a
            href="https://calendar.google.com/calendar/?cid=ZjhxaWRqbnEwamhzY3A4ODA5azFlZ2hzNjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            our Google calendar
          </a>{" "}
          to get notified about all events.
        </p>
      </div>
    </section>
  )
}
