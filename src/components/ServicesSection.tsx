"use client"

import { motion, type Variants } from "framer-motion"
import { Baby, Stethoscope, Heart, UserCheck, Users, Clock } from "lucide-react"

const services = [
  {
    icon: Baby,
    title: "GAPP Pediatric Care",
    badge: "Medicaid Covered",
    rgb: "134,176,96",
    description:
      "Specialized in-home care for medically fragile children under 21 through Georgia's Pediatric Program — at no cost to your family.",
    highlights: ["No out-of-pocket cost", "Licensed pediatric nurses", "Physician-coordinated plans"],
  },
  {
    icon: Stethoscope,
    title: "Skilled Nursing",
    badge: "RN & LPN",
    rgb: "106,145,71",
    description:
      "Licensed registered nurses and LPNs providing clinical care in the comfort of your home — wound care, medication management, IV therapy, and more.",
    highlights: ["RN & LPN certified staff", "Medication management", "Wound & IV care"],
  },
  {
    icon: Heart,
    title: "Private Pay Care",
    badge: "Flexible Plans",
    rgb: "154,120,40",
    description:
      "Personalized home health services for adults and seniors — tailored to your schedule and needs, with no insurance restrictions.",
    highlights: ["Flexible scheduling", "Customized care plans", "All ages welcome"],
  },
  {
    icon: UserCheck,
    title: "Personal Care & ADLs",
    badge: "Daily Living",
    rgb: "78,122,40",
    description:
      "Compassionate assistance with daily activities — bathing, grooming, dressing, mobility support — helping your loved one maintain dignity and independence.",
    highlights: ["Bathing & grooming", "Mobility assistance", "Dignity-first approach"],
  },
  {
    icon: Users,
    title: "Companionship & Emotional Support",
    badge: "Mental Wellness",
    rgb: "134,176,96",
    description:
      "Dedicated companionship that combats isolation and supports mental well-being — meaningful connection is as vital as physical care.",
    highlights: ["Social engagement", "Light errands & outings", "Family communication"],
  },
  {
    icon: Clock,
    title: "Respite Care",
    badge: "Family Relief",
    rgb: "154,112,32",
    description:
      "Temporary relief for family caregivers — short-term professional care so you can rest, recharge, and return to your loved one renewed.",
    highlights: ["Short-term & overnight", "Peace of mind for families", "Seamless handoffs"],
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--brand-dark)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(134,176,96,0.35), transparent)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(154,120,40,0.20), transparent)" }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl" style={{ background: "rgba(134,176,96,0.08)" }} />
        <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full blur-3xl" style={{ background: "rgba(154,120,40,0.07)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: "rgba(134,176,96,0.14)", border: "1px solid rgba(134,176,96,0.40)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-olive)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--brand-olive-lt)" }}>
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Comprehensive Care,{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-cream))" }}>
              Tailored for You
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-body)" }}>
            From GAPP-covered pediatric nursing to private pay senior care — we meet your family
            wherever you are, with services designed around your life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1200px" }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <div
                  className="group relative rounded-2xl p-7 flex flex-col gap-5 cursor-default h-full transition-shadow duration-300"
                  style={{
                    background: `rgba(${service.rgb},0.07)`,
                    border: `1px solid rgba(${service.rgb},0.22)`,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px rgba(${service.rgb},0.18)` }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none" }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
                    style={{ background: `linear-gradient(to right, transparent, rgba(${service.rgb},0.55), transparent)` }}
                  />

                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `rgba(${service.rgb},0.12)`,
                        border: `1px solid rgba(${service.rgb},0.30)`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: `rgb(${service.rgb})` }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `rgba(${service.rgb},0.12)`,
                        border: `1px solid rgba(${service.rgb},0.28)`,
                        color: `rgb(${service.rgb})`,
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>{service.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {service.description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: `rgba(${service.rgb},0.80)` }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-sm mb-4" style={{ color: "var(--text-faint)" }}>Not sure which service fits your situation?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-opacity duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-olive-dark))", boxShadow: "0 4px 20px rgba(78,122,40,0.25)" }}
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
