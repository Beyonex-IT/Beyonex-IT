import { Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./AboutUS.module.css";
import { useHomeData } from "../../../hooks/useHomeData";
import { useLocale } from "../../../hooks/useLocale";
import { getLocalizedOrRaw } from "../../../utils/i18nHelpers";
import { useIntersectionReveal } from "../../../hooks/useIntersectionReveal";
import Icon from "../../Common/Icon.jsx";
import SectionHeader from "../../Common/SectionHeader/SectionHeader.jsx";

const glyphStroke = {
  stroke: "currentColor",
  strokeWidth: 1.85,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function PillarGlyph({ id }) {
  if (id === "vision") {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          d="M8 32c6.5-12 14.8-18.5 24-18.5S49.5 20 56 32c-6.5 12-14.8 18.5-24 18.5S14.5 44 8 32Z"
          {...glyphStroke}
        />
        <circle cx="32" cy="32" r="8.5" {...glyphStroke} />
        <circle cx="32" cy="32" r="2.4" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M32 8c7.5 9.5 10 20 10 28.5 0 6.2-4.4 10.5-10 10.5s-10-4.3-10-10.5C22 28 24.5 17.5 32 8Z"
        {...glyphStroke}
      />
      <circle cx="32" cy="27" r="3.2" {...glyphStroke} />
      <path d="M24.2 38.5 18 50.5 26.5 46.2M39.8 38.5 46 50.5 37.5 46.2" {...glyphStroke} />
      <path d="M29 47.5v6.5M35 47.5v6.5" {...glyphStroke} />
    </svg>
  );
}

export default function AboutUS({ variant }) {
  const isHome = variant === "home";
  const { t } = useTranslation();
  const { lang } = useLocale();
  const { about } = useHomeData();
  const { isVisible, sectionRef } = useIntersectionReveal({
    threshold: 0.12,
    once: true,
  });

  const description =
    getLocalizedOrRaw(about?.text, lang) || t("about.description");

  const pillars = useMemo(
    () => [
      {
        id: "mission",
        title: t("about.mission"),
        text:
          getLocalizedOrRaw(about?.mission, lang) || t("about.missionText"),
      },
      {
        id: "vision",
        title: t("about.vision"),
        text: getLocalizedOrRaw(about?.vision, lang) || t("about.visionText"),
      },
    ],
    [about, lang, t],
  );

  return (
    <section
      ref={sectionRef}
      className={`${styles.aboutSection} ${isHome ? styles.homeLayout : ""}`}
      id="about"
    >
      <div className={styles.backgroundImage}>
        <div className={styles.overlay} />
        <div className={styles.colorGrade} aria-hidden="true" />
        <div className={styles.gridPattern} aria-hidden="true" />
        <div className={styles.noiseOverlay} aria-hidden="true" />
      </div>

      <div className={styles.topGlow} aria-hidden="true" />

      <div className="container">
        {isHome ? (
          <header
            className={`${styles.homeIntro} ${isVisible ? styles.homeIntroIn : ""}`}
          >
            <p className={styles.homeKicker}>
              <span className={styles.homeKickerLine} aria-hidden="true" />
              {t("about.title")}
              <span className={styles.homeKickerLine} aria-hidden="true" />
            </p>
            <h2 className={styles.homeHeadline}>{t("about.subtitle")}</h2>
            <span className={styles.homeAccent} aria-hidden="true" />
            {description ? (
              <p className={styles.homeLede}>{description}</p>
            ) : null}
          </header>
        ) : (
          <SectionHeader
            isHome={false}
            showEyebrow
            showAccent
            eyebrow={t("nav.about")}
            title={t("about.title")}
            accentSize="md"
            subtitle={t("about.subtitle")}
            subtitleAs="h3"
            description={description}
            isVisible={isVisible}
            moduleStyles={styles}
          />
        )}

        <div
          className={`${styles.pillarsPanel} ${isVisible ? styles.visible : ""}`}
        >
          {pillars.map((pillar, index) => (
            <Fragment key={pillar.id}>
              {!isHome && index > 0 && (
                <div className={styles.pillarsDivider} aria-hidden="true">
                  <span className={styles.dividerRing} />
                  <span className={styles.dividerGem} />
                </div>
              )}
              <article
                className={styles.pillarCard}
                style={{ "--delay": `${index * 0.12}s` }}
              >
                <div className={styles.pillarHead}>
                  <span className={styles.pillarGlyph} aria-hidden="true">
                    <PillarGlyph id={pillar.id} />
                  </span>
                  <div className={styles.pillarTitleWrap}>
                    <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                  </div>
                </div>
                <p className={styles.pillarText}>{pillar.text}</p>
              </article>
            </Fragment>
          ))}
        </div>

        <div className={`${styles.ctaWrap} ${isVisible ? styles.visible : ""}`}>
          <Link to="/about" className={styles.aboutBtn}>
            <span className={styles.aboutBtnInner}>
              <span>{t("about.readMore")}</span>
              <Icon name="arrowRight" className={styles.aboutBtnIcon} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
