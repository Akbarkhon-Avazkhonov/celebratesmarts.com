"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Sonics", href: "#sonics", num: "01" },
  { label: "Weighted", href: "#weighted", num: "02" },
  { label: "Aromas", href: "#aromas", num: "03" },
  { label: "Lumina", href: "#lumina", num: "04" },
  { label: "Science", href: "#science", num: "05" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "glass-pill shadow-lg shadow-[#7FFFD4]/5" : "glass-pill"
      } rounded-full px-6 py-3 flex items-center gap-6`}
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="#"
        className="font-sans font-bold text-lg tracking-tight"
        style={{ color: "#FFB347" }}
      >
        CelebrateSmarts
      </a>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-300 hover:bg-[#7FFFD4]/10"
              style={{ color: "#E0E0E0" }}
            >
              <span
                className="text-[10px] font-mono opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ color: "#7FFFD4" }}
              >
                {item.num}
              </span>
              <span className="group-hover:text-[#7FFFD4] transition-colors">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? (
          <X size={20} style={{ color: "#FFB347" }} />
        ) : (
          <Menu size={20} style={{ color: "#E0E0E0" }} />
        )}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-pill rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all hover:bg-[#7FFFD4]/10"
                  style={{ color: "#E0E0E0" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-[10px] font-mono" style={{ color: "#7FFFD4" }}>
                    {item.num}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
