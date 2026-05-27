"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageCircle, ClipboardList, HeartHandshake } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    step: "Step 1",
    title: "Free Consultation",
    desc: "Reach out by phone or form. We listen to your family's situation, answer every question, and explain your options — with zero pressure and zero cost.",
  },
  {
    icon: ClipboardList,
    step: "Step 2",
    title: "Personalized Care Plan",
    desc: "We coordinate directly with your physician to build a care plan around your loved one's specific needs — scheduling, services, and caregiver matching included.",
  },
  {
    icon: HeartHandshake,
    step: "Step 3",
    title: "Care Comes to You",
    desc: "Our certified, background-checked caregivers arrive at your home ready to serve. You stay in the loop every step of the way.",
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "center 0.5"],
  })

  // Path draws from 0→1 as section scrolls into view
  const pathLength   = useTransform(scrollYProgress, [0, 1], [0, 1])
  const pathOpacity  = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const node1Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
  const node2Opacity = useTransform(scrollYProgress, [0.8, 1.0], [0, 1])

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--brand-dark)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(154,120,40,0.22), transparent)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(134,176,96,0.06) 0%, transparent 60%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: "rgba(154,120,40,0.12)", border: "1px solid rgba(154,120,40,0.35)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-cream)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--brand-cream)" }}>
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Getting Care is{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-cream))" }}>
              Easier Than You Think
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-body)" }}>
            Three simple steps from first contact to care at your door — we handle the complexity
            so you don&apos;t have to.
          </p>
        </motion.div>

        {/* Steps grid with animated SVG connector */}
        <div className="relative">
          {/* Animated SVG path — desktop only */}
          <div className="hidden md:block absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <svg
              className="absolute w-full"
              style={{ top: "56px", height: "4px", overflow: "visible" }}
              preserveAspectRatio="none"
              viewBox="0 0 900 4"
            >
              {/* Dashed background track */}
              <path
                d="M150,2 C300,2 600,2 750,2"
                fill="none"
                stroke="rgba(134,176,96,0.18)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              {/* Animated fill */}
              <motion.path
                d="M150,2 C300,2 600,2 750,2"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ pathLength, opacity: pathOpacity }}
              />
              {/* Node circles that pop in as path reaches them */}
              <motion.circle cx="150" cy="2" r="4" fill="var(--brand-olive-lt)"
                style={{ opacity: pathOpacity }} />
              <motion.circle cx="450" cy="2" r="4"
                style={{ fill: "var(--brand-olive-lt)", opacity: node1Opacity }}
              />
              <motion.circle cx="750" cy="2" r="4"
                style={{ fill: "var(--brand-olive-lt)", opacity: node2Opacity }}
              />
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--brand-olive-lt)" />
                  <stop offset="100%" stopColor="var(--brand-cream)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8" style={{ zIndex: 1 }}>
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="relative flex flex-col items-center text-center gap-5 rounded-2xl p-8 backdrop-blur-sm transition-shadow duration-500"
                  style={{ border: "1px solid rgba(134,176,96,0.22)", background: "rgba(134,176,96,0.06)" }}
                >
                  {/* Step badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-bold px-3 py-0.5 rounded-full" style={{ color: "var(--brand-olive-lt)", background: "var(--brand-dark)", border: "1px solid rgba(134,176,96,0.35)" }}>
                      {s.step}
                    </span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(134,176,96,0.14)", border: "1px solid rgba(134,176,96,0.30)" }}>
                    <Icon className="w-7 h-7" style={{ color: "var(--brand-olive-lt)" }} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white transition-opacity duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-olive-dark))", boxShadow: "0 4px 20px rgba(78,122,40,0.25)" }}
          >
            Start Step 1 — It&apos;s Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}
