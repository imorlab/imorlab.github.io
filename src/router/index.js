import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

export const DEFAULT_LOCALE = 'es'
export const LOCALES = ['es', 'en']

// Rutas base (en español, sin prefijo). El inglés vive bajo /en/...
const baseRoutes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact }
]

/** Devuelve la ruta equivalente en el idioma indicado. */
export function localizePath(path, locale) {
  const clean = path.replace(/^\/en(?=\/|$)/, '') || '/'
  if (locale === DEFAULT_LOCALE) return clean
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`
}

export const routes = [
  ...baseRoutes.map((r) => ({ ...r, meta: { lang: 'es' } })),
  ...baseRoutes.map((r) => ({
    path: localizePath(r.path, 'en'),
    name: `${r.name}En`,
    component: r.component,
    meta: { lang: 'en' }
  })),
  { path: '/home', redirect: '/' },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
