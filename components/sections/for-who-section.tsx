import { Building2, Briefcase, Gavel, HeartPulse, House, Monitor } from "lucide-react"

const industries = [
  { icon: Gavel, label: "Legal" },
  { icon: House, label: "Home services" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Monitor, label: "SaaS" },
  { icon: Briefcase, label: "Consulting" },
  { icon: Building2, label: "B2B services" },
]

export function ForWhoSection() {
  return (
    <section className="section-raised section-divider py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">Who this service is for</h2>
          <p className="copy-lead mx-auto mt-4">
            This service works best for businesses where people actively search for recommendations before buying.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <article key={item.label} className="card-default rounded-2xl p-5">
              <item.icon className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold text-foreground">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

