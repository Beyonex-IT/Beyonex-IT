import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./ServiceDetails.module.css";
import { useGetServiceOfferingQuery } from "../../redux/api/servicesApi";
import { STATIC_QUERY_OPTIONS } from "../../redux/liveQueryOptions";
import { useLocale } from "../../hooks/useLocale";
import { usePageTitle } from "../../hooks/usePageTitle";
import { getLocalized, getLocalizedOrRaw } from "../../utils/i18nHelpers";
import {
  normalizeCatalogItem,
  pickLocalizedList,
} from "../../utils/serviceCatalog";
import { getServiceItem } from "../../content/servicesMenu";
import { CATEGORY_PROCESS, getServicePage } from "../../content/servicePages";
import ServiceRemoteIcon from "../../Components/Common/ServiceRemoteIcon.jsx";
import Icon from "../../Components/Common/Icon.jsx";
import AppLoader from "../../Components/Layout/AppLoader/AppLoader";

export default function ServiceDetails() {
  const { serviceKey } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lang, isRTL } = useLocale();

  const {
    data: offeringResponse,
    isLoading,
    isFetching,
  } = useGetServiceOfferingQuery(
    { slug: serviceKey, lang },
    STATIC_QUERY_OPTIONS,
  );

  const apiService = offeringResponse?.data || null;
  const localResolved = getServiceItem(serviceKey);
  const localPage = getServicePage(serviceKey);
  const hasLocal = Boolean(localResolved && localPage);
  const useApi = Boolean(apiService);

  const title = useApi
    ? getLocalizedOrRaw(apiService.title, lang)
    : hasLocal
      ? getLocalized(localResolved.item.title, lang)
      : t("nav.services");

  usePageTitle(title);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceKey]);

  if (!useApi && (isLoading || isFetching)) {
    return <AppLoader />;
  }

  if (!useApi && !hasLocal) {
    return (
      <div className={`container ${styles.notFoundWrap}`}>
        <div className={styles.notFoundCard}>
          <h2>{t("services.details.notFoundTitle")}</h2>
          <p>{t("services.details.notFoundText")}</p>
          <div className={styles.notFoundActions}>
            <button type="button" className={styles.primaryButton} onClick={() => navigate(-1)}>
              {t("services.details.goBack")}
            </button>
            <Link className={styles.secondaryButton} to="/services">
              {t("services.details.allServices")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const categoryTitle = useApi
    ? getLocalizedOrRaw(apiService.category?.short_title, lang) ||
      getLocalizedOrRaw(apiService.category?.title, lang)
    : getLocalized(localResolved.category.shortTitle, lang) ||
      getLocalized(localResolved.category.title, lang);

  const categoryPath = useApi
    ? apiService.category?.slug
      ? `/services/${apiService.category.slug}`
      : "/services"
    : `/services/${localResolved.category.id}`;

  const lede = useApi
    ? getLocalizedOrRaw(apiService.lede, lang) ||
      getLocalizedOrRaw(apiService.short_description, lang)
    : getLocalized(localPage.lede, lang) ||
      getLocalized(localResolved.item.description, lang);

  const overview = useApi
    ? pickLocalizedList(apiService.overview, lang)
    : pickLocalizedList(localPage.overview, lang);

  const scope = useApi
    ? pickLocalizedList(apiService.scope, lang)
    : pickLocalizedList(localPage.scope, lang);

  const outcomes = useApi
    ? pickLocalizedList(apiService.outcomes, lang)
    : pickLocalizedList(localPage.outcomes, lang);

  const signals = useApi
    ? pickLocalizedList(apiService.signals, lang)
    : pickLocalizedList(localPage.signals, lang);

  const processSource = useApi
    ? apiService.process_steps
    : CATEGORY_PROCESS[localResolved.category.id];

  const processSteps = Array.isArray(processSource) && processSource.length > 0
    ? [...processSource]
        .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
        .map((step, index) => ({
          num: String(index + 1).padStart(2, "0"),
          title: getLocalized(step.title, lang),
          desc: getLocalized(step.description || step.desc, lang),
        }))
    : (isRTL
        ? [
            { num: "01", title: "تحليل الاحتياج", desc: "فهم الأهداف والمتطلبات بدقة" },
            { num: "02", title: "تصميم الحل", desc: "هيكلة تقنية وتجربة استخدام واضحة" },
            { num: "03", title: "تطوير وتنفيذ", desc: "بناء منظم بجودة قابلة للتوسع" },
            { num: "04", title: "إطلاق ومتابعة", desc: "تسليم آمن ودعم بعد الإطلاق" },
          ]
        : [
            { num: "01", title: "Discovery", desc: "Clarify goals and technical requirements" },
            { num: "02", title: "Solution design", desc: "Architecture and UX mapped to outcomes" },
            { num: "03", title: "Build & deliver", desc: "Structured development with quality gates" },
            { num: "04", title: "Launch & support", desc: "Safe release with post-launch support" },
          ]);

  const related = useApi
    ? (apiService.related || []).map(normalizeCatalogItem)
    : localResolved.category.items
        .filter((entry) => entry.id !== localResolved.item.id)
        .slice(0, 4)
        .map((entry) =>
          normalizeCatalogItem({
            slug: entry.id,
            title: entry.title,
            short_description: entry.description,
          }),
        );

  const iconSlug = useApi ? apiService.slug : localResolved.item.id;
  const iconSvg = useApi ? apiService.icon_svg : null;
  const iconUrl = useApi ? apiService.icon_url : null;

  const hasOverview = overview.length > 0;
  const hasScope = scope.length > 0;
  const hasOutcomes = outcomes.length > 0;

  let sectionIndex = 0;
  const nextIndex = () => {
    sectionIndex += 1;
    return String(sectionIndex).padStart(2, "0");
  };

  return (
    <main className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <section className={styles.hero}>
        <div className={styles.ambience} aria-hidden="true">
          <span className={styles.glowStart} />
          <span className={styles.glowEnd} />
          <span className={styles.heroGrid} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumbs} aria-label={t("services.details.breadcrumb")}>
            <Link to="/" className={styles.breadcrumbLink}>
              {t("services.details.home")}
            </Link>
            <span className={styles.breadcrumbSep} aria-hidden="true" />
            <Link to="/services" className={styles.breadcrumbLink}>
              {t("nav.services")}
            </Link>
            {categoryTitle ? (
              <>
                <span className={styles.breadcrumbSep} aria-hidden="true" />
                <Link to={categoryPath} className={styles.breadcrumbLink}>
                  {categoryTitle}
                </Link>
              </>
            ) : null}
            <span className={styles.breadcrumbSep} aria-hidden="true" />
            <span className={styles.breadcrumbCurrent}>{title}</span>
          </nav>

          <div className={styles.heroStage}>
            <div className={styles.heroCopy}>
              {categoryTitle ? (
                <p className={styles.kicker}>
                  <span className={styles.kickerLine} aria-hidden="true" />
                  {categoryTitle}
                </p>
              ) : null}

              <h1 className={styles.title}>{title}</h1>
              <span className={styles.accent} aria-hidden="true" />

              {lede ? <p className={styles.lede}>{lede}</p> : null}

              <div className={styles.heroActions}>
                <Link to="/start-project" className={styles.primaryButton}>
                  <span>{t("nav.startProject")}</span>
                  <Icon name="arrowRight" className={styles.btnArrow} />
                </Link>
                <Link to="/contact" className={styles.secondaryButton}>
                  {t("services.details.consult")}
                </Link>
              </div>
            </div>

            <aside className={styles.heroVisual} aria-hidden={signals.length === 0}>
              <div className={styles.visualFrame}>
                <div className={styles.visualCard}>
                  <span className={styles.visualGlow} />
                  <span className={styles.visualGlyph}>
                    <ServiceRemoteIcon
                      variant="item"
                      slug={iconSlug}
                      iconSvg={iconSvg}
                      iconUrl={iconUrl}
                    />
                  </span>
                  {categoryTitle ? (
                    <p className={styles.visualCaption}>{categoryTitle}</p>
                  ) : null}
                  {signals.length > 0 ? (
                    <ul className={styles.visualSignals}>
                      {signals.map((signal) => (
                        <li key={signal}>{signal}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.mainLayout}>
        <div className="container">
          <div className={styles.contentPanel}>
            {hasOverview && (
              <article id="overview" className={styles.panelSection}>
                <header className={styles.blockHeader}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIndex}>{nextIndex()}</span>
                    {t("services.details.overview")}
                  </h2>
                </header>
                <div className={styles.overviewCopy}>
                  {overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            )}

            {hasScope && (
              <article id="scope" className={styles.panelSection}>
                <header className={styles.blockHeader}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIndex}>{nextIndex()}</span>
                    {t("services.details.scope")}
                  </h2>
                  <p className={styles.sectionSubtitle}>{t("services.details.scopeLede")}</p>
                </header>
                <ul className={styles.scopeList}>
                  {scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )}

            {hasOutcomes && (
              <article id="benefits" className={styles.panelSection}>
                <header className={styles.blockHeader}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIndex}>{nextIndex()}</span>
                    {t("services.details.outcomes")}
                  </h2>
                  <p className={styles.sectionSubtitle}>{t("services.details.outcomesLede")}</p>
                </header>
                <ol className={styles.featuresList}>
                  {outcomes.map((feature, index) => (
                    <li
                      key={`${index}-${typeof feature === "string" ? feature : index}`}
                      className={styles.featureItem}
                    >
                      <span className={styles.featureNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className={styles.featureText}>
                        {typeof feature === "string" ? feature : feature?.[lang] || feature}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>
            )}

            <article className={styles.panelSection}>
              <header className={styles.blockHeader}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIndex}>{nextIndex()}</span>
                  {t("services.details.process")}
                </h2>
                <p className={styles.sectionSubtitle}>{t("services.details.processLede")}</p>
              </header>
              <ol className={styles.processTrack}>
                {processSteps.map((step, index) => (
                  <li key={step.num} className={styles.processStep}>
                    <span className={styles.processNum}>{step.num}</span>
                    {index < processSteps.length - 1 && (
                      <span className={styles.processConnector} aria-hidden="true" />
                    )}
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processDesc}>{step.desc}</p>
                  </li>
                ))}
              </ol>
            </article>

            {related.length > 0 && (
              <article className={styles.panelSection}>
                <header className={styles.blockHeader}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIndex}>{nextIndex()}</span>
                    {t("services.details.related")}
                  </h2>
                  <p className={styles.sectionSubtitle}>{t("services.details.relatedLede")}</p>
                </header>
                <ul className={styles.relatedGrid}>
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/services/${item.slug}`} className={styles.relatedCard}>
                        <span className={styles.relatedGlyph} aria-hidden="true">
                          <ServiceRemoteIcon
                            variant="item"
                            slug={item.slug}
                            iconSvg={item.icon_svg}
                            iconUrl={item.icon_url}
                          />
                        </span>
                        <span className={styles.relatedBody}>
                          <span className={styles.relatedTitle}>
                            {getLocalized(item.title, lang)}
                          </span>
                          <span className={styles.relatedText}>
                            {getLocalized(item.description, lang) ||
                              getLocalized(item.short_description, lang)}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            <div className={styles.ctaPanel}>
              <div className={styles.ctaCopy}>
                <span className={styles.ctaLabel}>{t("services.details.nextStep")}</span>
                <h3 className={styles.ctaTitle}>{t("services.details.ctaTitle")}</h3>
                <p className={styles.ctaText}>{t("services.details.ctaText")}</p>
              </div>
              <div className={styles.ctaActions}>
                <Link to="/start-project" className={styles.ctaPrimary}>
                  <span>{t("nav.startProject")}</span>
                  <Icon name="arrowRight" className={styles.btnArrow} />
                </Link>
                <Link to="/contact" className={styles.ctaSecondary}>
                  {t("nav.contact")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
