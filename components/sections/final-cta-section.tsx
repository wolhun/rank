import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Organic shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary-foreground/10 blur-3xl" />
      
      <div className="section-shell relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-primary-foreground">
            Sprawdź, czy Twoja firma kwalifikuje się do programu
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Wypełnij krótki formularz, a my sprawdzimy potencjał Twojej kategorii 
            i odezwiemy się w ciągu 24h.
          </p>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="h-14 px-10 text-base gap-2 group rounded-xl shadow-lg"
          >
            Rozpocznij weryfikację
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <p className="text-sm text-primary-foreground/60 mt-6">
            Bez zobowiązań. Weryfikacja zajmuje ok. 15 minut.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="section-shell mt-20 pt-10 border-t border-primary-foreground/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/60 text-sm">
          <p>AI Visibility - Bądź widoczny w odpowiedziach AI</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Regulamin</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Kontakt</a>
          </div>
        </div>
      </div>
    </section>
  )
}
