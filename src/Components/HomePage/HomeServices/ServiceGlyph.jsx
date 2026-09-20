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

function ConsultingGlyph() {
  return (
    <svg {...svgProps}>
      <rect x="13" y="12" width="38" height="42" rx="4.5" {...s} />
      <path d="M25 12V9.2a7 7 0 0 1 14 0V12" {...s} />
      <path d="M22 42V31.5M30 42V26M38 42V33.5M46 42V22" {...s} />
      <path d="M19.5 42h28" {...s} />
    </svg>
  );
}

function SoftwareGlyph() {
  return (
    <svg {...svgProps}>
      <rect x="12" y="14" width="40" height="36" rx="6" {...s} />
      <path d="M12 24h40" {...s} />
      <circle cx="18" cy="19" r="1.2" fill="currentColor" />
      <circle cx="23" cy="19" r="1.2" fill="currentColor" />
      <circle cx="28" cy="19" r="1.2" fill="currentColor" />
      <path d="M24 34.5 19.5 39 24 43.5M40 34.5 44.5 39 40 43.5M34 32.5 30 45.5" {...s} />
    </svg>
  );
}

function ItsmGlyph() {
  return (
    <svg {...svgProps}>
      <rect x="11" y="12" width="42" height="12" rx="3" {...s} />
      <rect x="11" y="28" width="18" height="24" rx="3" {...s} />
      <rect x="35" y="28" width="18" height="16" rx="3" {...s} />
      <path d="M20 12v-3.5M44 12v-3.5" {...s} />
      <path d="M16.5 34h7M16.5 39.5h7M40 34h8" {...s} />
    </svg>
  );
}

function InfrastructureGlyph() {
  return (
    <svg {...svgProps}>
      <rect x="15" y="10" width="34" height="12.5" rx="3" {...s} />
      <rect x="15" y="25.75" width="34" height="12.5" rx="3" {...s} />
      <rect x="15" y="41.5" width="34" height="12.5" rx="3" {...s} />
      <path d="M21 16.25h8M21 32h8M21 47.75h8" {...s} />
      <circle cx="42" cy="16.25" r="1.4" fill="currentColor" />
      <circle cx="42" cy="32" r="1.4" fill="currentColor" />
      <circle cx="42" cy="47.75" r="1.4" fill="currentColor" />
    </svg>
  );
}

function CybersecurityGlyph() {
  return (
    <svg {...svgProps}>
      <path
        d="M32 8.5 14 16.2v12.8c0 12.2 7.6 20.4 18 24 10.4-3.6 18-11.8 18-24V16.2L32 8.5Z"
        {...s}
      />
      <path d="M23.5 31.5 29.2 37l11.3-12" {...s} />
    </svg>
  );
}

function CloudAiGlyph() {
  return (
    <svg {...svgProps}>
      <path
        d="M18.5 42h24.2c4.7 0 8.5-3.6 8.5-8 0-4-3-7.3-7-7.9-1-6.4-6.6-11.1-13.2-11.1-6.3 0-11.7 4.2-13 10-4.4.5-7.7 4.2-7.7 8.6 0 4.7 4 8.4 8.2 8.4Z"
        {...s}
      />
      <path d="M25 36.5v-6.5M32 36.5v-11M39 36.5V29" {...s} />
    </svg>
  );
}

function ManagedGlyph() {
  return (
    <svg {...svgProps}>
      <path
        d="M16 36.5v-4.2C16 21.8 23 14.5 32 14.5S48 21.8 48 32.3v4.2"
        {...s}
      />
      <rect x="11.5" y="32.5" width="9.5" height="15" rx="3.2" {...s} />
      <rect x="43" y="32.5" width="9.5" height="15" rx="3.2" {...s} />
      <path d="M48 45.5c0 5.2-3.8 9.5-16 9.5" {...s} />
      <circle cx="32" cy="55" r="2.1" {...s} />
    </svg>
  );
}

function ElvGlyph() {
  return (
    <svg {...svgProps}>
      <circle cx="26" cy="30" r="9.5" {...s} />
      <circle cx="26" cy="30" r="4" {...s} />
      <circle cx="26" cy="30" r="1.6" fill="currentColor" />
      <path d="M34.8 26.5h12.2A4.5 4.5 0 0 1 51.5 31v0A4.5 4.5 0 0 1 47 35.5H34.8" {...s} />
      <path d="M42.5 35.5V42a3 3 0 0 1-3 3H28" {...s} />
      <rect x="14" y="47.5" width="16" height="8.5" rx="1.8" {...s} />
      <path d="M18 51.8h8M20 54h4" {...s} />
    </svg>
  );
}

function TrainingGlyph() {
  return (
    <svg {...svgProps}>
      <path d="M8 29 32 16.5 56 29 32 41.5 8 29Z" {...s} />
      <path d="M18 34.2V44c0 1.1 6.4 7.2 14 7.2s14-6.1 14-7.2V34.2" {...s} />
      <path d="M56 29v13.5" {...s} />
      <circle cx="56" cy="45.2" r="2.4" {...s} />
    </svg>
  );
}

const GLYPHS = {
  consulting: ConsultingGlyph,
  software: SoftwareGlyph,
  itsm: ItsmGlyph,
  infrastructure: InfrastructureGlyph,
  cybersecurity: CybersecurityGlyph,
  "cloud-ai": CloudAiGlyph,
  managed: ManagedGlyph,
  elv: ElvGlyph,
  training: TrainingGlyph,
};

export default function ServiceGlyph({ id, className }) {
  const Glyph = GLYPHS[id] || SoftwareGlyph;
  return (
    <span className={className}>
      <Glyph />
    </span>
  );
}
