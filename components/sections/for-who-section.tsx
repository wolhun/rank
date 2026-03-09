import { Check, X } from "lucide-react"

const goodFit = [
  "Twoi klienci porównują firmy przed kontaktem",
  "Decyzja zakupowa zaczyna się od researchu online",
  "Działasz lokalnie lub w konkretnej kategorii",
  "Chcesz wejść wcześnie w nowy kanał",
  "Zależy Ci na byciu tam, gdzie AI tworzy shortlistę",
]

const notFit = [
  "Oczekujesz gwarantowanych wyników overnight",
  "Twoi klienci nie używają internetu do researchu",
  "Szukasz zastępstwa dla kompleksowej strategii",
]

export function ForWhoSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Dopasowanie</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Dla kogo jest ta usługa
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl">
          {/* Good fit */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-5">Ta usługa ma sens, jeśli...</h3>
            <ul className="space-y-3">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div className="bg-secondary/50 border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-5">Może nie być dobrym fit, jeśli...</h3>
            <ul className="space-y-3">
              {notFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Szczerość w kwestii dopasowania buduje zaufanie. Wolimy pracować 
                z firmami, dla których ta usługa ma realny sens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
