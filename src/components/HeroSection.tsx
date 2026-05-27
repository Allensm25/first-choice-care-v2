"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"
import SplitText from "@/components/SplitText"
import CountUp from "@/components/CountUp"

const HomeScene = dynamic(() => import("@/components/3d/HomeScene"), { ssr: false })
const LogoFloat = dynamic(() => import("@/components/LogoFloat"),    { ssr: false })

const stats = [
  { value: "500+", target: 500, suffix: "+", label: "Families Served" },
  { value: "10+",  target: 10,  suffix: "+", label: "Years in Atlanta" },
  { value: "24/7", target: null,              label: "Care Available" },
  { value: "100%", target: 100, suffix: "%",  label: "GAPP Certified" },
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const gridY       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const blob1Y      = useTransform(scrollYProgress, [0, 1], ["0%", "22%"])
  const blob2Y      = useTransform(scrollYProgress, [0, 1], ["0%", "14%"])
  const sceneY      = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const textY       = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "var(--brand-dark)" }}
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(135deg, rgba(134,176,96,0.10) 0%, transparent 55%, rgba(154,120,40,0.06) 100%)" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "rgba(134,176,96,0.12)", y: blob1Y }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[90px]"
          style={{ background: "rgba(154,120,40,0.07)", y: blob2Y }}
        />
        <motion.div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(134,176,96,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(134,176,96,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            y: gridY,
          }}
        />
      </div>

      {/* Video — absolutely positioned background layer, left half only, does not affect layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          zIndex: 4,
          maskImage: "radial-gradient(ellipse 95% 88% at 50% 50%, black 30%, rgba(0,0,0,0.7) 55%, transparent 82%)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 88% at 50% 50%, black 30%, rgba(0,0,0,0.7) 55%, transparent 82%)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/FCC-Hero-V3-4K.mov" type="video/quicktime" />
          <source src="/FCC-Hero-V3-4K.mov" type="video/mp4" />
        </video>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full py-16">

        {/* ── Left column: scene on top, text below ── */}
        <div className="flex flex-col gap-6">

          {/* 3D scene + orbital rings — three layers all centered at same point */}
          <motion.div
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25 }}
            className="relative h-[300px] lg:h-[340px] w-full"
            style={{ y: sceneY, opacity: heroOpacity }}
          >
            {/* Shift entire cluster — rings, canvas, and overlay move together */}
            <div className="absolute inset-0" style={{ transform: "translateX(-160px) translateY(110px)" }}>

            {/* Layer 1 — Glow halo + spinning HTML orbital dots (behind canvas) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
              <div
                className="absolute w-[300px] h-[300px] rounded-full blur-[70px]"
                style={{ background: "radial-gradient(circle, rgba(134,176,96,0.12) 0%, rgba(134,176,96,0.04) 55%, transparent 75%)" }}
              />
              {/* Outer orbital ring */}
              <div
                className="absolute w-[260px] h-[260px] rounded-full"
                style={{ animation: "spin-slow 18s linear infinite" }}
              >
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full"
                  style={{ background: "var(--brand-olive-lt)", boxShadow: "0 0 12px rgba(78,122,40,0.6)" }}
                />
              </div>
              {/* Inner orbital ring */}
              <div
                className="absolute w-[190px] h-[190px] rounded-full"
                style={{ animation: "spin-slow 26s linear infinite reverse" }}
              >
                <div
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
                  style={{ background: "var(--brand-cream)", boxShadow: "0 0 8px rgba(154,120,40,0.5)" }}
                />
              </div>
            </div>

            {/* Layer 2 — Three.js canvas (transparent bg, renders over HTML rings) */}
            {mounted && (
              <div className="absolute inset-0" style={{ zIndex: 10 }}>
                <HomeScene />
              </div>
            )}

            {/* Layer 3 — Badge, logo, text (above canvas) */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ zIndex: 20, pointerEvents: "none" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{ background: "rgba(134,176,96,0.18)", border: "1px solid rgba(134,176,96,0.45)", backdropFilter: "blur(8px)", pointerEvents: "auto" }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-olive)" }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--brand-olive-lt)" }}>
                  Atlanta, Georgia · Home Health Care
                </span>
              </motion.div>

              {mounted && <LogoFloat />}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--brand-olive-lt)" }}>
                  First Choice Care
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>
                  Atlanta, Georgia · Est. 2014
                </p>
              </motion.div>
            </div>
            </div>{/* end cluster shift wrapper */}
          </motion.div>

          {/* Text content — z-30 keeps it above any 3D scene overflow */}
          <motion.div className="flex flex-col gap-8" style={{ y: textY, opacity: heroOpacity, position: "relative", zIndex: 30 }}>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight" style={{ color: "var(--text-primary)" }}>
              <SplitText text="Care That Comes" delay={0.18} stagger={0.07} />{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #4E7A28, #7A5A10)" }}
              >
                <SplitText text="To You" delay={0.52} stagger={0.09} />
              </span>
              <br />
              <SplitText text="With Heart" delay={0.72} stagger={0.08} />
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg leading-relaxed max-w-md font-medium"
              style={{ color: "rgba(27,46,9,0.82)" }}
            >
              First Choice Care delivers compassionate, professional home health services to children
              and adults across the Atlanta metro area — including Georgia&apos;s Pediatric Program
              (GAPP) and private pay services.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-bold text-white inline-block transition-all duration-200 hover:opacity-90 hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg, #4E7A28, #3A5C1A)", boxShadow: "0 6px 28px rgba(78,122,40,0.45), 0 2px 8px rgba(78,122,40,0.25)" }}
              >
                Get Started Today
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full font-bold inline-block transition-all duration-200 hover:scale-[1.03]"
                style={{ border: "2px solid rgba(78,122,40,0.60)", color: "#3A5C1A", background: "rgba(134,176,96,0.10)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(134,176,96,0.20)"; e.currentTarget.style.borderColor = "rgba(78,122,40,0.90)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(134,176,96,0.10)"; e.currentTarget.style.borderColor = "rgba(78,122,40,0.60)" }}
              >
                Our Services
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6"
              style={{ borderTop: "1px solid rgba(27,46,9,0.15)" }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-2xl font-extrabold" style={{ color: "#3A5C1A" }}>
                    {s.target != null
                      ? <CountUp target={s.target} suffix={s.suffix ?? ""} duration={1.8} />
                      : s.value
                    }
                  </span>
                  <span className="text-xs font-medium leading-tight" style={{ color: "rgba(27,46,9,0.65)" }}>{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>

        {/* ── Right column: intentionally empty — video plays through ── */}
        <div aria-hidden="true" />

      </div>

      {/* Scroll indicator — client-only to avoid opacity initial/MotionValue hydration mismatch */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: heroOpacity }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full flex justify-center pt-1.5"
            style={{ border: "2px solid rgba(134,176,96,0.45)" }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: "var(--brand-olive-lt)" }} />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
