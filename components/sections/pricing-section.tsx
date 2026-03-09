import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

const includes = [
  "Pełna analiza widoczności w AI",
  "Wdrożenie strategii obecności",
  "Monitoring i weryfikacja rezultatów",
  "Raport z wynikami",
  "Płatność dopiero po rezultacie",
]

export function PricingSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Organic shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-muted blur-3xl" />
      
      <div className="section-shell relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Cennik</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Prosta, przejrzysta cena
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jedna cena za całą usługę. Bez pakietów, bez abonamentów, bez ukrytych kosztów.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-3xl p-10 relative shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                <Sparkles className="w-4 h-4" />
                Płatność po wyniku
              </span>
            </div>

            <div className="text-center mb-10 mt-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl font-bold text-foreground">4 900</span>
                <span className="text-xl text-muted-foreground">PLN</span>
              </div>
              <p className="text-muted-foreground mt-3">jednorazowa płatność po uzyskaniu rezultatu</p>
            </div>

            <div className="space-y-4 mb-10">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="w-full h-14 text-base gap-2 group rounded-xl shadow-lg">
              Sprawdź, czy kwalifikujesz się
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-5">
              Weryfikacja dopasowania zajmuje ok. 15 minut
            </p>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Dla kogo to ma sens</h4>
              <p className="text-sm text-muted-foreground">Firmy, które chcą być widoczne w nowym kanale</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Dlaczego prosty model</h4>
              <p className="text-sm text-muted-foreground">Jedna cena = jasne oczekiwania, łatwa decyzja</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Różnica vs abonament</h4>
              <p className="text-sm text-muted-foreground">Płacisz raz, po efekcie - nie co miesiąc</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
