<template>
  <div class="min-h-screen bg-primary relative overflow-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0">
      <div class="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-accent/5 rounded-full blur-3xl"></div>
      <div class="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-accent/5 rounded-full blur-3xl"></div>
    </div>

    <div class="section-container py-20 relative z-10">
      <h1 class="text-4xl font-bold text-center mb-16">
        Sobre <span class="text-accent">Mí</span>
      </h1>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Profile Section -->
        <div class="space-y-8">
          <div class="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:user-circle" class="w-8 h-8 text-accent" />
              Perfil Profesional
            </h2>
            <p class="text-gray-300 leading-relaxed">
              Soy un desarrollador web full-stack apasionado por crear experiencias digitales excepcionales. 
              Con experiencia en tecnologías frontend y backend, me especializo en construir aplicaciones web 
              modernas y escalables utilizando Vue.js, PHP y Laravel.
            </p>
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
            <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
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
