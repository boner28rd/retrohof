// Inline SVG icon set — no icon font, no external requests.
// All icons share a 24x24 box and inherit currentColor.

const paths = {
  tools:
    '<path d="M14.7 6.3a4 4 0 0 0 5.3 5.3L21 13l-8 8a2.8 2.8 0 0 1-4-4l8-8Z"/><path d="M6.5 6.5 3 3l2-2 3.5 3.5"/><path d="m9 9-6 6a2.8 2.8 0 0 0 4 4l6-6"/>',
  brush:
    '<path d="M4 3h13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-7v3"/><path d="M10 14h4v6a2 2 0 0 1-4 0v-6Z"/>',
  saw:
    '<path d="M3 7h14l4 4-4 4"/><path d="m3 7 2 3 2-3 2 3 2-3 2 3 2-3"/><path d="M3 7v10a2 2 0 0 0 2 2h6"/>',
  roof:
    '<path d="m2 11 10-7 10 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/>',
  plumbing:
    '<path d="M6 3v6a4 4 0 0 0 4 4h4"/><path d="M4 3h4"/><path d="M14 10h6v6h-6z"/><path d="M17 16v5"/><path d="M15 21h4"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  leaf:
    '<path d="M11 20A7 7 0 0 1 4 13c0-6 7-10 16-10 0 9-4 16-10 16Z"/><path d="M4 21c2-6 6-9 11-11"/>',
  sparkle:
    '<path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5L10 13l-6.5-2L10 9l2-6.5Z"/><path d="M19 3v3M17.5 4.5h3"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"/>',
  shield:
    '<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8 3 3-2 2-2-2-2 2-2-2"/>',
  clipboard:
    '<path d="M9 3h6v3H9z"/><path d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3"/><path d="M9 11h6M9 15h4"/>',
  building:
    '<path d="M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17"/><path d="M15 9h4a1 1 0 0 1 1 1v11"/><path d="M8 7h3M8 11h3M8 15h3M4 21h17"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  phone:
    '<path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3 7 9 6 9-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  check: '<path d="m4 12.5 5 5L20 6.5"/>',
  arrow: '<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>',
  star: '<path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 16.8 6.6 19.6l1.2-6L3.3 9.4l6.1-.8L12 3Z"/>',
  quote:
    '<path d="M9 7c-3 1-4.5 3.3-4.5 6.5V19h6v-6H7c0-2 .7-3.3 2.6-4L9 7Z"/><path d="M19 7c-3 1-4.5 3.3-4.5 6.5V19h6v-6H17c0-2 .7-3.3 2.6-4L19 7Z"/>',
  chevron: '<path d="m7 10 5 5 5-5"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  close: '<path d="M6 6 18 18M18 6 6 18"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/>',
  wrench:
    '<path d="M15 3a5 5 0 0 0-4.6 7L3 17.4 6.6 21l7.4-7.4A5 5 0 1 0 15 3Z"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  pound:
    '<path d="M8 21h9"/><path d="M8 13h6"/><path d="M15 4.5A3.5 3.5 0 0 0 9.5 7.5c0 4 .5 6 -1.5 9"/>',
};

export function icon(name, { size = 24, cls = '' } = {}) {
  const d = paths[name];
  if (!d) throw new Error(`Unknown icon: ${name}`);
  return `<svg class="ico${cls ? ' ' + cls : ''}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${d}</svg>`;
}

export const iconNames = Object.keys(paths);
