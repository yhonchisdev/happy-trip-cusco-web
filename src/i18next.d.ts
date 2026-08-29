import 'i18next'
import esTranslations from './locales/es.json'
import { Locale } from './i18n'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: typeof esTranslations
    }
  }

  interface i18n {
    language: Locale
    languages: Locale[]
  }
}
