<template>
  
  <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-16 relative">
    
    <div class="w-full max-w-6xl mx-auto relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div class="z-10 order-2 md:order-1">
          <div class="max-w-4xl mx-auto text-center md:text-left overflow-hidden -translate-y-32 sm:translate-y-0">            
            <div ref="greetingRef" class="overflow-hidden">
              <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span class="text-gray-500 dark:text-gray-100 inline-block">{{ $t('home.greeting') }}</span>
                <span class="text-accent block mt-2">Israel Moreno</span>
              </h1>
            </div>
            <div ref="roleRef" class="overflow-hidden">
              <p class="text-xl sm:text-2xl text-gray-500 dark:text-gray-100 mb-8">{{ $t('home.role') }}</p>
            </div>
            <div ref="descriptionRef" class="overflow-hidden">
              <p class="text-lg text-gray-500 dark:text-gray-300 mb-12">
                <span>{{ fullText }}</span>
                <span class="inline-block w-0.5 h-5 bg-accent animate-cursor-blink ml-0.5 -mb-0.5"></span>
              </p>
            </div>
            <div ref="buttonsRef" class="flex flex-wrap gap-4 justify-center md:justify-start opacity-0">
              <RouterLink
                to="/about"
                class="inline-flex items-center px-6 py-3 
                       border-2 border-accent
                       text-accent hover:text-gray-300 dark:hover:text-gray-700
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
                       text-gray-300 dark:text-gray-700 hover:text-accent dark:hover:text-accent
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
            <div class="opacity-50 shadow-accent/50">
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
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import gsap from 'gsap'

const { t, locale } = useI18n()

const greetingRef = ref(null)
const roleRef = ref(null)
const descriptionRef = ref(null)
const buttonsRef = ref(null)

const fullText = ref('')
const phrases = {
  es: {
    base: 'Me apasiona el universo de',
    variations: [
      ' la programación web',
      'l diseño web',
      'l desarrollo web',
      ' la tecnología en general'
    ]
  },
  en: {
    base: 'I love the universe of',
    variations: [
      ' web programming',
      ' web design',
      ' web development',
      ' technology in general'
    ]
  }
}
let currentPhraseIndex = 0
let isDeleting = false
let typeSpeed = 100
let pauseEnd = 2000
let isInitialText = true

const getCurrentTexts = () => {
  return phrases[locale.value] || phrases.en
}

const typeNextText = () => {
  const currentTexts = getCurrentTexts()
  const currentPhrase = isInitialText ? currentTexts.base : currentTexts.variations[currentPhraseIndex]
  
  if (isDeleting && !isInitialText) {
    if (fullText.value === currentTexts.base) {
      isDeleting = false
      currentPhraseIndex = (currentPhraseIndex + 1) % currentTexts.variations.length
      setTimeout(typeNextText, pauseEnd)
      return
    }
    fullText.value = fullText.value.slice(0, -1)
  } else {
    const targetText = isInitialText ? currentPhrase : currentTexts.base + currentPhrase
    if (fullText.value.length < targetText.length) {
      fullText.value = targetText.slice(0, fullText.value.length + 1)
    }
    
    if (isInitialText && fullText.value === currentTexts.base) {
      isInitialText = false
      setTimeout(typeNextText, typeSpeed)
      return
    }
    
    if (!isInitialText && fullText.value === currentTexts.base + currentPhrase) {
      isDeleting = true
      setTimeout(typeNextText, pauseEnd)
      return
    }
  }

  let nextSpeed = typeSpeed
  if (isDeleting) nextSpeed = typeSpeed / 2

  setTimeout(typeNextText, nextSpeed)
}

// Reiniciar animación cuando cambie el idioma
watch(locale, () => {
  fullText.value = ''
  isInitialText = true
  isDeleting = false
  currentPhraseIndex = 0
  setTimeout(typeNextText, 500)
})

onMounted(() => {
  setTimeout(typeNextText, 1000)

  const tl = gsap.timeline()
  tl.from(greetingRef.value, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  })
  .from(roleRef.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.5')
  .from(descriptionRef.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.5')
  .to(buttonsRef.value, {
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.5')
})
</script>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-cursor-blink {
  animation: cursor-blink 1s infinite;
}
</style>