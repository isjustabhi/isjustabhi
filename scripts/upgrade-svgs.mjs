import { writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "public/images/projects");

const specs = [
  ["systematic-review", "#38bdf8", "docs"],
  ["sensitivity", "#34d399", "curves"],
  ["methylation", "#22d3ee", "helix"],
  ["ai-student-care", "#60a5fa", "care"],
  ["healthmate", "#2dd4bf", "pulse"],
  ["drift", "#a78bfa", "radar"],
  ["reviewiq", "#f472b6", "bars"],
  ["earlyeco", "#4ade80", "map"],
  ["interview", "#93c5fd", "mic"],
  ["sleeplens", "#818cf8", "moon"],
  ["verifyhire", "#67e8f9", "check"],
  ["diabuddy", "#fb7185", "ring"],
  ["bioscholar", "#c4b5fd", "book"],
  ["skin", "#fda4af", "cells"],
  ["emotion", "#fcd34d", "wave"],
  ["vae", "#86efac", "latent"],
  ["parkinsons", "#fdba74", "signal"],
];

function svg(accent, motif) {
  const overlays = {
    docs: `<rect x="220" y="180" width="240" height="320" rx="18" fill="white" opacity="0.06"/><rect x="290" y="220" width="320" height="340" rx="18" fill="white" opacity="0.08"/><rect x="360" y="250" width="360" height="360" rx="18" fill="${accent}" opacity="0.18"/>`,
    curves: `<path d="M140 520 C 320 180, 520 640, 740 280 S 1040 420, 1120 240" stroke="${accent}" stroke-width="6" fill="none" opacity="0.85"/><path d="M140 560 C 340 260, 540 600, 760 340 S 1020 460, 1120 300" stroke="white" stroke-width="2" fill="none" opacity="0.25"/>`,
    helix: `<path d="M420 120 C 620 220, 420 320, 620 420 S 420 620, 600 700" stroke="${accent}" stroke-width="5" fill="none"/><path d="M620 120 C 420 220, 620 320, 420 420 S 620 620, 440 700" stroke="white" stroke-width="3" fill="none" opacity="0.35"/>`,
    care: `<circle cx="600" cy="360" r="160" stroke="${accent}" stroke-width="3" fill="none" opacity="0.7"/><circle cx="600" cy="360" r="90" fill="${accent}" opacity="0.25"/><path d="M520 360 h160 M600 280 v160" stroke="white" stroke-width="10" stroke-linecap="round" opacity="0.8"/>`,
    pulse: `<polyline points="160,400 280,400 340,220 420,520 500,340 580,400 1040,400" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
    radar: `<circle cx="600" cy="380" r="220" stroke="white" opacity="0.12" fill="none"/><circle cx="600" cy="380" r="150" stroke="white" opacity="0.16" fill="none"/><circle cx="600" cy="380" r="80" stroke="${accent}" stroke-width="3" fill="none"/><path d="M600 380 L820 220" stroke="${accent}" stroke-width="4"/><circle cx="820" cy="220" r="10" fill="${accent}"/>`,
    bars: `<rect x="260" y="320" width="80" height="220" rx="12" fill="${accent}" opacity="0.85"/><rect x="380" y="240" width="80" height="300" rx="12" fill="white" opacity="0.18"/><rect x="500" y="180" width="80" height="360" rx="12" fill="${accent}" opacity="0.55"/><rect x="620" y="280" width="80" height="260" rx="12" fill="white" opacity="0.22"/><rect x="740" y="210" width="80" height="330" rx="12" fill="${accent}" opacity="0.75"/>`,
    map: `<circle cx="430" cy="300" r="18" fill="${accent}"/><circle cx="690" cy="250" r="12" fill="white" opacity="0.7"/><circle cx="780" cy="430" r="16" fill="${accent}" opacity="0.8"/><path d="M430 300 C 520 180, 650 220, 690 250 S 760 360, 780 430" stroke="white" stroke-width="3" fill="none" opacity="0.45"/>`,
    mic: `<rect x="560" y="220" width="80" height="180" rx="40" fill="${accent}" opacity="0.85"/><path d="M500 360 a100 100 0 0 0 200 0" stroke="white" stroke-width="8" fill="none" opacity="0.5"/><line x1="600" y1="460" x2="600" y2="540" stroke="white" stroke-width="8"/><line x1="540" y1="540" x2="660" y2="540" stroke="white" stroke-width="8" stroke-linecap="round"/>`,
    moon: `<circle cx="620" cy="340" r="140" fill="${accent}" opacity="0.35"/><circle cx="680" cy="300" r="120" fill="#0a0f18"/><path d="M240 520 C 420 440, 640 560, 920 470" stroke="white" stroke-width="3" fill="none" opacity="0.25"/>`,
    check: `<circle cx="600" cy="360" r="160" stroke="${accent}" stroke-width="8" fill="none"/><path d="M510 360 l55 55 120 -130" stroke="white" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    ring: `<circle cx="600" cy="360" r="170" stroke="${accent}" stroke-width="18" fill="none" opacity="0.35"/><circle cx="600" cy="360" r="110" stroke="white" stroke-width="8" fill="none" opacity="0.25"/><circle cx="600" cy="360" r="40" fill="${accent}"/>`,
    book: `<rect x="360" y="200" width="220" height="300" rx="16" fill="white" opacity="0.08"/><rect x="560" y="190" width="240" height="320" rx="16" fill="${accent}" opacity="0.28"/><line x1="600" y1="230" x2="760" y2="230" stroke="white" opacity="0.35" stroke-width="4"/><line x1="600" y1="280" x2="740" y2="280" stroke="white" opacity="0.25" stroke-width="4"/>`,
    cells: `<circle cx="420" cy="300" r="90" fill="${accent}" opacity="0.35"/><circle cx="560" cy="420" r="110" fill="white" opacity="0.08"/><circle cx="720" cy="300" r="100" fill="${accent}" opacity="0.22"/><circle cx="640" cy="250" r="40" fill="white" opacity="0.2"/>`,
    wave: `<path d="M140 380 C 260 220, 380 540, 500 360 S 740 220, 860 400 1040 300, 1120 360" stroke="${accent}" stroke-width="10" fill="none"/><path d="M140 430 C 280 300, 400 520, 540 400 S 760 280, 900 430 1040 360, 1120 410" stroke="white" stroke-width="3" fill="none" opacity="0.3"/>`,
    latent: `<ellipse cx="600" cy="360" rx="260" ry="140" stroke="${accent}" stroke-width="3" fill="none"/><ellipse cx="600" cy="360" rx="160" ry="80" stroke="white" opacity="0.25" fill="none"/><circle cx="470" cy="360" r="14" fill="${accent}"/><circle cx="600" cy="300" r="10" fill="white" opacity="0.7"/><circle cx="730" cy="390" r="12" fill="${accent}" opacity="0.8"/>`,
    signal: `<polyline points="180,420 300,420 360,260 430,500 510,300 590,420 980,420" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/><circle cx="780" cy="300" r="70" stroke="white" opacity="0.2" fill="none"/><circle cx="780" cy="300" r="28" fill="${accent}" opacity="0.7"/>`,
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750" fill="none">
  <defs>
    <radialGradient id="g" cx="50%" cy="35%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.28"/>
      <stop offset="55%" stop-color="#121826" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#070b12" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="white" stop-opacity="0.12"/>
      <stop offset="40%" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#g)"/>
  <rect width="1200" height="750" fill="url(#shine)"/>
  <g opacity="0.35">
    <circle cx="180" cy="140" r="2" fill="white"/>
    <circle cx="980" cy="180" r="2" fill="white"/>
    <circle cx="860" cy="560" r="2" fill="white"/>
    <circle cx="260" cy="560" r="2" fill="white"/>
  </g>
  ${overlays[motif]}
</svg>`;
}

for (const [name, accent, motif] of specs) {
  writeFileSync(join(root, `${name}.svg`), svg(accent, motif));
}
console.log(`upgraded ${specs.length} svg covers`);
