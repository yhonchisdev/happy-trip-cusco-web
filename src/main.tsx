import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IntlProvider } from 'use-intl'
import { useRequestConfig } from './i18n/request-config'
import { Icons } from './icons/icon'
import { App } from './app'
import 'unfonts.css'
import './index.css'

function Root() {
  const { locale, messages, isPending } = useRequestConfig()

  if (isPending || !messages) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <Icons.Logo className='size-20 animate-pulse' />
      </div>
    )
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
