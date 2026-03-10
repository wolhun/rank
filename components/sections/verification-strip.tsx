import { BadgeCheck, Eye, ShieldCheck } from "lucide-react"

const points = [
  { icon: Eye, title: "Incognito checks", text: "Verification runs in clean browser mode." },
  { icon: ShieldCheck, title: "Logged-out testing", text: "No account history affects the output." },
  { icon: BadgeCheck, title: "Agreed prompts", text: "Results are validated on predefined prompts." },
]

export function VerificationStrip() {
  return (
    <section className="section-raised section-divider py-10">
      <div className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {points.map((item) => (
            <article key={item.title} className="card-muted ui-motion rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.11] text-primary">
                  <item.icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

