import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./ServicesMegaMenu.module.css";
import { getLocalized } from "../../../utils/i18nHelpers";
import { useLocale } from "../../../hooks/useLocale";
import { useServiceCatalog } from "../../../hooks/useServiceCatalog";
import { LIVE_QUERY_OPTIONS } from "../../../redux/liveQueryOptions";
import Icon from "../../Common/Icon.jsx";
import ServiceRemoteIcon from "../../Common/ServiceRemoteIcon.jsx";

export default function ServicesMegaMenu({
  open,
  variant = "desktop",
  onNavigate,
  onMouseEnter,
  onMouseLeave,
  panelRef,
}) {
  const { t } = useTranslation();
  const { lang, isRTL } = useLocale();
  const { catalog } = useServiceCatalog(LIVE_QUERY_OPTIONS);
  const [activeId, setActiveId] = useState(null);
  const [mobileExpandedId, setMobileExpandedId] = useState(null);
  const isDesktop = variant === "desktop";

  useEffect(() => {
    if (!catalog.length) return;
    setActiveId((current) =>
      catalog.some((category) => category.slug === current)
        ? current
        : catalog[0].slug,
    );
  }, [catalog]);

  const activeCategory = useMemo(
    () =>
      catalog.find((category) => category.slug === activeId) || catalog[0] || null,
    [activeId, catalog],
  );

  useEffect(() => {
    if (!open) {
      setMobileExpandedId(null);
    }
  }, [open]);

  const handleNavigate = () => {
    onNavigate?.();
  };

  if (!catalog.length || !activeCategory) {
    return null;
  }

  if (isDesktop) {
    return (
      <div
        ref={panelRef}
        className={`${styles.desktopRoot} ${open ? styles.desktopRootOpen : ""}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className={styles.bridge} aria-hidden="true" />
        <div
          className={styles.panel}
          id="services-mega-menu"
          role="region"
          aria-label={t("nav.services")}
        >
          <div className={styles.accentBar} aria-hidden="true" />

          <div className={styles.body}>
            <aside className={styles.cats} aria-label={t("nav.megaMenu.explore")}>
              {catalog.map((category) => {
                const isActive = category.slug === activeCategory.slug;

                return (
                  <Link
                    key={category.slug}
                    to={`/services/${category.slug}`}
                    className={`${styles.cat} ${isActive ? styles.catActive : ""}`}
                    tabIndex={open ? 0 : -1}
                    onMouseEnter={() => setActiveId(category.slug)}
                    onFocus={() => setActiveId(category.slug)}
                    onClick={handleNavigate}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className={styles.catIcon} aria-hidden="true">
                      <ServiceRemoteIcon
                        variant="category"
                        slug={category.slug}
                        iconSvg={category.icon_svg}
                        iconUrl={category.icon_url}
                      />
                    </span>
                    <span className={styles.catCopy}>
                      <span className={styles.catTitle}>
                        {getLocalized(category.title, lang)}
                      </span>
                    </span>
                    <Icon
                      name={isRTL ? "chevronLeft" : "chevronRight"}
                      className={styles.catChevron}
                    />
                  </Link>
                );
              })}
            </aside>

            <div className={styles.mainCol}>
              <div className={styles.detail} key={activeCategory.slug}>
                <header className={styles.detailHead}>
                  <span className={styles.detailEyebrow}>{t("nav.megaMenu.explore")}</span>
                  <div className={styles.detailTitleRow}>
                    <h3 className={styles.detailTitle}>
                      {getLocalized(activeCategory.title, lang)}
                    </h3>
                    <span className={styles.detailCount}>
                      {t("nav.megaMenu.itemCount", {
                        count: activeCategory.items.length,
                      })}
                    </span>
                  </div>
                  <p className={styles.detailDesc}>
                    {getLocalized(activeCategory.description, lang)}
                  </p>
                </header>

                <ul className={styles.items}>
                  {activeCategory.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/services/${item.slug}`}
                        className={styles.item}
                        tabIndex={open ? 0 : -1}
                        onClick={handleNavigate}
                      >
                        <span className={styles.itemMark} aria-hidden="true">
                          <ServiceRemoteIcon
                            variant="item"
                            slug={item.slug}
                            iconSvg={item.icon_svg}
                            iconUrl={item.icon_url}
                          />
                        </span>
                        <span className={styles.itemLabel}>
                          {getLocalized(item.title, lang)}
                        </span>
                        <Icon
                          name={isRTL ? "chevronLeft" : "chevronRight"}
                          className={styles.itemArrow}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <footer className={styles.foot}>
                <div className={styles.footCopy}>
                  <strong>{t("nav.megaMenu.ctaTitle")}</strong>
                  <span>{t("nav.megaMenu.ctaText")}</span>
                </div>
                <div className={styles.footActions}>
                  <Link
                    to="/services"
                    className={styles.footGhost}
                    tabIndex={open ? 0 : -1}
                    onClick={handleNavigate}
                  >
                    {t("nav.megaMenu.viewAll")}
                  </Link>
                  <Link
                    to="/start-project"
                    className={styles.footPrimary}
                    tabIndex={open ? 0 : -1}
                    onClick={handleNavigate}
                  >
                    <span>{t("nav.startProject")}</span>
                    <Icon name="arrowRight" className={styles.footArrow} />
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={panelRef}
      className={`${styles.mobileRoot} ${open ? styles.mobileRootOpen : ""}`}
      id="services-mega-menu"
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <div className={styles.mobileInner}>
        <Link to="/services" className={styles.mobileAll} onClick={handleNavigate}>
          <span>{t("nav.megaMenu.viewAll")}</span>
          <Icon name={isRTL ? "chevronLeft" : "chevronRight"} />
        </Link>

        <ul className={styles.mobileList}>
          {catalog.map((category) => {
            const expanded = mobileExpandedId === category.slug;

            return (
              <li key={category.slug} className={styles.mobileGroup}>
                <button
                  type="button"
                  className={`${styles.mobileCat} ${expanded ? styles.mobileCatOpen : ""}`}
                  aria-expanded={expanded}
                  onClick={() =>
                    setMobileExpandedId((current) =>
                      current === category.slug ? null : category.slug,
                    )
                  }
                >
                  <span className={styles.mobileCatIcon} aria-hidden="true">
                    <ServiceRemoteIcon
                      variant="category"
                      slug={category.slug}
                      iconSvg={category.icon_svg}
                      iconUrl={category.icon_url}
                    />
                  </span>
                  <span className={styles.mobileCatTitle}>
                    {getLocalized(category.title, lang)}
                  </span>
                  <Icon name="chevronDown" className={styles.mobileCatChevron} />
                </button>

                <div
                  className={`${styles.mobileItemsWrap} ${
                    expanded ? styles.mobileItemsWrapOpen : ""
                  }`}
                >
                  <div className={styles.mobileItemsInner}>
                    {category.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/services/${item.slug}`}
                        className={styles.mobileItem}
                        onClick={handleNavigate}
                      >
                        {getLocalized(item.title, lang)}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
