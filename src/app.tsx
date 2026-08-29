import { Fragment, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from './components/header'
import { Section } from './components/section'
import { Hero } from './components/hero'
import { TravelTicket } from './components/travel-ticket'

export function App() {
  const { t, i18n } = useTranslation()

  useLayoutEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <Fragment>
      <title>{t('seo.title')}</title>
      <meta name='description' content={t('seo.description')} />
      <meta name='keywords' content={t('seo.keywords')} />
      <Header />
      <Section>
        <div className='flex flex-col-reverse items-center justify-between gap-6 py-8 lg:flex-row'>
          <Hero />
          <TravelTicket />
        </div>
      </Section>
    </Fragment>
  )
}
