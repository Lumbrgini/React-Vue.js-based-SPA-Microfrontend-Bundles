import React from "react";
import { useTranslation } from 'react-i18next';
import { SwitchLanguageButton } from "../components/switchLangBtn/switch-language-button";

const About = () => {
     const { t } = useTranslation();
    return (
        <div>
            <h2>{t('about.p-title')}</h2>
        </div>
    );
};

export default About;