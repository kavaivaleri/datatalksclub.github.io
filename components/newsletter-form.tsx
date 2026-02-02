"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus("success")
    setEmail("")
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-accent">
        <Check className="h-4 w-4" />
        <span>Thanks for subscribing!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-11 flex-1 border-border bg-card"
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-11 gap-2 bg-primary px-6 text-primary-foreground hover:bg-primary/90"
      >
        Subscribe
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  )
}
