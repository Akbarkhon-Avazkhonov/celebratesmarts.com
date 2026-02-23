"use client"

import Image from "next/image"
import { useRef } from "react"
import type { ReactNode } from "react"

interface ProductSectionProps {
  id: string
  num: string
  label: string
  title: string
  subtitle: string
  description: string
  features: { icon: ReactNode; title: string; description: string }[]
  image: string
  imageAlt: string
  reversed?: boolean
  accentColor?: string
}

export function ProductSection({
  id,
  num,
  label,
  title,
  subtitle,
  description,
  features,
  image,
  imageAlt,
  reversed = false,
  accentColor = "#7FFFD4",
}: ProductSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background accent glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          top: "20%",
          [reversed ? "left" : "right"]: "-5%",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-mono tracking-widest"
              style={{ color: accentColor }}
            >
              [{num}]
            </span>
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "#a0a0b8" }}
            >
              {label}
            </span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: `${accentColor}20` }}
            />
          </div>
        </div>

        <div
          className={`flex flex-col ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-12 lg:gap-20`}
        >
          {/* Image */}
          <div className="flex-1 relative">
            <div
              className="absolute inset-0 rounded-3xl opacity-20 blur-2xl"
              style={{
                background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
              }}
              aria-hidden="true"
            />
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={400}
              className="relative rounded-3xl shadow-xl w-full object-cover aspect-[3/2]"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold leading-tight tracking-tight text-balance"
              style={{ color: "#E0E0E0" }}
            >
              {title}
            </h2>
            <p
              className="mt-2 text-lg font-sans font-medium"
              style={{ color: accentColor }}
            >
              {subtitle}
            </p>
            <p
              className="mt-6 text-base leading-relaxed font-mono"
              style={{ color: "#a0a0b8" }}
            >
              {description}
            </p>

            {/* Features */}
            <div className="mt-10 flex flex-col gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${accentColor}15`,
                      border: `1px solid ${accentColor}30`,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className="font-sans font-bold text-sm"
                      style={{ color: "#E0E0E0" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="mt-1 text-sm font-mono leading-relaxed"
                      style={{ color: "#a0a0b8" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 mt-10 px-6 py-3 rounded-full font-sans font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: accentColor,
                color: "#1A1B4B",
              }}
            >
              Shop {label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
