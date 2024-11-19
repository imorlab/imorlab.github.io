<template>
  <div>
    <button
      @click="toggleTheme"
      class="flex items-center justify-center w-10 h-10 rounded-lg
             border-2 transition-all duration-300 text-xl"
      :class="[
        isDark
          ? 'bg-primary'
          : 'bg-white'
      ]"
      :aria-label="$t('theme.switch')"
    >
      <span v-if="isDark">🌙</span>
      <span v-else>☀️</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
