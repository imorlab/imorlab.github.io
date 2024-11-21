<template>
  <div class="section-container min-h-screen py-20">
    <h2 class="text-3xl font-bold mb-8 text-accent text-center">{{ $t('contact.title') }}</h2>
    <div class="max-w-2xl mx-auto">
      <p class="text-gray-300 mb-8 text-center">
        {{ $t('contact.getInTouch') }}
      </p>
      
      <form class="space-y-6 mb-12">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-300 mb-2">{{ $t('contact.name') }}</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-md focus:outline-none focus:border-accent text-gray-100"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">{{ $t('contact.email') }}</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-md focus:outline-none focus:border-accent text-gray-100"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-300 mb-2">{{ $t('contact.message') }}</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-md focus:outline-none focus:border-accent text-gray-100"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="btn-primary w-full"
        >
          {{ $t('contact.send') }}
        </button>
      </form>

      <!-- Social Media Section -->
      <div class="text-center">
        <h3 class="text-xl font-semibold mb-6 text-accent">{{ $t('contact.socialMedia') }}</h3>
        <div class="flex justify-center items-center space-x-6">
          <a href="https://github.com/imorlab" target="_blank" rel="noopener noreferrer" 
             class="text-gray-400 hover:text-accent transition-colors">
            <Icon icon="logos:github-icon" class="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/israelmorenolabrador/" target="_blank" rel="noopener noreferrer"
             class="text-gray-400 hover:text-accent transition-colors">
            <Icon icon="logos:linkedin-icon" class="w-8 h-8" />
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
