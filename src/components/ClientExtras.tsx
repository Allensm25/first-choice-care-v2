"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const SmoothScrollProvider = dynamic(() => import("@/components/SmoothScrollProvider"), { ssr: false })
const StickyCTABar        = dynamic(() => import("@/components/StickyCTABar"),        { ssr: false })

export default function ClientExtras() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <>
      <SmoothScrollProvider />
      <StickyCTABar />
    </>
  )
}
