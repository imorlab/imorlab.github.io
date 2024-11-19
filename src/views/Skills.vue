<template>
  <div class="min-h-screen bg-primary relative overflow-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0">
      <div class="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-accent/5 rounded-full blur-3xl"></div>
      <div class="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-accent/5 rounded-full blur-3xl"></div>
    </div>

    <div class="section-container py-20 relative z-10">
      <h1 class="text-4xl font-bold text-center mb-16">
        <span class="text-accent">Mis</span> Habilidades
      </h1>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Soft Skills -->
        <div class="skill-card md:col-span-2 lg:col-span-3">
          <div class="skill-header">
            <Icon icon="heroicons:user-group" class="w-8 h-8 text-accent" />
            <h2 class="text-xl font-semibold">Soft Skills</h2>
          </div>
          <div class="soft-skills-grid">
            <div class="soft-skill-item group">
              <div class="soft-skill-icon">
                <Icon icon="heroicons:light-bulb" class="w-8 h-8" />
              </div>
              <span>Resolución de Problemas</span>
            </div>
            <div class="soft-skill-item group">
              <div class="soft-skill-icon">
                <Icon icon="heroicons:chat-bubble-left-right" class="w-8 h-8" />
              </div>
              <span>Comunicación Efectiva</span>
            </div>
            <div class="soft-skill-item group">
              <div class="soft-skill-icon">
                <Icon icon="heroicons:clock" class="w-8 h-8" />
              </div>
              <span>Gestión del Tiempo</span>
            </div>
            <div class="soft-skill-item group">
              <div class="soft-skill-icon">
                <Icon icon="heroicons:users" class="w-8 h-8" />
              </div>
              <span>Trabajo en Equipo</span>
            </div>
            <div class="soft-skill-item group">
              <div class="soft-skill-icon">
                <Icon icon="heroicons:academic-cap" class="w-8 h-8" />
              </div>
              <span>Aprendizaje Continuo</span>
            </div>
            <div class="soft-skill-item group">
              <div class="soft-skill-icon">
                <Icon icon="heroicons:puzzle-piece" class="w-8 h-8" />
              </div>
              <span>Pensamiento Analítico</span>
            </div>
          </div>
        </div>
        <!-- Frontend Development -->
        <div class="skill-card">
          <div class="skill-header">
            <Icon icon="heroicons:code-bracket-square" class="w-8 h-8 text-accent" />
            <h2 class="text-xl font-semibold">Frontend Development</h2>
          </div>
          <div class="skill-content">
            <div class="skill-grid">
              <div class="skill-item">
                <Icon icon="logos:html-5" class="skill-icon" />
                <span>HTML5</span>
              </div>
              <div class="skill-item">
                <Icon icon="logos:css-3" class="skill-icon" />
                <span>CSS3</span>
              </div>
              <div class="skill-item">
                <Icon icon="logos:javascript" class="skill-icon" />
                <span>JavaScript</span>
              </div>
              <div class="skill-item">
                <Icon icon="logos:vue" class="skill-icon" />
                <span>Vue.js</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CSS Frameworks -->
        <div class="skill-card">
          <div class="skill-header">
            <Icon icon="heroicons:paint-brush" class="w-8 h-8 text-accent" />
            <h2 class="text-xl font-semibold">CSS Frameworks</h2>
          </div>
          <div class="skill-content">
            <div class="skill-grid">
              <div class="skill-item">
                <Icon icon="logos:bootstrap" class="skill-icon" />
                <span>Bootstrap</span>
              </div>
              <div class="skill-item">
                <Icon icon="logos:tailwindcss-icon" class="skill-icon" />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Development -->
        <div class="skill-card">
          <div class="skill-header">
            <Icon icon="heroicons:server" class="w-8 h-8 text-accent" />
            <h2 class="text-xl font-semibold">Backend Development</h2>
          </div>
          <div class="skill-content">
            <div class="skill-grid">
              <div class="skill-item">
                <Icon icon="logos:php" class="skill-icon" />
                <span>PHP</span>
              </div>
              <div class="skill-item">
                <Icon icon="logos:laravel" class="skill-icon" />
                <span>Laravel</span>
              </div>
              <div class="skill-item">
                <Icon icon="logos:mysql" class="skill-icon" />
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Development Tools -->
        <div class="skill-card">
          <div class="skill-header">
            <Icon icon="heroicons:wrench-screwdriver" class="w-8 h-8 text-accent" />
            <h2 class="text-xl font-semibold">Development Tools</h2>
          </div>
          <div class="skill-content">
            <div class="skill-grid">
              <div class="skill-item">
                <Icon icon="logos:git-icon" class="skill-icon" />
                <span>Git</span>
              </div>
              <div class="skill-item">
                <Icon icon="logos:github-icon" class="skill-icon" />
                <span>GitHub</span>
              </div>
              <div class="skill-item">
                <Icon icon="logos:postman-icon" class="skill-icon" />
                <span>Postman</span>
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
