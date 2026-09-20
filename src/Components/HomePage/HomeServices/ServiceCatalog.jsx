import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalized } from "../../../utils/i18nHelpers";
import { useLocale } from "../../../hooks/useLocale";
import { useServiceCatalog } from "../../../hooks/useServiceCatalog";
import { LIVE_QUERY_OPTIONS } from "../../../redux/liveQueryOptions";
import ServiceRemoteIcon from "../../Common/ServiceRemoteIcon.jsx";
import styles from "./HomeServices.module.css";

function ArrowIcon({ isRTL, className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d={isRTL ? "M19 12H5M5 12l6-6M5 12l6 6" : "M5 12h14M19 12l-6-6M19 12l-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceCatalog({
  expanded = false,
  isVisible = false,
  ctaKey,
}) {
  const { t } = useTranslation();
  const { lang, isRTL } = useLocale();
  const { catalog } = useServiceCatalog(LIVE_QUERY_OPTIONS);
  const cta = t(ctaKey || (expanded ? "services.knowMore" : "services.discoverMore"));

  return (
    <div className={`${styles.grid} ${expanded ? styles.gridExpanded : ""}`}>
      {catalog.map((service, index) => {
        const title =
          getLocalized(service.shortTitle, lang) ||
          getLocalized(service.title, lang);
        const copy = expanded
          ? getLocalized(service.description, lang) || getLocalized(service.teaser, lang)
          : getLocalized(service.teaser, lang) || getLocalized(service.description, lang);

        return (
          <div
            key={service.slug}
            id={service.slug}
            className={`${styles.cell} ${isVisible ? styles.cellIn : ""}`}
            style={{ "--delay": `${index * 70}ms` }}
          >
            <Link
              to={`/services/${service.slug}`}
              className={styles.card}
              aria-label={title}
            >
              <span className={styles.corner} aria-hidden="true">
                <ArrowIcon isRTL={isRTL} className={styles.cornerIcon} />
              </span>

              <div className={styles.main}>
                <ServiceRemoteIcon
                  variant="category"
                  slug={service.slug}
                  iconSvg={service.icon_svg}
                  iconUrl={service.icon_url}
                  className={styles.glyph}
                />
                <h3 className={styles.title}>{title}</h3>
              </div>

              <div className={styles.reveal}>
                <p className={styles.teaser}>{copy}</p>
                <span className={styles.more}>
                  {cta}
                  <ArrowIcon isRTL={isRTL} className={styles.moreArrow} />
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
