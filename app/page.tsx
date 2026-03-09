import { HeroSection } from "@/components/sections/hero-section"
import { TrustBar } from "@/components/sections/trust-bar"
import { VideoSection } from "@/components/sections/video-section"
import { StorySection } from "@/components/sections/story-section"
import { OldVsNewSection } from "@/components/sections/old-vs-new-section"
import { LiveResearchSection } from "@/components/sections/live-research-section"
import { WhyNowSection } from "@/components/sections/why-now-section"
import { WhatYouLoseSection } from "@/components/sections/what-you-lose-section"
import { WhatWeDoSection } from "@/components/sections/what-we-do-section"
import { ForWhoSection } from "@/components/sections/for-who-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { SafeModelSection } from "@/components/sections/safe-model-section"
import { ProofSection } from "@/components/sections/proof-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FinalCTASection } from "@/components/sections/final-cta-section"
import { StickyCTA } from "@/components/sticky-cta"
import { SiteNavbar } from "@/components/site-navbar"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="premium-grid-overlay" />
        <div className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[rgba(14,42,71,0.09)] blur-3xl" />
        <div className="absolute top-[38rem] -left-24 h-[26rem] w-[26rem] rounded-full bg-[rgba(200,169,107,0.10)] blur-3xl" />
        <div className="absolute top-[96rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[rgba(14,42,71,0.07)] blur-3xl" />
      </div>
      <SiteNavbar />
      <HeroSection />
      <TrustBar />
      <VideoSection />
      <StorySection />
      <LiveResearchSection />
      <OldVsNewSection />
      <WhatWeDoSection />
      <ForWhoSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ProofSection />
      <SafeModelSection />
      <WhyNowSection />
      <WhatYouLoseSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <StickyCTA />
    </main>
  )
}
