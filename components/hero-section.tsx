"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aura gradient blobs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30 animate-drift blur-3xl"
        style={{ background: "radial-gradient(circle, #7FFFD4 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 animate-drift blur-3xl"
        style={{
          background: "radial-gradient(circle, #FFB347 0%, transparent 70%)",
          animationDelay: "7s",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full opacity-15 animate-drift blur-3xl"
        style={{
          background: "radial-gradient(circle, #9b7bff 0%, transparent 70%)",
          animationDelay: "14s",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider mb-8"
            style={{
              background: "rgba(127, 255, 212, 0.1)",
              border: "1px solid rgba(127, 255, 212, 0.2)",
              color: "#7FFFD4",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7FFFD4] animate-pulse" />
            THE DREAM-STATE LABORATORY
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-sans font-extrabold leading-tight tracking-tight text-balance"
            style={{ color: "#E0E0E0" }}
          >
            Optimize Your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #FFB347, #FF8C42)",
              }}
            >
              Subconscious.
            </span>
          </h1>

          <p
            className="mt-6 text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-mono"
            style={{ color: "#a0a0b8" }}
          >
            Celebrate the brilliance of deep rest. From sound-frequency machines
            to weighted sensory therapy — we curate the technology of
            tranquility.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#sonics"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFB347]/20"
              style={{
                backgroundColor: "#FFB347",
                color: "#1A1B4B",
              }}
            >
              Explore the Collection
            </a>
            <a
              href="#science"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(127, 255, 212, 0.3)",
                color: "#7FFFD4",
              }}
            >
              The Science
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 relative flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, #7FFFD4 0%, #1A1B4B 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative animate-float">
            <Image
              src="/images/hero-diffuser.jpg"
              alt="Premium aromatherapy diffuser emitting soft purple mist"
              width={500}
              height={500}
              className="rounded-3xl shadow-2xl shadow-[#7FFFD4]/10"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-mono" style={{ color: "#a0a0b8" }}>
          Scroll to explore
        </span>
        <ArrowDown size={16} style={{ color: "#7FFFD4" }} />
      </div>
    </section>
  )
}
