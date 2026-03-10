export function WhyNeededSection() {
  return (
    <section className="section-neutral section-divider py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            AI recommendations are becoming the new shortlist
          </h2>
          <p className="copy-lead mx-auto mt-4">
            More and more decisions start with AI answers. The companies mentioned become the shortlist. Everyone else is ignored.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          <div className="card-default rounded-2xl p-4 text-sm text-foreground">AI answer</div>
          <span className="hidden text-primary md:block">→</span>
          <div className="card-default rounded-2xl p-4 text-sm text-foreground">Shortlist</div>
          <span className="hidden text-primary md:block">→</span>
          <div className="card-primary rounded-2xl p-4 text-sm font-semibold text-foreground">Chosen company</div>
        </div>
      </div>
    </section>
  )
}

