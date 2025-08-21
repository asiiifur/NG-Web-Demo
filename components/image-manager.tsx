"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ImageConfig {
  id: string
  name: string
  url: string
  alt: string
}

const defaultImages: ImageConfig[] = [
  {
    id: "hero-bg",
    name: "Hero Background",
    url: "/green-industrial-park-aerial.png",
    alt: "Industrial park aerial view",
  },
  {
    id: "about-image",
    name: "About Section Image",
    url: "/modern-industrial-facility.png",
    alt: "Modern industrial facility",
  },
]

export function ImageManager() {
  const [images, setImages] = useState<ImageConfig[]>(defaultImages)
  const [isOpen, setIsOpen] = useState(false)

  const updateImage = (id: string, newUrl: string) => {
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, url: newUrl } : img)))
    // Store in localStorage for persistence
    localStorage.setItem("siteImages", JSON.stringify(images))
  }

  const getImageUrl = (id: string) => {
    const image = images.find((img) => img.id === id)
    return image?.url || defaultImages.find((img) => img.id === id)?.url || ""
  }

  // Make getImageUrl available globally
  if (typeof window !== "undefined") {
    ;(window as any).getImageUrl = getImageUrl
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-primary/90 hover:bg-primary"
        size="sm"
      >
        🖼️ Manage Images
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Image Manager</CardTitle>
              <p className="text-sm text-muted-foreground">
                Change website images without coding. Paste image URLs below.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {images.map((image) => (
                <div key={image.id} className="space-y-2">
                  <Label htmlFor={image.id}>{image.name}</Label>
                  <div className="flex gap-2">
                    <Input
                      id={image.id}
                      value={image.url}
                      onChange={(e) => updateImage(image.id, e.target.value)}
                      placeholder="Enter image URL"
                    />
                  </div>
                  <div className="w-full h-20 bg-muted rounded overflow-hidden">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = "/placeholder-9uw7j.png"
                      }}
                    />
                  </div>
                </div>
              ))}
              <Button onClick={() => setIsOpen(false)} className="w-full">
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
