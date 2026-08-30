import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Icons } from '@/icons/icon'
import { cn } from '@/utils'
import { useDisclosure } from '@/hooks/use-disclosure'
import { Section } from './section'
import { Button } from './button'

export function Header() {
  const { t, i18n } = useTranslation()
  const disclosure = useDisclosure()

  const handleLanguage = (value: string) => () => {
    i18n.changeLanguage(value)
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
          {i18n.language.toUpperCase()}
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
                  {t('language-title')}
                </span>
                <button
                  onClick={disclosure.onClose}
                  className='hover:bg-beautiful-white active:bg-sea-glass flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-200'
                >
                  <Icons.Close className='size-4' />
                </button>
              </div>
              <div className='flex flex-col gap-2'>
                {i18n.languages.map((language) => {
                  return (
                    <LanguageButton
                      key={language}
                      active={i18n.language === language}
                      onClick={handleLanguage(language)}
                    >
                      {t(`language.${language}`)}
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
