import { ref, onMounted, onUnmounted } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  const updateTheme = () => {
    isDark.value = document.documentElement.classList.contains('dark')
    console.log('Theme updated:', isDark.value ? 'dark' : 'light')
  }

  onMounted(() => {
    updateTheme()
    
    // Watch for changes in the dark mode class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateTheme()
        }
      })
    })

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    // Cleanup
    onUnmounted(() => {
      observer.disconnect()
    })
  })

  return {
    isDark
  }
}
