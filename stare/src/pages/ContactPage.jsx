import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import RevealOnScroll from '../components/RevealOnScroll';

const DEFAULT_ENDPOINT = 'https://script.google.com/macros/s/{DEPLOYMENT_ID}/exec';

const initialValues = {
  website_url: '',
  first_name: '',
  email: '',
  preferred_contact: 'email',
  phone: '',
  competitor_1: '',
  competitor_2: '',
  competitor_3: '',
  company: ''
};

function isValidUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch (_error) {
    return false;
  }
}

export default function ContactPage() {
  const navigate = useNavigate();
  const endpoint = useMemo(() => import.meta.env.VITE_FORM_ENDPOINT || DEFAULT_ENDPOINT, []);

  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  function setField(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function validateStep(targetStep) {
    const nextErrors = {};

    if (targetStep === 1) {
      const url = values.website_url.trim();
      if (!url) {
        nextErrors.website_url = 'Website URL is required.';
      } else if (!isValidUrl(url)) {
        nextErrors.website_url = 'Please enter a valid URL including http:// or https://';
      }
    }

    if (targetStep === 2) {
      const firstName = values.first_name.trim();
      const email = values.email.trim();
      const phone = values.phone.trim();

      if (!firstName) {
        nextErrors.first_name = 'First name is required.';
      }

      if (!email) {
        nextErrors.email = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        nextErrors.email = 'Please provide a valid email address.';
      }

      if (values.preferred_contact === 'whatsapp') {
        if (!phone) {
          nextErrors.phone = 'Phone number is required for WhatsApp contact.';
        } else if (!/^\+?[0-9()\-\s]{7,20}$/.test(phone)) {
          nextErrors.phone = 'Please provide a valid phone number.';
        }
      }
    }

    if (targetStep === 3) {
      const competitors = [values.competitor_1, values.competitor_2, values.competitor_3]
        .map((item) => item.trim())
        .filter(Boolean);

      if (!values.competitor_1.trim()) {
        nextErrors.competitor_1 = 'Please add at least one competitor.';
      }

      const normalized = competitors.map((item) => item.toLowerCase());
      if (new Set(normalized).size !== normalized.length) {
        nextErrors.competitors = 'Competitor names should be unique.';
      }
    }

    setErrors((prev) => ({ ...prev, ...nextErrors }));
    return Object.keys(nextErrors).length === 0;
  }

  function handleNext() {
    setStatus({ type: '', message: '' });
    const valid = validateStep(step);
    if (!valid) {
      return;
    }

    setStep((prev) => Math.min(prev + 1, 3));
  }

  function handleBack() {
    setStatus({ type: '', message: '' });
    setStep((prev) => Math.max(prev - 1, 1));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({ type: '', message: '' });

    if (values.company.trim()) {
      setStatus({ type: 'error', message: 'Submission rejected.' });
      return;
    }

    const valid = validateStep(3);
    if (!valid) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields before submitting.' });
      return;
    }

    if (endpoint.includes('{DEPLOYMENT_ID}')) {
      setStatus({
        type: 'error',
        message: 'Form endpoint is not configured yet. Set VITE_FORM_ENDPOINT before going live.'
      });
      return;
    }

    const payload = {
      first_name: values.first_name.trim(),
      email: values.email.trim(),
      website_url: values.website_url.trim(),
      preferred_contact: values.preferred_contact,
      phone: values.phone.trim(),
      competitors: [values.competitor_1, values.competitor_2, values.competitor_3]
        .map((item) => item.trim())
        .filter(Boolean)
        .slice(0, 3),
      source: 'landing_v1',
      submitted_at: new Date().toISOString()
    };

    try {
      setSubmitting(true);
      setStatus({ type: '', message: 'Submitting your order...' });

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      if (!data || data.ok !== true) {
        throw new Error(data?.message || 'Unable to submit your request.');
      }

      setStatus({ type: 'success', message: 'Submitted successfully. Redirecting...' });
      window.setTimeout(() => navigate('/thank-you'), 420);
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unexpected error. Please try again.' });
      setSubmitting(false);
    }
  }

  return (
    <PageShell showNav={false}>
      <RevealOnScroll className="section container contact-section">
        <div className="section-header section-header--centered">
          <p className="eyebrow">Order form</p>
          <h1>Start your project in under 2 minutes</h1>
          <p className="hero-lead">
            Share your website, contact details, and competitors. We start execution, verify results
            in clean sessions, and invoice only after delivery.
          </p>
        </div>

        <article className="card form-shell">
          <div className="form-progress" aria-label="Form progress">
            <div className={`form-step ${step === 1 ? 'is-active' : ''}`}>
              <span>1</span>
              <p>Website</p>
            </div>
            <div className={`form-step ${step === 2 ? 'is-active' : ''}`}>
              <span>2</span>
              <p>Contact</p>
            </div>
            <div className={`form-step ${step === 3 ? 'is-active' : ''}`}>
              <span>3</span>
              <p>Competitors</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <input
              className="hp"
              id="company"
              name="company"
              autoComplete="off"
              tabIndex={-1}
              value={values.company}
              onChange={(event) => setField('company', event.target.value)}
            />

            <section className={`form-panel ${step === 1 ? 'is-active' : ''}`}>
              <h2>Step 1: Website</h2>
              <p className="panel-note">Enter the website you want to get recommended.</p>

              <label htmlFor="website_url">Website URL</label>
              <input
                id="website_url"
                name="website_url"
                type="url"
                placeholder="https://yourbusiness.com"
                value={values.website_url}
                onChange={(event) => setField('website_url', event.target.value)}
                required
              />
              <p className="field-error">{errors.website_url || ''}</p>
            </section>

            <section className={`form-panel ${step === 2 ? 'is-active' : ''}`}>
              <h2>Step 2: Contact details</h2>
              <p className="panel-note">Tell us how to reach you.</p>

              <label htmlFor="first_name">First name</label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Alex"
                value={values.first_name}
                onChange={(event) => setField('first_name', event.target.value)}
                required
              />
              <p className="field-error">{errors.first_name || ''}</p>

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="alex@company.com"
                value={values.email}
                onChange={(event) => setField('email', event.target.value)}
                required
              />
              <p className="field-error">{errors.email || ''}</p>

              <fieldset>
                <legend>Preferred contact method</legend>
                <label className="radio-line" htmlFor="contact-email">
                  <input
                    id="contact-email"
                    name="preferred_contact"
                    type="radio"
                    value="email"
                    checked={values.preferred_contact === 'email'}
                    onChange={(event) => setField('preferred_contact', event.target.value)}
                  />
                  Email
                </label>
                <label className="radio-line" htmlFor="contact-whatsapp">
                  <input
                    id="contact-whatsapp"
                    name="preferred_contact"
                    type="radio"
                    value="whatsapp"
                    checked={values.preferred_contact === 'whatsapp'}
                    onChange={(event) => setField('preferred_contact', event.target.value)}
                  />
                  WhatsApp
                </label>
              </fieldset>

              {values.preferred_contact === 'whatsapp' && (
                <div className="phone-wrap">
                  <label htmlFor="phone">WhatsApp phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 305 555 1234"
                    value={values.phone}
                    onChange={(event) => setField('phone', event.target.value)}
                    required={values.preferred_contact === 'whatsapp'}
                  />
                  <p className="field-error">{errors.phone || ''}</p>
                </div>
              )}
            </section>

            <section className={`form-panel ${step === 3 ? 'is-active' : ''}`}>
              <h2>Step 3: Competitors</h2>
              <p className="panel-note">Add one to three competitors from your market.</p>

              <label htmlFor="competitor_1">Competitor 1</label>
              <input
                id="competitor_1"
                name="competitor_1"
                type="text"
                placeholder="Competitor A"
                value={values.competitor_1}
                onChange={(event) => setField('competitor_1', event.target.value)}
                required
              />
              <p className="field-error">{errors.competitor_1 || ''}</p>

              <label htmlFor="competitor_2">Competitor 2 (optional)</label>
              <input
                id="competitor_2"
                name="competitor_2"
                type="text"
                placeholder="Competitor B"
                value={values.competitor_2}
                onChange={(event) => setField('competitor_2', event.target.value)}
              />

              <label htmlFor="competitor_3">Competitor 3 (optional)</label>
              <input
                id="competitor_3"
                name="competitor_3"
                type="text"
                placeholder="Competitor C"
                value={values.competitor_3}
                onChange={(event) => setField('competitor_3', event.target.value)}
              />
              <p className="field-error">{errors.competitors || ''}</p>
            </section>

            <p className={`form-feedback ${status.type === 'error' ? 'is-error' : ''} ${
              status.type === 'success' ? 'is-success' : ''
            }`}>
              {status.message}
            </p>

            <div className="form-actions">
              {step > 1 && (
                <button type="button" className="btn btn-ghost" onClick={handleBack} disabled={submitting}>
                  Back
                </button>
              )}

              {step < 3 && (
                <button type="button" className="btn btn-primary" onClick={handleNext} disabled={submitting}>
                  Next
                </button>
              )}

              {step === 3 && (
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit order'}
                </button>
              )}
            </div>
          </form>
        </article>
      </RevealOnScroll>
    </PageShell>
  );
}
