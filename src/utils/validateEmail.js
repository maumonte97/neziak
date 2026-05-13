const GENERIC_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'hotmail.com',
  'hotmail.es',
  'hotmail.com.mx',
  'outlook.com',
  'outlook.es',
  'outlook.com.mx',
  'live.com',
  'live.com.mx',
  'msn.com',
  'yahoo.com',
  'yahoo.com.mx',
  'yahoo.es',
  'ymail.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'protonmail.com',
  'proton.me',
  'pm.me',
  'zoho.com',
  'gmx.com',
  'gmx.es',
  'mail.com',
  'inbox.com',
  'fastmail.com',
  'tutanota.com',
  'yandex.com',
  'prodigy.net.mx',
]);

export function getEmailDomain(email) {
  if (typeof email !== 'string') return '';
  const at = email.lastIndexOf('@');
  if (at === -1) return '';
  return email.slice(at + 1).trim().toLowerCase();
}

export function isValidEmailFormat(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

export function isCorporateEmail(email) {
  if (!isValidEmailFormat(email)) return false;
  return !GENERIC_DOMAINS.has(getEmailDomain(email));
}

export function validateCorporateEmail(email) {
  const value = String(email || '').trim();
  if (!value) return 'El correo es obligatorio.';
  if (!isValidEmailFormat(value)) return 'Ingresa un correo válido.';
  if (!isCorporateEmail(value)) {
    return 'Usa tu correo corporativo (no aceptamos gmail, hotmail, yahoo, outlook, etc.).';
  }
  return '';
}
