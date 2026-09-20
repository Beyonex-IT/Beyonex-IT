import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import AboutHero from "../../Components/AboutPage/AboutHero/AboutHero";
import AboutStory from "../../Components/AboutPage/AboutStory/AboutStory";
import AboutStats from "../../Components/AboutPage/AboutStats/AboutStats";
import AboutValues from "../../Components/AboutPage/AboutValues/AboutValues";
import AboutCTA from "../../Components/AboutPage/AboutCTA/AboutCTA";
import HomePartnership from "../../Components/HomePage/HomePartnership/HomePartnership";
import SectionLoader from "../../Components/Layout/SectionLoader/SectionLoader";
import { useIntersectionReveal } from "../../hooks/useIntersectionReveal";
import { useAboutTeam } from "../../hooks/useAboutTeam";
import { useAboutData } from "../../hooks/useAboutData";
import { usePageTitle } from "../../hooks/usePageTitle";
import styles from "./About.module.css";

const Team = lazy(() => import("../../Components/AboutPage/Team/Team"));
const SuccessPartners = lazy(() =>
  import("../../Components/HomePage/SuccessPartners/SuccessPartners"),
);

function AboutPartnersBand() {
  const { isVisible, sectionRef } = useIntersectionReveal({
    threshold: 0.12,
    once: true,
  });

  return (
    <div ref={sectionRef} className={styles.aboutPartners}>
      <SuccessPartners embedded variant="home" isVisible={isVisible} />
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
  const {
    showTeamSection,
    teamMembersSignature,
    activeTeamMembers,
    lang,
  } = useAboutTeam();
  const { showAchievementsSection } = useAboutData();

  usePageTitle(t("nav.about"));

  return (
    <div className={styles.aboutPage}>
      <div className={styles.pageContent}>
        <div className={styles.aboutHero}>
          <AboutHero />
        </div>

        <div className={styles.aboutStory}>
          <AboutStory />
        </div>

        {showAchievementsSection && (
          <div className={styles.aboutStats}>
            <AboutStats />
          </div>
        )}

        <div className={styles.aboutValues}>
          <AboutValues />
        </div>

        {showTeamSection && (
          <div className={styles.aboutTeam}>
            <Suspense fallback={<SectionLoader />}>
              <Team
                key={teamMembersSignature}
                lang={lang}
                activeTeamMembers={activeTeamMembers}
                teamMembersSignature={teamMembersSignature}
              />
            </Suspense>
          </div>
        )}

        <div className={styles.aboutPartnership}>
          <HomePartnership />
        </div>

        <Suspense fallback={<SectionLoader />}>
          <AboutPartnersBand />
        </Suspense>

        <div className={styles.aboutCta}>
          <AboutCTA />
        </div>
      </div>
    </div>
  );
}
