import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, localizePath, LOCALES, DEFAULT_LOCALE } from './router'
import { createI18n } from 'vue-i18n'
import es from './i18n/es.json'
import en from './i18n/en.json'
import './assets/main.css'
import './style.css'
import { applyDarkMode } from './utils/dark-mode'

const localeFromPath = (path = '/') => (/^\/en(\/|$)/.test(path) ? 'en' : DEFAULT_LOCALE)

// Una instancia de i18n por app: vite-ssg renderiza varias páginas en paralelo
// y una instancia compartida a nivel de módulo mezclaría los idiomas.
const createI18nInstance = (locale) =>
  createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: { es, en },
    globalInjection: true,
    flatJson: false,
    warnHtmlInMessage: 'off',
    silentTranslationWarn: true,
    missingWarn: false,
    fallbackWarn: false
  })

// Solo las páginas reales generan HTML; las redirecciones (/home, comodín) no.
export const includedRoutes = (paths, allRoutes) => allRoutes.filter((r) => !r.redirect).map((r) => r.path)

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routePath, isClient }) => {
    const i18n = createI18nInstance(localeFromPath(routePath))
    app.use(i18n)

    // El idioma lo define la URL (/en/... → inglés).
    router.beforeEach((to, from) => {
      const lang = to.meta.lang || DEFAULT_LOCALE

      // Primera carga en la raíz: respeta el idioma guardado por el visitante.
      if (isClient && !from.name && to.path === '/') {
        const saved = localStorage.getItem('locale')
        if (saved && LOCALES.includes(saved) && saved !== DEFAULT_LOCALE) {
          return localizePath(to.path, saved)
        }
      }

      i18n.global.locale.value = lang
      if (isClient) {
        localStorage.setItem('locale', lang)
        document.documentElement.lang = lang
      }
    })

    if (isClient) {
      applyDarkMode()
    }
  }
)
