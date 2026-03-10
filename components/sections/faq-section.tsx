"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do you guarantee the first position?",
    answer:
      "AI answers can vary depending on context. Our goal is to ensure your company appears among the recommended options for the agreed prompt.",
  },
  {
    question: "Is this SEO?",
    answer:
      "No. SEO focuses on ranking websites in search engines. This service focuses on getting your company recommended directly in AI answers.",
  },
  {
    question: "How do you verify results?",
    answer:
      "We test the agreed prompt in incognito and logged-out environments to minimize the impact of personalization.",
  },
  {
    question: "What if the result is not achieved?",
    answer: "You don’t pay.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-neutral section-divider py-24 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">Frequently asked questions</h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="overflow-hidden rounded-2xl border border-[var(--line-subtle)] bg-[color-mix(in_oklab,var(--panel)_88%,white)]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
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
