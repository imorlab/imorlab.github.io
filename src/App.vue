<template>
  <div class="relative min-h-screen bg-primary text-gray-300">
    <!-- Background Effects -->
    <div class="fixed inset-0 w-full h-full overflow-hidden z-0">
      <!-- Animated Background Orbs -->
      <div class="absolute inset-0">
        <!-- Primary Dark Orbs -->
        <div class="absolute -right-1/4 top-[10%] w-[60vw] h-[60vh] rounded-full blur-[120px] transition-all duration-200 ease-out will-change-transform animate-float"
             :style="{ 
               transform: `translate(${mouseX * -150}px, ${mouseY * -150}px) scale(${1 + Math.abs(mouseSpeed.value)})`,
               opacity: isDark ? '0.25' : '0.30'
             }"
             :class="isDark ? 'bg-accent/25' : 'bg-accent/30'"></div>
        <div class="absolute -left-1/4 -bottom-1/4 w-[60vw] h-[60vh] rounded-full blur-[120px] transition-all duration-200 ease-out will-change-transform animate-float-delayed"
             :style="{ 
               transform: `translate(${mouseX * 150}px, ${mouseY * 150}px) scale(${1 + Math.abs(mouseSpeed.value)})`,
               opacity: isDark ? '0.25' : '0.30'
             }"
             :class="isDark ? 'bg-accent/25' : 'bg-accent/30'"></div>
        
        <!-- Dramatic Center Pulse -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[140px] mix-blend-multiply transition-all duration-200 ease-out will-change-transform animate-pulse"
             :style="{ 
               transform: `translate(${mouseX * -200}px, ${mouseY * -200}px) scale(${1.2 + Math.abs(mouseSpeed.value)})`,
               opacity: isDark ? 0.3 : 0.30
             }"
             :class="isDark ? 'bg-accent/30' : 'bg-accent/30'"></div>
        
        <!-- Dynamic Shadow Elements -->
        <div class="absolute top-1/4 left-1/4 w-[40vw] h-[40vh] rounded-full blur-[100px] mix-blend-multiply transition-all duration-200 ease-out will-change-transform animate-float-slow"
             :style="{ 
               transform: `translate(${mouseX * 250}px, ${mouseY * 250}px) rotate(${mouseX * 30}deg)`,
               opacity: isDark ? 0.35 : 0.30
             }"
             :class="isDark ? 'bg-accent/35' : 'bg-accent/30'"></div>
        <div class="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vh] rounded-full blur-[100px] mix-blend-multiply transition-all duration-200 ease-out will-change-transform animate-float-slower"
             :style="{ 
               transform: `translate(${mouseX * -250}px, ${mouseY * -250}px) rotate(${mouseX * -30}deg)`,
               opacity: isDark ? 0.35 : 0.30
             }"
             :class="isDark ? 'bg-accent/35' : 'bg-accent/30'"></div>
        
        <!-- Cursor Follower -->
        <div class="absolute w-[60px] h-[60px] rounded-full blur-[30px] transition-all duration-75 pointer-events-none"
             :style="{ 
               transform: `translate(${lastMouseX.value}px, ${lastMouseY.value}px) translate(-50%, -50%)`,
               boxShadow: `0 0 60px 30px ${isDark ? 'rgb(var(--color-accent) / 0.2)' : 'rgb(var(--color-accent) / 0.1)'}`,
               opacity: Math.min(mouseSpeed.value + 0.2, 0.8)
             }">
        </div>
        
        <!-- Dark Mode Intensity Layer -->
        <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent transition-opacity duration-1000"
             :class="isDark ? 'opacity-40' : 'opacity-0'"></div>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '@iconify/vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

const route = useRoute()
const isDark = ref(true)
const isMenuOpen = ref(false)

const mouseX = ref(0)
const mouseY = ref(0)
const mouseSpeed = ref(0)
const lastMouseX = ref(0)
const lastMouseY = ref(0)

const handleMouseMove = (e) => {
  // Calcular la velocidad del ratón
  const dx = e.clientX - lastMouseX.value
  const dy = e.clientY - lastMouseY.value
  mouseSpeed.value = Math.min(Math.sqrt(dx * dx + dy * dy) / 100, 1)
  
  // Actualizar posición
  lastMouseX.value = e.clientX
  lastMouseY.value = e.clientY
  
  // Normalizar la posición del ratón entre -1 y 1
  mouseX.value = (e.clientX / window.innerWidth) * 2 - 1
  mouseY.value = (e.clientY / window.innerHeight) * 2 - 1
}

// Calcular el factor de movimiento basado en la velocidad del ratón
const movementFactor = computed(() => 1 + mouseSpeed.value * 2)

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  lastMouseX.value = window.innerWidth / 2
  lastMouseY.value = window.innerHeight / 2
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})

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

.animate-float {
  animation: float 10s infinite ease-in-out;
}

.animate-float-delayed {
  animation: float-diagonal 10s infinite ease-in-out 2s;
}

.animate-float-slow {
  animation: float-rotate 20s infinite ease-in-out;
}

.animate-float-slower {
  animation: float-rotate-reverse 20s infinite ease-in-out 4s;
}

.animate-pulse {
  animation: pulse 5s infinite ease-in-out;
}

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(20px) rotate(3deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

@keyframes float-diagonal {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, 20px) rotate(-3deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes float-rotate {
  0% { transform: rotate(0deg) translateY(0); }
  50% { transform: rotate(5deg) translateY(-20px); }
  100% { transform: rotate(0deg) translateY(0); }
}

@keyframes float-rotate-reverse {
  0% { transform: rotate(0deg) translateY(0); }
  50% { transform: rotate(-5deg) translateY(20px); }
  100% { transform: rotate(0deg) translateY(0); }
}

@keyframes pulse {
  0% { transform: scale(1) rotate(0deg); opacity: 1; }
  50% { transform: scale(1.2) rotate(2deg); opacity: 0.8; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}
</style>
