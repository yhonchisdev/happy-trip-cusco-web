import { Icons } from '@/icons/icon'
import { useTranslation } from 'react-i18next'
import { Button } from './button'

const stars = Array.from({ length: 5 }, (_, index) => index + 1)
const steps = [1, 2, 3] as const

export function QuoteMyTrip() {
  const { t } = useTranslation()

  const handleQuote = () => {
    const encodedMessage = encodeURIComponent(
      t('quote-my-trip.whatsapp-message'),
    )
    const whatsappUrl = `https://wa.me/+51945054242?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='py-10'>
      <div className='bg-malachite flex flex-col rounded-4xl lg:flex-row'>
        <div className='relative max-w-160 p-8 pb-12 lg:p-12 lg:pr-6'>
          <div className='absolute max-lg:bottom-0 max-lg:left-0 max-lg:-translate-x-2/4 lg:top-0 lg:right-0 lg:-translate-y-2/4'>
            <div className='size-12 rounded-full bg-white' />
          </div>
          <div className='absolute right-0 bottom-0 max-lg:translate-x-2/4 lg:translate-y-2/4'>
            <div className='size-12 rounded-full bg-white' />
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-1'>
              {stars.map((star) => {
                return (
                  <div
                    key={star}
                    className='timeline-view animate-jelly animate-range-[entry_5%_contain_20%]'
                  >
                    <Icons.Star className='text-australia-green size-5.5' />
                  </div>
                )
              })}
            </div>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col'>
                  <div className='timeline-view animate-fade-in-left animate-range-[entry_5%_contain_20%]'>
                    <span className='text-[36px] leading-10 font-black text-white md:text-[48px] md:leading-14'>
                      {t('quote-my-trip.title')}
                    </span>
                  </div>
                  <div className='timeline-view animate-fade-in-right animate-range-[entry_5%_contain_20%]'>
                    <span className='text-[36px] leading-10 font-black md:text-[48px] md:leading-14'>
                      {t('quote-my-trip.subtitle')}
                    </span>
                  </div>
                </div>
                <div className='timeline-view animate-fade-in-down animate-range-[entry_5%_contain_20%]'>
                  <span className='text-lunar-green text-base leading-6'>
                    {t('quote-my-trip.description')}
                  </span>
                </div>
              </div>
              <div className='timeline-view animate-fade-in-up animate-range-[entry_5%_contain_20%]'>
                <div className='w-full drop-shadow-lg lg:w-fit'>
                  <Button variant='third' onClick={handleQuote}>
                    {t('quote-my-trip.button-label')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='bg-english-holly flex size-full items-center justify-center rounded-4xl p-6 lg:p-12'>
            <div className='relative flex flex-col gap-12'>
              <div className='timeline-view animate-slide-up-fade animate-range-[entry_5%_contain_20%] absolute size-full'>
                <div className='bg-malachite absolute top-8 bottom-8 left-6 w-3.25' />
              </div>
              {steps.map((step) => {
                return (
                  <div
                    key={step}
                    className='timeline-view animate-slide-up-fade animate-range-[entry_5%_contain_20%]'
                  >
                    <div className='relative flex items-center gap-2'>
                      <div className='bg-malachite flex size-15.5 items-center justify-center rounded-full border-3 border-white'>
                        <span className='text-base leading-6 font-bold md:text-xl md:leading-7.5'>
                          {String(step).padStart(2, '0')}.
                        </span>
                      </div>
                      <div className='flex-1'>
                        <span className='text-base leading-6 font-bold text-white md:text-xl md:leading-7.5'>
                          {t(`quote-my-trip.steps.${step}`)}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
