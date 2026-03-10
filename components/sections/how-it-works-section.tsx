const steps = [
  {
    number: "01",
    title: "Industry analysis",
    description: "We analyze your industry and how people ask AI questions in your category.",
  },
  {
    number: "02",
    title: "AI positioning",
    description: "We build the signals that make AI recognize and recommend your company.",
  },
  {
    number: "03",
    title: "Verification",
    description: "We test prompts and verify when your company appears in AI answers.",
  },
  {
    number: "04",
    title: "Payment after results",
    description: "Once the agreed result is achieved, you pay the fixed price.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-raised section-divider py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            How we make AI recommend your company
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="card-default rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.06] text-sm font-semibold text-primary">
                  {step.number}
                </span>
                {index < steps.length - 1 && <span className="hidden h-px flex-1 bg-border lg:block" />}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="copy-body mt-2">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#pricing" className="micro-cta">
            See pricing and payment terms
          </a>
        </div>
      </div>
    </section>
  )
}
