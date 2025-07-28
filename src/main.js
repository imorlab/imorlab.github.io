import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { createI18n } from 'vue-i18n'
import es from './i18n/es.json'
import en from './i18n/en.json'
import './assets/main.css'
import './style.css'
import './utils/dark-mode'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es,
    en
  },
  globalInjection: true,
  flatJson: false,
  warnHtmlInMessage: 'off',
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackWarn: false
})

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(i18n)
  }
)

