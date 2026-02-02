import { MessageSquare, Calendar, BookOpen } from "lucide-react"

const props = [
  {
    icon: MessageSquare,
    title: "Community Discussions",
    description:
      "Talk about data, machine learning, and engineering with practitioners from around the world.",
  },
  {
    icon: Calendar,
    title: "Weekly Events",
    description:
      "Attend webinars, workshops, and live podcast recordings. Learn from industry experts for free.",
  },
  {
    icon: BookOpen,
    title: "Free Courses",
    description:
      "Access comprehensive courses on data engineering, ML engineering, MLOps, and more.",
  },
]

export function ValueProps() {
  return (
    <section className="border-y border-border bg-secondary/50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          {props.map((prop, index) => (
            <div key={index} className="space-y-3">
              <prop.icon className="h-6 w-6 text-muted-foreground" />
              <h3 className="text-lg font-medium">{prop.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
