"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const links = ["Home", "Services", "About", "Contact"]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menu when a link is tapped
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl" : ""
        }`}
        style={
          scrolled
            ? { background: "rgba(248,243,232,0.92)", borderBottom: "1px solid rgba(134,176,96,0.25)" }
            : { background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Wordmark */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLinkClick}
          >
            <div
              style={{
                width: "3px",
                height: "34px",
                borderRadius: "2px",
                background: "linear-gradient(to bottom, var(--brand-olive-lt), var(--brand-gold))",
                boxShadow: "0 0 8px rgba(134,176,96,0.35)",
              }}
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base tracking-wide" style={{ color: "var(--text-primary)" }}>
                First Choice{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, var(--brand-olive-lt), var(--brand-cream))" }}
                >
                  Care
                </span>
              </span>
              <span className="text-xs" style={{ color: "var(--text-faint)" }}>
                Atlanta Home Health
              </span>
            </div>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.3 }}
                className="text-sm font-medium transition-all duration-200 relative group"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-olive-lt)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {link}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--brand-olive-lt)" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex font-semibold px-5 py-2.5 rounded-full text-sm cursor-pointer transition-all duration-300"
            style={{ background: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-olive-dark))", color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(78,122,40,0.35)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            Book Appointment
          </motion.a>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
            style={{ background: "rgba(134,176,96,0.12)", border: "1px solid rgba(134,176,96,0.35)" }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen
              ? <X size={18} style={{ color: "var(--brand-olive-lt)" }} />
              : <Menu size={18} style={{ color: "var(--brand-olive-lt)" }} />
            }
          </button>
        </div>
      </motion.nav>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[68px] left-4 right-4 z-40 rounded-2xl overflow-hidden md:hidden"
            style={{
              background: "rgba(248,243,232,0.97)",
              border: "1px solid rgba(134,176,96,0.30)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 32px rgba(27,46,9,0.12)",
            }}
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={handleLinkClick}
                  className="px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150"
                  style={{ color: "var(--text-primary)" }}
                  onTouchStart={(e) => (e.currentTarget.style.background = "rgba(134,176,96,0.12)")}
                  onTouchEnd={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {link}
                </motion.a>
              ))}

              <div className="h-px my-1" style={{ background: "rgba(134,176,96,0.20)" }} />

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-1 px-4 py-3 rounded-xl font-bold text-center text-sm text-white transition-opacity duration-150 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #4E7A28, #3A5C1A)" }}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
