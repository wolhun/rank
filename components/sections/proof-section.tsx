export function ProofSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Position Tracking</p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              See when your company starts appearing in AI answers
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We track AI answers for questions in your category. When your company starts appearing, we verify the
              result.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              You see exactly when your business enters the recommendations.
            </p>
            <p className="mt-5 text-base font-medium text-foreground">You see the result before you pay.</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_20px_60px_-45px_rgba(6,13,23,0.55)]">
            <div className="rounded-xl border border-border/80 bg-secondary/35 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Tracking feed</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-border bg-background/80 p-3 text-sm text-foreground">
                  Query: best basement waterproofing company in Toronto
                  <span className="mt-1 block text-xs text-primary">Your company detected in recommendation set</span>
                </div>
                <div className="rounded-lg border border-border bg-background/80 p-3 text-sm text-foreground">
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

