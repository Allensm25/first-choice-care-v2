"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Tanya M.",
    location: "Decatur, GA",
    service: "GAPP Pediatric Care",
    stars: 5,
    quote:
      "First Choice Care changed everything for our family. My son has complex medical needs and finding quality at-home nursing felt impossible — until we found them. They handled all the GAPP paperwork and had a nurse at our door within weeks. We feel so supported.",
  },
  {
    name: "Derrick & Sandra W.",
    location: "Stone Mountain, GA",
    service: "Private Pay Senior Care",
    stars: 5,
    quote:
      "After my mother's stroke, we weren't ready to put her in a facility. First Choice Care sent us a caregiver who felt like part of our family from day one. Professional, warm, and incredibly patient. I can't recommend them enough.",
  },
  {
    name: "Latoya H.",
    location: "College Park, GA",
    service: "Skilled Nursing",
    stars: 5,
    quote:
      "The nurse they assigned to my daughter is phenomenal. She explains everything, communicates with the doctor directly, and genuinely cares about my child's progress. This agency is the real deal — not just a company checking boxes.",
  },
  {
    name: "Marcus J.",
    location: "Marietta, GA",
    service: "Respite Care",
    stars: 5,
    quote:
      "As a full-time caregiver for my father, burnout was real. First Choice Care gave us respite services so I could recharge. When I came back, I was a better caregiver. They literally saved our family's sanity.",
  },
  {
    name: "Keisha F.",
    location: "Douglasville, GA",
    service: "GAPP Pediatric Care",
    stars: 5,
    quote:
      "I didn't even know GAPP existed until First Choice Care explained it to me. My daughter qualifies and now gets skilled nursing at home at no cost to us. This agency genuinely advocates for families. I tell every parent I know.",
  },
  {
    name: "Renee B.",
    location: "Lawrenceville, GA",
    service: "Personal Care",
    stars: 5,
    quote:
      "What sets them apart is the consistency. Same caregivers, same routines, real relationships. My mom looks forward to their visits. That kind of connection is rare in home health care.",
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5" style={{ fill: "var(--brand-gold)", color: "var(--brand-gold)" }} />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "var(--brand-dark)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(154,120,40,0.25), transparent)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(154,120,40,0.05) 0%, transparent 55%)" }} />
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
              Real Families, Real Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Hear From the{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand-cream), var(--brand-gold))" }}>
              Families We Serve
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-body)" }}>
            These are the stories that remind us why we do this work every single day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="relative rounded-2xl p-7 flex flex-col gap-5 h-full transition-shadow duration-300"
                style={{
                  border: "1px solid rgba(154,120,40,0.18)",
                  background: "rgba(154,120,40,0.05)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(154,120,40,0.14)" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none" }}
              >
                <Quote
                  className="absolute top-5 right-6 w-8 h-8"
                  style={{ color: "rgba(27,46,9,0.06)" }}
                />

                <div className="flex flex-col gap-2">
                  <StarRow count={t.stars} />
                  <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-body)" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div
                  className="flex items-center gap-3 mt-auto pt-4"
                  style={{ borderTop: "1px solid rgba(27,46,9,0.08)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(134,176,96,0.35), rgba(154,120,40,0.35))", color: "var(--text-primary)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "var(--text-faint)" }}>{t.location} · {t.service}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-xs mt-10"
          style={{ color: "var(--text-hint)" }}
        >
          Testimonials are representative of the experiences of families who have used our services.
        </motion.p>
      </div>
    </section>
  )
}
