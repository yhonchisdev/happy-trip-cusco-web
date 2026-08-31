import { useTranslation } from 'react-i18next'
import machuPicchuFullDay from '@/assets/images/tours/machu-picchu-full-day.jpg'
import sacredValleMachuPicchu from '@/assets/images/tours/sacred-valley-machu-picchu.jpg'
import raimbowMountainFullDay from '@/assets/images/tours/raimbow-mountain-full-day.jpg'
import { Icons } from '@/icons/icon'

const tours = [1, 2, 3] as const

const photo: Record<(typeof tours)[number], string> = {
  '1': machuPicchuFullDay,
  '2': sacredValleMachuPicchu,
  '3': raimbowMountainFullDay,
}

export function TopTours() {
  const { t } = useTranslation()

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
                    <button className='bg-english-holly cursor-pointer rounded-full px-3 py-1.5 text-white transition-all duration-200 hover:opacity-80 active:opacity-70'>
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
    </div>
  )
}
