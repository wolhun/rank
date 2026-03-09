import { Shield, Zap, FileCheck } from "lucide-react"

const trustPoints = [
  { icon: Shield, text: "Płatność dopiero po wyniku" },
  { icon: Zap, text: "Efekty w ciągu kilku tygodni" },
  { icon: FileCheck, text: "Jasna umowa, bez kruczków" },
]

export function TrustBar() {
  return (
    <section className="py-5 border-y border-border bg-secondary/50">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {trustPoints.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
