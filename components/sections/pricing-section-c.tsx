import { Button } from "@/components/ui/button"

const scope = [
  "Positioning for AI recommendations in your category",
  "Monitoring and verification of results",
  "No monthly fees",
  "Clear verification process",
]

const risk = [
  ["When do I pay?", "After the agreed results are verified."],
  ["Upfront payment?", "None."],
  ["What if results are not achieved?", "No results. No payment."],
]

export function PricingSectionC() {
  return (
    <section className="section-neutral section-divider py-16 lg:py-20">
      <div className="section-shell">
        <p className="compare-label">Pricing · Version C</p>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">One price. Pay only after results.</h2>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-foreground md:text-6xl">$X,XXX</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="card-default rounded-3xl p-7">
              <h3 className="text-lg font-semibold text-foreground">What do you get</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                {scope.map((item) => (
                  <li key={item} className="rounded-lg border border-border bg-background/75 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="card-primary rounded-3xl p-7">
              <h3 className="text-lg font-semibold text-foreground">Risk reversal</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                You only pay when your company appears in the agreed recommendation output.
              </p>
              <div className="mt-4 space-y-2">
                {risk.map(([q, a]) => (
                  <div key={q} className="rounded-lg border border-border bg-background/75 px-3 py-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{q}</p>
                    <p className="mt-1 text-sm text-foreground">{a}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="ui-motion h-12 px-8 text-base">
              Check if your business qualifies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

