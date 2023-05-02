import { type FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames('Loader', {}, [className, 'lds-dual-ring'])}> </div>
  )
}
