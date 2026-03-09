"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do you guarantee the first position?",
    answer:
      "AI answers can vary depending on the question and context. Our goal is to ensure your company appears among the recommended options.",
  },
  {
    question: "Is this SEO?",
    answer: "No. SEO ranks web pages. This service focuses on making AI recommend your company.",
  },
  {
    question: "What if the result is not achieved?",
    answer: "You don’t pay.",
  },
  {
    question: "How long does it take?",
    answer: "Most projects take several weeks depending on the industry and competition.",
  },
  {
    question: "Do you work with every business?",
    answer: "No. We only work with companies where results are realistic.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">FAQ</h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="pr-4 font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

