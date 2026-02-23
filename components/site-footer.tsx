import { Moon } from "lucide-react"

const footerLinks = [
  {
    title: "Shop",
    links: ["Sonics", "Weighted", "Aromas", "Lumina"],
  },
  {
    title: "Learn",
    links: ["The Science", "Sleep Blog", "Research Papers", "FAQ"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact"],
  },
]

export function SiteFooter() {
  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ borderTop: "1px solid rgba(127, 255, 212, 0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Moon size={20} style={{ color: "#FFB347" }} />
              <span
                className="font-sans font-bold text-lg"
                style={{ color: "#FFB347" }}
              >
                CelebrateSmarts
              </span>
            </div>
            <p
              className="text-sm font-mono leading-relaxed max-w-xs"
              style={{ color: "#a0a0b8" }}
            >
              The technology of tranquility. Curating the finest sleep
              optimization tools backed by science.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3
                className="font-sans font-bold text-sm mb-4"
                style={{ color: "#E0E0E0" }}
              >
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-mono transition-colors duration-300 hover:text-[#7FFFD4]"
                      style={{ color: "#a0a0b8" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(46, 48, 120, 0.6)" }}
        >
          <p
            className="text-xs font-mono"
            style={{ color: "#a0a0b8" }}
          >
            2026 CelebrateSmarts. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs font-mono transition-colors hover:text-[#7FFFD4]"
              style={{ color: "#a0a0b8" }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs font-mono transition-colors hover:text-[#7FFFD4]"
              style={{ color: "#a0a0b8" }}
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs font-mono transition-colors hover:text-[#7FFFD4]"
              style={{ color: "#a0a0b8" }}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
