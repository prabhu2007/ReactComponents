import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';

/**
 * react-intl config
 */
addLocaleData(en);
addLocaleData(de);

/*
 * Intializes the i18next config.=
 * @returns {*}
 */
export const initialiseI18n = () => {
  const publicPath = __PUBLIC_PATH__;
  return i18n
    .use(XHR)
    .use(LanguageDetector)
    .init({
      lng: localStorage.getItem('i18nextLng') || 'de',
      fallbackLng: 'de',
      backend: {
        loadPath: publicPath ?
          `${publicPath}resources/locales/{{lng}}/{{ns}}.json` :
          '/resources/locales/{{lng}}/{{ns}}.json',
      },
      // TODO: We should be able to set namespaces dynamically
      ns: __I18N_NS__,
      fallbackNS: __I18N_NS__,
      defaultNS: 'Dashboard',
      detection: {
        order: ['localStorage', 'navigator'],
        lookupQuerystring: 'lng',
        lookupLocalStorage: 'i18nextLng',
        caches: ['localStorage'],
      },
      bindStore: 'added removed',
    });
};
