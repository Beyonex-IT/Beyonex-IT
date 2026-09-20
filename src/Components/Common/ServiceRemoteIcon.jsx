import ServiceGlyph from '../HomePage/HomeServices/ServiceGlyph.jsx';
import ServiceItemGlyph from '../HomePage/HomeServices/ServiceItemGlyph.jsx';
import styles from './ServiceRemoteIcon.module.css';

/**
 * Prefer API icon_svg (currentColor), then icon_url image, then local glyph by slug.
 */
export default function ServiceRemoteIcon({
  slug,
  iconSvg,
  iconUrl,
  variant = 'item',
  className = '',
}) {
  const svgMarkup = typeof iconSvg === 'string' ? iconSvg.trim() : '';
  const hasUsableSvg = /<svg[\s>]/i.test(svgMarkup);

  if (hasUsableSvg) {
    return (
      <span
        className={`${styles.wrap} ${className}`.trim()}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />
    );
  }

  if (iconUrl) {
    return (
      <span className={`${styles.wrap} ${styles.imageWrap} ${className}`.trim()} aria-hidden="true">
        <img src={iconUrl} alt="" className={styles.image} loading="lazy" decoding="async" />
      </span>
    );
  }

  if (variant === 'category') {
    return <ServiceGlyph id={slug} className={className} />;
  }

  return (
    <span className={className || undefined} aria-hidden="true">
      <ServiceItemGlyph id={slug} />
    </span>
  );
}
