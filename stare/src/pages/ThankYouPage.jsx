import { Link } from 'react-router-dom';
import Background from '../components/Background';

export default function ThankYouPage() {
  return (
    <>
      <Background />
      <main className="thank-you-main">
        <article className="card thank-you-card reveal is-visible">
          <p className="eyebrow">Order received</p>
          <h1>Thank you. Your request is in our queue.</h1>
          <p>
            We usually respond within 24 hours. After execution and verified result, you will
            receive a PayPal invoice.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/">
              Back to home
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Submit another order
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
