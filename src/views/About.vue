<template>
  <div class="min-h-[calc(100vh-4rem)] pt-16">
    <div class="section-container py-20 relative z-10">
      <h1 class="text-4xl font-bold text-center mb-16">
        Sobre <span class="text-accent">Mí</span>
      </h1>

      <div class="grid lg:grid-cols-1 gap-12">
        <!-- Profile Section -->
        <div class="space-y-8">
          <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:user" class="w-8 h-8 text-accent" />
              {{ $t('about.title') }}
            </h2>
            <div class="space-y-4">
              <p class="text-gray-300">{{ $t('about.intro') }}</p>
              <p class="text-gray-300">{{ $t('about.description') }}</p>
            </div>
          </div>

          <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:academic-cap" class="w-8 h-8 text-accent" />
              Educación
            </h2>
            <div class="space-y-4">
              <div class="border-l-2 border-accent pl-4">
                <h3 class="font-semibold text-accent">Ingeniería en Sistemas Computacionales</h3>
                <p class="text-gray-400">Universidad Tecnológica de México</p>
                <p class="text-sm text-gray-500">2018 - 2022</p>
              </div>
              <!-- Puedes agregar más educación aquí -->
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <div class="space-y-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">3+</span>
                <span class="text-sm text-gray-300 mt-2">{{ $t('about.experience.years') }}</span>
              </div>
            </div>
            <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">20+</span>
                <span class="text-sm text-gray-300 mt-2">{{ $t('about.experience.projects') }}</span>
              </div>
            </div>
            <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">15+</span>
                <span class="text-sm text-gray-300 mt-2">{{ $t('about.experience.technologies') }}</span>
              </div>
            </div>
            <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">5+</span>
                <span class="text-sm text-gray-300 mt-2">{{ $t('about.experience.development') }}</span>
              </div>
            </div>
          </div>

          <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:briefcase" class="w-8 h-8 text-accent" />
              Experiencia Profesional
            </h2>
            <div class="space-y-6">
              <div class="border-l-2 border-accent pl-4">
                <h3 class="font-semibold text-accent">Desarrollador Web Full Stack</h3>
                <p class="text-gray-400">Empresa Actual</p>
                <p class="text-sm text-gray-500">2021 - Presente</p>
                <ul class="mt-2 space-y-2 text-gray-300">
                  <li class="flex items-start gap-2">
                    <Icon icon="heroicons:chevron-right" class="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>Desarrollo de aplicaciones web utilizando Vue.js y Laravel</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Icon icon="heroicons:chevron-right" class="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>Implementación de APIs RESTful y optimización de bases de datos</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Icon icon="heroicons:chevron-right" class="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>Colaboración en equipos ágiles y gestión de proyectos</span>
                  </li>
                </ul>
              </div>
              <!-- Puedes agregar más experiencia aquí -->
            </div>
          </div>

          <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Icon icon="heroicons:heart" class="w-8 h-8 text-accent" />
              Intereses
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center gap-3 text-gray-300">
                <Icon icon="heroicons:code-bracket" class="w-6 h-6 text-accent" />
                <span>Nuevas Tecnologías</span>
              </div>
              <div class="flex items-center gap-3 text-gray-300">
                <Icon icon="heroicons:puzzle-piece" class="w-6 h-6 text-accent" />
                <span>Resolución de Problemas</span>
              </div>
              <div class="flex items-center gap-3 text-gray-300">
                <Icon icon="heroicons:book-open" class="w-6 h-6 text-accent" />
                <span>Aprendizaje Continuo</span>
              </div>
              <div class="flex items-center gap-3 text-gray-300">
                <Icon icon="heroicons:globe-alt" class="w-6 h-6 text-accent" />
                <span>Desarrollo Web</span>
              </div>
            </div>
          </div>

          <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Icon icon="heroicons:chart-bar" class="w-8 h-8 text-accent" />
              {{ $t('about.github.title') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                :src="'https://github-readme-stats.vercel.app/api/top-langs/?username=imorlab&layout=compact&theme=dark&hide_border=true&title_color=64ffda&text_color=ffffff&bg_color=242424'" 
                :alt="$t('about.github.languages')" 
                class="w-full rounded-lg"
              />
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
</style>
