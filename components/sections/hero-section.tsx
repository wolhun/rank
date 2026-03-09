"use client"

import { HeroRecommendationDemo } from "@/components/hero-recommendation-demo"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const platforms = [
  { name: "ChatGPT", color: "bg-emerald-500" },
  { name: "Gemini", color: "bg-blue-500" },
  { name: "Google AI", color: "bg-amber-500" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(14,42,71,0.12),transparent_40%),radial-gradient(circle_at_14%_38%,rgba(200,169,107,0.14),transparent_42%)]" />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_1fr]">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Pay only after verified result
            </div>

            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-foreground md:text-5xl lg:text-[3.45rem]">
                Bądź marką, którą AI faktycznie rekomenduje klientom.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Budujemy Twoją widoczność w odpowiedziach ChatGPT, Gemini i Google AI Overviews. Rozliczenie
                dopiero po spełnieniu ustalonego warunku.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="h-12 gap-2 px-7 text-base font-medium">
                Sprawdź, czy Twoja strona się kwalifikuje
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" className="h-12 gap-2 px-6 text-base">
                <Play className="h-4 w-4" />
                Contact
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {platforms.map((platform) => (
                <span
                  key={platform.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${platform.color}`} />
                  {platform.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <HeroRecommendationDemo />
          </div>
        </div>
      </div>
    </section>
  )
}

