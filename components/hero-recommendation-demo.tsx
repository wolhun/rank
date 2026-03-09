"use client"

import { type ReactNode, useEffect, useMemo, useState } from "react"

const QUERY_TEXT = "what is the best botox service in Miami"
const ITEM_HEIGHT = 96
const ITEM_GAP = 12

type DemoPlatform = {
  name: "ChatGPT" | "Gemini" | "Claude"
  color: string
  logo: ReactNode
}

type DemoProps = {
  platform: DemoPlatform
}

const ITEMS = [
  {
    id: "coastal",
    name: "Coastal Aesthetics",
    description: "Strong local reviews and broad service list.",
  },
  {
    id: "elite",
    name: "Elite Skin Studio",
    description: "Popular for short wait times and downtown location.",
  },
  {
    id: "your",
    name: "Your Business",
    benefits: ["Board-certified staff", "Natural-looking results", "500+ five-star reviews"],
  },
] as const

const sleep = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms))

export function HeroRecommendationDemo({ platform }: DemoProps) {
  const [queryText, setQueryText] = useState("")
  const [showOutput, setShowOutput] = useState(false)
  const [visibleCount, setVisibleCount] = useState(0)
  const [promoted, setPromoted] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const [ready, setReady] = useState(false)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  const orderMap = useMemo(() => {
    if (!promoted) {
      return { coastal: 0, elite: 1, your: 2 }
    }
    return { your: 0, coastal: 1, elite: 2 }
  }, [promoted])

  useEffect(() => setReady(true), [])

  useEffect(() => {
    if (!ready) return

    let alive = true

    async function run() {
      while (alive) {
        setQueryText("")
        setShowOutput(false)
        setVisibleCount(0)
        setPromoted(false)
        setShowOverlay(false)

        for (let i = 0; i < QUERY_TEXT.length; i += 1) {
          if (!alive) return
          setQueryText(QUERY_TEXT.slice(0, i + 1))
          await sleep(30)
        }

        setShowOutput(true)
        await sleep(180)
        setVisibleCount(1)
        await sleep(160)
        setVisibleCount(2)
        await sleep(160)
        setVisibleCount(3)

        await sleep(900)
        setPromoted(true)
        await sleep(950)
        setShowOverlay(true)
        await sleep(2100)
      }
    }

    if (prefersReducedMotion) {
      setQueryText(QUERY_TEXT)
      setShowOutput(true)
      setVisibleCount(3)
      setPromoted(true)
      setShowOverlay(true)
      return
    }

    run()
    return () => {
      alive = false
    }
  }, [prefersReducedMotion, ready])

  return (
    <div className="rounded-2xl border border-border bg-card/95 p-5 shadow-[0_24px_80px_-48px_rgba(6,13,23,0.65)] backdrop-blur">
      <div className="flex items-center gap-3 border-b border-border/70 pb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${platform.color}1A`, color: platform.color }}>
          {platform.logo}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{platform.name}</p>
          <p className="text-xs text-muted-foreground">AI assistant</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-border/80 bg-background/85 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">User&apos;s Prompt</p>
        <p className="font-mono text-[15px] leading-relaxed text-foreground">
          {queryText}
          {!prefersReducedMotion ? <span className="ml-0.5 inline-block animate-pulse text-primary">|</span> : null}
        </p>
      </div>

      <div className={`mt-5 transition-all duration-400 ${showOutput ? "opacity-100" : "opacity-0"}`}>
        <p className="mb-3 text-sm text-foreground">{platform.name} output</p>

        <div
          className="relative"
          style={{ height: `${ITEM_HEIGHT * ITEMS.length + ITEM_GAP * (ITEMS.length - 1)}px` }}
        >
          {ITEMS.map((item, idx) => {
            const targetIndex = orderMap[item.id as keyof typeof orderMap]
            const y = targetIndex * (ITEM_HEIGHT + ITEM_GAP)
            const visible = idx < visibleCount
            const isYourBusiness = item.id === "your"
            return (
              <div
                key={item.id}
                className={`absolute left-0 right-0 flex min-h-24 gap-3 rounded-xl border p-3.5 transition-[transform,opacity,box-shadow,border-color,background-color] duration-700 ease-[cubic-bezier(.22,.61,.36,1)] ${
                  isYourBusiness ? "border-primary/35 bg-primary/[0.05]" : "border-border/80 bg-background/70"
                } ${visible ? "opacity-100" : "opacity-0"}`}
                style={{ transform: `translateY(${y}px)` }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground">
                  {targetIndex + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
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
              </div>
            )
          })}
        </div>
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
