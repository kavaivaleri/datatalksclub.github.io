import Link from "next/link"
import { Youtube, Linkedin, Twitter, Github } from "lucide-react"

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/DataTalksClub",
    icon: Youtube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/datatalks-club/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/DataTalksClub",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/DataTalksClub/",
    icon: Github,
  },
]

const footerLinks = [
  { name: "Articles", href: "/articles" },
  { name: "Events", href: "/events" },
  { name: "Podcast", href: "/podcast" },
  { name: "Books", href: "/books" },
  { name: "Courses", href: "/courses" },
  { name: "Support Us", href: "/support" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Link href="/" className="text-lg font-semibold">
              DataTalks.Club
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Global online community of data enthusiasts. The place to talk
              about data, machine learning, and engineering.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} DataTalks.Club. Built with the community,
            for the community.
          </p>
        </div>
      </div>
    </footer>
  )
}
