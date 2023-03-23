import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import classes from './AppLink.module.scss'

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = ({ variant = AppLinkVariant.PRIMARY, className, children, to, ...otherProps }) => {
  return (
    <Link {...otherProps} to={to} className={classNames(classes.appLink, {}, [className, classes[variant]])}>
      {children}
    </Link>
  )
}
