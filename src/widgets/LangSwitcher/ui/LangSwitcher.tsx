import { type FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import classes from './LangSwitcher.module.scss'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <AppButton onClick={() => { void toggle() }} className={classNames(classes.LangSwitcher, {}, [className])}>
      {t('Язык')}
    </AppButton>
  )
}
