import { useMemo } from 'react';

export default function SiteFooter() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>&copy; {year} AI Rank. All rights reserved.</p>
        <p>Pay only after a verified result.</p>
      </div>
    </footer>
  );
}
