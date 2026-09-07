import { useEffect, useState, useTransition } from 'react'
import { hasLocale, type Messages } from 'use-intl'
import { useLocaleStore } from '@/store/locale'
import { locales, defaultLocale } from './config'

export function useRequestConfig() {
  const localeStore = useLocaleStore()

  const locale = hasLocale(locales, localeStore.locale)
    ? localeStore.locale
    : defaultLocale

  const [isPending, startTransition] = useTransition()
  const [messages, setMessages] = useState<Messages | null>(null)

  useEffect(() => {
    startTransition(async () => {
      const translations = await import(`../../translations/${locale}.json`)
      setMessages(translations.default)
    })
  }, [locale])

  return {
    locale,
    messages,
    isPending,
  }
}
