import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./OurService.module.css";
import { useLocale } from "../../../hooks/useLocale";
import { useSettings } from "../../../hooks/useSettings";
import ServiceCatalog from "../../HomePage/HomeServices/ServiceCatalog.jsx";

export default function OurService() {
  const { t } = useTranslation();
  const { lang } = useLocale();
  const location = useLocation();
  const { settings } = useSettings();

  const serviceText =
    settings?.service_text?.[lang] || settings?.service_text || "";
  const textParts = serviceText ? serviceText.split(/\r?\n\r?\n/) : [];
  const subtitle = textParts[0] || t("services.subtitle");
  const description = textParts[1] || t("services.description");

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return undefined;

    const frame = window.requestAnimationFrame(() => {
      const target =
        document.getElementById(id) || document.getElementById("services");
      target?.scrollIntoView({
        behavior: "smooth",
        block: id === "services" ? "start" : "center",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <section
      id="services"
      className={`${styles.servicesSection} ${styles.fullPage} ${styles.homeLayout}`}
    >
      <div className={styles.pageHero} data-services-hero>
        <div className={`container ${styles.pageHeroInner}`}>
          <header className={`${styles.pageIntro} ${styles.pageIntroIn}`}>
            <p className={styles.pageKicker}>
              <span className={styles.pageKickerLine} aria-hidden="true" />
              {t("services.title")}
              <span className={styles.pageKickerLine} aria-hidden="true" />
            </p>
            <h1 className={styles.pageHeadline}>{subtitle}</h1>
            <span className={styles.pageAccent} aria-hidden="true" />
            {description ? <p className={styles.pageLede}>{description}</p> : null}
          </header>
        </div>
      </div>

      <div className={`container ${styles.pageBody}`} data-services-body>
        <ServiceCatalog expanded isVisible />
      </div>
    </section>
  );
}
