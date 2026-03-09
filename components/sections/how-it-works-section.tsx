const steps = [
  {
    number: "01",
    title: "Analiza",
    description: "Sprawdzamy obecną widoczność Twojej firmy w AI i oceniamy potencjał kategorii.",
  },
  {
    number: "02",
    title: "Przygotowanie i wdrożenie",
    description: "Wdrażamy działania potrzebne do zwiększenia obecności marki w odpowiedziach AI.",
  },
  {
    number: "03",
    title: "Monitoring i weryfikacja",
    description: "Sprawdzamy, czy ustalony rezultat został osiągnięty i dokumentujemy wyniki.",
  },
  {
    number: "04",
    title: "Rozliczenie po wyniku",
    description: "Płacisz dopiero po spełnieniu ustalonego warunku. Zero ryzyka z Twojej strony.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Proces</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Jak wygląda współpraca
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-5xl font-semibold text-border">{step.number}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border -translate-x-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
