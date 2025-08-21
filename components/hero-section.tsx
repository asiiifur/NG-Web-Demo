"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Phone, ShoppingBag, Star, ArrowRight } from "lucide-react"

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('/modern-industrial-facility.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70" />
      </div>

      <div className="relative z-10 container text-center text-white animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md text-white px-6 sm:px-10 py-6 sm:py-8 rounded-2xl inline-block mb-8 transform hover:scale-105 transition-all duration-300 shadow-2xl border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-secondary fill-current" />
              <span className="text-secondary font-semibold">Premium Quality</span>
              <Star className="h-6 w-6 text-secondary fill-current" />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
              <span className="text-white">RICHMAN</span>
              <br />
              <span className="text-secondary">MULTI-SHOP</span>
            </h1>
          </div>

          <p className="text-xl sm:text-2xl lg:text-3xl mb-6 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200 font-medium">
            Premium Glass Products • Fresh Dry Fruits • Home Decor
          </p>

          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-300 opacity-90">
            Discover our carefully curated collection of quality products. Easy phone-based ordering for your
            convenience.
          </p>

          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 mb-8 inline-block animate-scale-in animation-delay-400">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Phone className="h-6 w-6 text-secondary" />
              <span className="text-2xl font-bold text-white">+880-2-XXXXXXX</span>
            </div>
            <p className="text-sm text-white/80">Call us to place your order • Available 24/7</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-500">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in delay-500">
            {[
              { name: "Glass Products", icon: "🏺" },
              { name: "Dry Fruits", icon: "🥜" },
              { name: "Ceramics", icon: "🏺" },
              { name: "Home Decor", icon: "🏠" },
            ].map((category, index) => (
              <div
                key={category.name}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer animate-bounce-in delay-${(index + 1) * 100}`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium text-white">{category.name}</div>
              </div>
            ))}
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
