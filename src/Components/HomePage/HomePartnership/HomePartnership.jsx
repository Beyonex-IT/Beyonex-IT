import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useIntersectionReveal } from "../../../hooks/useIntersectionReveal";
import Icon from "../../Common/Icon.jsx";
import styles from "./HomePartnership.module.css";

export default function HomePartnership() {
  const { t } = useTranslation();
  const { isVisible, sectionRef } = useIntersectionReveal({
    threshold: 0.12,
    once: true,
  });

  const proofs = useMemo(
    () => [
      t("homePage.partnership.proof1"),
      t("homePage.partnership.proof2"),
      t("homePage.partnership.proof3"),
    ],
    [t],
  );

  return (
    <section
      id="partnership"
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      aria-labelledby="partnership-title"
    >
      <div className={styles.ambience} aria-hidden="true">
        <span className={styles.glowStart} />
        <span className={styles.glowEnd} />
        <span className={styles.grid} />
      </div>

      <div className="container">
        <div className={styles.stage}>
          <div className={styles.copy}>
            <h2 id="partnership-title" className={styles.kicker}>
              <span className={styles.kickerLine} aria-hidden="true" />
              {t("homePage.partnership.kicker")}
              <span className={styles.kickerLine} aria-hidden="true" />
            </h2>

            <div className={styles.lockup}>
              <img
                src="/bg-sections/download.svg"
                alt={t("homePage.partnership.alembaLogoAlt")}
                className={styles.alembaLogo}
                width={263}
                height={59}
              />
              <span className={styles.badge}>{t("homePage.partnership.badge")}</span>
            </div>

            <p className={styles.lede}>{t("homePage.partnership.lede")}</p>

            <ul className={styles.proofs} aria-label={t("homePage.partnership.proofLabel")}>
              {proofs.map((item) => (
                <li key={item} className={styles.proof}>
                  <Icon name="checkCircle" className={styles.proofIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Link to="/services/itsm" className={styles.primaryBtn}>
                <span>{t("homePage.partnership.ctaPrimary")}</span>
                <Icon name="arrowRight" className={styles.btnIcon} />
              </Link>
              <Link to="/contact" className={styles.secondaryBtn}>
                <span>{t("homePage.partnership.ctaSecondary")}</span>
              </Link>
            </div>
          </div>

          <figure className={styles.visual}>
            <div className={styles.visualFrame}>
              <img
                src="/bg-sections/partnership-hero.png"
                alt={t("homePage.partnership.visualAlt")}
                className={styles.visualImage}
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
