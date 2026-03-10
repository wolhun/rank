"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { HeroRecommendationDemo } from "@/components/hero-recommendation-demo"
import { Button } from "@/components/ui/button"

const platforms = [
  {
    name: "ChatGPT" as const,
    color: "#10A37F",
    logo: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    ),
  },
  {
    name: "Gemini" as const,
    color: "#4285F4",
    logo: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 1.5 14.9 9.1 22.5 12l-7.6 2.9L12 22.5l-2.9-7.6L1.5 12l7.6-2.9Z" />
      </svg>
    ),
  },
  {
    name: "Claude" as const,
    color: "#D97706",
    logo: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2 2 7l10 5 10-5-10-5Zm0 8L2 15l10 5 10-5-10-5Z" />
      </svg>
    ),
  },
]

export function HeroSection() {
  const [activePlatform, setActivePlatform] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % platforms.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  const platform = platforms[activePlatform]

  return (
    <section id="hero" className="section-neutral section-divider relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(14,42,71,0.12),transparent_40%),radial-gradient(circle_at_14%_38%,rgba(200,169,107,0.14),transparent_42%)]" />

      <div className="section-shell relative z-10">
        <p className="compare-label">Hero · Version A</p>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_1fr]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2.5">
              {platforms.map((p, i) => (
                <span
                  key={p.name}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-500 ${
                    i === activePlatform
                      ? "border-transparent text-background shadow-md"
                      : "border-border bg-card/80 text-muted-foreground"
                  }`}
                  style={i === activePlatform ? { backgroundColor: platform.color } : undefined}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: i === activePlatform ? "currentColor" : p.color }}
                  />
                  {p.name}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-foreground md:text-5xl lg:text-[3.45rem]">
                Make AI recommend your business. Pay after results.
              </h1>
              <p className="copy-lead">
                When people ask AI which company to choose, your business appears in the answer.
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                No upfront payment · One fixed price · Pay only after results
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="ui-motion h-12 gap-2 px-7 text-base font-medium">
                Check if your business qualifies
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <HeroRecommendationDemo platform={platform} />
          </div>
        </div>
      </div>
    </section>
  )
}
