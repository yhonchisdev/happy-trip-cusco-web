import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Icons } from '@/icons/icon'
import machuPicchuFullDay from '@/assets/images/tours/machu-picchu-full-day.jpg'
import sacredValleMachuPicchu from '@/assets/images/tours/sacred-valley-machu-picchu.jpg'
import raimbowMountainFullDay from '@/assets/images/tours/raimbow-mountain-full-day.jpg'
import humantayLake from '@/assets/images/tours/humantay-lake.jpg'
import { Button } from './button'

const tours = [1, 2, 3, 4] as const

type Tour = (typeof tours)[number]

const photo: Record<Tour, string> = {
  '1': machuPicchuFullDay,
  '2': sacredValleMachuPicchu,
  '3': raimbowMountainFullDay,
  '4': humantayLake,
}

export function TopTours() {
  const { t } = useTranslation()
  const [tour, setTour] = useState<Tour | null>(null)

  useEffect(() => {
    if (tour !== null) {
      document.body.classList.add('overflow-hidden', 'touch-none')
    }
    return () => {
      const dialogs = document.querySelectorAll('[role="dialog"]')
      if (dialogs.length === 0) {
        document.body.classList.remove('overflow-hidden', 'touch-none')
      }
    }
  }, [tour])

  const handleTour = (value: Tour) => () => {
    setTour(value)
  }

  const handleClose = () => {
    setTour(null)
  }

  const handleBook = () => {
    if (!tour) return
    const encodedMessage = encodeURIComponent(
      t('top-tours.whatsapp-message', {
        name: t(`top-tours.tours.${tour}.title`),
        duration: t(`top-tours.tours.${tour}.duration`),
        price: `$${t(`top-tours.tours.${tour}.price`)} USD`,
      }),
    )
    const whatsappUrl = `https://wa.me/+51945054242?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div data-navitation='top-tours' className='flex flex-col gap-8 py-10'>
      <div className='flex max-w-120 flex-col gap-3'>
        <div className='timeline-view animate-fade-in-right animate-range-[entry_5%_contain_20%]'>
          <div className='flex items-center gap-2'>
            <div className='bg-simple-green h-0.5 w-8' />
            <span className='text-simple-green text-[10px] leading-3 font-bold tracking-[4px]'>
              {t('top-tours.badge')}
            </span>
          </div>
        </div>
        <div className='timeline-view animate-fade-in-left animate-range-[entry_5%_contain_20%]'>
          <h1 className='text-4xl leading-11 font-bold lg:text-5xl lg:leading-14'>
            {t('top-tours.title')}
          </h1>
        </div>
        <div className='timeline-view animate-fade-in-up animate-range-[entry_5%_contain_20%]'>
          <span className='text-xanadu text-sm leading-4.5'>
            {t('top-tours.description')}
          </span>
        </div>
      </div>
      <div className='flex gap-4 max-lg:-mx-6 max-lg:snap-x max-lg:snap-mandatory max-lg:scrollbar-none max-lg:overflow-x-auto max-lg:scroll-smooth max-lg:px-6 max-lg:py-4 lg:grid lg:grid-cols-4'>
        {tours.map((tour) => {
          return (
            <div
              key={tour}
              className='max-lg:w-slide-card-lg max-md:w-slide-card-md max-lg:shrink-0 max-lg:snap-start max-lg:scroll-mx-6'
            >
              <div className='timeline-view-inline lg:timeline-view animate-fade-in-down animate-range-[entry_5%_contain_20%]'>
                <div className='border-beautiful-white flex flex-col gap-6 rounded-4xl border bg-white p-4 shadow-lg'>
                  <div className='bg-beautiful-white relative h-55 overflow-hidden rounded-2xl'>
                    <img
                      className='size-full object-cover'
                      src={photo[tour]}
                      alt={t(`top-tours.tours.${tour}.title`)}
                      loading='lazy'
                    />
                    <div className='absolute top-4 left-4'>
                      <div className='flex items-center gap-1 rounded-full bg-white px-2 py-1'>
                        <Icons.Clock className='text-malachite size-4' />
                        <span className='text-sm leading-4.5 font-bold'>
                          {t(`top-tours.tours.${tour}.duration`)}
                        </span>
                      </div>
                    </div>
                    <div className='absolute right-4 bottom-4'>
                      <div className='bg-english-holly/50 flex items-center gap-1 rounded-full px-2 py-1 text-white backdrop-blur-md'>
                        <div className='bg-malachite size-2 rounded-full' />
                        <span className='text-xs leading-4 font-bold'>
                          {t(`top-tours.tours.${tour}.level`)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1'>
                      <Icons.Location className='text-malachite size-4' />
                      <span className='text-xanadu text-xs leading-4 font-bold'>
                        {t(`top-tours.tours.${tour}.location`)}
                      </span>
                    </div>
                    <span className='text-lg leading-6 font-bold'>
                      {t(`top-tours.tours.${tour}.title`)}
                    </span>
                    <span className='text-lunar-green line-clamp-2 text-sm leading-4.5'>
                      {t(`top-tours.tours.${tour}.description`)}
                    </span>
                  </div>
                  <div className='flex items-center justify-between gap-4'>
                    <div className='flex flex-col gap-1'>
                      <span className='text-xanadu text-xs leading-4 font-bold'>
                        {t(`top-tours.tours.${tour}.price_from`)}
                      </span>
                      <div className='flex items-baseline gap-1'>
                        <span className='text-malachite text-sm leading-4.5 font-bold'>
                          $
                        </span>
                        <span className='text-lg leading-6 font-bold'>
                          {t(`top-tours.tours.${tour}.price`)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={handleTour(tour)}
                      className='bg-english-holly cursor-pointer rounded-full px-3 py-1.5 text-white transition-all duration-200 hover:opacity-80 active:opacity-70'
                    >
                      <span className='text-sm leading-4.5 font-bold'>
                        {t('top-tours.view-label')}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {tour &&
        createPortal(
          <div
            role='dialog'
            className='fixed inset-0 flex items-center justify-center'
          >
            <div
              onClick={handleClose}
              className='absolute inset-0 backdrop-blur-sm'
            />
            <div className='animate-fade-in-down relative flex size-full flex-col bg-white lg:h-[80vh] lg:w-[80vw] lg:max-w-255.5 lg:rounded-2xl lg:shadow-xl'>
              <div className='flex items-center justify-between gap-4 p-6 md:px-12'>
                <div className='flex flex-col gap-1'>
                  <span className='text-xl leading-7 font-extrabold'>
                    {t(`top-tours.tours.${tour}.title`)}
                  </span>
                  <div className='flex flex-wrap gap-4'>
                    <div className='border-sea-glass flex items-center gap-1 rounded-full border bg-white px-2 py-1'>
                      <Icons.Clock className='text-malachite size-4' />
                      <span className='text-sm leading-4.5 font-bold'>
                        {t(`top-tours.tours.${tour}.duration`)}
                      </span>
                    </div>
                    <div className='bg-english-holly/50 flex items-center gap-1 rounded-full px-2 py-1 text-white backdrop-blur-md'>
                      <div className='bg-malachite size-2 rounded-full' />
                      <span className='text-xs leading-4 font-bold'>
                        {t(`top-tours.tours.${tour}.level`)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className='hover:bg-beautiful-white active:bg-sea-glass flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-200'
                >
                  <Icons.Close className='size-5' />
                </button>
              </div>
              <div className='flex flex-1 flex-col gap-6 overflow-y-scroll scroll-smooth px-6 pt-3 pb-6 md:px-12'>
                <div className='bg-beautiful-white min-h-55 w-full overflow-hidden rounded-2xl'>
                  <img
                    className='size-full object-cover'
                    src={photo[tour]}
                    alt={t(`top-tours.tours.${tour}.title`)}
                    loading='lazy'
                  />
                </div>
                <div className='flex items-center gap-1'>
                  <Icons.Location className='text-malachite size-4' />
                  <span className='text-xanadu text-xs leading-4 font-bold'>
                    {t(`top-tours.tours.${tour}.location`)}
                  </span>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-base leading-6 font-bold'>
                      {t(`top-tours.tours.${tour}.departure-start.title`)}
                    </span>
                    <span className='text-lunar-green text-sm leading-4.5'>
                      {t(`top-tours.tours.${tour}.departure-start.description`)}
                    </span>
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <span className='text-base leading-6 font-bold'>
                      {t(`top-tours.tours.${tour}.departure-end.title`)}
                    </span>
                    <span className='text-lunar-green text-sm leading-4.5'>
                      {t(`top-tours.tours.${tour}.departure-end.description`)}
                    </span>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-base leading-6 font-bold'>
                    {t(`top-tours.tours.${tour}.itinerary.title`)}
                  </span>
                  <div className='flex flex-col gap-1'>
                    {t(`top-tours.tours.${tour}.itinerary.description`, {
                      returnObjects: true,
                    }).map((item) => {
                      return (
                        <span
                          key={item}
                          className='text-lunar-green text-sm leading-4.5'
                        >
                          {item}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-base leading-6 font-bold'>
                    {t(`top-tours.tours.${tour}.inclusions.title`)}
                  </span>
                  <div className='flex flex-col gap-1'>
                    {t(`top-tours.tours.${tour}.inclusions.list`, {
                      returnObjects: true,
                    }).map((item) => {
                      return (
                        <span
                          key={item}
                          className='text-lunar-green text-sm leading-4.5'
                        >
                          • {item}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-base leading-6 font-bold'>
                    {t(`top-tours.tours.${tour}.exclusions.title`)}
                  </span>
                  <div className='flex flex-col gap-1'>
                    {t(`top-tours.tours.${tour}.exclusions.list`, {
                      returnObjects: true,
                    }).map((item) => {
                      return (
                        <span
                          key={item}
                          className='text-lunar-green text-sm leading-4.5'
                        >
                          • {item}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-base leading-6 font-bold'>
                    {t(`top-tours.tours.${tour}.recommendations.title`)}
                  </span>
                  <div className='flex flex-col gap-1'>
                    {t(`top-tours.tours.${tour}.recommendations.list`, {
                      returnObjects: true,
                    }).map((item) => {
                      return (
                        <span
                          key={item}
                          className='text-lunar-green text-sm leading-4.5'
                        >
                          • {item}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-base leading-6 font-bold'>
                    {t(`top-tours.tours.${tour}.privacy-policy.title`)}
                  </span>
                  <span className='text-lunar-green text-sm leading-4.5'>
                    {t(`top-tours.tours.${tour}.privacy-policy.description`)}
                  </span>
                </div>
              </div>
              <div className='border-t-sea-glass shadow-modal-footer flex justify-between gap-4 border-t p-6 md:px-12'>
                <div className='flex flex-col gap-1'>
                  <span className='text-xanadu text-sm leading-4.5 font-bold'>
                    {t(`top-tours.tours.${tour}.price_from`)}
                  </span>
                  <div className='flex items-baseline gap-1'>
                    <span className='text-malachite text-base leading-6 font-bold'>
                      $
                    </span>
                    <span className='text-xl leading-7 font-bold'>
                      {t(`top-tours.tours.${tour}.price`)}
                    </span>
                  </div>
                </div>
                <Button widthFit onClick={handleBook}>
                  {t('top-tours.book-label')}
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
