import { ArrowDown, ArrowRight, ListChecks, MessageSquareQuote, Sparkles } from "lucide-react"

const examples = [
  "Who is the best basement waterproofing company in Toronto?",
  "Best software for managing restaurant energy costs?",
  "Which company should I hire for office cleaning?",
]

const steps = [
  {
    number: "01",
    icon: MessageSquareQuote,
    title: "The question people ask",
    text: "Instead of typing a service name into Google, users ask AI directly.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "AI gives a shortlist",
    text: "AI does not show pages of search results. It recommends a few companies. Those companies become the shortlist.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Customers choose from that list",
    text: "When AI recommends a company, users already trust the answer. The companies mentioned receive attention.",
  },
]

export function StorySection() {
  return (
    <section id="how-ai-search-works" className="py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">How People Search Today</p>
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            How people ask AI for recommendations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Customers no longer search only for service names. They ask AI who is the best.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-3xl border border-border/80 bg-card/90 p-5 shadow-[0_24px_80px_-60px_rgba(7,14,26,0.6)] md:p-8">
          <div className="relative grid gap-6 lg:grid-cols-3">
            <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-primary/0 via-primary/35 to-primary/0 lg:hidden" />
            <div className="absolute left-0 right-0 top-[3.35rem] hidden h-px bg-gradient-to-r from-primary/0 via-primary/35 to-primary/0 lg:block" />

            {steps.map((step, index) => (
              <article key={step.number} className="relative rounded-2xl border border-border bg-background/80 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/35 bg-primary/[0.08] text-sm font-semibold text-primary">
                    {step.number}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <step.icon className="h-5 w-5" />
                  </span>
                  {index < steps.length - 1 ? (
                    <>
                      <ArrowRight className="arrow-reveal arrow-reveal-delay-2 absolute right-[-14px] top-9 hidden h-5 w-5 text-primary/55 lg:block" />
                      <ArrowDown className="arrow-reveal arrow-reveal-delay-2 absolute left-[1.08rem] top-[calc(100%+0.25rem)] h-4 w-4 text-primary/55 lg:hidden" />
                    </>
                  ) : null}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>

                {index === 0 ? (
                  <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                    {examples.map((example) => (
                      <li key={example} className="rounded-lg border border-border/70 bg-secondary/50 px-3 py-2">
                        {example}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-base font-medium text-foreground">
          If AI doesn&apos;t mention your company, your competitors will be chosen instead.
        </p>
      </div>
    </section>
  )
}
