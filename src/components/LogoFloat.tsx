"use client"

import { motion } from "framer-motion"

// Uses pre-generated fcc-logo-olive.png instead of runtime canvas pixel processing.
// The olive PNG was produced by scripts/export-olive-logo.mjs with the same
// pixel transformation — no canvas work needed at runtime.
export default function LogoFloat() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      style={{ perspective: "1200px" }}
      className="flex items-center justify-center"
    >
      <motion.img
        src="/fcc-logo-olive.png"
        alt="First Choice Care"
        animate={{
          y: [0, -18, 0],
          rotateY: [-12, 12, -12],
          rotateX: [5, -5, 5],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          width: "340px",
          height: "340px",
          objectFit: "contain",
          filter:
            "drop-shadow(0 16px 32px rgba(27,46,9,0.18)) " +
            "drop-shadow(0 0 36px rgba(134,176,96,0.40)) " +
            "drop-shadow(0 0 70px rgba(134,176,96,0.18))",
        }}
      />
    </motion.div>
  )
}
