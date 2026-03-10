export function ProofSection() {
  return (
    <section className="section-neutral section-divider py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Position Tracking</p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              See when your company starts appearing in AI answers
            </h2>
            <p className="copy-lead mt-4">
              We track AI answers for questions in your category. When your company starts appearing, we verify the
              result.
            </p>
            <p className="copy-body mt-3">
              You see exactly when your business enters the recommendations.
            </p>
            <p className="mt-5 text-base font-medium text-foreground">You see the result before you pay.</p>
            <a href="#pricing" className="micro-cta mt-5">
              See if your category qualifies
            </a>
          </div>

          <div className="panel-info rounded-2xl p-6">
            <div className="panel-accent rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Tracking feed</p>
              <div className="mt-4 space-y-3">
                <div className="panel-info rounded-lg p-3 text-sm text-foreground">
                  Query: best basement waterproofing company in Toronto
                  <span className="mt-1 block text-xs text-primary">Your company detected in recommendation set</span>
                </div>
                <div className="panel-info rounded-lg p-3 text-sm text-foreground">
                  Query: top office cleaning company downtown
                  <span className="mt-1 block text-xs text-muted-foreground">Monitoring active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
