// Minimal HTML escaping for safely interpolating text/attributes into template strings.

export function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function escAttr(str = '') {
  return esc(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}
