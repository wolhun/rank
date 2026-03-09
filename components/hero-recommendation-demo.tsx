"use client"

import { useEffect, useMemo, useState } from "react"

const QUERY_TEXT = "what is the best botox service in Miami"

const INITIAL_ITEMS = [
  {
    id: "competitor-a",
    name: "Coastal Aesthetics",
    description: "Strong local reviews and broad service list.",
    highlighted: false,
  },
  {
    id: "competitor-b",
    name: "Elite Skin Studio",
    description: "Popular for short wait times and downtown location.",
    highlighted: false,
  },
  {
    id: "your-business",
    name: "Your Business",
    benefits: ["Board-certified staff", "Natural-looking results", "500+ five-star reviews"],
    highlighted: true,
  },
]

const sleep = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms))

export function HeroRecommendationDemo() {
  const [queryText, setQueryText] = useState("")
  const [showResponse, setShowResponse] = useState(false)
  const [visibleItems, setVisibleItems] = useState<string[]>([])
  const [promoted, setPromoted] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const [items, setItems] = useState(INITIAL_ITEMS)
  const [isReady, setIsReady] = useState(false)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") {
      return true
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  useEffect(() => {
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!isReady) {
      return
    }

    let alive = true

    async function runAnimation() {
      while (alive) {
        setQueryText("")
        setShowResponse(false)
        setVisibleItems([])
        setPromoted(false)
        setShowOverlay(false)
        setItems(INITIAL_ITEMS)

        for (let i = 0; i < QUERY_TEXT.length; i += 1) {
          if (!alive) {
            return
          }
          setQueryText(QUERY_TEXT.slice(0, i + 1))
          await sleep(35)
        }

        setShowResponse(true)
        await sleep(180)
        setVisibleItems(["competitor-a"])
        await sleep(140)
        setVisibleItems(["competitor-a", "competitor-b"])
        await sleep(140)
        setVisibleItems(["competitor-a", "competitor-b", "your-business"])

        await sleep(700)
        setItems([INITIAL_ITEMS[2], INITIAL_ITEMS[0], INITIAL_ITEMS[1]])
        setPromoted(true)

        await sleep(900)
        setShowOverlay(true)
        await sleep(2200)
      }
    }

    if (prefersReducedMotion) {
      setQueryText(QUERY_TEXT)
      setShowResponse(true)
      setVisibleItems(["competitor-a", "competitor-b", "your-business"])
      setItems([INITIAL_ITEMS[2], INITIAL_ITEMS[0], INITIAL_ITEMS[1]])
      setPromoted(true)
      setShowOverlay(true)
      return
    }

    runAnimation()

    return () => {
      alive = false
    }
  }, [isReady, prefersReducedMotion])

  return (
    <div className="rounded-2xl border border-border/80 bg-card/95 p-5 shadow-[0_18px_60px_-40px_rgba(6,13,23,0.55)] backdrop-blur">
      <div className="rounded-xl border border-border/80 bg-background/90 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Prompt</p>
        <p className="font-mono text-[15px] leading-relaxed text-foreground">
          {queryText}
          {!prefersReducedMotion ? <span className="ml-0.5 inline-block animate-pulse text-primary">|</span> : null}
        </p>
      </div>

      <div className={`mt-5 transition-all duration-500 ${showResponse ? "opacity-100" : "opacity-0"}`}>
        <p className="mb-3 text-sm text-foreground">Recommendation output</p>
        <ol className="space-y-3">
          {items.map((item, index) => {
            const isVisible = visibleItems.includes(item.id)
            const isHighlighted = item.highlighted
            return (
              <li
                key={item.id}
                className={`group flex min-h-20 gap-3 rounded-xl border p-3.5 transition-all duration-500 ${
                  isHighlighted
                    ? "border-primary/35 bg-primary/[0.05]"
                    : "border-border/80 bg-background/70"
                } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} ${
                  promoted && isHighlighted ? "scale-[1.01] shadow-md" : ""
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground">
                  {index + 1}
                </span>
                <div>
                  <p className={`font-semibold ${isHighlighted ? "text-foreground" : "text-foreground/90"}`}>
                    {item.name}
                  </p>
                  {"description" in item ? (
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
                  ) : (
                    <ul className="mt-1.5 space-y-0.5 text-sm text-foreground/90">
                      {item.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-1.5">
                          <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <p
        className={`mt-4 rounded-lg border border-primary/25 bg-primary/[0.08] px-3 py-2 text-center text-xs font-medium text-primary transition-all duration-500 ${
          showOverlay ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        Result verified in incognito mode
      </p>
    </div>
  )
}

