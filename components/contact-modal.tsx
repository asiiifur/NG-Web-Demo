"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Phone, Mail, User, MessageSquare, CheckCircle } from "lucide-react"

interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product | null
}

export function ContactModal({ isOpen, onClose, product }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Order inquiry:", { product, customer: formData })
    setIsSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", email: "", message: "" })
      onClose()
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-foreground">Contact to Buy</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Fill out the form below and we'll contact you about your order.
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg mb-6">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <p className="text-lg font-bold text-primary">{product.price}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                  <User className="h-4 w-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-border focus:border-primary"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                  <Phone className="h-4 w-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-border focus:border-primary"
                  placeholder="+880-XXX-XXXXXX"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-input border-border focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-input border-border focus:border-primary min-h-[100px]"
                  placeholder="Any specific requirements or questions about the product..."
                />
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm text-foreground font-medium mb-2">📞 We'll call you at: +880-2-XXXXXXX</p>
                <p className="text-xs text-muted-foreground">
                  Our team will contact you within 24 hours to confirm your order and arrange delivery.
                </p>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                Submit Order Inquiry
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <DialogTitle className="text-2xl text-foreground mb-2">Order Inquiry Sent!</DialogTitle>
            <DialogDescription className="text-muted-foreground mb-4">
              Thank you for your interest in {product.name}. We'll contact you soon at +880-2-XXXXXXX.
            </DialogDescription>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-sm text-foreground">
                Expected response time: <strong>Within 24 hours</strong>
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
