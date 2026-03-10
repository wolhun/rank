import { ArrowRight, Bot, Database, SearchCheck } from "lucide-react"

const items = [
  {
    icon: SearchCheck,
    title: "AI provide results based on live time research",
    text: "Models continuously scan and assemble answers from live and recent signals.",
  },
  {
    icon: Database,
    title: "We make sure they use resources that we provide them",
    text: "We structure and strengthen trusted sources so AI systems can reference them reliably.",
  },
  {
    icon: Bot,
    title: "Your business is recommended",
    text: "As the signals align, your company appears in recommendation outputs for your category.",
  },
]

export function LiveResearchSection() {
  return (
    <section className="section-neutral section-divider py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">How it works</h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {items.map((item, idx) => (
            <article key={item.title} className="card-default ui-motion relative rounded-2xl p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="copy-body mt-2">{item.text}</p>
              {idx < items.length - 1 ? (
                <ArrowRight className="arrow-reveal arrow-reveal-delay-2 absolute right-[-13px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary/55 md:block" />
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#pricing" className="micro-cta">
            See verification standard
          </a>
        </div>
      </div>
    </section>
  )
}
