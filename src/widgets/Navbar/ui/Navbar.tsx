import { type FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import classes from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  )
}
