export function OldVsNewSection() {
  return (
    <section className="section-band-contrast section-divider py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            AI recommendations feel like a trusted referral
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="panel-info rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Classic search path</p>
            <p className="mt-4 text-sm text-foreground">Google search → many results → comparison → decision</p>
          </article>

          <article className="panel-accent rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">AI recommendation path</p>
            <p className="mt-4 text-sm text-foreground">AI recommendation → trust → click → contact</p>
          </article>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-base font-medium text-foreground">
          A lead from AI can be worth much more, because trust exists before the click.
        </p>
      </div>
    </section>
  )
}
