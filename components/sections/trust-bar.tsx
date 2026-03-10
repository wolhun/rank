import { Shield, Zap, FileCheck } from "lucide-react"

const trustPoints = [
  { icon: Shield, text: "Pay only after results" },
  { icon: Zap, text: "Clear process, fixed scope" },
  { icon: FileCheck, text: "Verification before invoice" },
]

export function TrustBar() {
  return (
    <section className="section-band-soft py-5">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {trustPoints.map(({ icon: Icon, text }) => (
            <div key={text} className="panel-info flex items-center gap-2.5 rounded-full px-4 py-2">
              <Icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
