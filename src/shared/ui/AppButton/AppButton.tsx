import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import classes from './AppButton.module.scss'

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  CLEAN = 'clean',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
}

export const AppButton: FC<AppButtonProps> = ({ className, children, variant = ButtonVariant.CLEAN, ...otherProps }) => {
  return (
    <button {...otherProps} className={classNames(classes.AppButton, {}, [className, classes[variant]])}>
      {children}
    </button>
  )
}
