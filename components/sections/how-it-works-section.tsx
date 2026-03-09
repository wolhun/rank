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
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Proces</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Jak wygląda współpraca
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.06] text-sm font-semibold text-primary">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-border lg:block" />
                )}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
