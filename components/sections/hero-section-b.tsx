"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { HeroRecommendationDemo } from "@/components/hero-recommendation-demo"

const platform = {
  name: "Gemini" as const,
  color: "#4A6CF7",
  logo: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 1.5 14.9 9.1 22.5 12l-7.6 2.9L12 22.5l-2.9-7.6L1.5 12l7.6-2.9Z" />
    </svg>
  ),
}

export function HeroSectionB() {
  return (
    <section className="py-16 lg:py-20">
      <div className="section-shell">
        <p className="compare-label">Hero · Version B</p>
        <div className="rounded-3xl border border-border bg-[linear-gradient(135deg,#fff_0%,#eef2f8_100%)] p-6 shadow-[0_26px_90px_-60px_rgba(12,19,33,0.68)] md:p-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Typography B sample</p>
              <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.02em] text-foreground md:text-5xl">
                Make AI recommend your business. Pay after results.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                A denser, more product-like hero layout for faster scanning.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  Pay only after results.
                </p>
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  No upfront payment.
                </p>
              </div>
              <Button className="h-11 gap-2 px-6 text-sm">
                Check if your business qualifies
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card/95 p-2">
              <HeroRecommendationDemo platform={platform} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

