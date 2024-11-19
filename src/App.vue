<template>
  <div class="min-h-screen bg-primary text-white">
    <!-- Header -->
    <header class="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <router-link to="/" class="text-xl font-bold text-accent">
            IM<span class="text-white">.</span>
          </router-link>

          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link 
              v-for="(link, index) in navLinks" 
              :key="index"
              :to="link.to"
              class="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200"
            >
              {{ $t(link.text) }}
            </router-link>
          </div>

          <!-- Language Switcher -->
          <div class="hidden md:block">
            <LanguageSwitcher />
          </div>

          <!-- Mobile menu button -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 rounded-md text-gray-300 hover:text-accent focus:outline-none"
          >
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

        <!-- Mobile menu -->
        <div 
          v-show="isMenuOpen" 
          class="md:hidden"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <router-link 
              v-for="(link, index) in navLinks" 
              :key="index"
              :to="link.to"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent transition-colors duration-200"
              @click="isMenuOpen = false"
            >
              {{ $t(link.text) }}
            </router-link>
            <!-- Language Switcher in mobile menu -->
            <div class="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
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

    <!-- Footer -->
    <footer class="bg-secondary py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-gray-400">
          {{ new Date().getFullYear() }} Israel Moreno.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const isMenuOpen = ref(false)

const navLinks = [
  { to: '/', text: 'nav.home' },
  { to: '/about', text: 'nav.about' },
  { to: '/skills', text: 'nav.skills' },
  { to: '/projects', text: 'nav.projects' },
  { to: '/contact', text: 'nav.contact' }
]
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
