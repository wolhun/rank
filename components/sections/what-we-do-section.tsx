import { Check, X } from "lucide-react"

const includes = [
  "Zwiększamy szansę, że AI będzie wymieniać Twoją firmę w odpowiedziach",
  "Budujemy obecność marki w źródłach, z których AI czerpie informacje",
  "Optymalizujemy profile i treści pod kątem systemów AI",
  "Monitorujemy i weryfikujemy efekty naszych działań",
  "Dostarczamy raport z wynikami i analizą",
]

const notIncludes = [
  "Nie gwarantujemy dosłownie pierwszego miejsca",
  "Nie manipulujemy systemami AI",
  "Nie zastępujemy SEO - to osobny kanał",
  "Nie obiecujemy magicznych rezultatów overnight",
]

export function WhatWeDoSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Nasza usługa</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Co dokładnie robimy
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* What we do */}
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-semibold text-foreground mb-5">Co obejmuje usługa</h3>
            <ul className="space-y-3.5">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we don't do */}
          <div className="rounded-2xl border border-border bg-secondary/55 p-7">
            <h3 className="font-semibold text-foreground mb-5">Czego to nie jest</h3>
            <ul className="space-y-3.5">
              {notIncludes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Result definition */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] px-6 py-5">
            <p className="font-medium text-foreground mb-1">Jak rozumiemy rezultat</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Twoja firma pojawia się w odpowiedziach AI na zapytania związane 
              z Twoją kategorią i lokalizacją. Weryfikujemy to i dokumentujemy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
