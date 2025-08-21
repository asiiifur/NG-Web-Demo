import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary text-secondary-foreground font-bold">
                NGI
              </div>
              <span className="font-bold text-xl">NGIBD</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Leading Bangladesh's industrial development with world-class infrastructure and sustainable business
              solutions for over 25 years.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                Facebook
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                LinkedIn
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                Twitter
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Industrial Parks
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Investment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>📍 Dhaka, Bangladesh</li>
              <li>📞 +880-2-XXXXXXX</li>
              <li>✉️ info@ngibd.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 NGIBD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
