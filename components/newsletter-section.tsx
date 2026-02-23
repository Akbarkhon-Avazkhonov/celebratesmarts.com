"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255, 179, 71, 0.05) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-balance"
          style={{ color: "#E0E0E0" }}
        >
          Join the Dream Frequency
        </h2>
        <p
          className="mt-4 text-base font-mono"
          style={{ color: "#a0a0b8" }}
        >
          Get exclusive access to sleep-science insights, new product drops, and
          personalized rest protocols delivered to your inbox.
        </p>

        {submitted ? (
          <div
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-bold text-sm"
            style={{
              background: "rgba(127, 255, 212, 0.1)",
              border: "1px solid rgba(127, 255, 212, 0.3)",
              color: "#7FFFD4",
            }}
          >
            Welcome to the frequency. Check your inbox.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3 rounded-full text-sm font-mono outline-none transition-all duration-300 focus:ring-2"
              style={{
                background: "rgba(46, 48, 120, 0.6)",
                border: "1px solid rgba(127, 255, 212, 0.2)",
                color: "#E0E0E0",
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFB347]/20"
              style={{
                backgroundColor: "#FFB347",
                color: "#1A1B4B",
              }}
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
