/**
 * Generates fcc-logo-olive.png — the same pixel transformation LogoFloat.tsx
 * applies at runtime, but saved as a static file for OG images / downloads.
 *
 * Run once from the project root:
 *   node scripts/export-olive-logo.mjs
 */

import sharp from "sharp"
import { fileURLToPath } from "url"
import path from "path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC  = path.join(__dirname, "../public/fcc-logo.png")
const DEST = path.join(__dirname, "../public/fcc-logo-olive.png")

const { data, info } = await sharp(SRC)
  .ensureAlpha()           // guarantee 4 channels (RGBA)
  .raw()
  .toBuffer({ resolveWithObject: true })

const d = data

for (let i = 0; i < d.length; i += 4) {
  const r = d[i], g = d[i + 1], b = d[i + 2]
  const brightness = (r + g + b) / 3

  // Remove white background
  if (r > 235 && g > 235 && b > 235) {
    d[i + 3] = 0
    continue
  }

  // Semi-transparent near-white → fade out
  if (r > 200 && g > 200 && b > 200) {
    d[i + 3] = Math.round(((255 - brightness) / 55) * 255)
    continue
  }

  // Dark pixels → remap to dark olive range (same as LogoFloat.tsx)
  if (brightness < 140) {
    const t = brightness / 140   // 0 = darkest, 1 = mid-dark
    d[i]     = Math.round(27  + t * 65)  // R
    d[i + 1] = Math.round(46  + t * 85)  // G → olive
    d[i + 2] = Math.round(9   + t * 30)  // B → near-zero for warmth
    d[i + 3] = 255
  }
  // Gold/amber pixels (brightness ≥ 140, not near-white): keep untouched
}

await sharp(d, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(DEST)

console.log(`✅  Saved ${DEST}`)
console.log(`    ${info.width} × ${info.height} px, RGBA`)
