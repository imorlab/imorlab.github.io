<template>
  <div class="section-container min-h-screen py-20 flex flex-col items-center justify-center px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-accent mb-4">{{ $t('projects.title') }}</h2>
      <p class="text-xl text-gray-400 mb-2">{{ $t('projects.experience') }}</p>
      <p class="text-lg text-gray-400">{{ $t('projects.description') }}</p>
    </div>

    <!-- MacBook Animation Container -->
    <div class="relative w-full max-w-3xl mx-auto">
      <!-- MacBook Body -->
      <div class="bg-gray-800 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <!-- Screen Bezel -->
        <div class="bg-gray-900 rounded-t-xl p-2">
          <!-- Screen Content -->
          <div class="bg-gray-950 rounded overflow-hidden aspect-video relative">
            <!-- Terminal Window -->
            <div class="absolute inset-0 p-4 font-mono text-sm">
              <!-- Terminal Header -->
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="ml-4 text-gray-400">~/portfolio/projects</div>
              </div>
              <!-- Professional Experience -->
              <div class="space-y-2">
                <div class="flex items-center text-accent">
                  <span class="mr-2">$</span>
                  <span class="typing-text">ls professional-experience/</span>
                </div>
                <div class="text-gray-400 pl-4">
                  {{ $t('projects.professionalWork') }}
                </div>
                <!-- Personal Projects -->
                <div class="flex items-center text-accent mt-4">
                  <span class="mr-2">$</span>
                  <span class="typing-text-2">ls personal-projects/</span>
                </div>
                <div class="text-gray-400 pl-4">
                  {{ $t('projects.personalProjects') }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- MacBook Bottom -->
        <div class="bg-gray-800 h-4 rounded-b-2xl relative">
          <div class="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-gray-700 rounded-t-lg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Primera animación de typing
  gsap.from('.typing-text', {
    width: 0,
    duration: 1.5,
    ease: 'steps(25)',
    delay: 0.5
  })

  // Segunda animación de typing
  gsap.from('.typing-text-2', {
    width: 0,
    duration: 1.5,
    ease: 'steps(20)',
    delay: 2
  })
})
</script>

<style scoped>
.typing-text, .typing-text-2 {
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid;
  white-space: nowrap;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: currentColor }
}
</style>
