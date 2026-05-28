"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface Props {
  target: number
  suffix?: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function CountUp({ target, suffix = "", duration = 2.2, className, style }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px" })

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()
    const endTime = startTime + duration * 1000

    const tick = (now: number) => {
      const raw = Math.min((now - startTime) / (endTime - startTime), 1)
      // Ease-out expo
      const eased = raw === 1 ? 1 : 1 - Math.pow(2, -10 * raw)
      setCount(Math.round(eased * target))
      if (raw < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {count}{suffix}
    </span>
  )
}
