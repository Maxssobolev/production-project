import { type FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import classes from './ErrorBoundaryFallback.module.scss'
import { AppButton, ButtonVariant } from 'shared/ui/AppButton/AppButton'

interface ErrorBoundaryFallbackProps {
  className?: string
}

export const ErrorBoundaryFallback: FC<ErrorBoundaryFallbackProps> = ({ className }) => {
  const reloadPage = () => { window.location.reload() }
  return (
    <div className={classNames(classes.ErrorBoundaryFallback, {}, [className])}>
      Lol, the App was crashed, check console for detail information
      <AppButton onClick={reloadPage} variant={ButtonVariant.PRIMARY}>Reload page</AppButton>
    </div>
  )
}
