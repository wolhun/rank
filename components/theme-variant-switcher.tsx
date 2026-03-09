"use client"

import { useEffect, useState } from "react"

type ThemeVariant = {
  id: string
  name: string
  swatches: [string, string, string]
}

const variants: ThemeVariant[] = [
  { id: "executive-light", name: "Executive", swatches: ["#f7f6f3", "#143a5a", "#c89f63"] },
  { id: "slate-light", name: "Slate", swatches: ["#f3f4f6", "#334155", "#8d9aad"] },
  { id: "ivory-champagne", name: "Ivory", swatches: ["#f9f6ef", "#2a405f", "#c9a26e"] },
  { id: "mist-blue", name: "Mist Blue", swatches: ["#f4f8fb", "#1f4f78", "#73a3cc"] },
  { id: "stone-light", name: "Stone", swatches: ["#f6f5f2", "#394751", "#a9a08f"] },
]

const storageKey = "ai-rank-theme"

export function ThemeVariantSwitcher() {
  const [activeTheme, setActiveTheme] = useState("executive-light")

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey)
    const initial = variants.some((v) => v.id === saved) ? saved! : "executive-light"
    setActiveTheme(initial)
    document.documentElement.setAttribute("data-theme", initial)
  }, [])

  function setTheme(id: string) {
    setActiveTheme(id)
    document.documentElement.setAttribute("data-theme", id)
    window.localStorage.setItem(storageKey, id)
  }

  return (
    <div className="fixed bottom-4 right-4 z-[70] w-[min(92vw,360px)] rounded-2xl border border-border bg-card/95 p-3 shadow-[0_28px_80px_-56px_rgba(12,19,33,0.65)] backdrop-blur">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Theme variants</p>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {variants.map((variant) => (
          <button
            key={variant.id}
            type="button"
            onClick={() => setTheme(variant.id)}
            className={`rounded-xl border px-2.5 py-2 text-left transition-colors ${
              activeTheme === variant.id ? "border-primary bg-primary/[0.08]" : "border-border bg-background/70 hover:bg-secondary/60"
            }`}
          >
            <span className="mb-2 flex items-center gap-1">
              {variant.swatches.map((c) => (
                <span key={c} className="h-3 w-3 rounded-full border border-black/10" style={{ backgroundColor: c }} />
              ))}
            </span>
            <span className="block text-xs font-medium text-foreground">{variant.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

