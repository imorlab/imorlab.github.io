<template>
  <div class="min-h-screen bg-primary text-gray-300">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <RouterLink to="/" class="text-accent hover:text-accent/80 transition-colors duration-300">
            <span class="text-xl font-bold">IM</span>
          </RouterLink>

          <!-- Navigation Links and Theme/Language Switchers -->
          <div class="flex items-center gap-4">
            <div class="hidden md:flex items-center gap-4">
              <RouterLink
                v-for="item in navItems"
                :key="item.route"
                :to="item.route"
                class="px-3 py-2 text-sm font-medium hover:text-accent transition-colors duration-300"
                :class="{ 'text-accent': currentRoute === item.route }"
              >
                {{ $t(item.label) }}
              </RouterLink>
            </div>

            <div class="flex items-center gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <RouterView v-slot="{ Component }">
        <Transition
          name="fade"
          mode="out-in"
          @before-leave="beforeLeave"
          @enter="enter"
          @after-enter="afterEnter"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="bg-secondary py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-gray-400">
          {{ new Date().getFullYear() }} Israel Moreno. {{ $t('footer.rights') }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

const route = useRoute()
const currentRoute = computed(() => route.path)

const navItems = [
  { route: '/', label: 'nav.home' },
  { route: '/about', label: 'nav.about' },
  { route: '/skills', label: 'nav.skills' },
  { route: '/projects', label: 'nav.projects' },
  { route: '/contact', label: 'nav.contact' }
]

// Page Transition
const beforeLeave = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(20px)'
}

const enter = (el, done) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(20px)'
  setTimeout(done, 0)
}

const afterEnter = (el) => {
  el.style.opacity = 1
  el.style.transform = 'translateY(0)'
  el.style.transition = 'all 0.3s ease-in-out'
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
