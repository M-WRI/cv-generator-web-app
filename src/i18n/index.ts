import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import moment from "moment";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "de",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
      skipOnVariables: true,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

moment.locale(i18n.language);

i18n.on("languageChanged", (lng) => {
  moment.locale(lng);
});

export default i18n;
