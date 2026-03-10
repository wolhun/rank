import { SignalGrid } from "@/components/brand/signal-grid"

const steps = [
  {
    number: "01",
    title: "Identify the main buyer-intent prompt",
    description: "We identify the question your potential customers ask when they want to hire a company.",
  },
  {
    number: "02",
    title: "Analyze the recommendation landscape",
    description: "We analyze how AI answers this question in your industry and verify what can influence the recommendation.",
  },
  {
    number: "03",
    title: "Position your company for that prompt",
    description: "We structure signals and sources so AI systems recognize your company as a strong option for that question.",
  },
  {
    number: "04",
    title: "Verification",
    description: "We test the prompt repeatedly in incognito mode and while logged out to reduce personalization impact.",
  },
  {
    number: "05",
    title: "Payment after results",
    description: "Once your company appears in the agreed recommendation output, you pay the fixed price.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-band-soft section-divider py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">How the process works</h2>
        </div>

        <div className="panel-info mx-auto mb-8 max-w-6xl rounded-2xl p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Example prompt</p>
          <p className="mt-1 text-sm text-foreground">Who is the best car accident lawyer in Miami?</p>
        </div>

        <div className="panel-info relative mx-auto max-w-6xl overflow-hidden rounded-3xl p-6 md:p-8">
          <SignalGrid variant="process" className="left-0 top-0 h-full w-full opacity-25" />
          <div className="relative hidden grid-cols-5 gap-4 lg:grid">
            {steps.map((step, idx) => (
              <article key={step.title} className={idx === steps.length - 1 ? "panel-accent rounded-2xl p-5" : "panel-info rounded-2xl p-5"}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.09] text-xs font-semibold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="relative space-y-4 lg:hidden">
            {steps.map((step, idx) => (
              <article key={step.title} className={idx === steps.length - 1 ? "panel-accent rounded-2xl p-5" : "panel-info rounded-2xl p-5"}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.09] text-xs font-semibold text-primary">
                    {step.number}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
