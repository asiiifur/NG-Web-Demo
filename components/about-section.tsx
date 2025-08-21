"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [aboutImage, setAboutImage] = useState("/modern-industrial-facility.png")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check for updated images from ImageManager
    const savedImages = localStorage.getItem("siteImages")
    if (savedImages) {
      const images = JSON.parse(savedImages)
      const aboutImg = images.find((img: any) => img.id === "about-image")
      if (aboutImg) setAboutImage(aboutImg.url)
    }

    // Intersection observer for scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Building Bangladesh's Industrial Future
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              NGIBD has been at the forefront of Bangladesh's industrial development for over two decades. We specialize
              in creating world-class industrial parks that serve as catalysts for economic growth and job creation.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to sustainable development and innovative business solutions has made us a trusted partner
              for both local and international companies looking to establish their presence in Bangladesh.
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base px-6 md:px-8"
            >
              Learn About Our Legacy
            </Button>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative group">
              <img
                src={aboutImage || "/placeholder.svg"}
                alt="NGIBD Industrial Facility"
                className="rounded-xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
