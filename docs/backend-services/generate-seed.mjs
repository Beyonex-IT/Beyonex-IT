import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SERVICES_MENU } from "../../src/content/servicesMenu.js";
import { CATEGORY_PROCESS, SERVICE_PAGES } from "../../src/content/servicePages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const outDir = __dirname;
const catGlyphDir = path.join(outDir, "glyphs/categories");
const itemGlyphDir = path.join(outDir, "glyphs/services");

const STROKE = `stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" fill="none"`;

function convertInner(jsx) {
  return jsx
    .replace(/\{\.\.\.s\}/g, STROKE)
    .replace(/strokeDasharray=/g, "stroke-dasharray=")
    .replace(/\n\s+/g, "\n    ")
    .trim();
}

function wrapSvg(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    ${inner}
</svg>
`;
}

function writeSvg(dir, id, innerJsx) {
  const file = path.join(dir, `${id}.svg`);
  fs.writeFileSync(file, wrapSvg(convertInner(innerJsx)), "utf8");
  return `glyphs/${path.basename(dir)}/${id}.svg`;
}

function extractCategoryGlyphs() {
  const src = fs.readFileSync(
    path.join(root, "src/Components/HomePage/HomeServices/ServiceGlyph.jsx"),
    "utf8",
  );
  const map = {
    consulting: "ConsultingGlyph",
    software: "SoftwareGlyph",
    itsm: "ItsmGlyph",
    infrastructure: "InfrastructureGlyph",
    cybersecurity: "CybersecurityGlyph",
    "cloud-ai": "CloudAiGlyph",
    managed: "ManagedGlyph",
    elv: "ElvGlyph",
    training: "TrainingGlyph",
  };
  const paths = {};
  for (const [id, fn] of Object.entries(map)) {
    const re = new RegExp(
      `function ${fn}\\(\\) \\{[\\s\\S]*?<svg \\{\\.\\.\\.svgProps\\}>([\\s\\S]*?)</svg>`,
    );
    const match = src.match(re);
    if (!match) throw new Error(`Missing category glyph: ${id}`);
    paths[id] = writeSvg(catGlyphDir, id, match[1]);
  }
  return paths;
}

function extractItemGlyphs() {
  const src = fs.readFileSync(
    path.join(root, "src/Components/HomePage/HomeServices/ServiceItemGlyph.jsx"),
    "utf8",
  );
  const blockRe = /["']?([a-z0-9-]+)["']?:\s*\(\s*<Glyph>([\s\S]*?)<\/Glyph>/g;
  const paths = {};
  let match;
  while ((match = blockRe.exec(src))) {
    paths[match[1]] = writeSvg(itemGlyphDir, match[1], match[2]);
  }
  return paths;
}

const categoryIcons = extractCategoryGlyphs();
const serviceIcons = extractItemGlyphs();

const categories = SERVICES_MENU.map((category, index) => ({
  slug: category.id,
  sort_order: index + 1,
  is_active: true,
  icon_key: category.id,
  icon_name: category.icon,
  icon_svg_path: categoryIcons[category.id],
  title: category.title,
  short_title: category.shortTitle,
  teaser: category.teaser,
  description: category.description,
  offerings_title: category.offeringsTitle,
  offerings_lede: category.offeringsLede,
  process_steps: (CATEGORY_PROCESS[category.id] || []).map((step, stepIndex) => ({
    sort_order: stepIndex + 1,
    title: step.title,
    description: step.desc,
  })),
  services: category.items.map((item, itemIndex) => {
    const page = SERVICE_PAGES[item.id];
    if (!page) throw new Error(`Missing page content for ${item.id}`);
    return {
      slug: item.id,
      category_slug: category.id,
      sort_order: itemIndex + 1,
      is_active: true,
      icon_key: item.id,
      icon_svg_path: serviceIcons[item.id],
      title: item.title,
      short_description: item.description,
      lede: page.lede,
      overview: page.overview,
      scope: page.scope,
      outcomes: page.outcomes,
      signals: page.signals,
    };
  }),
}));

const seed = {
  version: 1,
  generated_at: new Date().toISOString().slice(0, 10),
  notes: {
    uniqueness: "Every category slug and every service slug must be globally unique. The website uses the same URL param /services/:slug for both.",
    icons: "SVGs use currentColor. Store the file and return icon_url, or return icon_svg markup. Do not rasterize if possible.",
    i18n: "Dashboard always edits { ar, en }. Public website currently sends Accept-Language and can consume either localized strings or bilingual objects.",
  },
  counts: {
    categories: categories.length,
    services: categories.reduce((sum, cat) => sum + cat.services.length, 0),
  },
  categories,
};

fs.writeFileSync(path.join(outDir, "seed.json"), JSON.stringify(seed, null, 2), "utf8");

const missingItemIcons = categories
  .flatMap((cat) => cat.services)
  .filter((service) => !serviceIcons[service.slug])
  .map((service) => service.slug);

console.log(
  JSON.stringify(
    {
      categories: categories.length,
      services: seed.counts.services,
      categorySvgs: Object.keys(categoryIcons).length,
      serviceSvgs: Object.keys(serviceIcons).length,
      missingItemIcons,
    },
    null,
    2,
  ),
);
