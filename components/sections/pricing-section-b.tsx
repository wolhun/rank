import { Button } from "@/components/ui/button"
import { Check, ShieldCheck } from "lucide-react"
import { SignalGrid } from "@/components/brand/signal-grid"

const points = [
  "Positioning for AI recommendation results",
  "Prompt monitoring + verification proof",
  "No retainers, no subscription",
]

const miniFaq = [
  { q: "When do I pay?", a: "After the agreed result is verified." },
  { q: "Any monthly fee?", a: "No. Single fixed payment only." },
  { q: "What if not achieved?", a: "No result = no payment." },
]

export function PricingSectionB() {
  return (
    <section className="section-band-soft section-divider py-14 lg:py-18">
      <div className="section-shell">
        <div className="panel-info relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-8 md:p-10">
          <SignalGrid variant="pricing" className="left-[-30%] top-[-10%] h-[145%] w-[170%] opacity-20" />
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">One price. Pay only after results.</h2>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-primary md:text-6xl">$X,XXX</p>
          </div>

          <div className="relative mt-8 grid gap-6 md:grid-cols-[1fr_0.95fr]">
            <div className="panel-info rounded-2xl p-5">
              <p className="font-mono text-xs uppercase tracking-[0.13em] text-muted-foreground">What you get</p>
              <ul className="mt-3 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel-accent rounded-2xl p-5">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.13em] text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Risk reversal
              </p>
              <p className="mt-2 text-sm text-foreground">
                You pay only when your company appears in the agreed recommendation outputs.
              </p>
              <div className="mt-4 space-y-3">
                {miniFaq.map((item) => (
                  <div key={item.q} className="panel-info rounded-lg p-3">
                    <p className="text-sm font-semibold text-foreground">{item.q}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="ui-motion h-11 px-6 text-sm">Check if your business qualifies</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
