import { createI18n } from 'vue-i18n'
import es from './es.json'
import en from './en.json'

// Función para detectar el idioma del navegador
function getBrowserLocale() {
  const navigatorLang = navigator.language || navigator.userLanguage;
  const browserLang = navigatorLang.split('-')[0]; // Obtiene 'es' de 'es-ES'
  return ['es', 'en'].includes(browserLang) ? browserLang : 'es';
}

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages: {
    es,
    en
  },
  globalInjection: true
})

export default i18n
