import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import RevealOnScroll from '../components/RevealOnScroll';
import HeroDemo from '../components/HeroDemo';
import { faqItems } from '../lib/content';

export default function LandingPage() {
  return (
    <PageShell>
      <RevealOnScroll className="section hero" id="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="brand-pill">Pay after verified result</p>
            <h1>Get your company recommended in AI answers.</h1>
            <p className="hero-lead">
              We help your brand appear in recommendation outputs in ChatGPT, Gemini, and Google AI
              Overviews. No upfront fee. Payment happens only after the agreed result is verified.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Check if your website qualifies
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Contact
              </Link>
            </div>
            <p className="hero-meta">Average delivery: up to 7 days</p>
            <ul className="hero-proof-list">
              <li>Clear result condition before start</li>
              <li>Verification in clean incognito sessions</li>
              <li>One price, no subscription</li>
            </ul>
          </div>

          <HeroDemo />
        </div>
      </RevealOnScroll>

      <RevealOnScroll as="section" className="trust-strip" id="trust-strip">
        <div className="container trust-strip-inner">
          <p>You pay only after the agreed result is achieved and verified.</p>
          <p>Built for companies that want visibility in AI recommendation answers.</p>
          <p>Clear process, one price, no subscription and no hidden costs.</p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section" id="why-now">
        <div className="container">
          <div className="section-head">
            <p className="brand-pill">Why this matters now</p>
            <h2>Discovery is moving from links to AI answers.</h2>
            <p>
              This is not a trend headline. It is a shift in how buyers build shortlists before
              they ever visit websites.
            </p>
          </div>
          <div className="insights-grid">
            <article>
              <p className="insight-value">Insight 01</p>
              <h3>Users ask AI for "best" options directly.</h3>
              <p>Implication: early recommendation visibility shapes who gets considered first.</p>
            </article>
            <article>
              <p className="insight-value">Insight 02</p>
              <h3>Shortlists can be formed before traditional clicks.</h3>
              <p>Implication: being absent from AI answers can remove you from comparison early.</p>
            </article>
            <article>
              <p className="insight-value">Insight 03</p>
              <h3>Recommendation channels compound over time.</h3>
              <p>Implication: early movers gain durable positioning while others react later.</p>
            </article>
            <article>
              <p className="insight-value">Insight 04</p>
              <h3>Classic search visibility is no longer the full discovery layer.</h3>
              <p>Implication: companies need presence in both search and AI recommendation flow.</p>
            </article>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section section-alt" id="cost-of-inaction">
        <div className="container">
          <div className="section-head section-head-left">
            <p className="brand-pill">Cost of inaction</p>
            <h2>What you lose if AI does not mention your company</h2>
          </div>
          <div className="loss-grid">
            <article>
              <h3>Situation</h3>
              <p>A buyer asks AI for the best provider in your category.</p>
              <h4>Consequence</h4>
              <p>Your company is missing from the names shown.</p>
              <h4>Business effect</h4>
              <p>You never enter the shortlist and lose the comparison moment.</p>
            </article>
            <article>
              <h3>Situation</h3>
              <p>AI returns a small list of options without site visits.</p>
              <h4>Consequence</h4>
              <p>Competitors are evaluated while your brand is not considered.</p>
              <h4>Business effect</h4>
              <p>Demand leaks before classic SEO has a chance to work.</p>
            </article>
            <article>
              <h3>Situation</h3>
              <p>Your Google presence is strong but AI discovery is weak.</p>
              <h4>Consequence</h4>
              <p>Visibility gap appears at the first stage of buying research.</p>
              <h4>Business effect</h4>
              <p>Lower lead quality and reduced conversion opportunities.</p>
            </article>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section" id="what-service-does">
        <div className="container service-def">
          <div>
            <p className="brand-pill">What you are buying</p>
            <h2>A focused AI recommendation visibility service.</h2>
            <p className="service-intro">
              We increase the probability that your brand appears in AI recommendation responses
              for agreed prompts and market scope.
            </p>
          </div>
          <div className="service-columns">
            <article>
              <h3>What it includes</h3>
              <ul>
                <li>Market and prompt scope alignment before start</li>
                <li>Execution sprint to improve recommendation visibility signals</li>
                <li>Monitoring and verification in clean sessions</li>
                <li>Clear result condition agreed upfront</li>
              </ul>
            </article>
            <article>
              <h3>What it is not</h3>
              <ul>
                <li>Not a guarantee of literal first place in every output</li>
                <li>Not a substitute for your full SEO strategy</li>
                <li>Not a manipulative shortcut or black-hat process</li>
                <li>Not an open-ended monthly retainer</li>
              </ul>
            </article>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section section-alt" id="fit">
        <div className="container fit-layout">
          <article>
            <p className="brand-pill">Who this is for</p>
            <h2>Best fit situations</h2>
            <ul>
              <li>Customers compare providers before making contact</li>
              <li>Buying decisions start with category research</li>
              <li>You operate locally, regionally, or in a defined niche</li>
              <li>You want early position in a new acquisition channel</li>
              <li>You need presence where AI builds shortlists</li>
            </ul>
          </article>
          <article>
            <p className="brand-pill">Not ideal if</p>
            <h2>This may not be the right fit</h2>
            <ul>
              <li>You expect instant dominance across every prompt</li>
              <li>You are not ready to define a clear market scope</li>
              <li>You need a broad full-service marketing agency package</li>
              <li>You want subscription support instead of result-based delivery</li>
            </ul>
          </article>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section process" id="how-it-works">
        <div className="container process-shell">
          <div className="process-head">
            <p className="brand-pill">How it works</p>
            <h2>
              <span>Premium execution with</span> <span>clear checkpoints</span>
            </h2>
          </div>

          <div className="process-list">
            <article className="process-row">
              <div className="process-step">
                <span className="step-number">01</span>
                <p>We evaluate your current visibility and category potential.</p>
              </div>
              <div className="process-main">
                <h3>Analysis</h3>
                <p className="process-deliverable">Deliverable: baseline scope</p>
              </div>
            </article>
            <article className="process-row">
              <div className="process-step">
                <span className="step-number">02</span>
                <p>We prepare and implement actions for stronger AI presence.</p>
              </div>
              <div className="process-main">
                <h3>Preparation and execution</h3>
                <p className="process-deliverable">Deliverable: execution checkpoint</p>
              </div>
            </article>
            <article className="process-row process-row--highlight">
              <div className="process-step">
                <span className="step-number">03</span>
                <p>We monitor and verify in incognito, logged-out sessions.</p>
              </div>
              <div className="process-main">
                <h3>Monitoring and verification</h3>
                <p className="process-deliverable">Deliverable: verification proof</p>
              </div>
            </article>
            <article className="process-row">
              <div className="process-step">
                <span className="step-number">04</span>
                <p>You are invoiced only after the agreed condition is met.</p>
              </div>
              <div className="process-main">
                <h3>Payment after result</h3>
                <p className="process-deliverable">Deliverable: final invoice trigger</p>
              </div>
            </article>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section" id="benefits">
        <div className="container">
          <div className="section-head section-head-left">
            <p className="brand-pill">Business outcomes</p>
            <h2>What your company gains</h2>
          </div>
          <div className="benefits-grid">
            <article>
              <h3>Higher shortlist probability</h3>
              <p>More chances to be considered when buyers ask AI for options.</p>
            </article>
            <article>
              <h3>Presence in a new discovery channel</h3>
              <p>Your brand appears where recommendation-led research is happening.</p>
            </article>
            <article>
              <h3>Higher-intent lead opportunities</h3>
              <p>Recommendation-driven traffic usually arrives closer to decision.</p>
            </article>
            <article>
              <h3>Early-mover edge</h3>
              <p>Build visibility before slower competitors adapt.</p>
            </article>
            <article>
              <h3>Lower dependency on link-only discovery</h3>
              <p>Diversify beyond classic click-based acquisition.</p>
            </article>
            <article>
              <h3>Clear risk model</h3>
              <p>Pay after result aligns incentives and reduces upfront exposure.</p>
            </article>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section section-alt" id="safe-model">
        <div className="container safe-model-layout">
          <div>
            <p className="brand-pill">Risk model</p>
            <h2>Why this is safer for the client</h2>
            <ul className="line-list">
              <li>You do not pay for promises</li>
              <li>You do not prepay for process alone</li>
              <li>Payment happens after agreed result condition</li>
              <li>Terms are clear before execution starts</li>
            </ul>
          </div>
          <div className="compare-mini">
            <article>
              <h3>Typical agency model</h3>
              <p>Retainer first, outcomes uncertain.</p>
            </article>
            <article>
              <h3>AI Rank model</h3>
              <p>Result first, payment after verification.</p>
            </article>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section pricing" id="pricing">
        <div className="container pricing-shell">
          <p className="brand-pill">Price</p>
          <h2>$1,490</h2>
          <p>One market, one campaign, one clear outcome condition.</p>
          <ul className="price-details">
            <li>Includes analysis, execution sprint, and verification</li>
            <li>Payment only after agreed result is achieved</li>
            <li>No subscription and no hidden costs</li>
            <li>To start: send website, contact details, and 1 to 3 competitors</li>
          </ul>
          <Link className="btn btn-primary" to="/contact">
            Start order
          </Link>
          <p className="price-note">
            Best for firms that want a simple, result-based model instead of open-ended retainers.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section faq" id="faq">
        <div className="container faq-layout">
          <div className="faq-intro">
            <p className="brand-pill">FAQ</p>
            <h2>Everything You Need to Know</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={item.question} className="faq-item" open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="section final-cta" id="final-cta">
        <div className="container final-cta-shell">
          <p className="brand-pill">Next step</p>
          <h2>See if this model is a fit for your category.</h2>
          <p>
            Send your website and competitors. We will qualify scope and tell you if this approach
            is the right match before execution.
          </p>
          <Link className="btn btn-primary" to="/contact">
            Check if your website qualifies
          </Link>
        </div>
      </RevealOnScroll>
    </PageShell>
  );
}
