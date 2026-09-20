import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { useLocale } from "../../../hooks/useLocale";
import { useSettings } from "../../../hooks/useSettings";
import { useResolvedMediaUrl } from "../../../hooks/useResolvedMediaUrl";
import { useTheme } from "../../../hooks/useTheme";
import { getLocalizedOrRaw } from "../../../utils/i18nHelpers";
import Icon from "../../Common/Icon.jsx";
import ServicesMegaMenu from "./ServicesMegaMenu.jsx";

function subscribeDesktopNav(onStoreChange) {
  const mediaQuery = window.matchMedia("(min-width: 992px)");
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getDesktopNavSnapshot() {
  return window.matchMedia("(min-width: 992px)").matches;
}

const LANGUAGES = [
  {
    code: "ar",
    label: "العربية",
    short: "AR",
    flag: "https://flagcdn.com/w20/sa.png",
    alt: "Saudi Arabia",
  },
  {
    code: "en",
    label: "English",
    short: "EN",
    flag: "https://flagcdn.com/w20/us.png",
    alt: "United States",
  },
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const { isRTL } = useLocale();
  const { settings } = useSettings();
  const { theme, isDark, toggleTheme } = useTheme();
  const faviconSrc = useResolvedMediaUrl(settings?.favicon);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesTriggerRef = useRef(null);
  const servicesPanelRef = useRef(null);
  const servicesOpenTimer = useRef(null);
  const servicesCloseTimer = useRef(null);
  const isDesktopNav = useSyncExternalStore(
    subscribeDesktopNav,
    getDesktopNavSnapshot,
    getDesktopNavSnapshot,
  );

  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0];

  const siteName =
    getLocalizedOrRaw(settings?.site_name, i18n.language) || "Beyonex IT";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const clearServicesTimers = () => {
    if (servicesOpenTimer.current) {
      clearTimeout(servicesOpenTimer.current);
      servicesOpenTimer.current = null;
    }
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
  };

  const closeNav = () => {
    clearServicesTimers();
    setNavOpen(false);
    setDropdownOpen(false);
    setServicesOpen(false);
  };

  const openServicesMenu = () => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
    if (servicesOpen) {
      setDropdownOpen(false);
      return;
    }
    servicesOpenTimer.current = setTimeout(() => {
      setDropdownOpen(false);
      setServicesOpen(true);
    }, 70);
  };

  const closeServicesMenu = (immediate = false) => {
    if (servicesOpenTimer.current) {
      clearTimeout(servicesOpenTimer.current);
      servicesOpenTimer.current = null;
    }
    if (immediate) {
      setServicesOpen(false);
      return;
    }
    servicesCloseTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 220);
  };

  const themeToggleButton = (className = "") => (
    <button
      type="button"
      className={`${styles.themeToggle} ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={isDark ? t("nav.themeLight") : t("nav.themeDark")}
      title={isDark ? t("nav.themeLight") : t("nav.themeDark")}
    >
      <Icon
        name={isDark ? "sunFill" : "moonFill"}
        className={styles.themeToggleIcon}
      />
    </button>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }

      const inServicesTrigger = servicesTriggerRef.current?.contains(event.target);
      const inServicesPanel = servicesPanelRef.current?.contains(event.target);
      if (!inServicesTrigger && !inServicesPanel) {
        setServicesOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setServicesOpen(false);
        setNavOpen(false);
      }
    };

    if (dropdownOpen || navOpen || servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dropdownOpen, navOpen, servicesOpen]);

  useEffect(() => {
    if (!navOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [navOpen]);

  useEffect(() => {
    setServicesOpen(false);
    clearServicesTimers();
  }, [isDesktopNav]);

  useEffect(() => {
    return () => clearServicesTimers();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavLink = (to, label, options = {}) => (
    <NavLink
      className={({ isActive }) =>
        `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
      }
      to={to}
      end={options.end}
      onMouseEnter={() => {
        if (isDesktopNav) closeServicesMenu(true);
      }}
      onClick={() => {
        options.onClick?.();
        closeNav();
      }}
    >
      {label}
    </NavLink>
  );

  const renderBrand = () => (
    <Link className={`navbar-brand ${styles.brandLink}`} to="/">
      {faviconSrc && (
        <img
          src={faviconSrc}
          alt={siteName}
          className={styles.siteIcon}
          height={46}
          loading="eager"
          decoding="async"
        />
      )}
    </Link>
  );

  const renderActions = () => (
    <div className={styles.navActions}>
      {themeToggleButton(styles.themeToggleDesktop)}
      <div className={styles.langSelect} ref={dropdownRef}>
        <button
          type="button"
          className={`${styles.langTrigger} ${
            dropdownOpen ? styles.langOpen : ""
          }`}
          onClick={() => {
            setDropdownOpen((open) => !open);
            setServicesOpen(false);
          }}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-label={i18n.language === "ar" ? "اللغة" : "Language"}
        >
          <span className={styles.langTriggerContent}>
            <img
              src={currentLanguage.flag}
              alt={currentLanguage.alt}
              className={styles.flagIcon}
            />
            <span className={styles.langLabel}>{currentLanguage.label}</span>
            <span className={styles.langShort}>{currentLanguage.short}</span>
          </span>
          <Icon name="chevronDown" className={styles.langChevron} />
        </button>

        {dropdownOpen && (
          <ul className={styles.langMenu} role="listbox">
            {LANGUAGES.map((lang) => {
              const isActive = i18n.language === lang.code;

              return (
                <li key={lang.code} role="option" aria-selected={isActive}>
                  <button
                    type="button"
                    className={`${styles.langMenuItem} ${
                      isActive ? styles.langMenuItemActive : ""
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className={styles.langOptionContent}>
                      <img
                        src={lang.flag}
                        alt={lang.alt}
                        className={styles.flagIcon}
                      />
                      <span>{lang.label}</span>
                    </span>
                    {isActive && (
                      <Icon name="check" className={styles.langCheck} />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Link to="/start-project" className={styles.bookBtn} onClick={closeNav}>
        {t("nav.startProject")}
      </Link>
    </div>
  );

  return (
    <>
      {isDesktopNav &&
        createPortal(
          <>
            {servicesOpen && (
              <div
                className={styles.megaBackdrop}
                onClick={() => closeServicesMenu(true)}
                aria-hidden="true"
              />
            )}
            <ServicesMegaMenu
              variant="desktop"
              open={servicesOpen}
              onNavigate={closeNav}
              onMouseEnter={openServicesMenu}
              onMouseLeave={() => closeServicesMenu()}
              panelRef={servicesPanelRef}
            />
          </>,
          document.body,
        )}
      <nav
        className={`navbar navbar-expand-lg ${styles.navbar} ${
          scrolled ? styles.navbarScrolled : ""
        } ${navOpen ? styles.navbarMenuOpen : ""} ${
          servicesOpen ? styles.navbarMegaOpen : ""
        }`}
        data-theme={theme}
        onMouseLeave={() => {
          if (isDesktopNav) closeServicesMenu();
        }}
      >
      <div className="container">
        <div className={styles.mobileBar}>
          {renderBrand()}
          <div className={styles.mobileControls}>
            {themeToggleButton(styles.themeToggleBar)}
            <button
              className={`navbar-toggler ${styles.navbarToggler}`}
              type="button"
              onClick={() => {
                setNavOpen((open) => {
                  if (open) setDropdownOpen(false);
                  return !open;
                });
              }}
              aria-controls="navbarNav"
              aria-expanded={navOpen}
              aria-label="Toggle navigation"
            >
              <span
                className={`navbar-toggler-icon ${styles.togglerIcon}`}
              ></span>
            </button>
          </div>
        </div>

        <div
          className={`${styles.navOverlay} ${
            navOpen ? styles.navOverlayVisible : ""
          }`}
          onClick={closeNav}
          aria-hidden="true"
        />

        <div
          className={`navbar-collapse ${styles.navCollapse} ${
            isRTL ? styles.navSidebarRtl : styles.navSidebarLtr
          } ${navOpen ? styles.navCollapseOpen : styles.navCollapseClosed}`}
          id="navbarNav"
        >
          <div className={styles.sidebarHeader}>
            {faviconSrc ? (
              <img
                src={faviconSrc}
                alt={siteName}
                className={styles.sidebarLogo}
                loading="eager"
                decoding="async"
              />
            ) : (
              <span className={styles.sidebarTitle}>{siteName}</span>
            )}
            <button
              type="button"
              className={styles.sidebarClose}
              onClick={closeNav}
              aria-label={isRTL ? "إغلاق القائمة" : "Close menu"}
            >
              <Icon name="times" className={styles.sidebarCloseIcon} />
            </button>
          </div>

          <div className={styles.navRow}>
            <div className={styles.navBrand}>{renderBrand()}</div>

            <nav
              className={styles.navLinksSection}
              aria-label={isRTL ? "التنقل الرئيسي" : "Main navigation"}
            >
              <ul className={`navbar-nav ${styles.navLinks}`}>
                <li className="nav-item">
                  {renderNavLink("/", t("nav.home"), { end: true })}
                </li>
                <li className="nav-item">
                  {renderNavLink("/about", t("nav.about"))}
                </li>
                <li
                  className={`nav-item ${styles.servicesItem} ${
                    servicesOpen ? styles.servicesItemOpen : ""
                  }`}
                  ref={servicesTriggerRef}
                  onMouseEnter={() => {
                    if (isDesktopNav) openServicesMenu();
                  }}
                >
                  <div className={styles.servicesCluster}>
                    <NavLink
                      className={({ isActive }) =>
                        `${styles.navLink} ${styles.servicesLink} ${
                          isActive ? styles.navLinkActive : ""
                        }`
                      }
                      to="/services"
                      onClick={(event) => {
                        if (!isDesktopNav) {
                          event.preventDefault();
                          setDropdownOpen(false);
                          setServicesOpen((open) => !open);
                          return;
                        }
                        closeNav();
                        window.scrollTo(0, 0);
                      }}
                    >
                      {t("nav.services")}
                    </NavLink>
                    <button
                      type="button"
                      className={styles.servicesToggle}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      aria-controls="services-mega-menu"
                      aria-label={
                        isRTL ? "قائمة الخدمات" : "Services menu"
                      }
                      onClick={() => {
                        setDropdownOpen(false);
                        setServicesOpen((open) => !open);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "ArrowDown") {
                          event.preventDefault();
                          setDropdownOpen(false);
                          setServicesOpen(true);
                        }
                      }}
                    >
                      <Icon
                        name="chevronDown"
                        className={styles.servicesChevron}
                      />
                    </button>
                  </div>
                  {!isDesktopNav && (
                    <ServicesMegaMenu
                      variant="mobile"
                      open={servicesOpen}
                      onNavigate={closeNav}
                      panelRef={servicesPanelRef}
                    />
                  )}
                </li>
                <li className="nav-item">
                  {renderNavLink("/contact", t("nav.contact"))}
                </li>
              </ul>
            </nav>

            {renderActions()}
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
