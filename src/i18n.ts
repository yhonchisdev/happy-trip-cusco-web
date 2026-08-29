import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import esTranslations from '@/locales/es.json'
import enTranslations from '@/locales/en.json'

export type Locale = (typeof locales)[number]
export const locales = ['es', 'en'] as const
export const defaultLocale: Locale = 'en'

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: esTranslations },
    en: { translation: enTranslations },
  },
  lng: defaultLocale,
  fallbackLng: locales,
  interpolation: { escapeValue: false },
})

export default i18n
