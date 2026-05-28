"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  { icon: Phone, label: "Phone",        value: "(216) 324-0660",           href: "tel:+12163240660" },
  { icon: Mail,  label: "Email",        value: "infofirstccare@gmail.com",  href: "mailto:infofirstccare@gmail.com" },
  { icon: MapPin, label: "Location",    value: "Atlanta, Georgia",         href: "#" },
  { icon: Clock, label: "Availability", value: "24/7 — Always Open",      href: "#" },
]

const services = [
  "GAPP Pediatric Care",
  "Private Pay Care",
  "Skilled Nursing",
  "Personal Care / ADLs",
  "Companionship",
  "Respite Care",
  "Other / Not Sure",
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(134,176,96,0.30)",
    color: "var(--text-primary)",
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--brand-dark)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(134,176,96,0.30), transparent)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 40% 30%, rgba(134,176,96,0.06) 0%, transparent 55%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: "rgba(134,176,96,0.14)", border: "1px solid rgba(134,176,96,0.38)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-olive)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--brand-olive-lt)" }}>
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Let&apos;s Start with a{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-cream))" }}>
              Conversation
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-body)" }}>
            No commitment, no pressure. Just a real conversation about your family&apos;s needs —
            and how we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-4">
              {contactInfo.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
                    style={{ border: "1px solid rgba(134,176,96,0.22)", background: "rgba(134,176,96,0.06)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(134,176,96,0.12)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(134,176,96,0.06)")}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(134,176,96,0.14)", border: "1px solid rgba(134,176,96,0.28)" }}>
                      <Icon className="w-4 h-4" style={{ color: "var(--brand-olive-lt)" }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: "var(--text-faint)" }}>{c.label}</p>
                      <p className="font-semibold text-sm" style={{ color: "var(--brand-olive-lt)" }}>{c.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="rounded-2xl p-6 mt-2" style={{ border: "1px solid rgba(134,176,96,0.20)", background: "rgba(134,176,96,0.06)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                <span className="font-semibold block mb-2" style={{ color: "var(--text-primary)" }}>Quick response guaranteed.</span>
                We respond to all inquiries within 2 hours during business hours, and have on-call
                staff 24/7 for urgent needs.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 rounded-2xl p-12" style={{ border: "1px solid rgba(134,176,96,0.28)", background: "rgba(134,176,96,0.07)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(134,176,96,0.18)", border: "1px solid rgba(134,176,96,0.38)" }}>
                  <Send className="w-7 h-7" style={{ color: "var(--brand-olive-lt)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: "var(--text-primary)" }}>Message Received!</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-body)" }}>
                    Thank you for reaching out. A member of our team will contact you within 2 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{ border: "1px solid rgba(134,176,96,0.22)", background: "rgba(134,176,96,0.04)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Full Name *</label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={{ ...inputStyle, "::placeholder": { color: "var(--text-faint)" } } as React.CSSProperties}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(134,176,96,0.60)")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(134,176,96,0.30)")}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Phone Number *</label>
                    <input
                      name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="(404) 000-0000"
                      className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(134,176,96,0.60)")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(134,176,96,0.30)")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Email Address</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="jane@email.com"
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(134,176,96,0.60)")}
                    onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(134,176,96,0.30)")}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Service Needed</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="rounded-xl px-4 py-3 text-sm outline-none appearance-none transition-all"
                    style={{ ...inputStyle, background: "rgba(255,255,255,0.85)" }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Tell Us About Your Situation</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Briefly describe your loved one's needs, any questions about GAPP, or anything else you'd like us to know..."
                    className="rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(134,176,96,0.60)")}
                    onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(134,176,96,0.30)")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-olive-dark))", color: "white" }}
                >
                  <Send className="w-4 h-4" />
                  Send Message — It&apos;s Free
                </button>

                <p className="text-center text-xs" style={{ color: "var(--text-hint)" }}>
                  We never share your information. 100% confidential.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
