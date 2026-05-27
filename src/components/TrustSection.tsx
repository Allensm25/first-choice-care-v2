"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Award, MapPin, Clock, Star, Fingerprint } from "lucide-react"
import CountUp from "@/components/CountUp"

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    desc: "We are a state-licensed home health agency operating under Georgia Department of Community Health standards — your family is fully protected.",
  },
  {
    icon: Award,
    title: "100% GAPP Certified",
    desc: "One of Atlanta's certified GAPP nursing agencies. We navigate Medicaid on your behalf — you just focus on your child.",
  },
  {
    icon: MapPin,
    title: "Atlanta-Based & Community-Rooted",
    desc: "We're not a national chain — we're your neighbors. Based in Atlanta, serving the metro area with caregivers who know this community.",
  },
  {
    icon: Fingerprint,
    title: "Rigorous Background Checks",
    desc: "Every caregiver undergoes thorough background screening, credential verification, and ongoing performance reviews. We trust who we send.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Health doesn't work 9-to-5. Our team is available around the clock — day, night, weekends, and holidays.",
  },
  {
    icon: Star,
    title: "Personalized, Not Templated",
    desc: "No cookie-cutter care plans. We design every plan around the individual — their medical needs, their preferences, their life.",
  },
]

const stats = [
  { value: "500+", target: 500, suffix: "+", label: "Families Served" },
  { value: "10+",  target: 10,  suffix: "+", label: "Years in Atlanta" },
  { value: "24/7", target: null,              label: "Always Available" },
  { value: "100%", target: 100, suffix: "%",  label: "GAPP Certified" },
]

export default function TrustSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--brand-dark-alt)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(27,46,9,0.10), transparent)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(134,176,96,0.07) 0%, transparent 55%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 rounded-2xl p-8"
          style={{ border: "1px solid rgba(134,176,96,0.25)", background: "rgba(134,176,96,0.07)" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-cream))" }}>
                {s.target != null
                  ? <CountUp target={s.target} suffix={s.suffix ?? ""} />
                  : s.value
                }
              </span>
              <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: "rgba(27,46,9,0.06)", border: "1px solid rgba(27,46,9,0.14)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-olive)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              Why First Choice Care
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Trust Isn&apos;t Given.{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-cream))" }}>
              It&apos;s Earned.
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-body)" }}>
            Families choose First Choice Care because we combine clinical excellence with genuine
            compassion — and we can prove it.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d, i) => {
            const Icon = d.icon
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group flex gap-4 rounded-xl p-6 transition-all duration-400"
                style={{ border: "1px solid rgba(134,176,96,0.20)", background: "rgba(134,176,96,0.05)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(134,176,96,0.10)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(134,176,96,0.05)")}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(134,176,96,0.14)", border: "1px solid rgba(134,176,96,0.30)" }}>
                  <Icon className="w-4 h-4" style={{ color: "var(--brand-olive-lt)" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1.5" style={{ color: "var(--text-primary)" }}>{d.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{d.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
