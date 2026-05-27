"use client"

import { motion } from "framer-motion"

const served = [
  { name: "Fulton",    x: 192, y: 188, primary: true },
  { name: "DeKalb",   x: 278, y: 162, primary: false },
  { name: "Cobb",     x: 118, y: 148, primary: false },
  { name: "Gwinnett", x: 308, y: 96,  primary: false },
  { name: "Clayton",  x: 222, y: 268, primary: false },
]

const nearby = [
  { name: "Cherokee", x: 145, y: 56  },
  { name: "Forsyth",  x: 264, y: 42  },
  { name: "Rockdale", x: 358, y: 195 },
  { name: "Henry",    x: 282, y: 305 },
  { name: "Douglas",  x: 82,  y: 202 },
  { name: "Fayette",  x: 155, y: 298 },
]

const connections = [
  { x1: 192, y1: 188, x2: 278, y2: 162 },
  { x1: 192, y1: 188, x2: 118, y2: 148 },
  { x1: 192, y1: 188, x2: 308, y2: 96  },
  { x1: 192, y1: 188, x2: 222, y2: 268 },
  { x1: 278, y1: 162, x2: 308, y2: 96  },
  { x1: 278, y1: 162, x2: 358, y2: 195 },
  { x1: 118, y1: 148, x2: 145, y2: 56  },
  { x1: 222, y1: 268, x2: 282, y2: 305 },
  { x1: 222, y1: 268, x2: 155, y2: 298 },
  { x1: 118, y1: 148, x2: 82,  y2: 202 },
]

export default function ServiceAreaMap() {
  return (
    <section
      id="service-area"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "var(--brand-dark)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(134,176,96,0.28), transparent)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(134,176,96,0.07) 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(134,176,96,0.14)", border: "1px solid rgba(134,176,96,0.38)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-olive)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--brand-olive-lt)" }}>
              Where We Serve
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Rooted in{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-cream))" }}
            >
              Atlanta
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-body)" }}>
            Serving families across the Atlanta metro area — DeKalb, Fulton, Clayton, Gwinnett,
            Cobb, and surrounding counties.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* SVG Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <svg
              viewBox="0 0 480 360"
              className="w-full max-w-[520px]"
              style={{ overflow: "visible" }}
            >
              {/* Connection lines */}
              {connections.map((c, i) => (
                <motion.line
                  key={i}
                  x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                  stroke="rgba(134,176,96,0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="3 5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.07, ease: "easeOut" }}
                />
              ))}

              {/* Nearby county dots */}
              {nearby.map((c, i) => (
                <motion.g
                  key={c.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.07 }}
                >
                  <circle
                    cx={c.x} cy={c.y} r={5}
                    fill="rgba(134,176,96,0.15)"
                    stroke="rgba(134,176,96,0.35)"
                    strokeWidth="1"
                  />
                  <text
                    x={c.x}
                    y={c.y - 10}
                    textAnchor="middle"
                    fontSize="8"
                    fill="rgba(27,46,9,0.40)"
                    fontFamily="inherit"
                  >
                    {c.name}
                  </text>
                </motion.g>
              ))}

              {/* Served county dots */}
              {served.map((c, i) => (
                <motion.g
                  key={c.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {c.primary && (
                    <>
                      <motion.circle
                        cx={c.x} cy={c.y} r={22}
                        fill="none"
                        stroke="rgba(134,176,96,0.25)"
                        strokeWidth="1"
                        animate={{ r: [18, 30, 18], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.circle
                        cx={c.x} cy={c.y} r={34}
                        fill="none"
                        stroke="rgba(134,176,96,0.12)"
                        strokeWidth="1"
                        animate={{ r: [28, 44, 28], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      />
                      <circle cx={c.x} cy={c.y} r={18} fill="rgba(134,176,96,0.10)" />
                    </>
                  )}

                  <circle
                    cx={c.x} cy={c.y}
                    r={c.primary ? 9 : 7}
                    fill={c.primary ? "var(--brand-olive-lt)" : "rgba(78,122,40,0.65)"}
                    stroke={c.primary ? "rgba(78,122,40,0.60)" : "rgba(134,176,96,0.50)"}
                    strokeWidth={c.primary ? 2.5 : 1.5}
                    style={{ filter: c.primary ? "drop-shadow(0 0 6px rgba(78,122,40,0.55))" : "none" }}
                  />

                  <text
                    x={c.x}
                    y={c.y + (c.primary ? 22 : 20)}
                    textAnchor="middle"
                    fontSize={c.primary ? 10 : 9}
                    fill={c.primary ? "var(--brand-olive-lt)" : "rgba(27,46,9,0.65)"}
                    fontWeight={c.primary ? "600" : "400"}
                    fontFamily="inherit"
                  >
                    {c.name}
                  </text>
                  {c.primary && (
                    <text
                      x={c.x}
                      y={c.y + 34}
                      textAnchor="middle"
                      fontSize={7.5}
                      fill="rgba(27,46,9,0.38)"
                      fontFamily="inherit"
                    >
                      HQ · Atlanta
                    </text>
                  )}
                </motion.g>
              ))}
            </svg>
          </motion.div>

          {/* County list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 lg:max-w-xs w-full"
          >
            <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>Service Counties</h3>

            {served.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: c.primary ? "rgba(134,176,96,0.10)" : "rgba(134,176,96,0.06)",
                  border: `1px solid rgba(134,176,96,${c.primary ? 0.32 : 0.18})`,
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{
                    background: c.primary ? "var(--brand-olive-lt)" : "rgba(134,176,96,0.70)",
                    boxShadow: c.primary ? "0 0 6px rgba(78,122,40,0.50)" : "none",
                  }}
                />
                <div className="flex-1">
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{c.name} County</span>
                  {c.primary && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "rgba(134,176,96,0.18)", color: "var(--brand-olive-lt)" }}>
                      HQ
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--text-faint)" }}>
              Also serving Cherokee, Forsyth, Rockdale, Henry, Douglas, Fayette, and additional
              surrounding counties. Contact us to confirm coverage in your area.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 mt-2"
              style={{
                background: "linear-gradient(135deg, var(--brand-olive-lt), var(--brand-olive-dark))",
                color: "white",
              }}
            >
              Check Your County
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
