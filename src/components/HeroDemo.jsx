import { useEffect, useMemo, useState } from 'react';

const QUERY_TEXT = 'what is the best botox service in Miami';

const INITIAL_ITEMS = [
  {
    id: 'competitor-a',
    name: 'Coastal Aesthetics',
    description: 'Strong local reviews and broad service list.',
    highlighted: false
  },
  {
    id: 'competitor-b',
    name: 'Elite Skin Studio',
    description: 'Popular for short wait times and downtown location.',
    highlighted: false
  },
  {
    id: 'your-business',
    name: 'Your Business',
    benefits: ['Board-certified staff', 'Natural-looking results', '500+ five-star reviews'],
    highlighted: true
  }
];

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export default function HeroDemo() {
  const [queryText, setQueryText] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [promoted, setPromoted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [items, setItems] = useState(INITIAL_ITEMS);

  const prefersReducedMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useEffect(() => {
    let alive = true;

    async function runAnimation() {
      while (alive) {
        setQueryText('');
        setShowResponse(false);
        setVisibleItems([]);
        setPromoted(false);
        setShowOverlay(false);
        setItems(INITIAL_ITEMS);

        for (let i = 0; i < QUERY_TEXT.length; i += 1) {
          if (!alive) {
            return;
          }

          setQueryText(QUERY_TEXT.slice(0, i + 1));
          await sleep(42);
        }

        setShowResponse(true);
        await sleep(220);
        setVisibleItems(['competitor-a']);
        await sleep(170);
        setVisibleItems(['competitor-a', 'competitor-b']);
        await sleep(170);
        setVisibleItems(['competitor-a', 'competitor-b', 'your-business']);

        await sleep(620);
        setItems([INITIAL_ITEMS[2], INITIAL_ITEMS[0], INITIAL_ITEMS[1]]);
        setPromoted(true);

        await sleep(900);
        setShowOverlay(true);

        await sleep(2200);
      }
    }

    if (prefersReducedMotion) {
      setQueryText(QUERY_TEXT);
      setShowResponse(true);
      setVisibleItems(['competitor-a', 'competitor-b', 'your-business']);
      setItems([INITIAL_ITEMS[2], INITIAL_ITEMS[0], INITIAL_ITEMS[1]]);
      setPromoted(true);
      setShowOverlay(true);
      return undefined;
    }

    runAnimation();

    return () => {
      alive = false;
    };
  }, [prefersReducedMotion]);

  return (
    <aside className="hero-demo" aria-label="AI recommendation simulation">
      <div className="demo-window">
        <div className="demo-query">
          <p className="demo-label">Prompt</p>
          <p className="demo-query-text" aria-live="polite">
            {queryText}
            {!prefersReducedMotion && <span className="cursor">|</span>}
          </p>
        </div>

        <div className={`demo-response ${showResponse ? 'is-visible' : ''}`} aria-live="polite">
          <p className="demo-response-title">Recommendation output</p>
          <ol className="demo-list">
            {items.map((item, index) => {
              const isVisible = visibleItems.includes(item.id);
              const isHighlighted = item.highlighted;

              return (
                <li
                  key={item.id}
                  className={`demo-item ${isHighlighted ? 'demo-item--highlight' : ''} ${
                    isVisible ? 'is-visible' : ''
                  } ${promoted && isHighlighted ? 'is-promoted' : ''} ${
                    promoted && !isHighlighted ? 'is-demoted' : ''
                  }`}
                >
                  <span className="demo-rank">{index + 1}</span>
                  <div>
                    <p className="demo-business">{item.name}</p>
                    {item.description ? (
                      <p className="demo-benefit">{item.description}</p>
                    ) : (
                      <ul className="benefit-list">
                        {item.benefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className={`demo-overlay ${showOverlay ? 'is-visible' : ''}`}>Result verified in incognito mode</p>
      </div>
    </aside>
  );
}
