import { Button } from "@/components/ui/button"
import { ArrowRight, CircleDot, MessageSquareQuote, Sparkles } from "lucide-react"

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
  {
    id: "story-quality",
    headline: "AI traffic behaves differently.",
    text: [
      "When a customer finds you through search results, they are still comparing options.",
      "When AI recommends your company, the situation is different.",
      "The user already trusts the answer.",
      "It feels closer to a recommendation than a search result.",
      "That is why traffic from AI often converts better.",
    ],
  },
  {
    id: "story-solution",
    headline: "This service helps your company appear in AI recommendations.",
    text: [
      "Our goal is simple.",
      "When users ask AI which company to choose, your business appears in the answer.",
      "Instead of relying only on search rankings, your company becomes part of the recommendation.",
    ],
  },
  {
    id: "story-risk",
    headline: "You only pay after results.",
    text: [
      "Most marketing services charge upfront.",
      "You pay monthly and hope the results eventually come.",
      "This service works differently.",
      "You pay only after the agreed result is achieved.",
      "If we don’t deliver the result, you don’t pay.",
    ],
  },
  {
    id: "story-scarcity",
    headline: "There is only one first place.",
    text: [
      "AI answers usually mention only a few companies.",
      "The companies that appear first often stay there.",
      "It is much easier to get there early than to replace competitors later.",
      "Right now very few companies invest in AI visibility.",
      "That makes this moment an opportunity.",
    ],
  },
  {
    id: "story-conclusion",
    headline: "If AI recommends your competitors instead of you, they win the lead.",
    text: [
      "AI answers shape the shortlist.",
      "The shortlist shapes who gets the customer.",
      "Make sure your company is one of the names people see.",
    ],
    cta: "Check if your business qualifies.",
  },
] as const

function VisualCard({ index }: { index: number }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[0_22px_70px_-56px_rgba(12,19,33,0.65)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,58,90,0.08),rgba(200,159,99,0.08))]" />
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

export function StorytellingSections() {
  return (
    <section className="py-18 lg:py-24">
      <div className="section-shell space-y-8">
        {sections.map((item, index) => (
          <article key={item.id} className="rounded-3xl border border-border bg-card/88 p-6 md:p-8">
            <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.13em] text-muted-foreground">Story section {index + 1}</p>
                <h2 className="text-balance text-2xl font-semibold leading-tight text-foreground md:text-3xl whitespace-pre-line">
                  {item.headline}
                </h2>
                <div className="mt-4 space-y-2">
                  {item.text.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
                {item.keyLine ? <p className="mt-4 text-base font-semibold text-foreground">{item.keyLine}</p> : null}
                {item.cta ? (
                  <Button className="mt-6 h-11 gap-2 px-6 text-sm">
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : null}
              </div>
              <VisualCard index={index} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

