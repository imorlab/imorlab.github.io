<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-accent bg-transparent"
      :class="[
        isDark
          ? 'text-gray-300'
          : 'text-gray-600'
      ]"
      type="button"
    >
      <span class="uppercase">{{ currentLocale }}</span>
      <Icon
        :icon="isOpen ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
        class="w-4 h-4"
      />
    </button>

    <!-- Dropdown menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 py-2 w-24 rounded-lg shadow-lg z-50 border transition-colors duration-200"
      :class="[
        isDark
          ? 'bg-primary border-gray-700'
          : 'bg-white border-gray-200'
      ]"
    >
      <button
        v-for="locale in availableLocales"
        :key="locale"
        @click="changeLocale(locale)"
        class="block w-full px-4 py-2 text-sm text-left transition-colors duration-200 hover:text-accent bg-transparent"
        :class="[
          isDark
            ? 'text-gray-300 hover:bg-gray-800/50'
            : 'text-gray-600 hover:bg-gray-100'
        ]"
        type="button"
      >
        {{ locale.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { locale, availableLocales } = useI18n()
const isOpen = ref(false)
const isDark = ref(true)

const currentLocale = computed(() => locale.value)

const updateTheme = () => {
  isDark.value = document.documentElement.classList.contains('dark')
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && availableLocales.includes(savedLocale)) {
    locale.value = savedLocale
  }
  
  // Observar cambios en el tema
  updateTheme()
  const observer = new MutationObserver(() => {
    updateTheme()
  })
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const changeLocale = (newLocale) => {
  locale.value = newLocale
  isOpen.value = false
  localStorage.setItem('locale', newLocale)
}

const handleClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('.relative')) {
    isOpen.value = false
  }
}
</script>
