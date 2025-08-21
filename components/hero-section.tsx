"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Intersection observer for scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("hero-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: `url('/green-industrial-park-aerial.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/95 backdrop-blur-sm text-white px-4 sm:px-8 py-4 sm:py-6 rounded-xl inline-block mb-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight animate-slide-up">
              INDUSTRIAL PARK
            </h1>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200 opacity-90">
            Leading Bangladesh's industrial development with world-class infrastructure and sustainable business
            solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 bg-transparent/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
