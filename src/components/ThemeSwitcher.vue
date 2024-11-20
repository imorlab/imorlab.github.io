<template>
  <div>
    <button
      @click="toggleTheme"
      class="flex items-center justify-center w-10 h-10 rounded-lg
            transition-all duration-300 text-xl cursor-pointer"
      :class="[
        isDark
          ? 'bg-primary hover:bg-primary/80'
          : 'bg-white hover:bg-gray-100'
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
  } else {
    root.classList.remove('dark')
  }
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
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
