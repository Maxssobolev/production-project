import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { type FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import classes from './ThemeSwitcher.module.scss'

import LightIcon from 'shared/assets/img/theme-light.svg'
import DarkIcon from 'shared/assets/img/theme-dark.svg'
import { AppButton } from 'shared/ui/AppButton/AppButton'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <AppButton onClick={toggleTheme} className={classNames(classes.ThemeSwitcher, {}, [className])}>
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </AppButton>
  )
}
