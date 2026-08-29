import type { PropsWithChildren } from 'react'
import { Icons } from '@/icons/icon'
import { cn } from '@/utils'

interface Props {
  active?: boolean
  onClick?: () => void
}

export function LanguageButton({
  active,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'border-sea-glass hover:border-english-holly flex cursor-pointer items-center justify-between gap-4 rounded-xl border px-4 py-3 transition-colors duration-200',
        {
          'bg-english-holly border-english-holly text-white': active,
        },
      )}
    >
      <span className='text-sm leading-4.5'>{children}</span>
      {active && <Icons.Check className='size-5' />}
    </button>
  )
}
