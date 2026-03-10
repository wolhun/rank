import { HeroSection } from "@/components/sections/hero-section"
import { TrustBar } from "@/components/sections/trust-bar"
import { VideoSectionB } from "@/components/sections/video-section-b"
import { StorytellingSections } from "@/components/sections/storytelling-sections"
import { StorySection } from "@/components/sections/story-section"
import { StorySectionB } from "@/components/sections/story-section-b"
import { OldVsNewSection } from "@/components/sections/old-vs-new-section"
import { LiveResearchSection } from "@/components/sections/live-research-section"
import { ForWhoSection } from "@/components/sections/for-who-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { SafeModelSection } from "@/components/sections/safe-model-section"
import { ProofSection } from "@/components/sections/proof-section"
import { VerificationStrip } from "@/components/sections/verification-strip"
import { PricingSection } from "@/components/sections/pricing-section"
import { PricingSectionB } from "@/components/sections/pricing-section-b"
import { FAQSection } from "@/components/sections/faq-section"
import { FinalCTASection } from "@/components/sections/final-cta-section"
import { StickyCTA } from "@/components/sticky-cta"
import { SiteNavbar } from "@/components/site-navbar"
import { ThemeVariantSwitcher } from "@/components/theme-variant-switcher"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="premium-grid-overlay" />
        <div className="absolute left-1/2 top-0 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-[var(--orb-a)] blur-3xl opacity-50" />
      </div>
      <SiteNavbar />
      <HeroSection />
      <TrustBar />
      <VideoSectionB />
      <StorytellingSections />
      <StorySection />
      <StorySectionB />
      <LiveResearchSection />
      <OldVsNewSection />
      <ForWhoSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ProofSection />
      <VerificationStrip />
      <SafeModelSection />
      <PricingSection />
      <PricingSectionB />
      <FAQSection />
      <FinalCTASection />
      <StickyCTA />
      <ThemeVariantSwitcher />
    </main>
  )
}
