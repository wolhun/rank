import { Check, X } from "lucide-react"

const ourModel = [
  "Płatność po uzyskaniu rezultatu",
  "Jasne warunki przed startem",
  "Weryfikowalne wyniki",
  "Brak ukrytych kosztów",
  "Jedna cena, bez abonamentu",
]

const typicalModel = [
  "Płatność z góry za obietnice",
  "Niejasne metryki sukcesu",
  "Trudno weryfikowalne efekty",
  "Dodatkowe koszty w trakcie",
  "Miesięczne abonamenty",
]

export function SafeModelSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Model współpracy</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Dlaczego nie ryzykujesz
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl">
          {/* Typical model */}
          <div className="bg-secondary/50 border border-border rounded-xl p-6">
            <p className="text-sm font-medium text-muted-foreground mb-5">Typowy model agencyjny</p>
            <ul className="space-y-3">
              {typicalModel.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our model */}
          <div className="bg-card border border-primary/20 rounded-xl p-6 ring-1 ring-primary/10">
            <p className="text-sm font-medium text-primary mb-5">Nasz model</p>
            <ul className="space-y-3">
              {ourModel.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 max-w-2xl">
          <blockquote className="border-l-2 border-border pl-5 py-1">
            <p className="text-muted-foreground italic">
              &ldquo;To nie jest kolejna usługa marketingowa, gdzie płacisz i czekasz. 
              Tu płacisz tylko wtedy, gdy dostarczymy to, co obiecaliśmy.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
