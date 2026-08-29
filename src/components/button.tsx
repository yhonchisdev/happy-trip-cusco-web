import type { PropsWithChildren } from 'react'
import { Icons } from '@/icons/icon'
import { cn } from '@/utils'

interface Props {
  variant?: 'outline' | 'secondary'
  widthFit?: boolean
  icon?: keyof typeof Icons
  onClick?: () => void
}

export function Button({
  variant,
  widthFit,
  icon,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  const Icon = icon ? Icons[icon] : null

  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-malachite border-simple-green flex cursor-pointer items-center gap-1 rounded-full border-[1.5px] px-[22.5px] py-3 transition-opacity duration-100 hover:opacity-80 active:opacity-70',
        {
          'border-english-holly bg-white': variant === 'outline',
          'bg-english-holly border-english-holly border-none px-6 py-[13.5px] text-white':
            variant === 'secondary',
          'w-fit': widthFit,
        },
      )}
    >
      {Icon && <Icons.Language className='size-5' />}
      <span className='text-base leading-5 font-bold'>{children}</span>
    </button>
  )
}
