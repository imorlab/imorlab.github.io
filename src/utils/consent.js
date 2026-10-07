import { ref } from 'vue'

// Consentimiento de cookies de analítica (Google Analytics y Microsoft Clarity).
// index.html lo lee antes de cargar gtag: mantener la misma clave y caducidad.
const STORAGE_KEY = 'cookie-consent'
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000 // pasado un año se vuelve a preguntar

/** Banner visible: sin decisión guardada, o al pulsar "Configurar cookies" en el pie. */
export const consentBannerOpen = ref(false)

export const openConsentBanner = () => {
  consentBannerOpen.value = true
}

/** 'granted' | 'denied' | null (sin decidir o caducada). */
export function readConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && Date.now() - new Date(saved.date).getTime() < MAX_AGE_MS) return saved.value
  } catch {}
  return null
}

const toSignal = (granted) => (granted ? 'granted' : 'denied')

/** Consent API v2 de Clarity. Sin publicidad: ad_Storage siempre denegado. */
export function sendClarityConsent(granted) {
  window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: toSignal(granted) })
}

// Cookies de GA (_ga, _ga_<ID>): se borran al retirar el consentimiento.
// Clarity borra las suyas al recibir "denied".
function removeAnalyticsCookies() {
  const { hostname } = window.location
  document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => name.startsWith('_ga'))
    .forEach((name) => {
      for (const domain of ['', `; domain=${hostname}`, `; domain=.${hostname}`]) {
        document.cookie = `${name}=; Max-Age=0; path=/${domain}`
      }
    })
}

export function saveConsent(granted) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value: toSignal(granted), date: new Date().toISOString() }))
  } catch {}
  window.gtag?.('consent', 'update', { analytics_storage: toSignal(granted) })
  sendClarityConsent(granted)
  if (!granted) removeAnalyticsCookies()
  consentBannerOpen.value = false
}
