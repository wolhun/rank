import { ArrowRight, Bot, Search } from "lucide-react"

export function StorySectionB() {
  return (
    <section className="section-raised section-divider py-14 lg:py-18">
      <div className="section-shell">
        <p className="compare-label">Process · Version B</p>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            How people ask AI for recommendations
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
          <article className="card-default rounded-2xl p-6">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.1] text-primary">
              <Search className="h-4 w-4" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">Ask AI directly</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Users ask a full question instead of clicking through search results.
            </p>
          </article>

          <ArrowRight className="arrow-reveal arrow-reveal-delay-2 mx-auto hidden h-5 w-5 text-primary lg:block" />

          <article className="card-primary rounded-2xl p-6">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.1] text-primary">
              <Bot className="h-4 w-4" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">AI builds a shortlist</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The model returns a short set of recommended companies, not pages of links.
            </p>
          </article>

          <ArrowRight className="arrow-reveal arrow-reveal-delay-2 mx-auto hidden h-5 w-5 text-primary lg:block" />

          <article className="card-default rounded-2xl p-6">
            <div className="font-mono text-xs uppercase tracking-[0.13em] text-primary">Outcome</div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">Attention goes to listed brands</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If your brand is mentioned, you enter the buying conversation immediately.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
