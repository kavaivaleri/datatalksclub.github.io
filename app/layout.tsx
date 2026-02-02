import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "DataTalks.Club - The place to talk about data",
  description:
    "Global online community of data enthusiasts. Talk about data, machine learning, and engineering. Attend weekly events and learn from free courses.",
  openGraph: {
    title: "DataTalks.Club - The place to talk about data",
    description:
      "Global online community of data enthusiasts. Talk about data, machine learning, and engineering.",
    url: "https://datatalks.club",
    siteName: "DataTalks.Club",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataTalks.Club - The place to talk about data",
    description:
      "Global online community of data enthusiasts. Talk about data, machine learning, and engineering.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
