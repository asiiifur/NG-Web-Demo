"use client"

import { useEffect, useState, useRef } from "react"

export function StatsSection() {
  const [counters, setCounters] = useState([0, 0, 0, 0])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { number: 25, suffix: "+", label: "Years of Experience" },
    { number: 500, suffix: "+", label: "Companies Served" },
    { number: 50000, suffix: "+", label: "Jobs Created" },
    { number: 10, suffix: "+", label: "Industrial Parks" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          // Animate counters
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.number / 100
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.number) {
                current = stat.number
                clearInterval(timer)
              }
              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.floor(current)
                return newCounters
              })
            }, 20)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-gradient-to-r from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/geometric-pattern.png')] bg-repeat animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 delay-${index * 100} ${
                isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95"
              }`}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                {counters[index].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base lg:text-lg opacity-90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
