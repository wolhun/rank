import { Database, Bot, Sparkles } from "lucide-react"
import { SignalGrid } from "@/components/brand/signal-grid"

export function LiveResearchSection() {
  return (
    <section className="section-band-soft section-divider py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            How AI decides what to recommend
          </h2>
          <p className="copy-lead mx-auto mt-4">
            AI recommendations are based on research, available sources, and learned signals.
          </p>
        </div>

        <div className="panel-info relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl p-6 md:p-8">
          <SignalGrid variant="process" className="left-0 top-0 h-full w-full opacity-30" />
          <div className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <article className="panel-info rounded-2xl p-5">
              <Database className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold text-foreground">Information sources</h3>
            </article>
            <span className="signal-rail hidden h-5 w-16 md:block" />
            <article className="panel-info rounded-2xl p-5">
              <Bot className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold text-foreground">AI model</h3>
            </article>
            <span className="signal-rail hidden h-5 w-16 md:block" />
            <article className="panel-accent rounded-2xl p-5">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold text-foreground">Recommended companies</h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
