import { Button } from "@/components/ui/button"
import { BadgeCheck, Clock3, DollarSign, ShieldCheck, Sparkles } from "lucide-react"

const includes = [
  "Positioning for AI recommendations in your category",
  "Monitoring and verification of results",
  "No monthly fees",
]

const flow = [
  {
    icon: ShieldCheck,
    title: "Scope agreed",
    text: "We define prompts, category, and verification criteria before the work starts.",
  },
  {
    icon: BadgeCheck,
    title: "Result verified",
    text: "You see when your company appears in AI recommendation outputs.",
  },
  {
    icon: DollarSign,
    title: "Then payment",
    text: "Only after the agreed result is achieved, the fixed invoice is paid.",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-28">
      <div className="section-shell">
        <p className="compare-label">Pricing · Version A</p>
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[1fr_1.15fr]">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-8 shadow-[0_28px_90px_-58px_rgba(6,13,23,0.62)] md:p-10">
            <div className="pointer-events-none absolute -top-24 right-[-4.8rem] h-56 w-56 rounded-full bg-primary/[0.12] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-[-4rem] h-44 w-44 rounded-full bg-[rgba(200,169,107,0.14)] blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              One-time model
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              One price. Pay only after results.
            </h2>

            <div className="mt-6 rounded-2xl border border-border bg-background/75 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Fixed price</p>
              <p className="mt-1 text-5xl font-semibold tracking-tight text-foreground md:text-6xl">$X,XXX</p>
            </div>

            <ul className="mt-6 space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/[0.10] text-primary">
                    <BadgeCheck className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button size="lg" className="mt-8 h-12 px-7 text-base">
              Check if your business qualifies
            </Button>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">When you pay</p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              You only pay after the agreed result is achieved.
            </p>

            <div className="mt-7 space-y-4">
              {flow.map((step, index) => (
                <div key={step.title} className="relative rounded-2xl border border-border bg-secondary/30 p-5">
                  {index < flow.length - 1 ? (
                    <span className="absolute bottom-[-0.9rem] left-10 h-4 w-px bg-border" />
                  ) : null}
                  <div className="flex items-start gap-3.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.10] text-primary">
                      <step.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-border bg-background/65 p-4">
              <Clock3 className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">Most categories are delivered in several weeks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
