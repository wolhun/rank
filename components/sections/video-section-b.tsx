import { Play } from "lucide-react"

export function VideoSectionB() {
  return (
    <section className="py-14 lg:py-18">
      <div className="section-shell">
        <p className="compare-label">Video · Version B</p>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            See how companies get recommended by AI
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-5xl rounded-3xl border border-border bg-card p-4 md:p-5">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_20%_20%,rgba(20,58,90,0.22),transparent_44%),radial-gradient(circle_at_78%_78%,rgba(200,159,99,0.22),transparent_46%),#f5f5f2]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.03)_1px,transparent_1px)] bg-[length:30px_30px]" />
            <div className="absolute left-4 top-4 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <button
              type="button"
              aria-label="Play video demo"
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/35 backdrop-blur"
            >
              <Play className="ml-0.5 h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

