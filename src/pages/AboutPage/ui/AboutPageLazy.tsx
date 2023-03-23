import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => await import(/* webpackChunkName: "about_page" */ './AboutPage'))
