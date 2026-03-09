import { TrendingDown, Users, DollarSign, Clock } from "lucide-react"

const consequences = [
  {
    icon: TrendingDown,
    title: "Spadający ruch organiczny",
    description: "Google traci na znaczeniu. Firmy, które nie adaptują się do AI, tracą widoczność."
  },
  {
    icon: Users,
    title: "Klienci wybierają konkurencję",
    description: "Gdy AI poleca Twoją konkurencję, tracisz klientów zanim jeszcze o Tobie usłyszą."
  },
  {
    icon: DollarSign,
    title: "Rosnące koszty reklam",
    description: "Tradycyjne reklamy drożeją, a ich skuteczność spada. AI zmienia reguły gry."
  },
  {
    icon: Clock,
    title: "Utrata przewagi rynkowej",
    description: "Pierwsi w AI zyskują przewagę trudną do nadrobienia."
  },
]

export function WhatYouLoseSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Co tracisz?</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground mb-4">
              Niewidoczność w AI to aktywna strata
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Twoja konkurencja już działa. Każdy dzień zwłoki to klienci, których tracisz na ich rzecz.
            </p>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {consequences.map(({ icon: Icon, title, description }) => (
              <div 
                key={title} 
                className="bg-card border border-border rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
