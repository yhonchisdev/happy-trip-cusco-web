import { useTranslation } from 'react-i18next'
import { Icons } from '@/icons/icon'
import { cn } from '@/utils'
import discoverExclusiveRoutes from '@/assets/images/why-choose-us/discover-exclusive-routes.jpg'
import chooseYourOwnPace from '@/assets/images/why-choose-us/choose-your-own-pace.jpg'
import enjoyStressFree from '@/assets/images/why-choose-us/enjoy-stress-free.jpg'

export function WhyChooseUs() {
  const { t } = useTranslation()

  const steps = [
    'discover-exclusive-routes',
    'choose-your-own-pace',
    'enjoy-stress-free',
  ] as const

  const photo: Record<(typeof steps)[number], string> = {
    'discover-exclusive-routes': discoverExclusiveRoutes,
    'choose-your-own-pace': chooseYourOwnPace,
    'enjoy-stress-free': enjoyStressFree,
  }

  return (
    <div className='py-10'>
      <div className='bg-english-holly flex flex-1 flex-col gap-20 px-10 py-20 max-lg:-mx-6 lg:rounded-4xl lg:px-20'>
        <div className='mx-auto flex max-w-160 flex-col gap-4 text-center'>
          <div className='timeline-view animate-fade-in-up animate-range-[entry_5%_contain_20%]'>
            <span className='text-sea-glass text-base leading-6'>
              {t('why-choose-us.tagline')}
            </span>
          </div>
          <div className='timeline-view animate-fade-in-down animate-range-[entry_5%_contain_20%]'>
            <h2 className='text-xl leading-7 font-semibold text-white md:text-[42px] md:leading-14 md:font-black'>
              {t('why-choose-us.title')}
            </h2>
          </div>
        </div>
        <div className='flex gap-6 max-lg:-mx-10 max-lg:snap-x max-lg:snap-mandatory max-lg:scrollbar-none max-lg:overflow-x-auto max-lg:scroll-smooth max-lg:px-10 lg:grid lg:grid-cols-3'>
          {steps.map((step) => {
            return (
              <div
                key={step}
                className='max-lg:w-slide-feature-lg max-md:w-slide-feature-md max-lg:shrink-0 max-lg:snap-start max-lg:scroll-mx-6'
              >
                <div className='timeline-view animate-blink animate-range-[entry_5%_contain_20%]'>
                  <div className='flex flex-col items-center gap-6'>
                    <div className='relative'>
                      <img
                        className={cn(
                          'size-40 -rotate-6 rounded-[20px] object-cover',
                          {
                            'rotate-4': step !== 'discover-exclusive-routes',
                          },
                        )}
                        src={photo[step]}
                        alt={t(`why-choose-us.${step}.title`)}
                        loading='lazy'
                      />
                      {step !== 'enjoy-stress-free' && (
                        <div
                          className={cn(
                            'absolute top-7.25 -left-9.5 -rotate-24',
                            {
                              'top-12 -rotate-15':
                                step === 'choose-your-own-pace',
                            },
                          )}
                        >
                          <div
                            className={cn(
                              'bg-xanadu flex items-center justify-center rounded-full px-2.5 py-1.5',
                              {
                                'gap-0.75 rounded-lg bg-white py-1.75':
                                  step === 'choose-your-own-pace',
                              },
                            )}
                          >
                            <span
                              className={cn(
                                'text-[10px] leading-3 font-extrabold text-white',
                                {
                                  'text-english-holly text-xs leading-4':
                                    step === 'choose-your-own-pace',
                                },
                              )}
                            >
                              {t(`why-choose-us.${step}.badge`)}
                            </span>
                            {step === 'choose-your-own-pace' && (
                              <Icons.ArrowUp className='text-malachite size-4' />
                            )}
                          </div>
                        </div>
                      )}
                      {step === 'discover-exclusive-routes' && (
                        <div className='absolute -right-5.25 bottom-7 rotate-6'>
                          <div className='flex items-center gap-0.75 rounded-lg bg-white px-2 py-1'>
                            <span className='text-xs leading-4 font-extrabold'>
                              5
                            </span>
                            <Icons.Star className='text-australia-green size-2.5' />
                          </div>
                        </div>
                      )}
                      {step === 'enjoy-stress-free' && (
                        <div className='absolute top-23.75 -right-5 rotate-17'>
                          <div className='relative flex items-center justify-center'>
                            <Icons.Coupon className='text-malachite h-9.5 w-15.75' />
                            <Icons.Check className='absolute size-6 text-white' />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                      <h4 className='text-xl leading-7.5 font-bold text-white'>
                        {t(`why-choose-us.${step}.title`)}
                      </h4>
                      <span className='text-sea-glass text-sm leading-5.25'>
                        {t(`why-choose-us.${step}.description`)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
