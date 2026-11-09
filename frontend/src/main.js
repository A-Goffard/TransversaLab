import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes.js'

// Fuentes servidas desde nuestro propio servidor (sin Google Fonts: sin cookies ni rastreo).
// Solo el subconjunto latino (incluye ñ, tildes y ü) y los pesos que usamos.
import '@fontsource/atkinson-hyperlegible-next/latin-400.css'
import '@fontsource/atkinson-hyperlegible-next/latin-400-italic.css'
import '@fontsource/atkinson-hyperlegible-next/latin-700.css'
import '@fontsource/atkinson-hyperlegible-next/latin-800.css'
import '@fontsource/baloo-2/latin-800.css'

import './styles/tokens.css'
import './styles/base.css'

// vite-ssg necesita que se exporte createApp: lo usa tanto para generar el HTML como en el navegador
export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  }
})
