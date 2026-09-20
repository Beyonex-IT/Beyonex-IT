import { useTranslation } from "react-i18next";
import { useLocale } from "../../../hooks/useLocale";
import { useSettings } from "../../../hooks/useSettings";
import { useIntersectionReveal } from "../../../hooks/useIntersectionReveal";
import headerStyles from "../../Services/OurService/OurService.module.css";
import ServiceCatalog from "./ServiceCatalog.jsx";
import styles from "./HomeServices.module.css";

export default function HomeServices() {
  const { t } = useTranslation();
  const { lang } = useLocale();
  const { settings } = useSettings();
  const { isVisible, sectionRef } = useIntersectionReveal({
    threshold: 0.12,
    once: true,
  });

  const serviceText =
    settings?.service_text?.[lang] || settings?.service_text || "";
  const textParts = serviceText ? serviceText.split(/\r?\n\r?\n/) : [];
  const subtitle = textParts[0] || t("services.subtitle");
  const description = textParts[1] || t("services.description");

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`${headerStyles.servicesSection} ${headerStyles.homeLayout} ${styles.section}`}
    >
      <div className="container">
        <header className={`${styles.header} ${isVisible ? styles.headerIn : ""}`}>
          <p className={styles.kicker}>
            <span className={styles.kickerLine} aria-hidden="true" />
            {t("services.title")}
            <span className={styles.kickerLine} aria-hidden="true" />
          </p>
          <h2 className={styles.headline}>{subtitle}</h2>
          <span className={styles.accent} aria-hidden="true" />
          {description ? <p className={styles.lede}>{description}</p> : null}
        </header>

        <ServiceCatalog isVisible={isVisible} />
      </div>
    </section>
  );
}
