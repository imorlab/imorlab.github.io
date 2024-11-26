<template>
  <div class="section-container min-h-screen py-20">
    <h2 class="text-3xl font-bold mb-8 text-accent text-center">{{ $t('contact.title') }}</h2>
    <div class="max-w-2xl mx-auto">
      <p class="text-gray-500 dark:text-gray-100 mb-8 text-center">
        {{ $t('contact.getInTouch') }}
      </p>
      
      <form @submit="sendEmail" class="space-y-6 mb-12">
        <div>
          <label for="from_name" class="block text-sm font-medium text-gray-500 dark:text-gray-100 mb-2">Nombre</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            class="w-full px-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:border-accent text-gray-500 dark:text-gray-100"
            required
          />
        </div>

        <div>
          <label for="user_email" class="block text-sm font-medium text-gray-500 dark:text-gray-100 mb-2">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            class="w-full px-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:border-accent text-gray-500 dark:text-gray-100"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-500 dark:text-gray-100 mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="w-full px-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:border-accent text-gray-500 dark:text-gray-100"
            required
          ></textarea>
        </div>

        <!-- Campo oculto para el destinatario -->
        <input type="hidden" name="to_name" value="Israel" />

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-accent hover:bg-accent/90 text-white dark:text-gray-700 font-bold py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 border-0 hover:border-0 focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
        </button>

        <!-- Notificaciones -->
        <Transition
          enter-active-class="transform transition duration-300 ease-out"
          enter-from-class="translate-y-2 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transform transition duration-200 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-2 opacity-0"
        >
          <div v-if="success" class="fixed bottom-8 right-8 flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>¡Mensaje enviado correctamente!</span>
          </div>
        </Transition>

        <Transition
          enter-active-class="transform transition duration-300 ease-out"
          enter-from-class="translate-y-2 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transform transition duration-200 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-2 opacity-0"
        >
          <div v-if="error" class="fixed bottom-8 right-8 flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Error al enviar el mensaje. Inténtalo de nuevo.</span>
          </div>
        </Transition>
      </form>

      <div class="mt-12">
        <h3 class="text-xl font-semibold mb-4 text-accent">Redes Sociales</h3>
        <div class="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/israelmorenolabrador/" target="_blank" rel="noopener noreferrer" 
             class="flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-accent transition-colors duration-300">
              <span class="p-2 rounded-lg bg-accent/10">
                <img src="@/assets/images/logos/linkedin-black.svg" alt="LinkedIn" class="w-6 h-6 block dark:hidden" />
                <img src="@/assets/images/logos/linkedin-white.svg" alt="LinkedIn" class="w-6 h-6 hidden dark:block" />
              </span>
            LinkedIn
          </a>
          <a href="https://github.com/imorlab" target="_blank" rel="noopener noreferrer" 
             class="flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-accent transition-colors duration-300">
              <span class="p-2 rounded-lg bg-accent/10">
                <img src="@/assets/images/logos/github-mark.svg" alt="GitHub" class="w-6 h-6 block dark:hidden" />
                <img src="@/assets/images/logos/github-mark-white.svg" alt="GitHub" class="w-6 h-6 hidden dark:block" />
              </span>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import emailjs from '@emailjs/browser'

const loading = ref(false)
const success = ref(false)
const error = ref(false)
let timeoutId = null

const hideNotification = () => {
  timeoutId = setTimeout(() => {
    success.value = false
    error.value = false
  }, 3000)
}

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})

const sendEmail = async (e) => {
  e.preventDefault()
  loading.value = true
  error.value = false
  success.value = false

  try {
    await emailjs.sendForm(
      'service_bs109yc',
      'template_sg3d8xe',
      e.target,
      '1z-391vu4fYG3oFlt'
    )
    success.value = true
    hideNotification()
    e.target.reset()
  } catch (err) {
    console.error('Error:', err)
    error.value = true
    hideNotification()
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.section-container {
  @apply container mx-auto px-4;
}

.btn-primary {
  @apply bg-accent text-gray-900 font-medium px-6 py-2 rounded-md hover:bg-accent/80 transition-colors;
}

@keyframes check {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.animate-check {
  animation: check 0.5s ease-in-out;
}
</style>
