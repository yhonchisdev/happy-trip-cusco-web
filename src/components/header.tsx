import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { useTranslations, type Locale } from 'use-intl'
import { Icons } from '@/icons/icon'
import { locales } from '@/i18n/config'
import { cn } from '@/utils'
import { useLocaleStore } from '@/store/locale'
import { useDisclosure } from '@/hooks/use-disclosure'
import { Section } from './section'
import { Button } from './button'

export function Header() {
  const t = useTranslations('Header')
  const localeStore = useLocaleStore()
  const disclosure = useDisclosure()

  const handleLanguage = (value: Locale) => () => {
    localeStore.setLocale(value)
    disclosure.onClose()
  }

  return (
    <Section>
      <header className='flex items-center justify-between gap-4 py-4'>
        <Icons.Wordmark className='h-12.5 w-auto' />
        <Button
          variant='outline'
          widthFit
          icon='Language'
          onClick={disclosure.onOpen}
        >
          {localeStore.locale.toUpperCase()}
        </Button>
      </header>
      {disclosure.isOpen &&
        createPortal(
          <div className='fixed inset-0 flex items-center justify-center'>
            <div
              onClick={disclosure.onClose}
              className='absolute inset-0 backdrop-blur-sm'
            />
            <div className='animate-fade-in-up relative flex w-full max-w-85 flex-col gap-6 rounded-2xl bg-white px-6 py-8 shadow-xl'>
              <div className='flex items-center justify-between gap-4'>
                <span className='text-lg leading-7 font-bold'>
                  {t('language.title')}
                </span>
                <button
                  onClick={disclosure.onClose}
                  className='hover:bg-beautiful-white active:bg-sea-glass flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-200'
                >
                  <Icons.Close className='size-4' />
                </button>
              </div>
              <div className='flex flex-col gap-2'>
                {locales.map((locale) => {
                  return (
                    <LanguageButton
                      key={locale}
                      active={locale === localeStore.locale}
                      onClick={handleLanguage(locale)}
                    >
                      {t(`language.${locale}`)}
                    </LanguageButton>
                  )
                })}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </Section>
  )
}

interface Props {
  active?: boolean
  onClick?: () => void
}

export function LanguageButton({
  active,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'border-sea-glass hover:border-english-holly flex cursor-pointer items-center justify-between gap-4 rounded-xl border px-4 py-3 transition-colors duration-200',
        {
          'bg-english-holly border-english-holly text-white': active,
        },
      )}
    >
      <span className='text-sm leading-4.5'>{children}</span>
      {active && <Icons.Check className='size-5' />}
    </button>
  )
}
