import i18next from 'i18next';

import common_de from "./de.json";
import common_en from "./en.json";

i18next.init({
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      translation: common_en
    },
    de: {
      translation: common_de
    },
},
});


export default i18next;