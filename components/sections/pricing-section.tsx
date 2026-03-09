import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-card p-8 shadow-[0_24px_80px_-50px_rgba(6,13,23,0.55)] md:p-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              One price. Pay only after results.
            </h2>
            <p className="mt-4 text-5xl font-semibold tracking-tight text-foreground md:text-6xl">Fixed price: $X,XXX</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.13em] text-muted-foreground">What you get</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                <li>Positioning for AI recommendations in your category</li>
                <li>Monitoring and verification of results</li>
                <li>No monthly fees</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.13em] text-muted-foreground">When you pay</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You only pay after the agreed result is achieved.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" className="h-12 px-7 text-base">
              Check if your business qualifies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

