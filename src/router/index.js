import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

// Para repositorio de usuario (imorlab.github.io), la base siempre es '/'
const base = '/'

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/home'
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Manejar la redirección de GitHub Pages SPA
if (typeof window !== 'undefined') {
  const { search, pathname } = window.location
  
  // Si hay un query parameter que empieza con ?/ (de nuestra redirección 404)
  if (search && search.startsWith('?/')) {
    const path = decodeURIComponent(search.slice(2))
    // Reemplazar la URL sin recargar la página
    window.history.replaceState(null, null, path || '/')
  }
}

export default router
