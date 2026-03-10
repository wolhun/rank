import { CircleOff, CircleCheckBig } from "lucide-react"

const informational = [
  "What is a car accident lawyer?",
  "How does HVAC work?",
  "What is CRM software?",
]

const buyerIntent = [
  "Who is the best car accident lawyer in Miami?",
  "Which HVAC company should I hire in Dallas?",
  "What is the best CRM for a small business?",
]

export function BuyerIntentSection() {
  return (
    <section className="section-neutral section-divider py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Be visible where your clients are ready to buy
          </h2>
          <p className="copy-lead mx-auto mt-4">We focus only on high buyer-intent AI queries.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-7 lg:grid-cols-2">
          <article className="card-muted rounded-3xl p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">Low intent</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {informational.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-lg border border-border bg-background/70 px-3 py-2">
                  <CircleOff className="mt-0.5 h-4 w-4 shrink-0 opacity-75" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-primary rounded-3xl p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">High intent</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {buyerIntent.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-lg border border-primary/25 bg-primary/[0.08] px-3 py-2">
                  <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-base font-semibold text-foreground">
          We focus on the prompt that can bring a customer, not just a visitor.
        </p>
      </div>
    </section>
  )
}

