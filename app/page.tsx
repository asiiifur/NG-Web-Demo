import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <StatsSection />
      </main>
      <Footer />
    </>
  )
}
