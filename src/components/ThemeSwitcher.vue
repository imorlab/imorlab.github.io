<template>
  <div>
    <button
      @click="toggleTheme"
      class="flex items-center justify-center w-10 h-10 rounded-lg
            text-xl cursor-pointer text-gray-500 hover:text-accent border-0 shadow-sm shadow-accent focus:border-0 focus:outline-none"
      :class="[
        isDark
          ? 'bg-primary/10 hover:bg-primary/30'
          : 'bg-white/10 hover:bg-white/30'
      ]"
      :aria-label="$t('theme.switch')"
      type="button"
    >
      <span><Icon 
        v-if="isDark" 
        icon="heroicons:moon" 
        class="w-6 h-6 text-accent"
      />
      <Icon 
        v-else 
        icon="heroicons:sun" 
        class="w-6 h-6 text-accent"
      /></span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
}

const applyTheme = () => {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
    updateThemeColor('#64ffda')
  } else {
    root.classList.remove('dark')
    updateThemeColor('#0891b2')
  }
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const updateThemeColor = (color) => {
  let metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta')
    metaThemeColor.name = 'theme-color'
    document.head.appendChild(metaThemeColor)
  }
  metaThemeColor.setAttribute('content', color)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // Siempre iniciar en modo oscuro si no hay tema guardado
    isDark.value = true
  }
  applyTheme()
})
</script>

<style scoped>
:root {
  --color-accent-dark: #0891b2;
}

.dark {
  --color-accent: #64ffda;
}

.text-accent {
  color: var(--color-accent);
}

.text-accent-dark {
  color: var(--color-accent-dark);
}
</style>
