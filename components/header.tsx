import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary text-secondary-foreground font-bold">
            R
          </div>
          <span className="font-bold text-lg">Richman</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm font-medium hover:text-secondary transition-colors">
            About
          </Link>
          <Link href="#products" className="text-sm font-medium hover:text-secondary transition-colors">
            Products
          </Link>
          <Link href="#glass" className="text-sm font-medium hover:text-secondary transition-colors">
            Glass Collection
          </Link>
          <Link href="#food" className="text-sm font-medium hover:text-secondary transition-colors">
            Food Products
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-secondary transition-colors">
            Contact
          </Link>
        </nav>

        <Button className="bg-secondary hover:bg-secondary/90">Call +880-2-XXXXXXX</Button>
      </div>
    </header>
  )
}
