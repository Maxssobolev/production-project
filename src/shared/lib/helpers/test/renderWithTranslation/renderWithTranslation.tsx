import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nTestConfig from 'shared/config/i18n/i18nTestConfig'

// кастомный хелпер, оборачивающий компонент в i18n провайдер, для корректного тестирования компонентов с переводом
export const renderWithTranslation = (component: ReactNode) => {
  return render(
    <I18nextProvider i18n={i18nTestConfig}>
      {component}
    </I18nextProvider>
  )
}
