"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Globe, Share2 } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "Services",     href: "#services" },
  { label: "GAPP Program", href: "#contact" },
  { label: "About Us",     href: "#about" },
  { label: "Contact",      href: "#contact" },
]

const services = [
  "GAPP Pediatric Care",
  "Skilled Nursing",
  "Private Pay Care",
  "Personal Care & ADLs",
  "Companionship",
  "Respite Care",
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#E6DCC8", borderTop: "1px solid rgba(134,176,96,0.25)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(134,176,96,0.28), transparent)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ background: "var(--brand-cream-lt)", border: "2px solid rgba(134,176,96,0.40)" }}>
                <Image src="/fcc-logo.png" alt="First Choice Care logo" fill className="object-contain p-1" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                  First Choice <span style={{ color: "var(--brand-olive-lt)" }}>Care</span>
                </span>
                <span className="text-xs" style={{ color: "var(--text-faint)" }}>Atlanta Home Health</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Compassionate, professional home health services for children and adults across
              the Atlanta metro area.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(134,176,96,0.12)", border: "1px solid rgba(134,176,96,0.28)", color: "var(--text-muted)" }}
                aria-label="Website"
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-olive-lt)"; e.currentTarget.style.borderColor = "rgba(134,176,96,0.50)" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "rgba(134,176,96,0.28)" }}
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(134,176,96,0.12)", border: "1px solid rgba(134,176,96,0.28)", color: "var(--text-muted)" }}
                aria-label="Share"
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-olive-lt)"; e.currentTarget.style.borderColor = "rgba(134,176,96,0.50)" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "rgba(134,176,96,0.28)" }}
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors duration-200" style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-olive-lt)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors duration-200" style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-olive-lt)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Contact Us</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+12163240660" className="flex items-center gap-2.5 text-sm transition-colors duration-200" style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-olive-lt)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--brand-olive-lt)" }} />
                  (216) 324-0660
                </a>
              </li>
              <li>
                <a href="mailto:info@firstccare.com" className="flex items-center gap-2.5 text-sm transition-colors duration-200" style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-olive-lt)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--brand-olive-lt)" }} />
                  info@firstccare.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "var(--brand-olive-lt)" }} />
                Atlanta, Georgia &amp; Metro Area
              </li>
            </ul>
            <div className="mt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-olive-dark))", color: "white" }}
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(27,46,9,0.10)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
            © {new Date().getFullYear()} First Choice Care. All rights reserved. · Atlanta, Georgia
          </p>
          <p className="text-xs" style={{ color: "var(--text-hint)" }}>
            Licensed Home Health Agency · Georgia Dept. of Community Health
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
