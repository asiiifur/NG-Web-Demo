"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Heart, Eye, Star } from "lucide-react"
import { ContactModal } from "./contact-modal"

interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
  rating: number
  reviews: number
  description: string
  inStock: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Glass Vase Set",
    category: "Glass Products",
    price: "৳2,500 - ৳4,000",
    image: "/elegant-glass-vase-set.png",
    rating: 4.8,
    reviews: 24,
    description: "Handcrafted premium glass vases perfect for elegant home decoration and special occasions",
    inStock: true,
  },
  {
    id: 2,
    name: "Mixed Dry Fruits Premium",
    category: "Food Products",
    price: "৳800 - ৳1,500/kg",
    image: "/mixed-dry-fruits.png",
    rating: 4.9,
    reviews: 45,
    description: "Fresh almonds, cashews, dates, and more premium dry fruits sourced from the finest suppliers",
    inStock: true,
  },
  {
    id: 3,
    name: "Crystal Wine Glasses",
    category: "Glass Products",
    price: "৳1,200 - ৳2,000/set",
    image: "/elegant-crystal-wine-glasses.png",
    rating: 4.7,
    reviews: 18,
    description: "Elegant crystal wine glasses crafted for special occasions and fine dining experiences",
    inStock: true,
  },
  {
    id: 4,
    name: "Organic Dates Premium",
    category: "Food Products",
    price: "৳600 - ৳1,200/kg",
    image: "/organic-medjool-dates.png",
    rating: 4.9,
    reviews: 67,
    description: "Premium Medjool dates, naturally sweet and nutritious, perfect for healthy snacking",
    inStock: true,
  },
  {
    id: 5,
    name: "Decorative Glass Bowls",
    category: "Glass Products",
    price: "৳1,500 - ৳3,000",
    image: "/colorful-glass-bowls.png",
    rating: 4.6,
    reviews: 32,
    description: "Beautiful decorative glass bowls for serving and display, adding elegance to any table",
    inStock: false,
  },
  {
    id: 6,
    name: "Cashew Nuts Premium",
    category: "Food Products",
    price: "৳1,200 - ৳1,800/kg",
    image: "/placeholder-ygl61.png",
    rating: 4.8,
    reviews: 89,
    description: "Premium quality cashew nuts, perfectly roasted and packed fresh for maximum flavor",
    inStock: true,
  },
]

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const categories = ["All", "Glass Products", "Food Products", "Premium Collections", "Gift Sets"]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  const handleContactToBuy = (product: Product) => {
    setSelectedProduct(product)
    setIsContactModalOpen(true)
  }

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Premium Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated collection of premium glass products and gourmet food items. Each piece is
            selected for exceptional quality, craftsmanship, and taste that defines luxury living.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`product-card-hover animate-fade-in delay-${index * 100} bg-card border-border hover:border-primary/30`}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {!product.inStock && (
                    <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                      Out of Stock
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {product.category}
                  </Badge>
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <Button size="sm" variant="secondary" className="mr-2">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-primary fill-current" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <CardTitle className="text-xl mb-2 text-foreground">{product.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-primary mb-4">{product.price}</div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => handleContactToBuy(product)}
                  disabled={!product.inStock}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {product.inStock ? "Call +880-2-XXXXXXX" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          product={selectedProduct}
        />
      </div>
    </section>
  )
}
