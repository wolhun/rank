import { Link } from 'react-router-dom';

export default function SiteHeader({ showNav = true }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="logo" aria-label="AI Rank home">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">AI Rank</span>
        </Link>

        {showNav ? (
          <nav className="nav-actions" aria-label="Primary">
            <a className="btn btn-ghost" href="#how-it-works">
              How it works
            </a>
            <Link className="btn btn-primary" to="/contact">
              Contact
            </Link>
          </nav>
        ) : (
          <Link className="btn btn-ghost" to="/">
            Back to home
          </Link>
        )}
      </div>
    </header>
  );
}
