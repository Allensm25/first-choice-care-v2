"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Phone } from "lucide-react"

const steps = [
  { num: "01", title: "Check Eligibility",         desc: "Your child must be under 21, enrolled in Georgia Medicaid, and have a physician-ordered need for skilled nursing or personal care." },
  { num: "02", title: "Contact First Choice Care", desc: "Call us or submit our form. We guide you through the application and handle all the paperwork — at zero cost to you." },
  { num: "03", title: "We Submit to Medicaid",     desc: "We submit your GAPP application directly to Georgia Medicaid on your behalf and coordinate prior authorization." },
  { num: "04", title: "Care Begins at Home",       desc: "Once approved, our certified nurses and caregivers come to you. No hospital visits, no commute — just care at home." },
]

const covered = [
  "Skilled nursing visits (RN & LPN)",
  "Personal care & daily living support",
  "Care coordination with your doctor",
  "Medication administration",
  "Vital signs monitoring",
  "Family caregiver training",
]

export default function GAPPSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--brand-dark-alt)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(134,176,96,0.28), transparent)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(134,176,96,0.07) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: "rgba(134,176,96,0.14)", border: "1px solid rgba(134,176,96,0.40)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-olive)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--brand-olive-lt)" }}>
              Georgia Pediatric Program
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            GAPP Care —{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-cream))" }}>
              Free for Your Child
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-body)" }}>
            The Georgia Pediatric Program covers in-home skilled nursing and personal care for medically
            fragile children under 21 — fully funded by Georgia Medicaid, with no cost to families.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Steps */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>How to Get Started</h3>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(134,176,96,0.15)", border: "1px solid rgba(134,176,96,0.40)" }}>
                    <span className="text-xs font-bold" style={{ color: "var(--brand-olive-lt)" }}>{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2 min-h-[2rem]" style={{ background: "linear-gradient(to bottom, rgba(134,176,96,0.35), transparent)" }} />
                  )}
                </div>
                <div className="pb-4">
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{step.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-olive-dark))", color: "white" }}
              >
                Apply for GAPP <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+12163240660"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:opacity-80"
                style={{ border: "1px solid rgba(134,176,96,0.45)", color: "var(--brand-olive-lt)" }}
              >
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right — What's Covered */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="rounded-2xl p-8 flex flex-col gap-7"
            style={{ border: "1px solid rgba(134,176,96,0.25)", background: "rgba(134,176,96,0.06)" }}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4" style={{ background: "rgba(134,176,96,0.16)", border: "1px solid rgba(134,176,96,0.38)" }}>
                <span className="text-xs font-semibold" style={{ color: "var(--brand-olive-lt)" }}>$0 Cost to Family</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>What GAPP Covers</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                All services below are fully funded by Georgia Medicaid for eligible children.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {covered.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--brand-olive-lt)" }} />
                  <span className="text-sm" style={{ color: "var(--text-body)" }}>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="rounded-xl p-5" style={{ background: "rgba(134,176,96,0.08)", border: "1px solid rgba(134,176,96,0.22)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                <span className="font-semibold" style={{ color: "var(--brand-olive-lt)" }}>Eligibility:</span> Child must be under
                21, actively enrolled in Georgia Medicaid, medically fragile, and have a
                physician-ordered care plan. Applications are submitted through a
                Medicaid-approved GAPP agency — that&apos;s us.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-1" style={{ borderTop: "1px solid rgba(27,46,9,0.08)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(134,176,96,0.15)" }}>
                <Phone className="w-3.5 h-3.5" style={{ color: "var(--brand-olive-lt)" }} />
              </div>
              <div>
                <p className="text-xs" style={{ color: "var(--text-faint)" }}>Questions about GAPP? Call us directly</p>
                <a href="tel:+12163240660" className="font-semibold text-sm transition-opacity hover:opacity-80" style={{ color: "var(--text-primary)" }}>
                  (216) 324-0660
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
