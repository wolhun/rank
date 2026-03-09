# Google Apps Script Backend Setup

This backend receives form submissions, stores rows in Google Sheets, and sends Telegram notifications.

## 1) Create Google Sheet

Create a sheet with a tab named `leads` (or another name you configure) and the following columns in row 1:

1. `timestamp_utc`
2. `lead_id`
3. `first_name`
4. `email`
5. `website_url`
6. `preferred_contact`
7. `phone`
8. `competitor_1`
9. `competitor_2`
10. `competitor_3`
11. `source`
12. `status`

## 2) Deploy Apps Script

1. Create a new Google Apps Script project.
2. Paste `Code.gs` from this folder.
3. In `Project Settings -> Script properties`, set:
   - `SHEET_ID`
   - `SHEET_NAME` (optional, defaults to `leads`)
   - `TELEGRAM_BOT_TOKEN` (optional but recommended)
   - `TELEGRAM_CHAT_ID` (optional but recommended)
4. Deploy as Web App:
   - Execute as: `Me`
   - Who has access: `Anyone`
5. Copy the deployment URL:
   - `https://script.google.com/macros/s/{DEPLOYMENT_ID}/exec`

## 3) Connect frontend (React)

Set environment variable in your app:

```bash
VITE_FORM_ENDPOINT="https://script.google.com/macros/s/{DEPLOYMENT_ID}/exec"
```

The React form reads this value from `import.meta.env.VITE_FORM_ENDPOINT`.

## 4) Telegram bot quick setup

1. Create bot via `@BotFather` and get token.
2. Start chat with your bot.
3. Get chat ID by messaging bot and checking updates endpoint:
   - `https://api.telegram.org/bot<token>/getUpdates`
4. Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in Script Properties.

## 5) Smoke test payload

```json
{
  "first_name": "Anna",
  "email": "anna@example.com",
  "website_url": "https://example.com",
  "preferred_contact": "email",
  "phone": "",
  "competitors": ["Competitor A", "Competitor B"],
  "source": "landing_v1",
  "submitted_at": "2026-03-09T15:00:00Z"
}
```

Expected success response:

```json
{
  "ok": true,
  "lead_id": "LEAD-20260309-8F2K",
  "stored_at": "2026-03-09T15:00:02Z"
}
```
