import { HeroSection } from "@/components/sections/hero-section"
import { TrustBar } from "@/components/sections/trust-bar"
import { VideoSectionB } from "@/components/sections/video-section-b"
import { StorytellingSections } from "@/components/sections/storytelling-sections"
import { StorySection } from "@/components/sections/story-section"
import { OldVsNewSection } from "@/components/sections/old-vs-new-section"
import { BuyerIntentSection } from "@/components/sections/buyer-intent-section"
import { LiveResearchSection } from "@/components/sections/live-research-section"
import { ForWhoSection } from "@/components/sections/for-who-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { SafeModelSection } from "@/components/sections/safe-model-section"
import { WhyNeededSection } from "@/components/sections/why-needed-section"
import { ProofSection } from "@/components/sections/proof-section"
import { VerificationStrip } from "@/components/sections/verification-strip"
import { PricingSection } from "@/components/sections/pricing-section"
import { PricingSectionB } from "@/components/sections/pricing-section-b"
import { PricingSectionC } from "@/components/sections/pricing-section-c"
import { FAQSection } from "@/components/sections/faq-section"
import { FinalCTASection } from "@/components/sections/final-cta-section"
import { StickyCTA } from "@/components/sticky-cta"
import { SiteNavbar } from "@/components/site-navbar"
import { ThemeVariantSwitcher } from "@/components/theme-variant-switcher"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <SiteNavbar />
      <HeroSection />
      <TrustBar />
      <VideoSectionB />
      <StorytellingSections />
      <StorySection />
      <BuyerIntentSection />
      <LiveResearchSection />
      <OldVsNewSection />
      <WhyNeededSection />
      <ForWhoSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ProofSection />
      <VerificationStrip />
      <SafeModelSection />
      <PricingSection />
      <PricingSectionB />
      <PricingSectionC />
      <FAQSection />
      <FinalCTASection />
      <StickyCTA />
      <ThemeVariantSwitcher />
    </main>
  )
}
