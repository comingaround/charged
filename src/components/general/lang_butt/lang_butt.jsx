import "./lang_butt.css";
import { useTranslation } from 'react-i18next';


function Lang_butt() {
    const { t, i18n } = useTranslation();
    const languages = [
      { code: "en", name: "English" },
      { code: "lv", name: "Latviešu" },
    ];
    const getCurrentLanguageName = () => {
      const currentLanguage = languages.find(lang => lang.code === i18n.language);
      return currentLanguage ? currentLanguage.name : "Unknown Language";
    };

    return(
        <>
        <div className="lang_section">
            <h6>{getCurrentLanguageName()}</h6>
            <div className="lang_buttons">
            {languages.map((language) => (
                <button
                onClick={() => i18n.changeLanguage(language.code)}
                key={language.code}
                >
                {language.name}
                </button>
            ))}
            </div>
        </div>
        </>
    );
}

export default Lang_butt;