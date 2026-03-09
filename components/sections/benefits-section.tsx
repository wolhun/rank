const benefits = [
  {
    title: "Better leads",
    text: "When AI recommends your company, users already trust the answer. These leads convert better than random search traffic.",
  },
  {
    title: "No upfront payment",
    text: "You don’t pay for promises. You only pay after the agreed result is achieved. If we don’t deliver, you don’t pay.",
  },
  {
    title: "Only a few companies get mentioned",
    text: "AI answers usually include only a small number of companies. If you are not one of them, you are not considered.",
  },
  {
    title: "Early advantage",
    text: "Right now very few companies invest in AI visibility. Later it will be much harder.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-secondary/35">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Why our service
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
