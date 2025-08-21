import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary text-secondary-foreground font-bold">
            NGI
          </div>
          <span className="font-bold text-lg">NGIBD</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-sm font-medium hover:text-secondary transition-colors">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-secondary transition-colors">
            Legacy
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-secondary transition-colors">
            Business
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-secondary transition-colors">
            News & Events
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-secondary transition-colors">
            CSR
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-secondary transition-colors">
            Career
          </Link>
        </nav>

        <Button className="bg-secondary hover:bg-secondary/90">Contact Us</Button>
      </div>
    </header>
  )
}
