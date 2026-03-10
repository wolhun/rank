import { Play } from "lucide-react"

export function VideoSectionB() {
  return (
    <section id="video" className="section-neutral section-divider py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            See how it works with real case studies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Simple steps. No effort from your side. Clear rules. Pay only after results.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-5xl rounded-3xl border border-border bg-card p-4 md:p-5">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_20%_20%,rgba(20,58,90,0.22),transparent_44%),radial-gradient(circle_at_78%_78%,rgba(200,159,99,0.22),transparent_46%),#f5f5f2]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.03)_1px,transparent_1px)] bg-[length:30px_30px]" />
            <div className="absolute left-4 top-4 rounded-md border border-border/70 bg-background/80 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground">
              Prompt → Answer → Explain
            </div>
            <button
              type="button"
              aria-label="Play video demo"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/35 backdrop-blur"
            >
              <Play className="ml-0.5 h-7 w-7 text-foreground" />
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          Real examples of companies appearing in AI answers.
        </p>
      </div>
    </section>
  )
}

