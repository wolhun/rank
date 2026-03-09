"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
      <Button size="lg" className="w-full h-12 gap-2 rounded-xl">
        Check if your business qualifies
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  )
}
