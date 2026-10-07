// Analítica del portfolio: Google Analytics 4 (gtag, cargado en index.html) y,
// opcionalmente, Microsoft Clarity (mapas de calor y grabaciones de sesión).
//
// Las páginas vistas las registra GA4 por su cuenta (medición mejorada → cambios en
// el historial). Aquí se añade lo que GA4 no ve solo: los eventos de interacción,
// la profundidad de scroll intermedia, las Core Web Vitals y las URLs rotas.
// Listado de eventos y parámetros: README.md → "Analítica".

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID

// GA4 ya envía `scroll` al 90 %; se completan los cortes intermedios.
const SCROLL_MARKS = [25, 50, 75]

const isClient = typeof window !== 'undefined'

/** Envía un evento a GA4 (y lo marca en Clarity). No hace nada durante el SSG. */
export function track(name, params = {}) {
  if (!isClient) return
  window.gtag?.('event', name, params)
  window.clarity?.('event', name)
}

// data-track-project-id → project_id
const toParamName = (key) => key.slice('track'.length).replace(/[A-Z]/g, (c, i) => (i ? '_' : '') + c.toLowerCase())

/**
 * Clics declarativos: cualquier elemento con `data-track="evento"` envía ese evento
 * al pulsarlo, con sus `data-track-*` como parámetros y el destino si es un enlace.
 *   <a href="…" data-track="social_click" data-track-network="github">
 */
function onTrackedClick(event) {
  const el = event.target.closest?.('[data-track]')
  if (!el) return

  const params = {}
  for (const [key, value] of Object.entries(el.dataset)) {
    if (key !== 'track' && key.startsWith('track')) params[toParamName(key)] = value
  }
  // Sin query string: GA4 corta los valores a 100 caracteres (y los de AskAI llevan el prompt).
  if (el.href) params.link_url = el.origin + el.pathname
  track(el.dataset.track, params)
}

function trackScrollDepth(router) {
  const reached = new Set()
  let ticking = false

  const check = () => {
    ticking = false
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    if (scrollable <= 0) return
    const percent = (window.scrollY / scrollable) * 100
    for (const mark of SCROLL_MARKS) {
      if (percent >= mark && !reached.has(mark)) {
        reached.add(mark)
        track('scroll', { percent_scrolled: mark })
      }
    }
  }

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(check)
    },
    { passive: true }
  )
  router.afterEach(() => reached.clear())
}

// Core Web Vitals de visitas reales (Search Console no muestra datos con poco tráfico).
async function trackWebVitals() {
  const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import('web-vitals')
  const send = ({ name, delta, value, id, rating }) =>
    track(name, {
      value: delta,
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
      metric_rating: rating,
      non_interaction: true
    })
  ;[onCLS, onFCP, onINP, onLCP, onTTFB].forEach((on) => on(send))
}

function loadClarity(id) {
  window.clarity =
    window.clarity ||
    function () {
      ;(window.clarity.q = window.clarity.q || []).push(arguments)
    }
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.clarity.ms/tag/${id}`
  document.head.appendChild(script)
}

/** Activa la medición en el navegador. Llamar una sola vez, con el router de la app. */
export function initAnalytics(router) {
  document.addEventListener('click', onTrackedClick, { capture: true })
  trackScrollDepth(router)

  // Las URLs inexistentes acaban redirigidas a la portada (404.html → / → ruta comodín).
  router.afterEach((to) => {
    if (to.redirectedFrom?.name === 'NotFound') {
      track('page_not_found', { not_found_path: to.redirectedFrom.fullPath })
    }
  })

  // Fuera del camino crítico: tras la carga, cuando el navegador quede libre.
  const whenIdle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1))
  whenIdle(() => {
    trackWebVitals()
    if (CLARITY_ID) loadClarity(CLARITY_ID)
  })
}
