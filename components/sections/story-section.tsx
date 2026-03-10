import { SignalGrid } from "@/components/brand/signal-grid"

const prompts = [
  "Which tool should I use?",
  "Who is the best company for this?",
  "What is the best lawyer in New York City?",
  "Which HVAC company should I hire in Dallas?",
  "What is the best CRM for a small business?",
]

export function StorySection() {
  return (
    <section id="how-ai-search-works" className="section-neutral section-divider py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            People don’t search like they used to.
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel-info relative overflow-hidden rounded-3xl p-5">
            <SignalGrid variant="compact" className="left-[-12%] top-[8%] h-[120%] w-[140%] opacity-20" />
            <div className="space-y-2">
              {prompts.map((prompt, i) => (
                <div
                  key={prompt}
                  className={`relative rounded-xl border border-border bg-background/90 px-4 py-3 text-sm text-foreground ${
                    i % 2 ? "ml-4" : "mr-4"
                  }`}
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>

          <div className="panel-accent rounded-3xl p-7">
            <p className="copy-body">
              People don’t browse websites the way they used to. And they don’t search only using classic keywords
              like “car accident lawyer Miami”.
            </p>
            <p className="copy-body mt-3">
              Instead they ask AI for recommendations. Just like asking a friend: Who is the best company for this?
            </p>
            <p className="copy-body mt-3">AI gives a direct answer.</p>
            <p className="mt-3 text-base font-semibold text-foreground">
              We make sure that answer includes your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
