"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Check } from "lucide-react"
import { useState, useEffect } from "react"

const aiPlatforms = [
  { 
    name: "ChatGPT", 
    color: "#10A37F",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
      </svg>
    )
  },
  { 
    name: "Gemini", 
    color: "#4285F4",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 3.6c4.638 0 8.4 3.762 8.4 8.4 0 4.638-3.762 8.4-8.4 8.4-4.638 0-8.4-3.762-8.4-8.4 0-4.638 3.762-8.4 8.4-8.4z"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    )
  },
  { 
    name: "Claude", 
    color: "#D97706",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
]

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [currentPlatform, setCurrentPlatform] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % aiPlatforms.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const platform = aiPlatforms[currentPlatform]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Platform indicators */}
            <div className="flex items-center gap-3">
              {aiPlatforms.map((p, i) => (
                <div
                  key={p.name}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-500 ${
                    i === currentPlatform 
                      ? "bg-foreground text-background shadow-md" 
                      : "text-muted-foreground"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full transition-colors duration-500`}
                    style={{ backgroundColor: i === currentPlatform ? platform.color : 'currentColor' }}
                  />
                  <span className="text-sm font-medium">{p.name}</span>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight text-foreground">
                Bądź firmą, którą{" "}
                <span className="relative">
                  <span 
                    className="relative z-10 transition-colors duration-500"
                    style={{ color: platform.color }}
                  >
                    AI poleca
                  </span>
                  <span 
                    className="absolute bottom-1 left-0 w-full h-3 -z-0 opacity-20 transition-colors duration-500"
                    style={{ backgroundColor: platform.color }}
                  />
                </span>
                {" "}Twoim klientom
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Pomagamy firmom pojawiać się w odpowiedziach ChatGPT, Claude i innych systemów AI. 
                Płacisz dopiero po uzyskaniu ustalonego rezultatu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="text-base px-7 h-12 gap-2 group font-medium">
                Sprawdź, czy kwalifikujesz się
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-base px-7 h-12 gap-2 text-muted-foreground hover:text-foreground"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="w-4 h-4" />
                Zobacz jak to działa
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4 border-t border-border">
              {[
                "Płatność po wyniku",
                "Jedna cena",
                "Jasny proces"
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - AI Chat Mockup */}
          <div className="relative lg:pl-8">
            {/* Card with subtle shadow */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl shadow-foreground/5">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-500"
                  style={{ backgroundColor: `${platform.color}15`, color: platform.color }}
                >
                  {platform.logo}
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{platform.name}</p>
                  <p className="text-xs text-muted-foreground">Asystent AI</p>
                </div>
              </div>
              
              {/* Chat content */}
              <div className="p-6 space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm leading-relaxed">
                      Jaką firmę polecasz do wykonania profesjonalnej strony internetowej w Warszawie?
                    </p>
                  </div>
                </div>
                
                {/* AI response */}
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm leading-relaxed text-foreground">
                      Polecam{" "}
                      <span 
                        className="font-semibold transition-colors duration-500"
                        style={{ color: platform.color }}
                      >
                        TwojaFirma
                      </span>{" "}
                      - mają świetne portfolio, konkurencyjne ceny i bardzo dobre opinie klientów. 
                      Specjalizują się w nowoczesnych stronach dla firm...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-foreground">Rekomendacja AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/5 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="bg-card border border-border rounded-2xl p-6 max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Wideo wyjaśniające</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="mt-4 w-full h-10"
              onClick={() => setIsVideoOpen(false)}
            >
              Zamknij
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
