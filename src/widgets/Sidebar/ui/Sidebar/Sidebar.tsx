import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import classes from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed(!collapsed) }

  return (
    <div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
