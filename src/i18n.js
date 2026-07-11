import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptTranslation from './locales/pt.json';
import enTranslation from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: ptTranslation },
    en: { translation: enTranslation },
  },
  lng: 'pt', //default lang
  fallbackLng: 'pt', //lang for when something is wrong
  interpolation: {
    escapeValue: false, //react does by default
  },
});

export default i18n;