export function OldVsNewSection() {
  return (
    <section className="section-raised section-divider py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Search results vs AI recommendations
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="card-muted rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Old way</p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">User types a service name into Google</h3>
            <p className="mt-2 text-sm text-muted-foreground">Example: Basement waterproofing Toronto</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Google shows a list of results. Users open several websites, compare options, and then choose a
              company. You compete with dozens of businesses.
            </p>
          </article>

          <article className="card-primary rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">New way</p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">User asks AI a question</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Example: Who is the best basement waterproofing company in Toronto?
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              AI gives a direct answer and recommends a few companies. Those companies become the shortlist.
            </p>
          </article>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-base font-medium text-foreground">
          Being recommended by AI means you start the conversation already shortlisted.
        </p>
        <div className="mt-4 text-center">
          <a href="#pricing" className="micro-cta">
            Check estimated timeline
          </a>
        </div>
      </div>
    </section>
  )
}
