const benefits = [
  {
    title: "Wejście do shortlisty",
    description: "Większa szansa, że Twoja firma znajdzie się na liście rekomendacji AI.",
  },
  {
    title: "Nowy kanał discovery",
    description: "Obecność marki tam, gdzie klienci coraz częściej szukają rekomendacji.",
  },
  {
    title: "Leady wysokiej intencji",
    description: "Klienci z AI mają już wysoką intencję zakupową.",
  },
  {
    title: "Przewaga czasowa",
    description: "Wejście wcześniej niż konkurencja oznacza budowanie pozycji.",
  },
  {
    title: "Dywersyfikacja źródeł",
    description: "Mniejsze uzależnienie od klasycznych wyników wyszukiwania.",
  },
  {
    title: "Budowa autorytetu",
    description: "Gdy AI rekomenduje Twoją firmę, budujesz pozycję eksperta.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Korzyści</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Co zyskujesz dla swojego biznesu
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-4xl">
          {benefits.map(({ title, description }, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
