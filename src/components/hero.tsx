import { useTranslation } from 'react-i18next'
import { Button } from './button'

export function Hero() {
  const { t } = useTranslation()

  return (
    <div className='flex max-w-150 flex-col gap-4 max-lg:items-center max-lg:text-center'>
      <div className='animate-fade-in-left flex items-center gap-2'>
        <div className='bg-simple-green h-0.5 w-8' />
        <span className='text-simple-green text-sm leading-4.5 font-bold'>
          {t('hero.badge')}
        </span>
      </div>
      <h1 className='animate-fade-in-right text-5xl leading-14 font-black lg:text-[72px] lg:leading-20'>
        {t('hero.title')}
      </h1>
      <span className='animate-fade-in-down font-georgia text-4xl leading-11 lg:text-5xl lg:leading-14'>
        {t('hero.subtitle')}
      </span>
      <span className='animate-fade-in-up text-lunar-green text-base leading-6 lg:text-lg lg:leading-7'>
        {t('hero.description')}
      </span>
      <div className='animate-shake'>
        <Button widthFit>{t('hero.start-adventure-label')}</Button>
      </div>
    </div>
  )
}
