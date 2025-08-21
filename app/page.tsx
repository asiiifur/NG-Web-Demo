import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"
import { ImageManager } from "@/components/image-manager"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
      </main>
      <Footer />
      <ImageManager />
    </>
  )
}
