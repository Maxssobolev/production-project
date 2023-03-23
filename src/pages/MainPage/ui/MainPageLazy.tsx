import { lazy } from 'react'

export const MainPageLazy = lazy(async () => await import(/* webpackChunkName: "main_page" */ './MainPage'))
