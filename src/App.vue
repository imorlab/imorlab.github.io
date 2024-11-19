<template>
  <nav class="fixed w-full bg-secondary/90 backdrop-blur-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold text-accent hover:opacity-80 transition-opacity">
          IM
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <router-link 
              v-for="item in navItems" 
              :key="item.path" 
              :to="item.path" 
              class="nav-link text-sm font-medium"
              :class="{ 'text-accent': $route.path === item.path }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-accent focus:outline-none"
            :aria-expanded="isMenuOpen"
          >
            <span class="sr-only">Abrir menú principal</span>
            <!-- Icon when menu is closed -->
            <svg
              v-if="!isMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open -->
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-secondary/95 backdrop-blur-sm">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            :class="[$route.path === item.path ? 'text-accent bg-primary/50' : 'text-gray-300 hover:text-accent hover:bg-primary/30']"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>

  <main class="pt-16">
    <router-view v-slot="{ Component }">
      <transition 
        name="page"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre mí', path: '/about' },
  { name: 'Proyectos', path: '/projects' },
  { name: 'Habilidades', path: '/skills' },
  { name: 'Contacto', path: '/contact' }
]
</script>

<style>
/* Transiciones de página */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Estilos globales */
body {
  @apply bg-primary text-white;
}

/* Estilos de scroll personalizado */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-primary;
}

::-webkit-scrollbar-thumb {
  @apply bg-accent/50 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-accent;
}
</style>
