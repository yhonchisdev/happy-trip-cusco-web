import { useTranslation } from 'react-i18next'
import { Button } from './button'

export function Hero() {
  const { t } = useTranslation()

  const handleStartAdventure = () => {
    const element = document.querySelector('[data-navitation="top-tours"]')
    if (!element) return
    element.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    })
  }

  return (
    <div className='flex max-w-150 flex-col gap-6 max-lg:items-center max-lg:text-center'>
      <div className='animate-fade-in-down'>
        <div className='flex items-center gap-2'>
          <div className='bg-simple-green h-0.5 w-8' />
          <span className='text-simple-green text-xs leading-4 font-bold tracking-[2.4px]'>
            {t('hero.badge')}
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='animate-fade-in-right'>
          <h1 className='text-5xl leading-14 font-black lg:text-[72px] lg:leading-20'>
            {t('hero.title')}
          </h1>
        </div>
        <div className='animate-fade-in-left'>
          <span className='text-4xl leading-11 lg:text-5xl lg:leading-14'>
            {t('hero.subtitle')}
          </span>
        </div>
      </div>
      <div className='animate-fade-in-up'>
        <span className='text-lunar-green text-base leading-6 lg:text-lg lg:leading-7'>
          {t('hero.description')}
        </span>
      </div>
      <div className='animate-jump'>
        <Button widthFit onClick={handleStartAdventure}>
          {t('hero.start-adventure-label')}
        </Button>
      </div>
    </div>
  )
}
