const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
};

const s = {
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function FlagGlyph() {
  return (
    <svg {...svgProps}>
      <path d="M6 21V4.5" {...s} />
      <path d="M6 5.2h10.5L14.2 9.2 16.5 13H6" {...s} />
    </svg>
  );
}

function BadgeGlyph() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="10.5" r="6" {...s} />
      <path d="M9.2 15.6 8 21l4-1.8L16 21l-1.2-5.4" {...s} />
      <path d="M10 10.5 11.3 12l2.8-3" {...s} />
    </svg>
  );
}

function PartnershipGlyph() {
  return (
    <svg {...svgProps}>
      <circle cx="7.5" cy="9" r="2.4" {...s} />
      <circle cx="16.5" cy="9" r="2.4" {...s} />
      <path d="M4.4 18.5c.9-3 2.6-4.6 4.6-4.6 1.5 0 2.8.8 3.7 2.2 1-1.4 2.3-2.2 3.8-2.2 2 0 3.7 1.6 4.6 4.6" {...s} />
    </svg>
  );
}

function EcosystemGlyph() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="2.1" {...s} />
      <circle cx="6" cy="7.2" r="1.8" {...s} />
      <circle cx="18" cy="7.2" r="1.8" {...s} />
      <circle cx="6.5" cy="17.2" r="1.8" {...s} />
      <circle cx="17.5" cy="17.2" r="1.8" {...s} />
      <path d="M7.6 8.4 10.3 10.8M16.4 8.4 13.7 10.8M7.9 15.8 10.4 13.4M16.1 15.8 13.6 13.4" {...s} />
    </svg>
  );
}

function GlobeGlyph() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="8" {...s} />
      <path d="M4 12h16M12 4c2.5 2.5 3.7 5.3 3.7 8s-1.2 5.5-3.7 8c-2.5-2.5-3.7-5.3-3.7-8S9.5 6.5 12 4Z" {...s} />
    </svg>
  );
}

function UsersGlyph() {
  return (
    <svg {...svgProps}>
      <circle cx="9" cy="8.4" r="2.5" {...s} />
      <circle cx="16.2" cy="9.1" r="2.1" {...s} />
      <path d="M4.4 18.6c.9-3.1 2.8-4.7 4.8-4.7s3.9 1.6 4.8 4.7M13.8 18.3c.5-2.2 1.8-3.3 3.3-3.3 1.6 0 2.8 1.2 3.3 3.3" {...s} />
    </svg>
  );
}

function TrophyGlyph() {
  return (
    <svg {...svgProps}>
      <path d="M8 5h8v4.2c0 2.5-1.8 4.5-4 4.5s-4-2-4-4.5V5Z" {...s} />
      <path d="M8 7H5.8A2.3 2.3 0 0 0 5.8 11.5H8M16 7h2.2A2.3 2.3 0 0 1 18.2 11.5H16" {...s} />
      <path d="M12 13.7V17M9.2 19.5h5.6M9.2 19.5v-2.5h5.6v2.5" {...s} />
    </svg>
  );
}

function RocketGlyph() {
  return (
    <svg {...svgProps}>
      <path d="M12 4c3.4 2.4 5.2 6.2 5.2 10.2 0 1.4-.4 2.4-1.1 3.3L12 20l-4.1-2.5c-.7-.9-1.1-1.9-1.1-3.3C6.8 10.2 8.6 6.4 12 4Z" {...s} />
      <circle cx="12" cy="11.2" r="1.6" {...s} />
      <path d="M8.4 16.4 6.5 19.5M15.6 16.4 17.5 19.5" {...s} />
    </svg>
  );
}

const BY_YEAR = {
  2022: FlagGlyph,
  2023: BadgeGlyph,
  2024: PartnershipGlyph,
  2025: EcosystemGlyph,
  2026: GlobeGlyph,
};

const BY_ICON = {
  launch: FlagGlyph,
  users: UsersGlyph,
  globe: GlobeGlyph,
  trophy: TrophyGlyph,
  rocket: RocketGlyph,
  rocketTakeoff: RocketGlyph,
};

const BY_INDEX = [FlagGlyph, BadgeGlyph, PartnershipGlyph, EcosystemGlyph, GlobeGlyph];

export default function EvolutionStageGlyph({ year, icon, index = 0 }) {
  const Glyph =
    BY_YEAR[year] || BY_ICON[icon] || BY_INDEX[index % BY_INDEX.length];

  return <Glyph />;
}
