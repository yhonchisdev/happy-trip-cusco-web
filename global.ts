import 'use-intl'
import translations from './translations/es.json'
import { locales } from './src/i18n/config'

declare module 'use-intl' {
  interface AppConfig {
    Locale: (typeof locales)[number]
    Messages: typeof translations
  }
}
