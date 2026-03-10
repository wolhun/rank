import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="section-neutral py-24 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-primary px-8 py-12 text-center md:px-12">
          <h2 className="text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl">
            If AI recommends your competitors instead of you, they win the customer.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
            AI answers shape the shortlist. Make sure your company is one of the names people see.
          </p>
          <Button size="lg" variant="secondary" className="ui-motion mt-8 h-12 px-8 text-base">
            Check if your business qualifies
          </Button>
        </div>
      </div>
    </section>
  )
}

