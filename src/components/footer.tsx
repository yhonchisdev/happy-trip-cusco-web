import { useTranslation } from 'react-i18next'
import { Icons } from '@/icons/icon'
import { Section } from './section'

export function Footer() {
  const { t } = useTranslation()

  const handleContact = () => {
    const encodedMessage = encodeURIComponent(t('footer.whatsapp-message'))
    const whatsappUrl = `https://wa.me/+51945054242?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className='bg-beautiful-white py-8'>
      <Section>
        <div className='lg:grid-areas-footer flex flex-col-reverse gap-8 lg:grid lg:grid-cols-6 lg:gap-4'>
          <div className='grid-area-legal flex flex-col gap-1.5'>
            <div className='flex gap-4'>
              <Icons.Logo className='size-10' />
              <div className='flex flex-1 flex-col gap-1.5'>
                <span className='text-lunar-green text-xs leading-4'>
                  {t('footer.author')}
                </span>
                <div className='flex flex-wrap gap-x-4'>
                  <a
                    href='https://www.google.com/maps/place/Av.+Libertadores+2,+Cusco+08007/@-13.5388577,-71.9864256,1089m/data=!3m2!1e3!4b1!4m5!3m4!1s0x916dd5c437921e55:0xb26bcd638fc845a3!8m2!3d-13.5388629!4d-71.9838453?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D'
                    target='_blank'
                    className='hover:text-australia-green text-base leading-6 font-bold underline transition-colors duration-200'
                  >
                    {t('footer.links.address')}
                  </a>
                  <a
                    href='https://wa.me/+51945054242'
                    target='_blank'
                    className='hover:text-australia-green text-base leading-6 font-bold underline transition-colors duration-200'
                  >
                    {t('footer.links.phone')}
                  </a>
                  <a
                    href='mailto:happytripcusco@gmail.com'
                    target='_blank'
                    className='hover:text-australia-green text-base leading-6 font-bold underline transition-colors duration-200'
                  >
                    {t('footer.links.email')}
                  </a>
                </div>
              </div>
            </div>
            <span className='text-lunar-green text-sm leading-4.5'>
              {t('footer.about')}
            </span>
          </div>
          <div className='grid-area-social flex items-start gap-2'>
            <a
              href='http://www.facebook.com/Happytripcusco'
              target='_blank'
              className='p-3'
            >
              <Icons.Facebook className='size-6' />
            </a>
            <a
              href='https://instagram.com/Happytripcusco'
              target='_blank'
              className='p-3'
            >
              <Icons.Instagram className='size-6' />
            </a>
            <a
              href='https://www.tiktok.com/@Happytripcusco'
              target='_blank'
              className='p-3'
            >
              <Icons.Tiktok className='size-6' />
            </a>
          </div>
        </div>
      </Section>
      <div className='animate-tada fixed right-6 bottom-6'>
        <button
          onClick={handleContact}
          className='bg-malachite flex size-14 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 hover:scale-110 hover:opacity-80 active:scale-100'
        >
          <Icons.Chat className='size-8' />
        </button>
      </div>
    </footer>
  )
}
