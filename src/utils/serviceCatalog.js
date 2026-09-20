import { SERVICES_MENU } from '../content/servicesMenu';

export function normalizeCatalogItem(raw = {}) {
  return {
    id: raw.slug || raw.id,
    slug: raw.slug || raw.id,
    sort_order: raw.sort_order ?? 0,
    icon_url: raw.icon_url || raw.iconUrl || null,
    icon_svg: raw.icon_svg || raw.iconSvg || null,
    title: raw.title,
    description: raw.short_description || raw.description || raw.shortDescription,
    short_description: raw.short_description || raw.description || raw.shortDescription,
  };
}

export function normalizeCatalogCategory(raw = {}) {
  const items = Array.isArray(raw.items)
    ? raw.items.map(normalizeCatalogItem)
    : Array.isArray(raw.services)
      ? raw.services.map(normalizeCatalogItem)
      : [];

  return {
    id: raw.slug || raw.id,
    slug: raw.slug || raw.id,
    sort_order: raw.sort_order ?? 0,
    icon_url: raw.icon_url || raw.iconUrl || null,
    icon_svg: raw.icon_svg || raw.iconSvg || null,
    title: raw.title,
    shortTitle: raw.short_title || raw.shortTitle || raw.title,
    teaser: raw.teaser,
    description: raw.description,
    offeringsTitle: raw.offerings_title || raw.offeringsTitle,
    offeringsLede: raw.offerings_lede || raw.offeringsLede,
    process_steps: Array.isArray(raw.process_steps) ? raw.process_steps : [],
    items_count: raw.items_count ?? items.length,
    items,
  };
}

export function normalizeServiceCatalog(payload) {
  const list = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
      ? payload.data
      : [];

  return list
    .map(normalizeCatalogCategory)
    .filter((category) => category.slug)
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
}

/** Local static catalog shaped like the API (offline / API failure fallback). */
export function getLocalServiceCatalog() {
  return SERVICES_MENU.map((category, index) =>
    normalizeCatalogCategory({
      slug: category.id,
      sort_order: index + 1,
      title: category.title,
      short_title: category.shortTitle,
      teaser: category.teaser,
      description: category.description,
      offerings_title: category.offeringsTitle,
      offerings_lede: category.offeringsLede,
      items: category.items.map((item, itemIndex) => ({
        slug: item.id,
        sort_order: itemIndex + 1,
        title: item.title,
        short_description: item.description,
      })),
    }),
  );
}

export function findCatalogCategory(catalog, slug) {
  if (!slug || !Array.isArray(catalog)) return null;
  return catalog.find((category) => category.slug === slug) || null;
}

export function findCatalogItem(catalog, slug) {
  if (!slug || !Array.isArray(catalog)) return null;
  for (const category of catalog) {
    const item = category.items?.find((entry) => entry.slug === slug);
    if (item) return { category, item };
  }
  return null;
}

export function pickLocalizedList(field, lang, fallbackLang = 'ar') {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  if (typeof field !== 'object') return [];
  return field[lang] || field[fallbackLang] || field.en || field.ar || [];
}
