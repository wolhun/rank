"use client"

import { Button } from "@/components/ui/button"

const links = [
  { href: "#hero", label: "Home" },
  { href: "#how-ai-search-works", label: "Search Shift" },
  { href: "#how-it-works", label: "Process" },
  { href: "#benefits", label: "Benefits" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line-subtle)] bg-background/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#" className="text-base font-semibold tracking-tight text-foreground">
          AI Recommendation Positioning
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <Button className="h-10 px-5 text-sm font-medium">Get Recommended by AI now</Button>
      </div>
    </header>
  )
}
