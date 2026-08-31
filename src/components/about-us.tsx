import { Icons } from '@/icons/icon'
import { useTranslation } from 'react-i18next'

export function AboutUs() {
  const { t } = useTranslation()

  return (
    <div className='mx-auto flex max-w-200 flex-1 flex-col items-center gap-4 py-10'>
      <div className='timeline-view animate-squeeze animate-range-[entry_5%_contain_20%]'>
        <Icons.Logo className='text-xanadu size-25' />
      </div>
      <div className='timeline-view animate-fade-in-up animate-range-[entry_5%_contain_20%]'>
        <div className='flex items-center gap-2'>
          <div className='bg-simple-green h-0.5 w-8' />
          <div className='flex-1'>
            <span className='text-xanadu text-xs leading-4 font-bold tracking-[4px]'>
              {t('abouts-us.slogan')}
            </span>
          </div>
        </div>
      </div>
      <div className='timeline-view animate-fade-in-down animate-range-[entry_5%_contain_20%]'>
        <h1 className='text-4xl leading-11 font-bold lg:text-5xl lg:leading-14'>
          {t('abouts-us.title')}
        </h1>
      </div>
      <div className='timeline-view animate-fade-in-up animate-range-[entry_5%_contain_20%]'>
        <span className='text-lunar-green text-sm leading-4.5'>
          {t('abouts-us.description')}
        </span>
      </div>
    </div>
  )
}
