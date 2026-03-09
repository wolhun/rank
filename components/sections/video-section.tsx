import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section id="video" className="py-20 lg:py-24">
      <div className="section-shell">
        <p className="compare-label">Video · Version A</p>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            See how companies get recommended by AI
          </h2>
        </div>
      </div>

      <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 px-4 md:px-8">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="group relative aspect-[16/8.8] overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-[0_34px_110px_-60px_rgba(7,14,26,0.7)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(14,42,71,0.26),transparent_42%),radial-gradient(circle_at_80%_74%,rgba(200,169,107,0.22),transparent_38%),linear-gradient(135deg,#f8f8f6_0%,#f1f2f5_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(9,20,35,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(9,20,35,0.04)_1px,transparent_1px)] bg-[length:42px_42px] opacity-65" />

            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-white/30 text-foreground backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
              aria-label="Play video demo"
            >
              <Play className="ml-0.5 h-7 w-7" />
            </button>

            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-border/70 bg-background/78 px-4 py-3 backdrop-blur">
              <p className="text-sm font-medium text-foreground">AI recommendation demo preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
