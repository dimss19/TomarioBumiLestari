const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Pseudo-random generator with seed
function createRng(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function() {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// XML entity escaping helper for strict SVG XML compliance
function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Helper to draw a realistic 3D faceted rock with high-contrast studio lighting
function renderFacetedRock(cx, cy, radius, seed, colorProfile = 'basalt') {
  const rng = createRng(seed);
  const numVertices = 6 + Math.floor(rng() * 4); // 6 to 9 sides
  const vertices = [];
  
  for (let i = 0; i < numVertices; i++) {
    const angle = (i / numVertices) * Math.PI * 2;
    // Irregular elongation and jagged quarry fracturing
    const r = radius * (0.75 + rng() * 0.45);
    vertices.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r
    });
  }

  // Crest peak offset for realistic 3D volume
  const peakX = cx + (rng() - 0.55) * radius * 0.4;
  const peakY = cy + (rng() - 0.65) * radius * 0.4;

  let rockSvg = '';

  // Soft ambient contact shadow beneath rock
  const shadowRx = radius * 1.15;
  const shadowRy = radius * 0.4;
  const shadowCy = cy + radius * 0.72;
  rockSvg += `  <ellipse cx="${(cx + radius * 0.1).toFixed(1)}" cy="${shadowCy.toFixed(1)}" rx="${shadowRx.toFixed(1)}" ry="${shadowRy.toFixed(1)}" fill="rgba(0,0,0,0.6)" filter="url(#rockShadowBlur)" />\n`;

  // Draw 3D facets
  for (let i = 0; i < numVertices; i++) {
    const v1 = vertices[i];
    const v2 = vertices[(i + 1) % numVertices];

    // Centroid of facet
    const fCentroidX = (v1.x + v2.x + peakX) / 3;
    const fCentroidY = (v1.y + v2.y + peakY) / 3;

    // Vector to key light source (top-left: -0.707, -0.707)
    const dx = fCentroidX - cx;
    const dy = fCentroidY - cy;
    const lightDot = -(dx * 0.707 + dy * 0.707) / (radius || 1);
    
    // High-contrast brightness curve: from 0.22 (deep shadow) to 1.0 (specular highlight)
    let intensity = 0.58 + lightDot * 0.42 + (rng() - 0.5) * 0.12;
    intensity = Math.max(0.22, Math.min(1.0, intensity));

    let fill = '';
    if (colorProfile === 'basalt') {
      // High-contrast andesite/basalt stone: bright gray highlights to dark slate shadows
      const rVal = Math.round(155 * intensity + 45);
      const gVal = Math.round(162 * intensity + 48);
      const bVal = Math.round(175 * intensity + 52);
      fill = `rgb(${rVal},${gVal},${bVal})`;
    } else if (colorProfile === 'sandstone') {
      // Warm sandy golden quartz
      const rVal = Math.round(170 * intensity + 85);
      const gVal = Math.round(140 * intensity + 65);
      const bVal = Math.round(95 * intensity + 40);
      fill = `rgb(${rVal},${gVal},${bVal})`;
    }

    // Facet edge highlights: crisp bright borders for lit facets, dark for shadow facets
    const strokeColor = intensity > 0.65 ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.45)';
    const strokeWidth = intensity > 0.75 ? '0.85' : '0.65';

    rockSvg += `  <polygon points="${peakX.toFixed(1)},${peakY.toFixed(1)} ${v1.x.toFixed(1)},${v1.y.toFixed(1)} ${v2.x.toFixed(1)},${v2.y.toFixed(1)}" fill="${fill}" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linejoin="round" />\n`;
  }

  // Specular gleam on the highest ridge peak
  rockSvg += `  <circle cx="${peakX.toFixed(1)}" cy="${peakY.toFixed(1)}" r="${Math.max(1, radius * 0.08).toFixed(1)}" fill="rgba(255,255,255,0.7)" />\n`;

  return rockSvg;
}

function generateSvgCard(product) {
  const {
    fileName,
    title,
    tagline,
    stoneType,
    stoneCount,
    stoneRadius,
    scaleMm,
    scaleWidthPx,
    specBadge,
    densitySpec,
    accentColor = '#22c55e',
    seed = 42
  } = product;

  const rng = createRng(seed);
  let materialElements = '';

  if (stoneType === 'rock') {
    const rocks = [];
    // Distribute stones realistically in a specimen mound
    for (let i = 0; i < stoneCount; i++) {
      // Natural cluster distribution
      const u = (rng() + rng() + rng() - 1.5) / 1.5;
      const v = (rng() + rng() - 1);
      const x = 400 + u * 270;
      const y = 230 + v * 95;
      const r = stoneRadius * (0.8 + rng() * 0.45);
      rocks.push({ x, y, r, seed: Math.floor(rng() * 1000000) });
    }

    // Sort by y so lower rocks overlap upper rocks naturally
    rocks.sort((a, b) => a.y - b.y);

    materialElements += '  <g id="rock-pile">\n';
    rocks.forEach(rock => {
      materialElements += renderFacetedRock(rock.x, rock.y, rock.r, rock.seed, 'basalt');
    });
    materialElements += '  </g>\n';
  } else if (stoneType === 'dust') {
    // Stone dust: soft dark textured mound + bright micro mineral glints
    materialElements += `  <g id="stone-dust">
    <ellipse cx="400" cy="245" rx="310" ry="110" fill="#1e293b" filter="url(#moundBlur)" opacity="0.95" />
    <ellipse cx="400" cy="240" rx="265" ry="90" fill="#334155" filter="url(#moundBlur)" opacity="0.9" />
    <ellipse cx="395" cy="235" rx="205" ry="65" fill="#475569" filter="url(#moundBlur)" opacity="0.85" />
    <ellipse cx="390" cy="228" rx="140" ry="42" fill="#64748b" filter="url(#moundBlur)" opacity="0.8" />
    <ellipse cx="388" cy="222" rx="75" ry="22" fill="#94a3b8" filter="url(#moundBlur)" opacity="0.75" />
`;
    // 700 fine micro-granules with varied high-contrast shades
    for (let i = 0; i < 700; i++) {
      const angle = rng() * Math.PI * 2;
      const dist = Math.sqrt(rng()) * 260;
      const x = 400 + Math.cos(angle) * dist * 1.15;
      const y = 236 + Math.sin(angle) * dist * 0.42;
      const size = 1.2 + rng() * 3.5;
      const shade = 140 + Math.floor(rng() * 105);
      materialElements += `    <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${size.toFixed(1)}" height="${size.toFixed(1)}" fill="rgb(${shade},${shade+3},${shade+8})" opacity="${(0.55 + rng()*0.45).toFixed(2)}" rx="0.5" />\n`;
    }
    materialElements += '  </g>\n';
  } else if (stoneType === 'sand') {
    // Construction Sand: rich warm golden silica mound + fine grains
    materialElements += `  <g id="sand-mound">
    <ellipse cx="400" cy="245" rx="310" ry="110" fill="#78350f" filter="url(#moundBlur)" opacity="0.9" />
    <ellipse cx="400" cy="240" rx="265" ry="90" fill="#92400e" filter="url(#moundBlur)" opacity="0.9" />
    <ellipse cx="395" cy="235" rx="205" ry="65" fill="#b45309" filter="url(#moundBlur)" opacity="0.85" />
    <ellipse cx="390" cy="228" rx="140" ry="42" fill="#d97706" filter="url(#moundBlur)" opacity="0.8" />
    <ellipse cx="388" cy="222" rx="75" ry="22" fill="#f59e0b" filter="url(#moundBlur)" opacity="0.75" />
`;
    // 850 sand grains in warm amber, ochre and ivory quartz
    for (let i = 0; i < 850; i++) {
      const angle = rng() * Math.PI * 2;
      const dist = Math.sqrt(rng()) * 265;
      const x = 400 + Math.cos(angle) * dist * 1.14;
      const y = 236 + Math.sin(angle) * dist * 0.40;
      const r = 210 + Math.floor(rng() * 45);
      const g = 170 + Math.floor(rng() * 65);
      const b = 110 + Math.floor(rng() * 55);
      const size = 1.2 + rng() * 3.0;
      materialElements += `    <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(size/2).toFixed(1)}" fill="rgb(${r},${g},${b})" opacity="${(0.6 + rng()*0.4).toFixed(2)}" />\n`;
    }
    materialElements += '  </g>\n';
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <!-- Background Gradient: Deep Slate and Laboratory Charcoal -->
    <radialGradient id="bgGrad" cx="50%" cy="46%" r="68%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="55%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </radialGradient>

    <!-- Studio Overhead Spotlight: Illuminates center material dramatically -->
    <radialGradient id="studioSpotlight" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22" />
      <stop offset="40%" stop-color="${accentColor}" stop-opacity="0.10" />
      <stop offset="85%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Laboratory Specimen Tray Base Gradient -->
    <linearGradient id="trayFloor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.06)" />
      <stop offset="100%" stop-color="rgba(0,0,0,0.5)" />
    </linearGradient>

    <!-- Blueprint CAD Grid -->
    <pattern id="cadGrid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
      <circle cx="0" cy="0" r="1.2" fill="rgba(255,255,255,0.09)" />
    </pattern>

    <!-- Shadow Blur Filters -->
    <filter id="rockShadowBlur" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3.5" />
    </filter>
    <filter id="moundBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="9" />
    </filter>
  </defs>

  <!-- Layer 1: Background Surface -->
  <rect width="800" height="500" fill="url(#bgGrad)" />
  <rect width="800" height="500" fill="url(#cadGrid)" />

  <!-- Laboratory Specimen Stage Oval -->
  <ellipse cx="400" cy="245" rx="360" ry="145" fill="url(#trayFloor)" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
  <ellipse cx="400" cy="235" r="300" fill="url(#studioSpotlight)" />

  <!-- Layer 2: Technical Calibration Framing -->
  <rect x="20" y="20" width="760" height="460" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1" rx="8" />
  
  <!-- Engineering Corner Chamfers and Crosshairs -->
  <g stroke="${accentColor}" stroke-width="1.75">
    <path d="M 16 34 L 26 34 M 34 16 L 34 26" />
    <path d="M 766 16 L 766 26 M 774 34 L 784 34" />
    <path d="M 16 466 L 26 466 M 34 474 L 34 484" />
    <path d="M 766 474 L 766 484 M 774 466 L 784 466" />
  </g>

  <!-- Center Measurement Datum -->
  <line x1="385" y1="240" x2="415" y2="240" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="400" y1="225" x2="400" y2="255" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="2,2" />

  <!-- Layer 3: Rendered Stones / Material Cluster -->
${materialElements}

  <!-- Layer 4: Top Specification Headers -->
  <g transform="translate(36, 34)">
    <!-- Brand / Origin Pill -->
    <rect x="0" y="0" width="190" height="28" rx="5" fill="rgba(15, 23, 42, 0.92)" stroke="rgba(255,255,255,0.18)" stroke-width="1" />
    <circle cx="14" cy="14" r="4" fill="${accentColor}" />
    <text x="26" y="18" fill="#f8fafc" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="10" font-weight="700" letter-spacing="1">CV. TOMARIO BUMI LESTARI</text>
  </g>

  <g transform="translate(618, 34)">
    <!-- SNI Standard Pill -->
    <rect x="0" y="0" width="146" height="28" rx="5" fill="rgba(34, 197, 94, 0.18)" stroke="rgba(34, 197, 94, 0.5)" stroke-width="1" />
    <circle cx="14" cy="14" r="3.5" fill="#4ade80" />
    <text x="80" y="18" fill="#86efac" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" letter-spacing="0.5">${escapeXml(specBadge)}</text>
  </g>

  <!-- Layer 5: Technical Specimen Footer Slab -->
  <g transform="translate(36, 408)">
    <!-- Slab Backing with Deep Contrast -->
    <rect x="0" y="0" width="728" height="62" rx="6" fill="rgba(15, 23, 42, 0.94)" stroke="rgba(255,255,255,0.18)" stroke-width="1" />
    
    <!-- Left: Title and Density -->
    <text x="22" y="27" fill="#ffffff" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16" font-weight="800" letter-spacing="0.3">${escapeXml(title)}</text>
    <text x="22" y="47" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5" font-weight="500">${escapeXml(tagline)} • Densitas: ${escapeXml(densitySpec)}</text>

    <!-- Right: Scientific Caliper and Scale Bar -->
    <g transform="translate(${706 - scaleWidthPx}, 19)">
      <text x="${scaleWidthPx / 2}" y="12" fill="#86efac" font-family="monospace, sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" letter-spacing="1">${escapeXml(scaleMm)}</text>
      <!-- Caliper Bar with tick marks -->
      <line x1="0" y1="18" x2="${scaleWidthPx}" y2="18" stroke="${accentColor}" stroke-width="2" />
      <line x1="0" y1="12" x2="0" y2="24" stroke="${accentColor}" stroke-width="2" />
      <line x1="${scaleWidthPx}" y1="12" x2="${scaleWidthPx}" y2="24" stroke="${accentColor}" stroke-width="2" />
      <line x1="${scaleWidthPx / 2}" y1="15" x2="${scaleWidthPx / 2}" y2="21" stroke="${accentColor}" stroke-width="1.2" />
      <circle cx="${scaleWidthPx / 2}" cy="18" r="2.5" fill="${accentColor}" />
    </g>
  </g>
</svg>
`;

  fs.writeFileSync(path.join(outDir, fileName), svg, 'utf8');
  console.log(`Generated: ${fileName}`);
}

const productsToGenerate = [
  {
    fileName: 'agregat_10_10.svg',
    title: 'AGREGAT 10/10 MM (SPLIT 1x1)',
    tagline: 'Fraksi Halus Kubikal • Bebas Lumpur • Paving Press & Struktur Tipis',
    densitySpec: '1.45 - 1.55 t/m³',
    stoneType: 'rock',
    stoneCount: 175,
    stoneRadius: 15,
    scaleMm: 'SKALA 10 mm',
    scaleWidthPx: 85,
    specBadge: 'SNI 03-2834:2000',
    accentColor: '#22c55e',
    seed: 1102
  },
  {
    fileName: 'agregat_10_20.svg',
    title: 'AGREGAT 10/20 MM (SPLIT 1x2)',
    tagline: 'Standar Utama Beton Bertulang Gedung, Jembatan & Ready-Mix',
    densitySpec: '1.40 - 1.50 t/m³',
    stoneType: 'rock',
    stoneCount: 90,
    stoneRadius: 26,
    scaleMm: 'SKALA 10-20 mm',
    scaleWidthPx: 115,
    specBadge: 'SNI 03-2834:2000',
    accentColor: '#22c55e',
    seed: 2024
  },
  {
    fileName: 'agregat_20_30.svg',
    title: 'AGREGAT 20/30 MM (SPLIT 2x3)',
    tagline: 'Kekuatan Maksimal • Pondasi Rakit, Bored Pile & Base Course Kelas A',
    densitySpec: '1.42 - 1.52 t/m³',
    stoneType: 'rock',
    stoneCount: 52,
    stoneRadius: 38,
    scaleMm: 'SKALA 20-30 mm',
    scaleWidthPx: 145,
    specBadge: 'SNI 03-2834:2000',
    accentColor: '#22c55e',
    seed: 3036
  },
  {
    fileName: 'agregat_30_50.svg',
    title: 'AGREGAT 30/50 MM (SPLIT 3x5)',
    tagline: 'Batu Kasar Sub-Base Jalan Raya • Bantalan Rel Kereta & Drainase Makro',
    densitySpec: '1.35 - 1.48 t/m³',
    stoneType: 'rock',
    stoneCount: 32,
    stoneRadius: 54,
    scaleMm: 'SKALA 30-50 mm',
    scaleWidthPx: 175,
    specBadge: 'SNI 03-2834:2000',
    accentColor: '#22c55e',
    seed: 4048
  },
  {
    fileName: 'abu_batu.svg',
    title: 'ABU BATU (STONE DUST 0-5 MM)',
    tagline: 'Filler Silika Murni • Campuran Aspal Hotmix AC-WC & Paving Presisi',
    densitySpec: '1.40 - 1.55 t/m³',
    stoneType: 'dust',
    stoneCount: 0,
    stoneRadius: 0,
    scaleMm: 'AYAKAN 0-5 mm',
    scaleWidthPx: 95,
    specBadge: 'BINA MARGA SPEC',
    accentColor: '#38bdf8',
    seed: 5059
  },
  {
    fileName: 'pasir_konstruksi.svg',
    title: 'PASIR ALAMI KONSTRUKSI',
    tagline: 'Pasir Alam Bersih & Butiran Tajam • Cor Struktur, Pasang Bata & Plester',
    densitySpec: '1.40 - 1.60 t/m³',
    stoneType: 'sand',
    stoneCount: 0,
    stoneRadius: 0,
    scaleMm: 'MODULUS 2.6',
    scaleWidthPx: 90,
    specBadge: 'SNI 03-2834:2000',
    accentColor: '#f59e0b',
    seed: 6068
  }
];

productsToGenerate.forEach(generateSvgCard);
console.log('Regenerated all 6 XML-compliant product SVGs successfully!');
