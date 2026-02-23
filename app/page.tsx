import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { ScienceSection } from "@/components/science-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import {
  Headphones,
  Volume2,
  Radio,
  Layers,
  Shield,
  Thermometer,
  Droplets,
  Wind,
  Leaf,
  Sun,
  Sunset,
  Clock,
} from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#1A1B4B" }}>
      <Navigation />
      <HeroSection />

      {/* Sonics Section */}
      <ProductSection
        id="sonics"
        num="01"
        label="Sonics"
        title="White Noise, Reimagined"
        subtitle="Sound-Frequency Sleep Machines"
        description="Our sonic collection harnesses the power of binaural beats, pink noise, and frequency-tuned soundscapes. Each device is calibrated to guide your brainwaves from beta alertness to delta deep sleep — the same technology used in clinical sleep labs."
        image="/images/sound-machine.jpg"
        imageAlt="Premium white noise sound machine with frequency visualization"
        features={[
          {
            icon: <Headphones size={18} style={{ color: "#7FFFD4" }} />,
            title: "Binaural Beat Engine",
            description:
              "Dual-frequency audio creates precise Hz differentials that entrain brainwaves to target sleep stages.",
          },
          {
            icon: <Volume2 size={18} style={{ color: "#7FFFD4" }} />,
            title: "Adaptive Volume",
            description:
              "Smart sensors detect ambient noise and auto-adjust output, maintaining your ideal sound floor.",
          },
          {
            icon: <Radio size={18} style={{ color: "#7FFFD4" }} />,
            title: "40+ Soundscapes",
            description:
              "From ocean frequencies to rain on canvas — all recorded in spatial audio for 360-degree immersion.",
          },
        ]}
        accentColor="#7FFFD4"
      />

      {/* Weighted Section */}
      <ProductSection
        id="weighted"
        num="02"
        label="Weighted"
        title="Gravity as Therapy"
        subtitle="Deep Pressure Sensory Collection"
        description="Weighted therapy activates your parasympathetic nervous system through deep touch pressure stimulation. Our collection ranges from precision-engineered blankets to wearable vests — each calibrated to deliver the optimal 8-12% body weight ratio."
        image="/images/weighted-blanket.jpg"
        imageAlt="Luxurious weighted blanket with premium fabric texture"
        reversed
        features={[
          {
            icon: <Layers size={18} style={{ color: "#FFB347" }} />,
            title: "Micro-Bead Distribution",
            description:
              "Nano-glass beads in 4x4 inch pockets ensure even weight distribution with zero shifting.",
          },
          {
            icon: <Shield size={18} style={{ color: "#FFB347" }} />,
            title: "Cooling Tech Fabric",
            description:
              "Phase-change material woven into the cover actively regulates temperature throughout the night.",
          },
          {
            icon: <Thermometer size={18} style={{ color: "#FFB347" }} />,
            title: "Custom Weight Calc",
            description:
              "Our algorithm recommends the precise weight based on your body metrics and sleep profile.",
          },
        ]}
        accentColor="#FFB347"
      />

      {/* Aromas Section */}
      <ProductSection
        id="aromas"
        num="03"
        label="Aromas"
        title="Scent-Coded Sleep"
        subtitle="Aromatherapy Diffusion Systems"
        description="The olfactory system is the fastest pathway to the limbic brain — the center of emotion and memory. Our diffusion systems use ultrasonic nebulization to deliver therapeutic-grade essential oils in precisely measured doses."
        image="/images/aromatherapy.jpg"
        imageAlt="Elegant aromatherapy diffuser with essential oils and lavender"
        features={[
          {
            icon: <Droplets size={18} style={{ color: "#7FFFD4" }} />,
            title: "Ultrasonic Nebulization",
            description:
              "Cold-mist technology preserves the molecular integrity of essential oils at therapeutic concentrations.",
          },
          {
            icon: <Wind size={18} style={{ color: "#7FFFD4" }} />,
            title: "Timed Release Cycles",
            description:
              "Programmable diffusion intervals match your sleep cycles for optimal scent exposure during Stage 3.",
          },
          {
            icon: <Leaf size={18} style={{ color: "#7FFFD4" }} />,
            title: "Lab-Verified Oils",
            description:
              "Every batch is GC/MS tested for purity. No synthetics. No fillers. Just the molecule.",
          },
        ]}
        accentColor="#7FFFD4"
      />

      {/* Lumina Section */}
      <ProductSection
        id="lumina"
        num="04"
        label="Lumina"
        title="Light That Heals"
        subtitle="Circadian Light Therapy"
        description="Light is the master clock of your biology. Our Lumina collection uses calibrated wavelengths to sync your circadian rhythm — warm amber for evening wind-down, and bright blue-enriched white for morning activation."
        image="/images/light-therapy.jpg"
        imageAlt="Sunset lamp light therapy device casting warm gradient light"
        reversed
        features={[
          {
            icon: <Sun size={18} style={{ color: "#FFB347" }} />,
            title: "Wavelength Precision",
            description:
              "LEDs tuned to exact nanometer ranges for melatonin suppression (morning) and production (evening).",
          },
          {
            icon: <Sunset size={18} style={{ color: "#FFB347" }} />,
            title: "Sunset Simulation",
            description:
              "30-minute gradual dimming that mimics a natural sunset to trigger your body's sleep preparation.",
          },
          {
            icon: <Clock size={18} style={{ color: "#FFB347" }} />,
            title: "Dawn Wake Protocol",
            description:
              "Gentle sunrise simulation wakes you during light sleep, eliminating alarm-induced cortisol spikes.",
          },
        ]}
        accentColor="#FFB347"
      />

      <ScienceSection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  )
}
