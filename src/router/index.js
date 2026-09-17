import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Contact from '../views/Contact.vue'

export const DEFAULT_LOCALE = 'es'
export const LOCALES = ['es', 'en']

// Rutas base (en español, sin prefijo). El inglés vive bajo /en/...
const baseRoutes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/projects/:id', name: 'ProjectDetail', component: ProjectDetail },
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
  // Banco de pruebas del fondo WebGL: carga diferida para que three.js no entre
  // en el bundle principal; sin variante /en y fuera del sitemap.
  {
    path: '/demo',
    name: 'PixelBlastDemo',
    component: () => import('../views/PixelBlastDemo.vue'),
    meta: { lang: 'es' }
  },
  { path: '/home', redirect: '/' },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
