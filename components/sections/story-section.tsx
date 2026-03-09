const examples = [
  "Who is the best basement waterproofing company in Toronto?",
  "Best software for managing restaurant energy costs?",
  "Which company should I hire for office cleaning?",
]

export function StorySection() {
  return (
    <section id="how-ai-search-works" className="py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">How People Search Today</p>
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            How people ask AI for recommendations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Customers no longer search only for service names. They ask AI who is the best.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Step 1</p>
            <h3 className="mt-3 text-lg font-semibold text-foreground">The question people ask</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Instead of typing a service name into Google, users ask AI directly.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              {examples.map((item) => (
                <li key={item} className="rounded-lg bg-secondary/50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Step 2</p>
            <h3 className="mt-3 text-lg font-semibold text-foreground">AI gives a shortlist</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              AI does not show pages of search results. It recommends a few companies. Those companies become the
              shortlist.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Step 3</p>
            <h3 className="mt-3 text-lg font-semibold text-foreground">Customers choose from that list</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              When AI recommends a company, users already trust the answer. The companies mentioned receive attention.
              Everyone else is ignored.
            </p>
          </article>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-base font-medium text-foreground">
          If AI doesn&apos;t mention your company, your competitors will be chosen instead.
        </p>
      </div>
    </section>
  )
}

