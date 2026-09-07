import { Fragment, useLayoutEffect } from 'react'
import { useLocale, useTranslations } from 'use-intl'
import { Header } from './components/header'
import { Section } from './components/section'
import { Hero } from './components/hero'
import { TravelTicket } from './components/travel-ticket'
import { WhyChooseUs } from './components/why-choose-us'
import { TopTours } from './components/top-tours'
import { AboutUs } from './components/about-us'
import { QuoteMyTrip } from './components/quote-my-trip'
import { StoriesThatInspire } from './components/stories-that-inspire'
import { FrequentlyAskedQuestions } from './components/frequently-asked-questions'
import { Footer } from './components/footer'

export function App() {
  const locale = useLocale()
  const t = useTranslations('Seo')

  useLayoutEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <Fragment>
      <title>{t('title')}</title>
      <meta name='description' content={t('description')} />
      <meta name='keywords' content={t('keywords')} />
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
        <TopTours />
      </Section>
      <Section>
        <AboutUs />
      </Section>
      <Section>
        <QuoteMyTrip />
      </Section>
      <Section>
        <StoriesThatInspire />
      </Section>
      <Section>
        <FrequentlyAskedQuestions />
      </Section>
      <Footer />
    </Fragment>
  )
}
