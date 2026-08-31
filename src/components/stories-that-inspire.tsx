import { useTranslation } from 'react-i18next'
import { Icons } from '@/icons/icon'
import { cn } from '@/utils'

const reviews = [1, 2, 3, 4, 5, 6] as const
const scores = Array.from({ length: 5 }, (_, index) => index + 1)

export function StoriesThatInspire() {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-12 py-10'>
      <div className='flex flex-col gap-4'>
        <div className='timeline-view animate-fade-in-up animate-range-[entry_5%_contain_20%]'>
          <div className='flex items-center gap-2'>
            <div className='bg-simple-green h-0.5 w-8' />
            <span className='text-simple-green text-[10px] leading-3 font-bold tracking-[4px]'>
              {t('stories-that-inspire.badge')}
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='timeline-view animate-fade-in-right animate-range-[entry_5%_contain_20%]'>
            <h1 className='text-5xl leading-14 font-bold lg:text-6xl lg:leading-17'>
              {t('stories-that-inspire.title')}
            </h1>
          </div>
          <div className='timeline-view animate-fade-in-left animate-range-[entry_5%_contain_20%]'>
            <span className='text-xanadu text-5xl leading-14 font-light lg:text-6xl lg:leading-17'>
              {t('stories-that-inspire.subtitle')}
            </span>
          </div>
        </div>
      </div>
      <div className='flex gap-4 max-lg:-mx-6 max-lg:snap-x max-lg:snap-mandatory max-lg:scrollbar-none max-lg:overflow-x-auto max-lg:scroll-smooth max-lg:px-6 max-lg:py-4 lg:grid lg:grid-cols-3'>
        {reviews.map((review) => {
          return (
            <div
              key={review}
              className='max-lg:w-slide-card-lg max-md:w-slide-card-md max-lg:shrink-0 max-lg:snap-start max-lg:scroll-mx-6'
            >
              <div className='timeline-view-inline lg:timeline-view animate-fade-in-up animate-range-[entry_5%_contain_20%]'>
                <div className='border-sea-glass flex flex-col gap-6 rounded-2xl border bg-white p-6 shadow-lg'>
                  <div className='flex items-center gap-1'>
                    {scores.map((score) => {
                      return (
                        <Icons.Star
                          key={score}
                          className={cn('text-sea-glass size-5', {
                            'text-australia-green':
                              score <=
                              t(
                                `stories-that-inspire.reviews.${review}.rating`,
                              ),
                          })}
                        />
                      )
                    })}
                  </div>
                  <span className='text-lunar-green text-base leading-6'>
                    {t(`stories-that-inspire.reviews.${review}.description`)}
                  </span>
                  <div className='flex items-center gap-4'>
                    <div
                      className={cn(
                        'bg-malachite flex size-10 items-center justify-center rounded-full',
                        [
                          'bg-english-holly text-white',
                          'bg-xanadu text-white',
                          'bg-australia-green text-white',
                          'bg-sea-glass text-black',
                          'bg-simple-green text-white',
                        ][review % reviews.length],
                      )}
                    >
                      {t(
                        `stories-that-inspire.reviews.${review}.user.name`,
                      ).charAt(0)}
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-base leading-6 font-bold'>
                        {t(`stories-that-inspire.reviews.${review}.user.name`)}
                      </span>
                      <span className='text-lunar-green text-sm leading-4.5'>
                        {t(
                          `stories-that-inspire.reviews.${review}.user.location`,
                        )}
                      </span>
                    </div>
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
