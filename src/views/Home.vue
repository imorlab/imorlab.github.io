<template>
  <div class="min-h-screen relative bg-primary overflow-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0">
      <div class="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-accent/5 rounded-full blur-3xl"></div>
      <div class="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-accent/5 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-accent/3 rounded-full blur-3xl"></div>
    </div>

    <!-- Hero Section -->
    <div class="section-container min-h-[90vh] flex items-center relative">
      <div class="relative grid md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div class="order-2 md:order-1 z-10">
          <h1 class="text-4xl sm:text-6xl font-bold mb-4">
            <span class="text-accent">Hola, soy</span>
            <div class="mt-2">Israel Moreno</div>
          </h1>
          <p class="text-xl sm:text-2xl text-gray-300 mb-6">
            Desarrollador Web Full Stack
          </p>
          <p class="text-gray-400 mb-8 text-lg max-w-lg">
            Especializado en crear experiencias web únicas y funcionales.
            Transformando ideas en realidad digital con pasión por la innovación
            y el diseño limpio.
          </p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/projects" 
              class="btn-primary flex items-center gap-2 group">
              Ver Proyectos
              <svg xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
            <router-link to="/contact" 
              class="nav-link border border-accent px-6 py-2 rounded-md hover:bg-accent/10 transition-colors duration-300">
              Contactar
            </router-link>
          </div>

          <!-- Social Links -->
          <div class="mt-12">
            <div class="flex items-center gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer"
                class="text-gray-400 hover:text-accent transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                class="text-gray-400 hover:text-accent transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                class="text-gray-400 hover:text-accent transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="order-1 md:order-2 flex justify-center z-10">
          <div class="relative group">
            <!-- Profile photo with glass effect -->
            <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden 
                        bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm
                        border border-accent/20 shadow-lg shadow-accent/10
                        transition-all duration-300 group-hover:shadow-accent/20">
              <img 
                src="@/assets/images/Image.jpg" 
                alt="Israel Moreno"
                class="w-full h-full object-cover opacity-90 group-hover:opacity-100 
                       scale-105 group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <!-- Decorative rings -->
            <div class="absolute -inset-4 rounded-full border border-accent/20 opacity-50
                        rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
            <div class="absolute -inset-8 rounded-full border border-accent/10 opacity-30
                        -rotate-45 group-hover:-rotate-90 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technologies Section -->
    <div class="section-container py-20 relative z-10">
      <h2 class="text-2xl font-semibold text-center mb-12 text-accent">Tecnologías con las que trabajo</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div v-for="tech in technologies" :key="tech.name"
          class="flex flex-col items-center p-4 rounded-lg bg-secondary/50 backdrop-blur-sm
                 hover:bg-secondary hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          <Icon 
            :icon="tech.icon" 
            class="w-12 h-12 mb-3"
            :style="{ color: tech.color }"
          />
          <span class="text-sm text-gray-300">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const technologies = [
  { 
    name: 'PHP', 
    icon: 'logos:php',
    color: '#777bb3'
  },
  { 
    name: 'Laravel', 
    icon: 'logos:laravel',
    color: '#ff2d20'
  },
  { 
    name: 'MySQL', 
    icon: 'logos:mysql',
    color: '#00758f'
  },
  { 
    name: 'Git', 
    icon: 'logos:git-icon',
    color: '#f05032'
  },
  {
    name: 'GitHub',
    icon: 'logos:github-icon',
    color: '#333333'
  },
  { 
    name: 'Bootstrap', 
    icon: 'logos:bootstrap',
    color: '#7952b3'
  },
  { 
    name: 'Tailwind', 
    icon: 'logos:tailwindcss-icon',
    color: '#38b2ac'
  },
  { 
    name: 'JavaScript', 
    icon: 'logos:javascript',
    color: '#f7df1e'
  },
  { 
    name: 'Vue.js', 
    icon: 'logos:vue',
    color: '#42b883'
  },
  {
    name: 'html5',
    icon: 'logos:html-5',
    color: '#e34f26'
  },
  {
    name: 'css3',
    icon: 'logos:css-3',
    color: '#1572b6'
  },
  {
    name: 'postman',
    icon: 'logos:postman-icon',
    color: '#ff6c37'
  },
]
</script>

<style scoped>
.btn-primary {
  @apply px-6 py-2 bg-accent text-primary font-semibold rounded-md 
         hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/20;
}

.btn-primary:hover svg {
  @apply translate-x-1;
}

/* Estilos adicionales para mejorar la integración */
.section-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
