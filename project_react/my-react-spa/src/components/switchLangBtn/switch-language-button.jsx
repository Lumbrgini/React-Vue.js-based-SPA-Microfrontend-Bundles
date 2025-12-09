import React, { useState } from "react"
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import "./switch-language-button.css";

export function SwitchLanguageButton() {

    const { t } = useTranslation();

    const [language, setLanguage] = useState(t.lang || 'de');

    const toggleLang = () =>{
        const newLang = language === 'de'? 'en' : 'de';
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    }

    
    return(
        <button onClick={toggleLang} className="switchBtn">
            {language == 'de'? 'EN': 'DE'}
        </button>
    );
};

