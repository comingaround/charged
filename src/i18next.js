import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en/translation.json";
import lv from "./i18n/lv/translation.json";

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      lv: {
        translation: lv,
      },
    },
  });

export default i18n;