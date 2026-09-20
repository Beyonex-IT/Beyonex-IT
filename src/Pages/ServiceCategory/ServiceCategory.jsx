import { useEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalized } from "../../utils/i18nHelpers";
import { normalizeCatalogCategory } from "../../utils/serviceCatalog";
import { useLocale } from "../../hooks/useLocale";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useGetServiceCategoryQuery } from "../../redux/api/servicesApi";
import { STATIC_QUERY_OPTIONS } from "../../redux/liveQueryOptions";
import { useServiceCatalog } from "../../hooks/useServiceCatalog";
import ServiceRemoteIcon from "../../Components/Common/ServiceRemoteIcon.jsx";
import Icon from "../../Components/Common/Icon.jsx";
import AppLoader from "../../Components/Layout/AppLoader/AppLoader";
import styles from "./ServiceCategory.module.css";

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

export default function ServiceCategory() {
  const { serviceKey } = useParams();
  const location = useLocation();
  const { t } = useTranslation();
  const { lang, isRTL } = useLocale();
  const { getCategory } = useServiceCatalog();

  const {
    data: categoryResponse,
    isLoading,
    isError,
    isFetching,
  } = useGetServiceCategoryQuery(
    { slug: serviceKey, lang },
    STATIC_QUERY_OPTIONS,
  );

  const remoteCategory = categoryResponse?.data
    ? normalizeCatalogCategory(categoryResponse.data)
    : null;
  const fallbackCategory = getCategory(serviceKey);
  const category = remoteCategory || fallbackCategory;

  const title = category
    ? getLocalized(category.title, lang) || getLocalized(category.shortTitle, lang)
    : "";
  const description = category ? getLocalized(category.description, lang) : "";
  const offeringsTitle = category
    ? getLocalized(category.offeringsTitle, lang) || t("services.category.offeringsTitle")
    : "";
  const offeringsLede = category
    ? getLocalized(category.offeringsLede, lang) || description
    : "";

  usePageTitle(title || t("nav.services"));

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return undefined;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, serviceKey]);

  if (!category && (isLoading || isFetching)) {
    return <AppLoader />;
  }

  if (!category || (isError && !fallbackCategory && !remoteCategory)) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero} data-category-hero>
        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.crumbs} aria-label={t("services.category.breadcrumb")}>
            <Link to="/services">{t("services.title")}</Link>
            <span className={styles.crumbSep} aria-hidden="true" />
            <span>{title}</span>
          </nav>

          <div className={styles.heroCopy}>
            <p className={styles.kicker}>
              <span className={styles.kickerLine} aria-hidden="true" />
              {t("services.title")}
              <span className={styles.kickerLine} aria-hidden="true" />
            </p>
            <h1 className={styles.headline}>{title}</h1>
            <span className={styles.accent} aria-hidden="true" />
            {description ? <p className={styles.lede}>{description}</p> : null}
            <p className={styles.count}>
              {t("services.category.count", {
                count: category.items_count || category.items.length,
              })}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.offerings}>
        <div className="container">
          <header className={styles.offerHead}>
            <p className={styles.kicker}>
              <span className={styles.kickerLine} aria-hidden="true" />
              {getLocalized(category.shortTitle, lang) || t("services.category.offerings")}
              <span className={styles.kickerLine} aria-hidden="true" />
            </p>
            <h2 className={styles.offerTitle}>{offeringsTitle}</h2>
            <span className={styles.accent} aria-hidden="true" />
            {offeringsLede ? <p className={styles.offerLede}>{offeringsLede}</p> : null}
          </header>

          <div className={styles.grid}>
            {category.items.map((item, index) => {
              const itemTitle = getLocalized(item.title, lang);
              const itemCopy =
                getLocalized(item.description, lang) ||
                getLocalized(item.short_description, lang);

              return (
                <div
                  key={item.slug}
                  id={item.slug}
                  className={styles.cell}
                  style={{ "--delay": `${index * 60}ms` }}
                >
                  <Link
                    to={`/services/${item.slug}`}
                    className={styles.card}
                    aria-label={itemTitle}
                  >
                    <span className={styles.corner} aria-hidden="true">
                      <ArrowIcon isRTL={isRTL} className={styles.cornerIcon} />
                    </span>

                    <div className={styles.main}>
                      <span className={styles.glyph} aria-hidden="true">
                        <ServiceRemoteIcon
                          variant="item"
                          slug={item.slug}
                          iconSvg={item.icon_svg}
                          iconUrl={item.icon_url}
                        />
                      </span>
                      <h3 className={styles.cardTitle}>{itemTitle}</h3>
                    </div>

                    <div className={styles.reveal}>
                      {itemCopy ? <p className={styles.teaser}>{itemCopy}</p> : null}
                      <span className={styles.more}>
                        {t("services.serviceDetails")}
                        <ArrowIcon isRTL={isRTL} className={styles.moreArrow} />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaPanel}>
            <h2 className={styles.ctaTitle}>{t("services.category.ctaTitle")}</h2>
            <p className={styles.ctaText}>{t("services.category.ctaText")}</p>
            <div className={styles.ctaActions}>
              <Link to="/start-project" className={styles.primaryBtn}>
                <span>{t("nav.startProject")}</span>
                <Icon name="arrowRight" className={styles.primaryBtnIcon} />
              </Link>
              <Link to="/contact" className={styles.secondaryBtn}>
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
