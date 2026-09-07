import type { Locale } from 'use-intl'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LocaleState {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: 'es',
      setLocale: (value) => set({ locale: value }),
    }),
    {
      name: 'LOCALE',
    },
  ),
)
