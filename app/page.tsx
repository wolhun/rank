import { HeroSection } from "@/components/sections/hero-section"
import { TrustBar } from "@/components/sections/trust-bar"
import { WhyNowSection } from "@/components/sections/why-now-section"
import { WhatYouLoseSection } from "@/components/sections/what-you-lose-section"
import { WhatWeDoSection } from "@/components/sections/what-we-do-section"
import { ForWhoSection } from "@/components/sections/for-who-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { SafeModelSection } from "@/components/sections/safe-model-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FinalCTASection } from "@/components/sections/final-cta-section"
import { StickyCTA } from "@/components/sticky-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TrustBar />
      <WhyNowSection />
      <WhatYouLoseSection />
      <WhatWeDoSection />
      <ForWhoSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SafeModelSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <StickyCTA />
    </main>
  )
}
