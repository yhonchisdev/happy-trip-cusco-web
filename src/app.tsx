import { Fragment, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from './components/header'
import { Section } from './components/section'
import { Hero } from './components/hero'
import { TravelTicket } from './components/travel-ticket'
import { StoriesThatInspire } from './components/stories-that-inspire'
import { WhyChooseUs } from './components/why-choose-us'
import { TicketSupport } from './components/ticket-support'
import { Faqs } from './components/faqs'
import { Footer } from './components/footer'

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
      <Section>
        <WhyChooseUs />
      </Section>
      <Section>
        <StoriesThatInspire />
      </Section>
      <Section>
        <TicketSupport />
      </Section>
      <Section>
        <Faqs />
      </Section>
      <Footer />
    </Fragment>
  )
}
