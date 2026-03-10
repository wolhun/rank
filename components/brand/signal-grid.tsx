import { cn } from "@/lib/utils"

type SignalGridVariant = "hero" | "story" | "process" | "pricing" | "cta" | "compact"

const variantClasses: Record<SignalGridVariant, string> = {
  hero: "h-full w-full",
  story: "h-full w-full",
  process: "h-full w-full",
  pricing: "h-full w-full",
  cta: "h-full w-full",
  compact: "h-full w-full",
}

type SignalGridProps = {
  className?: string
  variant?: SignalGridVariant
}

export function SignalGrid({ className, variant = "compact" }: SignalGridProps) {
  return (
    <svg
      viewBox="0 0 900 520"
      aria-hidden="true"
      className={cn("pointer-events-none absolute text-[var(--signal-line)]", variantClasses[variant], className)}
      fill="none"
    >
      <g opacity="0.75" stroke="currentColor" strokeWidth="1.25">
        <path d="M54 96H308L406 196H844" />
        <path d="M54 266H300L370 334H844" />
        <path d="M54 426H340L438 326H844" />
        <path d="M450 64V458" opacity="0.55" />
      </g>
      <g fill="var(--signal-node)">
        <circle cx="54" cy="96" r="4.5" />
        <circle cx="54" cy="266" r="4.5" />
        <circle cx="54" cy="426" r="4.5" />
        <circle cx="450" cy="196" r="4.5" />
        <circle cx="450" cy="334" r="4.5" />
        <circle cx="844" cy="196" r="4.5" />
        <circle cx="844" cy="334" r="4.5" />
      </g>
      <g stroke="var(--signal-node)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M836 188L844 196L852 188" />
        <path d="M836 326L844 334L852 326" />
      </g>
    </svg>
  )
}
