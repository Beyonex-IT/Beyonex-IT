const svgProps = {
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
};

const s = {
  stroke: "currentColor",
  strokeWidth: 1.85,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Glyph({ children }) {
  return <svg {...svgProps}>{children}</svg>;
}

const ICONS = {
  "tech-consulting": (
    <Glyph>
      <rect x="18" y="14" width="28" height="36" rx="4" {...s} />
      <path d="M26 14v-3.2a6 6 0 0 1 12 0V14" {...s} />
      <path d="M26 38V28.5M32 38V24M38 38V30.5M44 38V22" {...s} />
      <path d="M24 38h20" {...s} />
    </Glyph>
  ),
  "digital-transformation": (
    <Glyph>
      <circle cx="32" cy="32" r="7" {...s} />
      <path d="M32 18v-6M32 52v-6M18 32h-6M52 32h-6" {...s} />
      <path d="M21.5 21.5 17 17M42.5 42.5 47 47M42.5 21.5 47 17M21.5 42.5 17 47" {...s} />
      <path d="M29 32h6M32 29v6" {...s} />
    </Glyph>
  ),
  grc: (
    <Glyph>
      <path d="M32 8.5 14 16.2v12.8c0 12.2 7.6 20.4 18 24 10.4-3.6 18-11.8 18-24V16.2L32 8.5Z" {...s} />
      <path d="M23.5 32.5 29.2 38l11.3-12.2" {...s} />
    </Glyph>
  ),
  "gap-analysis": (
    <Glyph>
      <path d="M12 48V22M24 48V14M52 48H10" {...s} />
      <path d="M36 48V28" {...s} strokeDasharray="3 4" />
      <path d="M33 20h14M40 13.5 47 20 40 26.5" {...s} />
    </Glyph>
  ),
  "bc-dr": (
    <Glyph>
      <path d="M46 20.5A16 16 0 1 0 48 34" {...s} />
      <path d="M46 12.5v10h-10" {...s} />
      <path d="M26 34h12M32 28v12" {...s} />
    </Glyph>
  ),
  web: (
    <Glyph>
      <rect x="10" y="14" width="44" height="36" rx="5" {...s} />
      <path d="M10 24h44" {...s} />
      <circle cx="16.5" cy="19" r="1.25" fill="currentColor" />
      <circle cx="21.5" cy="19" r="1.25" fill="currentColor" />
      <circle cx="26.5" cy="19" r="1.25" fill="currentColor" />
      <circle cx="32" cy="38" r="8.5" {...s} />
      <path d="M23.5 38h17M32 29.5c2.6 2.4 4 5.2 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.2-4-8.5s1.4-6.1 4-8.5Z" {...s} />
    </Glyph>
  ),
  mobile: (
    <Glyph>
      <rect x="22" y="8" width="20" height="48" rx="4.5" {...s} />
      <path d="M30 12.5h4" {...s} />
      <rect x="26.5" y="18" width="11" height="7" rx="1.4" {...s} />
      <rect x="26.5" y="28" width="5" height="5" rx="1" {...s} />
      <rect x="33" y="28" width="5" height="5" rx="1" {...s} />
      <path d="M29.5 49h5" {...s} />
    </Glyph>
  ),
  "custom-software": (
    <Glyph>
      <rect x="10" y="14" width="44" height="36" rx="6" {...s} />
      <path d="M10 24h44" {...s} />
      <circle cx="16.5" cy="19" r="1.25" fill="currentColor" />
      <circle cx="21.5" cy="19" r="1.25" fill="currentColor" />
      <path d="M24 34.5 18.5 40 24 45.5M40 34.5 45.5 40 40 45.5M36 32 28 48" {...s} />
    </Glyph>
  ),
  "ux-ui": (
    <Glyph>
      <rect x="10" y="12" width="28" height="22" rx="3.5" {...s} />
      <rect x="26" y="30" width="28" height="22" rx="3.5" {...s} />
      <path d="M16 18h10M16 23h7" {...s} />
      <circle cx="40" cy="41" r="3.2" {...s} />
      <path d="M42.4 43.4 47 48" {...s} />
    </Glyph>
  ),
  integration: (
    <Glyph>
      <rect x="8" y="22" width="18" height="20" rx="4" {...s} />
      <rect x="38" y="22" width="18" height="20" rx="4" {...s} />
      <path d="M26 32h12" {...s} />
      <path d="M26 28v8M38 28v8" {...s} />
      <circle cx="17" cy="32" r="2.2" fill="currentColor" />
      <circle cx="47" cy="32" r="2.2" fill="currentColor" />
    </Glyph>
  ),
  automation: (
    <Glyph>
      <circle cx="26" cy="28" r="10" {...s} />
      <path d="M26 21.5V28l4.5 3" {...s} />
      <path d="M36 18.5 28 32h8l-2 14 14-18h-8L36 18.5Z" {...s} />
    </Glyph>
  ),
  "service-desk": (
    <Glyph>
      <path d="M16 38.5v-6C16 22.4 23 15.5 32 15.5S48 22.4 48 32.5v6" {...s} />
      <rect x="11" y="34.5" width="11" height="16" rx="3.4" {...s} />
      <rect x="42" y="34.5" width="11" height="16" rx="3.4" {...s} />
      <path d="M48 48c0 6-5 10.5-16 10.5" {...s} />
      <circle cx="32" cy="58.5" r="2" fill="currentColor" />
    </Glyph>
  ),
  itom: (
    <Glyph>
      <rect x="10" y="12" width="20" height="14" rx="3" {...s} />
      <rect x="34" y="38" width="20" height="14" rx="3" {...s} />
      <path d="M20 26v8a6 6 0 0 0 6 6h8" {...s} />
      <path d="M16 19h8M40 45h8" {...s} />
      <circle cx="44" cy="19" r="5.5" {...s} />
      <path d="M44 16.2V19l2 1.4" {...s} />
    </Glyph>
  ),
  incident: (
    <Glyph>
      <path d="M32 9 54 49H10L32 9Z" {...s} />
      <path d="M32 24v12" {...s} />
      <circle cx="32" cy="41.5" r="1.7" fill="currentColor" />
    </Glyph>
  ),
  change: (
    <Glyph>
      <path d="M20 24A14 14 0 0 1 44 20.5" {...s} />
      <path d="M44 14.5v8h-8" {...s} />
      <path d="M44 40A14 14 0 0 1 20 43.5" {...s} />
      <path d="M20 49.5v-8h8" {...s} />
    </Glyph>
  ),
  asset: (
    <Glyph>
      <path d="M32 10 52 20v24L32 54 12 44V20L32 10Z" {...s} />
      <path d="M32 54V30M52 20 32 30 12 20" {...s} />
      <path d="M22 25.5 32 30.5 42 25.5" {...s} />
    </Glyph>
  ),
  sla: (
    <Glyph>
      <circle cx="28" cy="30" r="16" {...s} />
      <path d="M28 18v12l8 5" {...s} />
      <path d="M42 18.5 52 22l-4 14-6.5-3.2" {...s} />
      <path d="M44.5 26.5 47.2 29l5.3-6" {...s} />
    </Glyph>
  ),
  networks: (
    <Glyph>
      <circle cx="16" cy="18" r="6" {...s} />
      <circle cx="48" cy="18" r="6" {...s} />
      <circle cx="32" cy="46" r="7" {...s} />
      <circle cx="18" cy="40" r="4.2" {...s} />
      <path d="M21.2 22.2 27.4 40.2M42.8 22.2 36.6 40.2M22 18h24M21.4 36.8 26.8 42" {...s} />
    </Glyph>
  ),
  servers: (
    <Glyph>
      <rect x="14" y="10" width="36" height="13" rx="3.2" {...s} />
      <rect x="14" y="25.5" width="36" height="13" rx="3.2" {...s} />
      <rect x="14" y="41" width="36" height="13" rx="3.2" {...s} />
      <path d="M20 16.5h10M20 32h10M20 47.5h10" {...s} />
      <circle cx="44" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="44" cy="32" r="1.5" fill="currentColor" />
      <circle cx="44" cy="47.5" r="1.5" fill="currentColor" />
    </Glyph>
  ),
  storage: (
    <Glyph>
      <ellipse cx="32" cy="16" rx="18" ry="7" {...s} />
      <path d="M14 16v24c0 3.9 8 7 18 7s18-3.1 18-7V16" {...s} />
      <path d="M14 28c0 3.9 8 7 18 7s18-3.1 18-7" {...s} />
    </Glyph>
  ),
  virtualization: (
    <Glyph>
      <rect x="18" y="10" width="32" height="22" rx="4" {...s} />
      <rect x="12" y="24" width="32" height="22" rx="4" {...s} />
      <rect x="20" y="36" width="28" height="18" rx="4" {...s} />
      <path d="M24 17h12M18 31h12" {...s} />
    </Glyph>
  ),
  "data-center": (
    <Glyph>
      <path d="M12 52V22L32 10l20 12v30" {...s} />
      <path d="M24 52V36h16v16" {...s} />
      <path d="M20 28h6M20 34h6M38 28h6" {...s} />
      <rect x="28" y="42" width="8" height="10" rx="1.2" {...s} />
    </Glyph>
  ),
  backup: (
    <Glyph>
      <path d="M20 40H18a11 11 0 0 1 1-21.8A14.5 14.5 0 0 1 46 21.5 9.5 9.5 0 0 1 47 40H42" {...s} />
      <path d="M24 34l8 8 8-8M32 22v20" {...s} />
    </Glyph>
  ),
  soc: (
    <Glyph>
      <circle cx="32" cy="32" r="5" {...s} />
      <circle cx="32" cy="32" r="13" {...s} />
      <circle cx="32" cy="32" r="21" {...s} />
      <path d="M32 11v6M32 47v6M11 32h6M47 32h6" {...s} />
      <circle cx="32" cy="32" r="1.8" fill="currentColor" />
    </Glyph>
  ),
  siem: (
    <Glyph>
      <rect x="10" y="12" width="44" height="40" rx="5" {...s} />
      <path d="M10 22h44" {...s} />
      <path d="M18 30h10M18 36h16M18 42h8" {...s} />
      <path d="M38 42V30l4 4 4-8v16" {...s} />
    </Glyph>
  ),
  pentest: (
    <Glyph>
      <circle cx="28" cy="28" r="14" {...s} />
      <path d="M38 38 50 50" {...s} />
      <rect x="46" y="46" width="8" height="8" rx="1.5" transform="rotate(45 50 50)" {...s} />
      <path d="M22 28h12M28 22v12" {...s} />
    </Glyph>
  ),
  iam: (
    <Glyph>
      <circle cx="26" cy="22" r="8" {...s} />
      <path d="M12 48c2.2-8 7-12 14-12s11.8 4 14 12" {...s} />
      <rect x="40" y="18" width="14" height="18" rx="3" {...s} />
      <circle cx="47" cy="25" r="2.4" {...s} />
      <path d="M47 27.4V32" {...s} />
    </Glyph>
  ),
  pam: (
    <Glyph>
      <circle cx="24" cy="32" r="10" {...s} />
      <path d="M34 32h18v10M46 32v10" {...s} />
      <rect x="40" y="14" width="14" height="12" rx="2.5" {...s} />
      <path d="M43 14V11a4 4 0 0 1 8 0v3" {...s} />
    </Glyph>
  ),
  "cyber-grc": (
    <Glyph>
      <path d="M14 16h24l8 8v28H14V16Z" {...s} />
      <path d="M38 16v8h8" {...s} />
      <path d="M32 24.5 22 29v7.2c0 6.8 4.2 11.2 10 13.2 5.8-2 10-6.4 10-13.2V29L32 24.5Z" {...s} />
      <path d="M28 36.2 31.2 39.5 38 32.4" {...s} />
    </Glyph>
  ),
  cloud: (
    <Glyph>
      <path d="M18 42h26c5.2 0 9.5-4 9.5-9 0-4.5-3.4-8.2-7.8-8.8C44.4 16.4 38.2 12 31 12c-7 0-13 4.6-14.5 11-5 .6-8.7 4.8-8.7 9.8C7.8 38.2 12.4 42 18 42Z" {...s} />
      <path d="M24 36v-8M32 36V22M40 36v-6" {...s} />
    </Glyph>
  ),
  "data-analytics": (
    <Glyph>
      <path d="M12 50V22M24 50V14M36 50V28M48 50V18M8 50h46" {...s} />
      <path d="M14 30 24 24l12 8 14-16" {...s} />
      <circle cx="50" cy="16" r="2.2" fill="currentColor" />
    </Glyph>
  ),
  bi: (
    <Glyph>
      <circle cx="28" cy="34" r="16" {...s} />
      <path d="M28 18v16h16" {...s} />
      <rect x="42" y="12" width="12" height="8" rx="2" {...s} />
      <rect x="46" y="22" width="8" height="12" rx="2" {...s} />
      <rect x="40" y="36" width="14" height="10" rx="2" {...s} />
    </Glyph>
  ),
  ai: (
    <Glyph>
      <rect x="18" y="16" width="28" height="32" rx="10" {...s} />
      <circle cx="26" cy="30" r="2.2" fill="currentColor" />
      <circle cx="38" cy="30" r="2.2" fill="currentColor" />
      <path d="M26 40c1.8 2.4 4.2 3.6 6 3.6s4.2-1.2 6-3.6" {...s} />
      <path d="M32 16V10M18 24H12M46 24h6M18 40H12M46 40h6" {...s} />
    </Glyph>
  ),
  ml: (
    <Glyph>
      <circle cx="16" cy="18" r="5.5" {...s} />
      <circle cx="48" cy="18" r="5.5" {...s} />
      <circle cx="32" cy="32" r="6.5" {...s} />
      <circle cx="18" cy="48" r="5.5" {...s} />
      <circle cx="46" cy="48" r="5.5" {...s} />
      <path d="M21 21.5 27.4 27.4M43 21.5 36.6 27.4M27.2 37.2 21.6 43.6M36.8 37.2 42.4 43.6M21.5 18h21" {...s} />
    </Glyph>
  ),
  "managed-it": (
    <Glyph>
      <rect x="10" y="12" width="44" height="28" rx="5" {...s} />
      <path d="M24 50h16M32 40v10" {...s} />
      <circle cx="32" cy="26" r="7" {...s} />
      <path d="M32 21.5V26l3.2 2.2" {...s} />
    </Glyph>
  ),
  operations: (
    <Glyph>
      <circle cx="32" cy="32" r="8" {...s} />
      <path d="M32 12v6M32 46v6M12 32h6M46 32h6M18.2 18.2l4.2 4.2M41.6 41.6l4.2 4.2M45.8 18.2l-4.2 4.2M22.4 41.6l-4.2 4.2" {...s} />
      <circle cx="32" cy="32" r="2.2" fill="currentColor" />
    </Glyph>
  ),
  monitoring: (
    <Glyph>
      <rect x="10" y="14" width="44" height="30" rx="5" {...s} />
      <path d="M16 29h8l5-10 7 20 5-10h7" {...s} />
      <path d="M24 50h16M32 44v6" {...s} />
    </Glyph>
  ),
  support: (
    <Glyph>
      <circle cx="32" cy="22" r="8" {...s} />
      <path d="M16 50c2-9 7.2-13.5 16-13.5S46 41 48 50" {...s} />
      <path d="M14 28v-4c0-10 8-18 18-18" {...s} />
      <rect x="10" y="28" width="9" height="12" rx="3" {...s} />
    </Glyph>
  ),
  maintenance: (
    <Glyph>
      <path d="M38 16.5a11 11 0 0 0-16.8 12.8L12 38.5l7.2 7.2 9.4-9.5A11 11 0 0 0 42 18.8Z" {...s} />
      <path d="M42 42h12M48 36v12" {...s} />
    </Glyph>
  ),
  cctv: (
    <Glyph>
      <circle cx="26" cy="30" r="11" {...s} />
      <circle cx="26" cy="30" r="5" {...s} />
      <circle cx="26" cy="30" r="1.8" fill="currentColor" />
      <path d="M36 26h13A5 5 0 0 1 54 31v0A5 5 0 0 1 49 36H36" {...s} />
      <path d="M44 36V44a3.5 3.5 0 0 1-3.5 3.5H28" {...s} />
      <rect x="14" y="48" width="18" height="8" rx="2" {...s} />
    </Glyph>
  ),
  "access-control": (
    <Glyph>
      <rect x="16" y="28" width="32" height="24" rx="4" {...s} />
      <path d="M24 28V20a8 8 0 0 1 16 0v8" {...s} />
      <circle cx="32" cy="40" r="3.2" {...s} />
      <path d="M32 43.2V48" {...s} />
    </Glyph>
  ),
  cabling: (
    <Glyph>
      <path d="M12 20h14c6 0 6 10 12 10h14M12 44h14c6 0 6-10 12-10h14" {...s} />
      <circle cx="12" cy="20" r="3.2" {...s} />
      <circle cx="52" cy="30" r="3.2" {...s} />
      <circle cx="12" cy="44" r="3.2" {...s} />
      <rect x="49" y="40" width="6" height="8" rx="1.4" {...s} />
    </Glyph>
  ),
  av: (
    <Glyph>
      <rect x="8" y="16" width="30" height="22" rx="3.5" {...s} />
      <path d="M18 50h10M23 38v12" {...s} />
      <path d="M44 24a8 8 0 0 1 0 16M50 20a14 14 0 0 1 0 24" {...s} />
    </Glyph>
  ),
  intercom: (
    <Glyph>
      <rect x="20" y="8" width="24" height="48" rx="5" {...s} />
      <circle cx="32" cy="24" r="7" {...s} />
      <path d="M26 40h12M26 46h8" {...s} />
    </Glyph>
  ),
  "training-it": (
    <Glyph>
      <rect x="10" y="14" width="44" height="26" rx="4" {...s} />
      <path d="M24 52h16M32 40v12" {...s} />
      <path d="M22 24h20M22 30h12" {...s} />
    </Glyph>
  ),
  "training-cyber": (
    <Glyph>
      <path d="M32 10 14 18v14c0 12 7.4 20 18 23.5C43.6 52 51 44 51 32V18L32 10Z" {...s} />
      <path d="M24 28h16v10c0 4.6-3.4 8-8 9.5-4.6-1.5-8-4.9-8-9.5V28Z" {...s} />
    </Glyph>
  ),
  "training-cloud": (
    <Glyph>
      <path d="M18 40h26c5.2 0 9.5-4 9.5-9 0-4.5-3.4-8.2-7.8-8.8C44.4 14.4 38.2 10 31 10c-7 0-13 4.6-14.5 11-5 .6-8.7 4.8-8.7 9.8C7.8 36.2 12.4 40 18 40Z" {...s} />
      <path d="M20 48 32 42.5 44 48 32 53.5 20 48Z" {...s} />
    </Glyph>
  ),
  "training-itsm": (
    <Glyph>
      <rect x="10" y="12" width="16" height="40" rx="3" {...s} />
      <rect x="30" y="12" width="16" height="26" rx="3" {...s} />
      <rect x="48" y="12" width="8" height="32" rx="2.5" {...s} />
      <path d="M15 22h6M15 30h6M35 22h6" {...s} />
    </Glyph>
  ),
  "corporate-training": (
    <Glyph>
      <path d="M8 30 32 16l24 14-24 14L8 30Z" {...s} />
      <path d="M18 36.5V48c0 1.4 6.2 8 14 8s14-6.6 14-8V36.5" {...s} />
      <path d="M56 30v16" {...s} />
      <circle cx="56" cy="48.5" r="2.6" {...s} />
    </Glyph>
  ),
};

export default function ServiceItemGlyph({ id }) {
  return ICONS[id] || ICONS.web;
}
