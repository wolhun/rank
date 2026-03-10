import { Button } from "@/components/ui/button"
import { SignalGrid } from "@/components/brand/signal-grid"

export function FinalCTASection() {
  return (
    <section className="section-band-contrast section-divider section-spotlight py-24 lg:py-28">
      <div className="section-shell">
        <div className="panel-accent relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-8 py-12 text-center md:px-12">
          <SignalGrid variant="cta" className="left-[-26%] top-[-20%] h-[150%] w-[160%] opacity-28" />
          <h2 className="relative text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            If AI recommends your competitors instead of you, they win the customer.
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            AI answers shape the shortlist. Make sure your company is one of the names people see.
          </p>
          <Button size="lg" className="ui-motion relative mt-8 h-12 px-8 text-base">
            Check if your business qualifies
          </Button>
        </div>
      </div>
    </section>
  )
}
