import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "../locales/en.json";
import ar from "../locales/ar.json";
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations (directly in the file for simplicity)
const resources = {
    en: {
        translation: en
    },
    ar: {
        translation: ar
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Default language
        fallbackLng: 'en', // Fallback if translation missing
        interpolation: {
            escapeValue: false // Safe for React (no XSS risk)
        }
    });

export default i18n;