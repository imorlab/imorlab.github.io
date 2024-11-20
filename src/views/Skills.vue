<template>
  <div class="min-h-screen bg-primary relative overflow-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0">
      <div class="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-accent/5 rounded-full blur-3xl"></div>
      <div class="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-accent/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
      <h1 class="text-4xl font-bold mb-12 flex items-center gap-3">
        <Icon icon="heroicons:wrench-screwdriver" class="w-10 h-10 text-accent" />
        {{ $t('skills.title') }}
      </h1>

      <!-- Soft Skills Row -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col items-center text-center">
          <Icon icon="heroicons:chat-bubble-left-right" class="w-8 h-8 text-accent mb-2" />
          <span class="text-sm">{{ $t('skills.communication') }}</span>
        </div>
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col items-center text-center">
          <Icon icon="heroicons:user-group" class="w-8 h-8 text-accent mb-2" />
          <span class="text-sm">{{ $t('skills.teamwork') }}</span>
        </div>
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col items-center text-center">
          <Icon icon="heroicons:light-bulb" class="w-8 h-8 text-accent mb-2" />
          <span class="text-sm">{{ $t('skills.problemSolving') }}</span>
        </div>
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col items-center text-center">
          <Icon icon="heroicons:clock" class="w-8 h-8 text-accent mb-2" />
          <span class="text-sm">{{ $t('skills.timeManagement') }}</span>
        </div>
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col items-center text-center">
          <Icon icon="heroicons:academic-cap" class="w-8 h-8 text-accent mb-2" />
          <span class="text-sm">{{ $t('skills.continuousLearning') }}</span>
        </div>
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col items-center text-center">
          <Icon icon="heroicons:adjustments-horizontal" class="w-8 h-8 text-accent mb-2" />
          <span class="text-sm">{{ $t('skills.adaptability') }}</span>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Frontend -->
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon icon="heroicons:computer-desktop" class="w-6 h-6 text-accent" />
            {{ $t('skills.frontend') }}
          </h2>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <Icon icon="logos:html-5" class="w-6 h-6" />
              <span>HTML5</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:css-3" class="w-6 h-6" />
              <span>CSS3</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:javascript" class="w-6 h-6" />
              <span>JavaScript</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:vue" class="w-6 h-6" />
              <span>Vue.js</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:tailwindcss-icon" class="w-6 h-6" />
              <span>Tailwind CSS</span>
            </li>
          </ul>
        </div>

        <!-- Backend -->
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon icon="heroicons:server" class="w-6 h-6 text-accent" />
            {{ $t('skills.backend') }}
          </h2>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <Icon icon="logos:php" class="w-6 h-6" />
              <span>PHP</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:laravel" class="w-6 h-6" />
              <span>Laravel</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:nodejs-icon" class="w-6 h-6" />
              <span>Node.js</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:python" class="w-6 h-6" />
              <span>Python</span>
            </li>
          </ul>
        </div>

        <!-- Database -->
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon icon="heroicons:circle-stack" class="w-6 h-6 text-accent" />
            {{ $t('skills.database') }}
          </h2>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <Icon icon="logos:mysql" class="w-6 h-6" />
              <span>MySQL</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:postgresql" class="w-6 h-6" />
              <span>PostgreSQL</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:mongodb-icon" class="w-6 h-6" />
              <span>MongoDB</span>
            </li>
          </ul>
        </div>

        <!-- Tools -->
        <div class="bg-accent-10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon icon="heroicons:wrench" class="w-6 h-6 text-accent" />
            {{ $t('skills.tools') }}
          </h2>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <Icon icon="logos:git-icon" class="w-6 h-6" />
              <span>Git</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:docker-icon" class="w-6 h-6" />
              <span>Docker</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:aws" class="w-6 h-6" />
              <span>AWS</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.soft-skill-icon {
  @apply w-16 h-16 flex items-center justify-center rounded-full
         bg-accent-10 text-accent group-hover:bg-accent-20 transition-all duration-300;
}

.skill-item {
  @apply flex items-center gap-4 p-4 rounded-lg
         bg-accent-10 hover:bg-accent-20
         transition-all duration-300;
}
</style>
