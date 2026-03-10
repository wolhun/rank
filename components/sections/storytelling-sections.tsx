import { Button } from "@/components/ui/button"
import { ArrowRight, CircleDot, ListChecks, MessageSquareQuote, Sparkles } from "lucide-react"
import { SignalGrid } from "@/components/brand/signal-grid"

const sections = [
  {
    id: "story-shift",
    headline: "Search used to start with Google.\nNow it often starts with AI.",
    text: [
      "People no longer type only service names.",
      "They ask questions.",
      "Who is the best company for this?",
      "Which tool should I choose?",
      "Who should I hire?",
      "AI gives a direct answer.",
      "And recommends a few companies.",
    ],
  },
  {
    id: "story-decision",
    headline: "This is how customers choose today.",
    text: [
      "A user asks AI a question.",
      "Who is the best company for this?",
      "AI responds with a short answer.",
      "It recommends a few companies.",
      "Those companies become the shortlist.",
      "Everyone else disappears from the decision.",
    ],
    keyLine: "If your company is not mentioned, you are not considered.",
  },
  {
    id: "story-consequence",
    headline: "AI recommendations shape the shortlist.",
    text: [
      "When AI suggests a company, users already trust the answer.",
      "They don’t start from zero.",
      "They start from a recommendation.",
      "And that recommendation determines who gets the lead.",
    ],
  },
] as const

function VisualCardOne() {
  return (
    <div className="panel-info relative overflow-hidden rounded-2xl p-4 md:p-5">
      <div className="overflow-hidden rounded-xl border border-border bg-background/90">
        <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,color-mix(in_oklab,var(--primary)_12%,white),color-mix(in_oklab,var(--accent)_14%,white))] p-3">
          <div className="flex h-full items-end justify-between">
            <p className="rounded-md border border-border/90 bg-background/92 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground">
              IMG SLOT
            </p>
            <p className="rounded-md bg-primary px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground">
              Story Start
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-border bg-background/85 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Behavior shift</p>
        <p className="mt-1 text-sm text-foreground">
          Search phrase {"\u2192"} Question prompt {"\u2192"} AI recommendation
        </p>
      </div>
    </div>
  )
}

function VisualCardTwo() {
  return (
    <div className="panel-accent rounded-2xl p-4 md:p-5">
      <div className="space-y-3">
        <div className="rounded-lg border border-border bg-background/90 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Step 1</p>
          <p className="mt-1 text-sm text-foreground">User asks AI directly</p>
        </div>
        <div className="flex justify-center">
          <ArrowRight className="h-4 w-4 text-primary" />
        </div>
        <div className="rounded-lg border border-primary/25 bg-primary/[0.08] p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Step 2</p>
          <p className="mt-1 text-sm text-foreground">AI returns shortlist</p>
        </div>
        <div className="flex justify-center">
          <ArrowRight className="h-4 w-4 text-primary" />
        </div>
        <div className="rounded-lg border border-border bg-background/90 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Step 3</p>
          <p className="mt-1 text-sm text-foreground">Shortlist decides attention</p>
        </div>
      </div>
    </div>
  )
}

function VisualCardThree() {
  return (
    <div className="panel-info rounded-2xl p-4 md:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Lead impact</p>
      <div className="mt-3 space-y-2">
        <div className="rounded-lg border border-border bg-background/85 p-3 text-sm text-foreground">Trust starts high</div>
        <div className="rounded-lg border border-border bg-background/85 p-3 text-sm text-foreground">Faster qualification</div>
        <div className="rounded-lg border border-border bg-background/85 p-3 text-sm text-foreground">Higher-intent conversations</div>
      </div>
    </div>
  )
}

function DefaultVisual({ index }: { index: number }) {
  return (
    <div className="panel-info relative overflow-hidden rounded-2xl p-5">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--primary)_8%,white),color-mix(in_oklab,var(--accent)_10%,white))]" />
      <div className="relative space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-mono tracking-[0.12em] text-muted-foreground">
          <CircleDot className="h-3.5 w-3.5 text-primary" />
          Story step {index + 1}
        </div>
        <div className="rounded-lg border border-border bg-background/85 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">User asks</p>
          <p className="mt-1 text-sm text-foreground">Who is the best option for this?</p>
        </div>
        <div className="rounded-lg border border-primary/20 bg-primary/[0.07] p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">AI output</p>
          <ul className="mt-1 space-y-1 text-sm text-foreground">
            <li className="flex items-center gap-2">
              <MessageSquareQuote className="h-3.5 w-3.5 text-primary" />
              Brand recommendation shortlist
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Higher-intent traffic
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function StoryVisual({ index }: { index: number }) {
  if (index === 0) return <VisualCardOne />
  if (index === 1) return <VisualCardTwo />
  if (index === 2) return <VisualCardThree />
  return <DefaultVisual index={index} />
}

export function StorytellingSections() {
  return (
    <section className="section-band-soft section-divider py-18 lg:py-24">
      <div className="section-shell space-y-8">
        {sections.map((item, index) => (
          <article key={item.id} className="section-divider relative overflow-hidden rounded-3xl border border-[var(--line-subtle)] bg-[color-mix(in_oklab,var(--panel)_92%,white)] p-6 md:p-8">
            <SignalGrid
              variant="story"
              className={`top-1/2 h-[130%] w-full -translate-y-1/2 opacity-25 ${index % 2 === 0 ? "right-[-30%]" : "left-[-30%] scale-x-[-1]"}`}
            />
            <div
              className={`relative grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] ${
                index % 2 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
              }`}
            >
              <div className={index % 2 ? "lg:pl-6" : "lg:pr-6"}>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.13em] text-muted-foreground">Story section {index + 1}</p>
                <h2 className="text-balance text-2xl font-semibold leading-tight text-foreground whitespace-pre-line md:text-3xl">
                  {item.headline}
                </h2>
                <div className="mt-4 space-y-2">
                  {item.text.map((line) => (
                    <p key={line} className="copy-body">
                      {line}
                    </p>
                  ))}
                </div>
                {item.keyLine ? <p className="mt-4 text-base font-semibold text-foreground">{item.keyLine}</p> : null}
                {item.cta ? (
                  <Button className="ui-motion mt-6 h-11 gap-2 rounded-xl px-6 text-sm">
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : null}
                {!item.cta ? (
                  <a href="#pricing" className="micro-cta mt-5">
                    See verification standard
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
              <StoryVisual index={index} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
