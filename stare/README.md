# AI Rank (React)

Landing page rebuilt as a React app with Vite and React Router.

## Stack

- React 18
- Vite 5
- React Router 6
- Custom CSS

## Routes

- `/` - Landing page
- `/contact` - Multi-step order form
- `/thank-you` - Confirmation page

## Project structure

- `index.html` - Vite entry HTML
- `src/main.jsx` - React bootstrap
- `src/App.jsx` - Router and app shell
- `src/pages/LandingPage.jsx` - Main landing content
- `src/pages/ContactPage.jsx` - 3-step lead form
- `src/pages/ThankYouPage.jsx` - Submission confirmation
- `src/components/HeroDemo.jsx` - Animated AI recommendation mockup
- `src/styles/app.css` - Main styles
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment
- `backend/google-apps-script/Code.gs` - Optional lead backend (Google Apps Script)

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment

Create `.env` (optional):

```bash
VITE_FORM_ENDPOINT="https://script.google.com/macros/s/{DEPLOYMENT_ID}/exec"
```

Without this value, form submission is blocked with a configuration message.

## GitHub Pages

Deployment is automatic on every push to `main` via GitHub Actions.

Workflow file:

- `.github/workflows/deploy-pages.yml`

Required repo settings:

1. Go to `Settings -> Pages`
2. Under `Build and deployment`, set `Source` to `GitHub Actions`

The workflow builds with repo-specific base path and adds `dist/404.html` to support SPA routes.

## Backend reference

If you want Google Sheets storage + Telegram notifications, see:

- `backend/google-apps-script/Code.gs`
- `backend/google-apps-script/README.md`
