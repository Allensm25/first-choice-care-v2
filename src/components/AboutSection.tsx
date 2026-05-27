"use client"

import { motion } from "framer-motion"
import { Heart, Users, MapPin } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "Every decision we make starts with one question: what's best for the family?",
  },
  {
    icon: Users,
    title: "Community Rooted",
    desc: "We were built in Atlanta, by Atlantans, for the families and communities that make this city great.",
  },
  {
    icon: MapPin,
    title: "Locally Present",
    desc: "We're not a 1-800 number. We're here — close enough to show up when it matters.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--brand-dark-alt)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(134,176,96,0.28), transparent)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(134,176,96,0.06) 0%, transparent 55%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: "rgba(134,176,96,0.14)", border: "1px solid rgba(134,176,96,0.38)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-olive)" }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--brand-olive-lt)" }}>
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ color: "var(--text-primary)" }}>
                Care That Comes{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-cream))" }}>
                  From the Heart
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
              <p>
                First Choice Care was founded right here in Atlanta with a simple belief: every
                family — regardless of income, insurance, or circumstance — deserves access to
                compassionate, high-quality care at home.
              </p>
              <p>
                Over the past decade, we&apos;ve served more than 500 families across the Atlanta
                metro area. We started with a handful of nurses and a commitment to dignity — and
                that commitment has never wavered.
              </p>
              <p>
                We specialize in Georgia&apos;s Pediatric Program (GAPP) because we believe
                medically fragile children deserve the best start possible — in the comfort and
                safety of their own home, surrounded by the people who love them most.
              </p>
              <p>
                When you choose First Choice Care, you&apos;re not just hiring a home health
                agency. You&apos;re gaining a partner — one that shows up, follows through, and
                never stops advocating for your family.
              </p>
            </div>

            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-olive-dark))", color: "white" }}
            >
              Talk to Our Team
            </a>
          </motion.div>

          {/* Right — Values */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="flex flex-col gap-5"
          >
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.55 }}
                  className="flex gap-5 rounded-2xl p-6 transition-all duration-400"
                  style={{ border: "1px solid rgba(134,176,96,0.20)", background: "rgba(134,176,96,0.06)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(134,176,96,0.11)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(134,176,96,0.06)")}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(134,176,96,0.16)", border: "1px solid rgba(134,176,96,0.30)" }}>
                    <Icon className="w-5 h-5" style={{ color: "var(--brand-olive-lt)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Atlanta badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.55 }}
              className="rounded-2xl p-6 flex items-center gap-5"
              style={{ border: "1px solid rgba(27,46,9,0.10)", background: "rgba(27,46,9,0.03)" }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, rgba(134,176,96,0.18), rgba(154,120,40,0.18))", border: "1px solid rgba(134,176,96,0.30)" }}>
                <span className="text-2xl font-black text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-cream))" }}>
                  ATL
                </span>
              </div>
              <div>
                <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>Proudly Atlanta-Based</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-faint)" }}>
                  Serving the Atlanta metro area including DeKalb, Fulton, Clayton, Gwinnett,
                  Cobb, and surrounding counties.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
