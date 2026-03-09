"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Co dokładnie oznacza płatność po wyniku?",
    answer: "Płacisz dopiero wtedy, gdy Twoja firma pojawi się w odpowiedziach AI na uzgodnione wcześniej zapytania. Weryfikujemy to i dokumentujemy przed wystawieniem faktury."
  },
  {
    question: "Jak długo trzeba czekać na efekty?",
    answer: "Typowo od 4 do 8 tygodni. Zależy to od kategorii, konkurencji i aktualnej widoczności Twojej marki w sieci."
  },
  {
    question: "Co jeśli efekty nie zostaną osiągnięte?",
    answer: "Nie płacisz. To jest istota naszego modelu - ryzyko jest po naszej stronie."
  },
  {
    question: "Czy to zastępuje SEO?",
    answer: "Nie. To osobny, komplementarny kanał. AI czerpie z różnych źródeł, nie tylko z wyników Google. Dobra pozycja w Google pomaga, ale nie gwarantuje widoczności w AI."
  },
  {
    question: "Dla jakich branż to działa?",
    answer: "Najlepiej sprawdza się w usługach B2B, usługach lokalnych, e-commerce i firmach z wyraźną specjalizacją. Podczas wstępnej analizy oceniamy potencjał Twojej kategorii."
  },
  {
    question: "Czy mogę zobaczyć przykłady?",
    answer: "Tak, podczas rozmowy pokazujemy case studies z podobnych kategorii i przykłady zapytań, na które celujemy."
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Organic shapes */}
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Często zadawane pytania
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Odpowiedzi na najczęstsze pytania o naszą usługę.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
