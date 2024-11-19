<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200"
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
      class="absolute right-0 mt-2 py-2 w-24 bg-secondary rounded-lg shadow-lg z-50"
    >
      <button
        v-for="locale in availableLocales"
        :key="locale"
        @click="changeLocale(locale)"
        class="block w-full px-4 py-2 text-sm text-left text-gray-300 hover:text-accent hover:bg-gray-800 transition-colors duration-200"
      >
        {{ locale.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { locale, availableLocales } = useI18n()
const isOpen = ref(false)

const currentLocale = computed(() => locale.value)

const changeLocale = (newLocale) => {
  locale.value = newLocale
  isOpen.value = false
  // Opcional: guardar la preferencia en localStorage
  localStorage.setItem('locale', newLocale)
}

// Cerrar el menú al hacer clic fuera
const handleClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('.relative')) {
    isOpen.value = false
  }
}

// Agregar/remover event listener
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  // Cargar preferencia de idioma guardada
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && availableLocales.includes(savedLocale)) {
    locale.value = savedLocale
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
