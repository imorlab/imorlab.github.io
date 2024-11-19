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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Frontend -->
        <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon icon="heroicons:computer-desktop" class="w-6 h-6 text-accent" />
            {{ $t('skills.frontend') }}
          </h2>
          <ul class="space-y-2">
            <li>
              <Icon icon="logos:html-5" class="w-6 h-6" />
              <span>HTML5</span>
            </li>
            <li>
              <Icon icon="logos:css-3" class="w-6 h-6" />
              <span>CSS3</span>
            </li>
            <li>
              <Icon icon="logos:javascript" class="w-6 h-6" />
              <span>JavaScript</span>
            </li>
            <li>
              <Icon icon="logos:vue" class="w-6 h-6" />
              <span>Vue.js</span>
            </li>
          </ul>
        </div>

        <!-- Backend -->
        <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon icon="heroicons:server" class="w-6 h-6 text-accent" />
            {{ $t('skills.backend') }}
          </h2>
          <ul class="space-y-2">
            <li>
              <Icon icon="logos:php" class="w-6 h-6" />
              <span>PHP</span>
            </li>
            <li>
              <Icon icon="logos:laravel" class="w-6 h-6" />
              <span>Laravel</span>
            </li>
            <li>
              <Icon icon="logos:mysql" class="w-6 h-6" />
              <span>MySQL</span>
            </li>
          </ul>
        </div>

        <!-- Database -->
        <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon icon="heroicons:circle-stack" class="w-6 h-6 text-accent" />
            {{ $t('skills.database') }}
          </h2>
          <ul class="space-y-2">
            <li>
              <Icon icon="logos:mysql" class="w-6 h-6" />
              <span>MySQL</span>
            </li>
          </ul>
        </div>

        <!-- Tools -->
        <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon icon="heroicons:wrench" class="w-6 h-6 text-accent" />
            {{ $t('skills.tools') }}
          </h2>
          <ul class="space-y-2">
            <li>
              <Icon icon="logos:git-icon" class="w-6 h-6" />
              <span>Git</span>
            </li>
            <li>
              <Icon icon="logos:github-icon" class="w-6 h-6" />
              <span>GitHub</span>
            </li>
            <li>
              <Icon icon="logos:postman-icon" class="w-6 h-6" />
              <span>Postman</span>
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
.section-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.skill-card {
  @apply bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300;
}

.skill-header {
  @apply flex items-center gap-3 mb-6 pb-4 border-b border-accent/20;
}

.skill-content {
  @apply p-2;
}

.skill-grid {
  @apply grid grid-cols-2 gap-6;
}

.skill-item {
  @apply flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/30 
         hover:bg-secondary/50 hover:scale-105 transition-all duration-300;
}

.skill-icon {
  @apply w-12 h-12;
}

.soft-skills-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6;
}

.soft-skill-item {
  @apply flex flex-col items-center gap-3 p-4 text-center rounded-lg 
         bg-secondary/30 hover:bg-secondary/50 transition-all duration-300;
}

.soft-skill-icon {
  @apply w-16 h-16 flex items-center justify-center rounded-full 
         bg-accent/10 text-accent group-hover:bg-accent/20 transition-all duration-300;
}

.soft-skill-item span {
  @apply text-sm text-gray-300;
}
</style>
