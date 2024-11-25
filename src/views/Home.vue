<template>
  <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-6xl mx-auto relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div class="z-10 order-2 md:order-1">
          <div class="max-w-4xl mx-auto text-center md:text-left">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span class="text-gray-400 dark:text-gray-100">{{ $t('home.greeting') }}</span>
              <span class="text-accent block mt-2">Israel Moreno</span>
            </h1>
            <p class="text-xl sm:text-2xl text-gray-500 dark:text-gray-100 mb-8">{{ $t('home.role') }}</p>
            <p class="text-lg text-gray-400 mb-12">{{ $t('home.description') }}</p>
            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              <RouterLink
                to="/about"
                class="inline-flex items-center px-6 py-3 
                       border-2 border-accent
                       text-accent hover:text-gray-700
                       bg-transparent hover:bg-accent/90
                       transition-all duration-300 rounded-lg 
                       text-lg font-medium
                       shadow-lg shadow-accent/20"
              >
                {{ $t('home.cta') }}
                <Icon icon="heroicons:arrow-right" class="ml-2 w-5 h-5" />
              </RouterLink>
              <RouterLink
                to="/contact"
                class="inline-flex items-center px-6 py-3 
                       border-2 border-accent
                       text-gray-700 hover:text-accent
                       bg-accent hover:bg-transparent
                       transition-all duration-300 rounded-lg 
                       text-lg font-medium
                       shadow-lg shadow-accent/20"
              >
                {{ $t('home.contact') }}
                <Icon icon="heroicons:envelope" class="ml-2 w-5 h-5" />
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex justify-center z-10 order-1 md:order-2">
          <div class="relative group">
            <!-- Profile photo with glass effect -->
            <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden 
                        bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm
                        border-2 border-accent/20 group-hover:border-accent/40
                        transition-all duration-300 ease-in-out
                        flex items-center justify-center
                        shadow-lg shadow-accent/10 group-hover:shadow-accent/20">
              <img
                src="../assets/images/Image.jpg"
                alt="Israel Moreno"
                class="w-full h-full object-cover opacity-85 group-hover:opacity-100 
                       transition-all duration-300 ease-in-out
                       scale-105 group-hover:scale-100
                       rotate-3 group-hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isDark = ref(false)

onMounted(() => {
  // Initial theme check
  isDark.value = document.documentElement.classList.contains('dark')

  // Watch for theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        isDark.value = document.documentElement.classList.contains('dark')
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})
</script>