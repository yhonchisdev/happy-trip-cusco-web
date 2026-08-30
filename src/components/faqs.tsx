import { useTranslation } from 'react-i18next'
import { Icons } from '@/icons/icon'
import { useState } from 'react'
import { cn } from '@/utils'

const faqs = [1, 2, 3, 4, 5] as const

export function Faqs() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState<number>(-1)

  const handleCurrent = (value: number) => () => {
    setCurrent(current === value ? -1 : value)
  }

  return (
    <div className='flex flex-col items-center gap-8 py-10'>
      <div className='timeline-view animate-fade-in-right animate-range-[entry_5%_contain_20%]'>
        <h2 className='text-center text-[42px] leading-12 font-black'>
          {t('faqs.title')}
        </h2>
      </div>
      <div className='flex w-200 max-w-full flex-col gap-1'>
        {faqs.map((faq) => {
          return (
            <div
              key={faq}
              className='timeline-view animate-slide-up-fade animate-range-[entry_5%_contain_20%]'
            >
              <div className='border-b-sea-glass flex flex-col gap-4 border-b py-6'>
                <div
                  onClick={handleCurrent(faq)}
                  className='flex cursor-pointer items-center justify-between gap-4'
                >
                  <span className='text-base leading-6 font-bold'>
                    {t(`faqs.faq.${faq}.question`)}
                  </span>
                  <Icons.Close
                    className={cn(
                      'text-xanadu size-5 -rotate-45 transition-transform duration-200',
                      {
                        'rotate-0': current === faq,
                      },
                    )}
                  />
                </div>
                {current === faq && (
                  <span className='text-lunar-green text-sm leading-4.5'>
                    {t(`faqs.faq.${faq}.answer`)}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
