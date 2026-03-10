const typicalModel = [
  "Monthly payments",
  "Long-term retainers",
  "No guaranteed results",
  "You pay for the work",
]

const thisModel = [
  "No upfront payment",
  "No subscription",
  "One fixed price",
  "Payment only after results",
]

export function SafeModelSection() {
  return (
    <section className="section-band-soft section-divider py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Traditional SEO vs AI recommendation positioning
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">Two different models of visibility.</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="panel-info rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Traditional SEO / GEO services
            </p>
            <p className="copy-body mt-3">
              You pay every month. Agencies work on rankings. Results may take months. And payments never really stop.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/90">
              {typicalModel.map((item) => (
                <li key={item} className="rounded-lg bg-secondary/50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="panel-accent rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              AI recommendation positioning
            </p>
            <p className="copy-body mt-3">
              You pay only after the result. No monthly fees. No long contracts. One fixed payment once your company
              appears in AI answers.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/90">
              {thisModel.map((item) => (
                <li key={item} className="rounded-lg bg-primary/[0.07] px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-base font-medium text-foreground">
          Traditional SEO charges for the process. This service charges for the result.
        </p>
        <div className="mt-4 text-center">
          <a href="#pricing" className="micro-cta">
            Compare delivery model
          </a>
        </div>
      </div>
    </section>
  )
}
