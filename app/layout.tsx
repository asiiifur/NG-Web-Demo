import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "NGIBD - Leading Industrial Development & Business Solutions",
  description:
    "NGIBD provides comprehensive industrial development, business consulting, and infrastructure solutions. Expert services in project management, industrial planning, and sustainable development.",
  keywords:
    "industrial development, business solutions, project management, infrastructure, consulting, sustainable development, NGIBD",
  authors: [{ name: "NGIBD Team" }],
  creator: "NGIBD",
  publisher: "NGIBD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ngibd.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NGIBD - Leading Industrial Development & Business Solutions",
    description:
      "Expert industrial development and business consulting services. Comprehensive solutions for sustainable growth and infrastructure development.",
    url: "https://ngibd.com",
    siteName: "NGIBD",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NGIBD Industrial Development Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NGIBD - Leading Industrial Development & Business Solutions",
    description: "Expert industrial development and business consulting services for sustainable growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#059669" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NGIBD",
              description: "Leading industrial development and business solutions provider",
              url: "https://ngibd.com",
              logo: "https://ngibd.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Industrial Blvd",
                addressLocality: "Business City",
                addressRegion: "BC",
                postalCode: "12345",
                addressCountry: "US",
              },
              sameAs: ["https://linkedin.com/company/ngibd", "https://twitter.com/ngibd"],
              foundingDate: "2010",
              numberOfEmployees: "50-100",
              industry: "Industrial Development",
            }),
          }}
        />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
