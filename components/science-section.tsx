"use client"

import { Brain, Moon, Zap, Heart } from "lucide-react"

const stats = [
  {
    icon: <Moon size={24} style={{ color: "#FFB347" }} />,
    value: "73%",
    label: "Fall asleep faster",
    description: "Users report reduced sleep onset latency within 2 weeks",
  },
  {
    icon: <Brain size={24} style={{ color: "#7FFFD4" }} />,
    value: "2.4x",
    label: "Deeper REM cycles",
    description: "Measured via EEG studies on sound-frequency therapy",
  },
  {
    icon: <Heart size={24} style={{ color: "#FFB347" }} />,
    value: "89%",
    label: "Reduced anxiety",
    description: "Weighted therapy decreases cortisol by significant margins",
  },
  {
    icon: <Zap size={24} style={{ color: "#7FFFD4" }} />,
    value: "61%",
    label: "More morning energy",
    description: "Optimized circadian alignment through light therapy",
  },
]

export function ScienceSection() {
  return (
    <section id="science" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(127, 255, 212, 0.03) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="text-xs font-mono tracking-widest"
              style={{ color: "#7FFFD4" }}
            >
              [05]
            </span>
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "#a0a0b8" }}
            >
              The Data
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-balance"
            style={{ color: "#E0E0E0" }}
          >
            Backed by Sleep Science
          </h2>
          <p
            className="mt-4 text-lg font-mono max-w-2xl mx-auto"
            style={{ color: "#a0a0b8" }}
          >
            Every product in our collection is informed by peer-reviewed research
            in chronobiology, neuroscience, and sensory therapy.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-[#7FFFD4]/20"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div
                className="text-4xl lg:text-5xl font-sans font-extrabold mb-2"
                style={{ color: "#E0E0E0" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-sans font-bold mb-2"
                style={{ color: "#FFB347" }}
              >
                {stat.label}
              </div>
              <p
                className="text-xs font-mono leading-relaxed"
                style={{ color: "#a0a0b8" }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
