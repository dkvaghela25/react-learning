import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translation files (e.g., from /public/locales)
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Bind i18next to React
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to JSON files
    }
  });

export default i18n;
