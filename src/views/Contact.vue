<template>
  <div class="section-container min-h-screen py-20">
    <h2 class="text-3xl font-bold mb-8 text-accent text-center">{{ $t('contact.title') }}</h2>
    <div class="max-w-2xl mx-auto">
      <p class="text-gray-500 dark:text-gray-100 mb-8 text-center">
        {{ $t('contact.getInTouch') }}
      </p>
      
      <form class="space-y-6 mb-12">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-500 dark:text-gray-100 mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full px-4 py-2 bg-primary dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:border-accent text-gray-500 dark:text-gray-100"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-500 dark:text-gray-100 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-4 py-2 bg-primary dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:border-accent text-gray-500 dark:text-gray-100"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-500 dark:text-gray-100 mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="w-full px-4 py-2 bg-primary dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:border-accent text-gray-500 dark:text-gray-100"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full px-4 py-2 bg-accent hover:bg-accent/80 focus:outline-none font-bold text-gray-100 dark:text-gray-700 rounded-md transition-all duration-300 border-0 hover:border-0"
        >
          {{ $t('contact.send') }}
        </button>
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
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.section-container {
  @apply container mx-auto px-4;
}

.btn-primary {
  @apply bg-accent text-gray-900 font-medium px-6 py-2 rounded-md hover:bg-accent/80 transition-colors;
}
</style>
