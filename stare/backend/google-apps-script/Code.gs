/*
  Google Apps Script backend for landing form submissions.
  Configure script properties:
  - SHEET_ID
  - SHEET_NAME (default: leads)
  - TELEGRAM_BOT_TOKEN
  - TELEGRAM_CHAT_ID
*/

const SOURCE_ALLOWED = 'landing_v1';

function doGet() {
  return jsonResponse({
    ok: true,
    status: 'healthy',
    service: 'ai-rank-leads',
    timestamp_utc: new Date().toISOString()
  });
}

function doPost(e) {
  try {
    const payload = parsePayload(e);
    const validationError = validatePayload(payload);

    if (validationError) {
      return jsonResponse({
        ok: false,
        error_code: 'VALIDATION_ERROR',
        message: validationError
      });
    }

    const leadId = buildLeadId();
    const timestampUtc = new Date().toISOString();
    const competitors = (payload.competitors || []).slice(0, 3);

    appendToSheet({
      timestamp_utc: timestampUtc,
      lead_id: leadId,
      first_name: payload.first_name,
      email: payload.email,
      website_url: payload.website_url,
      preferred_contact: payload.preferred_contact,
      phone: payload.phone || '',
      competitor_1: competitors[0] || '',
      competitor_2: competitors[1] || '',
      competitor_3: competitors[2] || '',
      source: payload.source,
      status: 'new'
    });

    sendTelegramAlert({
      first_name: payload.first_name,
      website_url: payload.website_url,
      preferred_contact: payload.preferred_contact,
      competitors: competitors
    });

    return jsonResponse({
      ok: true,
      lead_id: leadId,
      stored_at: timestampUtc
    });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error_code: 'SERVER_ERROR',
      message: error && error.message ? error.message : 'Unexpected server error.'
    });
  }
}

function parsePayload(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Missing request body.');
  }

  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    throw new Error('Invalid JSON payload.');
  }
}

function validatePayload(payload) {
  if (!payload || typeof payload !== 'object') {
    return 'Payload must be an object.';
  }

  if (!payload.first_name || String(payload.first_name).trim() === '') {
    return 'first_name is required';
  }

  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email).trim())) {
    return 'email is invalid';
  }

  if (!payload.website_url || !isValidUrl(payload.website_url)) {
    return 'website_url is invalid';
  }

  if (!payload.preferred_contact || !['email', 'whatsapp'].includes(payload.preferred_contact)) {
    return 'preferred_contact must be email or whatsapp';
  }

  if (payload.preferred_contact === 'whatsapp') {
    if (!payload.phone || !/^\+?[0-9()\-\s]{7,20}$/.test(String(payload.phone).trim())) {
      return 'phone is required when preferred_contact=whatsapp';
    }
  }

  if (!Array.isArray(payload.competitors) || payload.competitors.length < 1 || payload.competitors.length > 3) {
    return 'competitors must contain 1 to 3 items';
  }

  const cleanCompetitors = payload.competitors
    .map(function (item) {
      return String(item || '').trim();
    })
    .filter(function (item) {
      return item !== '';
    });

  if (cleanCompetitors.length < 1 || cleanCompetitors.length > 3) {
    return 'competitors must contain 1 to 3 non-empty items';
  }

  const uniqueCompetitors = cleanCompetitors
    .map(function (item) {
      return item.toLowerCase();
    })
    .filter(function (value, index, arr) {
      return arr.indexOf(value) === index;
    });

  if (uniqueCompetitors.length !== cleanCompetitors.length) {
    return 'competitors must be unique';
  }

  if (payload.source !== SOURCE_ALLOWED) {
    return 'source is invalid';
  }

  return null;
}

function appendToSheet(record) {
  const props = PropertiesService.getScriptProperties();
  const sheetId = props.getProperty('SHEET_ID');
  const sheetName = props.getProperty('SHEET_NAME') || 'leads';

  if (!sheetId) {
    throw new Error('Missing SHEET_ID script property.');
  }

  const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
  if (!sheet) {
    throw new Error('Sheet not found: ' + sheetName);
  }

  sheet.appendRow([
    record.timestamp_utc,
    record.lead_id,
    record.first_name,
    record.email,
    record.website_url,
    record.preferred_contact,
    record.phone,
    record.competitor_1,
    record.competitor_2,
    record.competitor_3,
    record.source,
    record.status
  ]);
}

function sendTelegramAlert(params) {
  const props = PropertiesService.getScriptProperties();
  const botToken = props.getProperty('TELEGRAM_BOT_TOKEN');
  const chatId = props.getProperty('TELEGRAM_CHAT_ID');

  if (!botToken || !chatId) {
    return;
  }

  const text = [
    'New lead: ' + params.first_name,
    'Website: ' + params.website_url,
    'Contact: ' + params.preferred_contact,
    'Competitors: ' + params.competitors.join(', ')
  ].join('\n');

  const url = 'https://api.telegram.org/bot' + botToken + '/sendMessage';

  UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: chatId,
      text: text
    }),
    muteHttpExceptions: true
  });
}

function isValidUrl(urlValue) {
  if (!urlValue) {
    return false;
  }

  const value = String(urlValue).trim();
  return /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(value);
}

function buildLeadId() {
  const datePart = Utilities.formatDate(new Date(), 'UTC', 'yyyyMMdd');
  const randomPart = Utilities.getUuid().replace(/-/g, '').slice(0, 4).toUpperCase();
  return 'LEAD-' + datePart + '-' + randomPart;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
