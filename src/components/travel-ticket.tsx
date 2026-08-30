import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icons } from '@/icons/icon'
import { cn } from '@/utils'
import getaway from '@/assets/images/travel-ticket/getaway.jpg'
import itinerary from '@/assets/images/travel-ticket/itinerary.jpg'
import excursion from '@/assets/images/travel-ticket/excursion.jpg'
import destination from '@/assets/images/travel-ticket/destination.jpg'

export function TravelTicket() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState<number>(0)

  const steps = [
    t('services.getaway'),
    t('services.itinerary'),
    t('services.excursion'),
    t('services.destination'),
  ]
  const photos = [getaway, itinerary, excursion, destination]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className='px-10 py-5'>
      <div className='animate-sway relative rotate-6'>
        <Icons.Ticket className='text-malachite w-60 lg:w-80' />
        <div className='absolute top-1 right-1 left-1 -z-1 h-58 overflow-hidden lg:top-1.5 lg:right-1.5 lg:left-1.5 lg:h-77'>
          {photos.map((photo, index) => {
            return (
              <img
                key={index}
                style={{
                  transform: `translateX(${(index - current) * 100}%)`,
                }}
                className='absolute size-full object-cover transition-transform duration-500'
                src={photo}
                alt={steps[index]}
                loading='lazy'
              />
            )
          })}
        </div>
        <div className='absolute top-66 left-6 flex items-center gap-1 lg:top-90 lg:left-8'>
          <Icons.Star className='text-australia-green size-5 lg:size-6' />
          <Icons.Star className='text-australia-green size-5 lg:size-6' />
          <Icons.Star className='text-australia-green size-5 lg:size-6' />
          <Icons.Star className='text-australia-green size-5 lg:size-6' />
          <Icons.Star className='text-australia-green size-5 lg:size-6' />
        </div>
        <div className='absolute top-73 right-6 left-6 flex gap-1.75 overflow-hidden lg:top-100 lg:right-8 lg:left-8'>
          <span className='text-xl leading-6 font-black lg:text-2xl lg:leading-7'>
            {t('services.label')}
          </span>
          <div className='flex flex-col'>
            {steps.map((step, index) => {
              return (
                <span
                  key={index}
                  style={{
                    transform: `translateY(${(index - current) * 100}%)`,
                  }}
                  className={cn(
                    'absolute text-xl leading-6 font-black text-white opacity-0 transition-all duration-500 lg:text-2xl lg:leading-7',
                    {
                      'opacity-100': index === current,
                    },
                  )}
                >
                  {step}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
