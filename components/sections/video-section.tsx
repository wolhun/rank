export function VideoSection() {
  return (
    <section id="video" className="py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Video</p>
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            See how companies get recommended by AI
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="aspect-video rounded-2xl border border-border bg-card shadow-[0_20px_60px_-45px_rgba(6,13,23,0.55)]" />
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              More and more customers start their search by asking AI.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Instead of browsing websites, they ask a question. AI gives a direct answer and recommends a few
              companies.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Those companies become the shortlist. If your business is not mentioned, you are invisible.
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
              This service helps your company become one of the recommended options.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

