"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Industrial Development",
    description: "Comprehensive industrial park development with modern infrastructure and facilities",
    icon: "🏭",
  },
  {
    title: "Business Solutions",
    description: "End-to-end business support services for companies looking to establish operations",
    icon: "💼",
  },
  {
    title: "Infrastructure Management",
    description: "State-of-the-art infrastructure management and maintenance services",
    icon: "🔧",
  },
  {
    title: "Sustainable Development",
    description: "Environmentally conscious development practices for a sustainable future",
    icon: "🌱",
  },
  {
    title: "Investment Opportunities",
    description: "Strategic investment opportunities in Bangladesh's growing industrial sector",
    icon: "📈",
  },
  {
    title: "Export Facilitation",
    description: "Comprehensive export support and trade facilitation services",
    icon: "🚢",
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 100) // Stagger animation
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions for industrial development and business growth in Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transform transition-all duration-700 ${
                visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg md:text-xl group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
