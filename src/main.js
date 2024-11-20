import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import es from './i18n/es.json'
import en from './i18n/en.json'
import './assets/main.css'
import './style.css'

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

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
