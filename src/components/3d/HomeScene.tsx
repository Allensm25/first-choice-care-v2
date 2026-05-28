"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo, Suspense } from "react"
import * as THREE from "three"

// Module-level mouse state updated via canvas pointer events
const mouse = { x: 0, y: 0 }

/* Mouse-reactive warm particles */
function WarmParticles() {
  const ref = useRef<THREE.Points>(null)
  const frameRef = useRef(0)
  const count = 180          // reduced from 320 — fewer particles, same visual effect
  const { camera } = useThree()

  const { positions, colors, origPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const orig = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const palette = [
      new THREE.Color("#4E7A28"),
      new THREE.Color("#86B060"),
      new THREE.Color("#9A7828"),
      new THREE.Color("#C4A060"),
      new THREE.Color("#D4C090"),
    ]
    for (let i = 0; i < count; i++) {
      const px = (Math.random() - 0.5) * 20
      const py = (Math.random() - 0.5) * 20
      const pz = (Math.random() - 0.5) * 14
      pos[i * 3] = orig[i * 3] = px
      pos[i * 3 + 1] = orig[i * 3 + 1] = py
      pos[i * 3 + 2] = orig[i * 3 + 2] = pz
      const c = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col, origPositions: orig }
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    // Skip every other frame — halves main-thread cost with no visible difference
    frameRef.current++
    if (frameRef.current % 2 !== 0) return

    const t = state.clock.elapsedTime

    // Gentle base rotation
    ref.current.rotation.y = t * 0.016
    ref.current.rotation.x = t * 0.007

    // Convert mouse NDC → approximate world position at z=0
    const fovRad = (52 * Math.PI) / 180
    const camDist = (camera as THREE.PerspectiveCamera).position.z
    const visH = 2 * camDist * Math.tan(fovRad / 2)
    const visW = visH * 1.6
    const mwx = mouse.x * visW * 0.5
    const mwy = mouse.y * visH * 0.5

    const pos = ref.current.geometry.attributes.position
    const arr = pos.array as Float32Array
    const repelRadius = 3.5
    const repelStrength = 0.08

    for (let i = 0; i < count; i++) {
      const ox = origPositions[i * 3]
      const oy = origPositions[i * 3 + 1]

      const dx = arr[i * 3] - mwx
      const dy = arr[i * 3 + 1] - mwy
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < repelRadius) {
        const force = (repelRadius - dist) / repelRadius
        arr[i * 3] += (dx / dist) * force * repelStrength * 2
        arr[i * 3 + 1] += (dy / dist) * force * repelStrength * 2
      }

      // Spring back to original position
      arr[i * 3] += (ox - arr[i * 3]) * 0.05
      arr[i * 3 + 1] += (oy - arr[i * 3 + 1]) * 0.05
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.52} sizeAttenuation />
    </points>
  )
}

/* Elegant floating torus ring */
function FloatingRing({
  radius, tube, color, tiltX, tiltZ, spinSpeed, floatSpeed, floatOffset,
}: {
  radius: number; tube: number; color: string
  tiltX: number; tiltZ: number; spinSpeed: number; floatSpeed: number; floatOffset: number
}) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.z = state.clock.elapsedTime * spinSpeed
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * floatSpeed + floatOffset) * 0.3
  })

  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({
      color, emissive: color, emissiveIntensity: 0.9,
      transparent: true, opacity: 0.40, roughness: 0.3, metalness: 0.6,
    }),
    [color]
  )

  return (
    <mesh ref={mesh} rotation={[tiltX, 0, tiltZ]} material={mat}>
      <torusGeometry args={[radius, tube, 16, 64]} />
    </mesh>
  )
}

/* Small glowing orb */
function GlowOrb({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(s.clock.elapsedTime * 0.6 + position[0]) * 0.35
    }
  })
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.09, 8, 8]} />
      <meshStandardMaterial color="#9A7828" emissive="#9A7828" emissiveIntensity={3.0} transparent opacity={0.85} />
    </mesh>
  )
}

function Scene() {
  const orbPositions: [number, number, number][] = [
    [-3.0, 1.4, 0.8], [2.8, -1.0, 1.2], [-1.8, -2.2, -0.8],
    [3.2, 2.0, -0.6], [-3.4, -1.2, 0.4], [1.6, 2.6, -1.4],
  ]

  return (
    <>
      <ambientLight intensity={0.10} />
      <pointLight position={[5, 7, 4]}   color="#DCC896" intensity={5.0} />
      <pointLight position={[-5, -5, 3]} color="#86B060" intensity={3.0} />
      <pointLight position={[0, 3, 9]}   color="#4E7A28" intensity={2.0} />

      <WarmParticles />

      <FloatingRing radius={3.8} tube={0.032} color="#4E7A28"  tiltX={0.9}  tiltZ={0.3}  spinSpeed={0.08}  floatSpeed={0.4} floatOffset={0}   />
      <FloatingRing radius={2.6} tube={0.026} color="#9A7828"  tiltX={-0.5} tiltZ={1.1}  spinSpeed={-0.12} floatSpeed={0.35} floatOffset={2.1} />
      <FloatingRing radius={1.7} tube={0.020} color="#C4A060"  tiltX={1.3}  tiltZ={-0.8} spinSpeed={0.18}  floatSpeed={0.5} floatOffset={4.3} />

      {orbPositions.map((pos, i) => (
        <GlowOrb key={i} position={pos} />
      ))}
    </>
  )
}

export default function HomeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 52 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      onPointerMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      }}
      onPointerLeave={() => {
        mouse.x = 0
        mouse.y = 0
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
