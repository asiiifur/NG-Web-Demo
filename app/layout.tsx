import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Richman Multi-Shop - Premium Glass Products & Dry Fruits",
  description:
    "Richman Multi-Shop offers premium glass products, fresh dry fruits, ceramics, and home decor. Quality products with phone-based ordering. Contact +880-2-XXXXXXX to place your order.",
  keywords:
    "glass products, dry fruits, ceramics, home decor, premium quality, Bangladesh, phone order, Richman multi-shop",
  authors: [{ name: "Richman Team" }],
  creator: "Richman",
  publisher: "Richman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://richman.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Richman Multi-Shop - Premium Glass Products & Dry Fruits",
    description:
      "Premium glass products, fresh dry fruits, and more. Quality items with convenient phone-based ordering.",
    url: "https://richman.com",
    siteName: "Richman",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Richman Industrial Development Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richman Multi-Shop - Premium Glass Products & Dry Fruits",
    description: "Premium quality products with convenient phone-based ordering system.",
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
              "@type": "Store",
              name: "Richman Multi-Shop",
              description: "Premium glass products, dry fruits, ceramics, and home decor with phone-based ordering",
              url: "https://richman.com",
              telephone: "+880-2-XXXXXXX",
              priceRange: "৳500-৳5000",
              paymentAccepted: "Cash, Mobile Banking",
              currenciesAccepted: "BDT",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Richman Product Catalog",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Glass Products",
                      category: "Home & Garden",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Dry Fruits",
                      category: "Food & Beverages",
                    },
                  },
                ],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Industrial Blvd",
                addressLocality: "Business City",
                addressRegion: "BC",
                postalCode: "12345",
                addressCountry: "US",
              },
              sameAs: ["https://linkedin.com/company/richman", "https://twitter.com/richman"],
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
