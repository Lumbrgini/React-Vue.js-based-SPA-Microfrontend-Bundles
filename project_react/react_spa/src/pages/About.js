import React from "react";
import { useTranslation } from 'react-i18next';
import "../page-styles/About.css"

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <h2 className="about-title">{t('about.p-title')}</h2>

      <div className="about-grid">

        <div className="about-card">
          <h3>{t('about.card1-title')}</h3>
          <p>{t('about.p-about')}</p>
        </div>

        <div className="about-card">
          <h3>{t('about.card2-title')}</h3>
          <p>{t('about.p-discover')}</p>
        </div>

        <div className="about-card">
          <h3>{t('about.card3-title')}</h3>
          <p>{t('about.p-services')}</p>
        </div>

        <div className="about-card">
          <h3>{t('about.card4-title')}</h3>
          <p>{t('about.p-extra')}</p>
        </div>

      </div>
    </div>
  );
};

export default About;
