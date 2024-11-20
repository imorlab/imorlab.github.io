<template>
  <div class="min-h-screen bg-primary relative overflow-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0">
      <div class="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-accent/8 rounded-full blur-3xl animate-pulse [animation-delay:4s]"></div>
    </div>

    <!-- Hero Section -->
    <div class="min-h-[90vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Text Content -->
          <div class="z-10">
            <div class="max-w-4xl mx-auto text-center md:text-left">
              <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span class="text-gray-300">{{ $t('home.greeting') }}</span>
                <span class="text-accent block mt-2">Israel Moreno</span>
              </h1>
              <p class="text-xl sm:text-2xl text-gray-300 mb-8">{{ $t('home.role') }}</p>
              <p class="text-lg text-gray-400 mb-12">{{ $t('home.description') }}</p>
              <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                <RouterLink
                  to="/about"
                  class="inline-flex items-center px-6 py-3 
                         border-2 border-accent
                         text-accent hover:text-primary
                         bg-transparent hover:bg-accent
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
                         text-primary hover:text-accent
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
          <div class="flex justify-center z-10">
            <div class="relative group">
              <!-- Profile photo with glass effect -->
              <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden 
                          bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm
                          border-2 border-accent/20 group-hover:border-accent/40
                          transition-all duration-300 ease-in-out
                          flex items-center justify-center
                          shadow-lg shadow-accent/10 group-hover:shadow-accent/20">
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
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>