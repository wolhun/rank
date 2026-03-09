import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="py-24 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-primary px-8 py-12 text-center md:px-12">
          <h2 className="text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl">
            See if your company can be recommended by AI.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
            We accept a limited number of projects. Check if your business qualifies.
          </p>
          <Button size="lg" variant="secondary" className="mt-8 h-12 px-8 text-base">
            Check eligibility
          </Button>
        </div>
      </div>
    </section>
  )
}

