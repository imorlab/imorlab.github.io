<template>
  <div class="relative min-h-screen bg-primary text-gray-300">
    <!-- Background Effects -->
    <div class="fixed inset-0 w-full h-full overflow-hidden z-0">
      <!-- Animated Background Orbs -->
      <div class="absolute inset-0">
        <!-- Primary Orbs -->
        <div class="absolute -right-1/3 -top-1/3 w-[100vw] h-[100vh] rounded-full blur-[60px]"
             :class="isDark ? 'bg-accent/15 animate-float' : 'bg-accent/10 animate-float'"></div>
        <div class="absolute -left-1/3 -bottom-1/3 w-[100vw] h-[100vh] rounded-full blur-[60px]"
             :class="isDark ? 'bg-accent/15 animate-float-delayed' : 'bg-accent/10 animate-float-delayed'"></div>
        
        <!-- Secondary Orbs -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] rounded-full blur-[80px]"
             :class="isDark ? 'bg-accent/12 animate-pulse' : 'bg-accent/8 animate-pulse'"></div>
        
        <!-- Additional Floating Elements -->
        <div class="absolute top-1/4 left-1/4 w-[80vw] h-[80vh] rounded-full blur-[50px]"
             :class="isDark ? 'bg-accent/20 animate-float-slow' : 'bg-accent/12 animate-float-slow'"></div>
        <div class="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vh] rounded-full blur-[50px]"
             :class="isDark ? 'bg-accent/20 animate-float-slower' : 'bg-accent/12 animate-float-slower'"></div>
      </div>
    </div>

    <!-- Main Content Wrapper -->
    <div class="relative z-10">
      <!-- Navigation -->
      <nav class="fixed top-0 left-0 right-0 z-50 bg-primary/15 backdrop-blur-md border-b border-accent/10">
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
                  class="px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-accent"
                  :class="[$route.path === item.route ? 'text-accent font-bold' : 'text-gray-400']"
                >
                  {{ $t(item.label) }}
                </RouterLink>
              </div>

              <div class="flex items-center gap-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
                <!-- Mobile menu button -->
                <button 
                  @click="isMenuOpen = !isMenuOpen"
                  class="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-accent/10 focus:outline-none transition-colors duration-300"
                  :class="[isDark ? 'bg-primary/10 hover:bg-primary/30' : 'bg-white/10 hover:bg-white/30']"
                  >
                  <span class="flex items-center justify-center w-6 h-6">
                    <Icon
                      :icon="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
                      class="w-6 h-6 text-accent"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <!-- Mobile Navigation Menu -->
          <div 
            v-show="isMenuOpen"
            class="md:hidden bg-primary/95 backdrop-blur-md border-t border-accent/10"
          >
            <div class="px-2 pt-2 pb-3 space-y-1">
              <RouterLink
                v-for="item in navItems"
                :key="item.route"
                :to="item.route"
                @click="isMenuOpen = false"
                class="block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-accent rounded-md"
                :class="[$route.path === item.route ? 'text-accent font-bold bg-accent/10' : 'text-gray-400']"
              >
                {{ $t(item.label) }}
              </RouterLink>
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
          <div class="flex flex-col items-center gap-2 text-sm text-gray-400 dark:text-gray-300">
            <p>
              {{ $t('footer.created') }}
              <span 
                @click="pulseHeart" 
                class="text-purple-500 cursor-pointer text-lg inline-block transition-transform"
                :class="{ 'heart-pulse': isPulsing }"
              >💜</span>
              {{ $t('footer.hosted') }} 
              <a href="https://pages.github.com/" class="text-accent hover:text-accent/80 transition-colors duration-300">GitHub Pages</a>
            </p>
            
            <p>Copyright {{ new Date().getFullYear() }}. {{ $t('footer.rights') }}</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '@iconify/vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

const route = useRoute()
const currentRoute = computed(() => route.path)

const isDark = ref(document.documentElement.classList.contains('dark'))

const navItems = [
  { route: '/', label: 'nav.home' },
  { route: '/about', label: 'nav.about' },
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

const isMenuOpen = ref(false)

const isPulsing = ref(false)

const pulseHeart = () => {
  isPulsing.value = true
  setTimeout(() => {
    isPulsing.value = false
  }, 1000)
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

.heart-pulse {
  animation: heartbeat 1s ease-in-out;
}
</style>
