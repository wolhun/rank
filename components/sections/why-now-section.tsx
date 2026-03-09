const stats = [
  {
    value: "100M+",
    label: "użytkowników ChatGPT",
    sublabel: "tygodniowo"
  },
  {
    value: "40%",
    label: "spadek ruchu z Google",
    sublabel: "u firm ignorujących AI"
  },
  {
    value: "2025",
    label: "rok przełomu AI",
    sublabel: "klienci pytają AI, nie Google"
  },
  {
    value: "3x",
    label: "wyższy współczynnik",
    sublabel: "konwersji z AI vs reklam"
  },
]

export function WhyNowSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Dlaczego teraz?</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Twoi klienci przestają szukać w Google
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map(({ value, label, sublabel }, index) => (
            <div key={label} className="relative">
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border -translate-x-6" />
              )}
              <p className="text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-2">{value}</p>
              <p className="font-medium text-foreground text-sm">{label}</p>
              <p className="text-sm text-muted-foreground">{sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
