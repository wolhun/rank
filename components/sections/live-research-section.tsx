import { Database, Bot, Sparkles } from "lucide-react"

export function LiveResearchSection() {
  return (
    <section className="section-neutral section-divider py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            How AI decides what to recommend
          </h2>
          <p className="copy-lead mx-auto mt-4">
            AI recommendations are based on research, available sources, and learned signals.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          <article className="card-default rounded-2xl p-5">
            <Database className="h-5 w-5 text-primary" />
            <h3 className="mt-3 text-sm font-semibold text-foreground">Information sources</h3>
          </article>
          <span className="hidden text-primary md:block">→</span>
          <article className="card-default rounded-2xl p-5">
            <Bot className="h-5 w-5 text-primary" />
            <h3 className="mt-3 text-sm font-semibold text-foreground">AI model</h3>
          </article>
          <span className="hidden text-primary md:block">→</span>
          <article className="card-primary rounded-2xl p-5">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="mt-3 text-sm font-semibold text-foreground">Recommended companies</h3>
          </article>
        </div>
      </div>
    </section>
  )
}

