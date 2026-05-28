import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import ClientExtras from "@/components/ClientExtras"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

const siteUrl = "https://firstccare.com"

export const metadata: Metadata = {
  title: "First Choice Care | Atlanta Home Health",
  description: "Compassionate, professional home health services for children and adults across the Atlanta metro area — GAPP pediatric care, skilled nursing, and private pay.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "First Choice Care | Atlanta Home Health",
    description: "GAPP pediatric care, skilled nursing, and private pay home health services for Atlanta families. Free consultation — 24/7 availability.",
    url: siteUrl,
    siteName: "First Choice Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Choice Care | Atlanta Home Health",
    description: "GAPP pediatric care, skilled nursing, and private pay home health services for Atlanta families.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "additionalType": "https://schema.org/MedicalBusiness",
  "name": "First Choice Care",
  "description": "Compassionate home health services for children and adults across the Atlanta metro area — GAPP pediatric care, skilled nursing, and private pay.",
  "url": siteUrl,
  "telephone": "+12163240660",
  "email": "infofirstccare@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Atlanta",
    "addressRegion": "GA",
    "addressCountry": "US",
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Fulton County, GA" },
    { "@type": "AdministrativeArea", "name": "DeKalb County, GA" },
    { "@type": "AdministrativeArea", "name": "Cobb County, GA" },
    { "@type": "AdministrativeArea", "name": "Gwinnett County, GA" },
    { "@type": "AdministrativeArea", "name": "Clayton County, GA" },
    { "@type": "AdministrativeArea", "name": "Cherokee County, GA" },
    { "@type": "AdministrativeArea", "name": "Fayette County, GA" },
  ],
  "openingHours": "Mo-Su 00:00-24:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Home Health Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GAPP Pediatric Care" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skilled Nursing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Pay Care" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Care & ADLs" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Companionship" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Respite Care" } },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ClientExtras />
        {children}
      </body>
    </html>
  )
}
