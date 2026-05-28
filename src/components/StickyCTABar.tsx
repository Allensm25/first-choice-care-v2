"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Calendar, MessageCircle } from "lucide-react"

export default function StickyCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[9990]"
          style={{
            background: "rgba(248,243,232,0.97)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(134,176,96,0.30)",
            boxShadow: "0 -4px 24px rgba(27,46,9,0.08)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
            {/* Phone */}
            <a
              href="tel:+12163240660"
              className="hidden sm:flex items-center gap-2.5 transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-olive-lt)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(134,176,96,0.14)", border: "1px solid rgba(134,176,96,0.30)" }}
              >
                <Phone className="w-3.5 h-3.5" style={{ color: "var(--brand-olive-lt)" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                (216) 324-0660
              </span>
            </a>

            {/* SMS link */}
            <a
              href="sms:+12163240660"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105 flex-shrink-0"
              style={{ background: "rgba(134,176,96,0.12)", border: "1px solid rgba(134,176,96,0.35)", color: "var(--brand-olive-lt)" }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Send Text
            </a>

            {/* Tagline */}
            <p className="text-sm hidden md:block" style={{ color: "var(--text-muted)" }}>
              <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Free consultation</span>
              {" "}— no commitment, no pressure.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 ml-auto">
              <a
                href="tel:+12163240660"
                className="sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{ background: "rgba(134,176,96,0.12)", border: "1px solid rgba(134,176,96,0.30)", color: "var(--brand-olive-lt)" }}
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-olive-dark))",
                  color: "white",
                }}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Book Free Consultation</span>
                <span className="xs:hidden">Book Now</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
