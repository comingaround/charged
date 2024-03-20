import "./lang_butt.css";
import { useTranslation } from 'react-i18next';

function Lang_butt() {
    const { i18n } = useTranslation();
    const languages = [
      { code: "en", name: "English" },
      { code: "lv", name: "Latviešu" },
    ];

    const switchLanguage = () => {
        let currentIndex = languages.findIndex(lang => lang.code === i18n.language);
        let nextIndex = (currentIndex + 1) % languages.length;
        i18n.changeLanguage(languages[nextIndex].code);
    };

    const getNextLanguageName = () => {
        let currentIndex = languages.findIndex(lang => lang.code === i18n.language);
        let nextIndex = (currentIndex + 1) % languages.length;
        return languages[nextIndex].name;
    };

    return(
        <>
        <div className="lang_section" onClick={switchLanguage}>
            <h6>&rarr; {getNextLanguageName()}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path></svg>
            </h6>
        </div>
        </>
    );
}

export default Lang_butt;
