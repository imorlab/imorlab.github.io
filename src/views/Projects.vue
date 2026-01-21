<template>
  <div class="min-h-[calc(100vh-4rem)] py-16">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-accent mb-4"><span class="text-white">Mis </span>{{ $t('projects.title') }}</h1>
    </div>

    <!-- Proyectos Principales (primeros 2) -->
    <div class="relative flex flex-col items-center justify-center px-4 space-y-16 overflow-x-hidden">
      <div
        v-for="(project, index) in mainProjects"
        :key="project.id"
        class="bg-gray-800/10 dark:bg-gray-500/10 p-4 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] transform"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- MacBook Pro Container -->
          <div
            class="relative w-full max-w-4xl mx-auto perspective"
            :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
          >
            <div class="macbook">
              <div class="screen-container">
                <div class="notch"><div class="camera"></div></div>
                <div class="screen overflow-hidden relative">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="hidden md:block relative" style="transform: scale(0.27);">
                      <iframe
                        :src="project.url"
                        class="hidden md:block w-[1920px] h-[1130px] border-0"
                        style="transform-origin: 0 0;"
                        allowfullscreen
                        loading="lazy"
                        :title="project.title"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      ></iframe>
                    </div>
                    <div class="md:hidden relative w-full h-full">
                      <img :src="getImageUrl(project.image)" :alt="project.title" class="w-full h-full object-cover object-top">
                    </div>
                  </div>
                </div>
              </div>
              <div class="base">
                <div class="base-top"></div>
                <div class="base-bottom"></div>
              </div>
            </div>
          </div>

          <!-- Project Description -->
          <div
            class="flex flex-col text-center"
            :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
          >
            <span class="text-accent font-semibold">{{ project.company }}</span>
            <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-3">{{ project.title }}</h2>
            <p class="text-gray-600 dark:text-gray-300 text-lg mb-6">{{ project.description }}</p>
            <div class="flex justify-center gap-4 mt-auto pt-4">
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-transparent border border-accent hover:bg-accent hover:border-accent dark:hover:border-accent hover:text-gray-300 dark:hover:text-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
              >
                {{ $t('projects.visitSite') }}
              </a>
              <button
                @click="toggleDetails(project.id)"
                class="inline-block bg-gray-800/50 border border-accent hover:bg-accent hover:border-accent dark:hover:border-accent hover:text-gray-300 dark:hover:text-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
              >
                {{ expandedProjectId === project.id ? $t('projects.viewLess') : $t('projects.viewMore') }}
              </button>
            </div>
          </div>
        </div>

        <!-- Collapsible Details Section -->
        <transition name="expand">
          <div v-if="expandedProjectId === project.id" class="mt-8 pt-8 border-t border-gray-700/50 px-2 lg:px-4 text-left">
            <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">{{ project.long_description }}</p>
            <p v-if="project.long_description_2" class="text-gray-600 dark:text-gray-300 mb-6 text-lg">{{ project.long_description_2 }}</p>
            <p v-if="project.long_description_3" class="text-gray-600 dark:text-gray-300 mb-6 text-lg">{{ project.long_description_3 }}</p>
            <ul v-if="project.details" class="list-disc text-left pl-6 text-gray-600 dark:text-gray-300 mb-6 text-lg space-y-2">
              <li v-for="(detail, i) in project.details" :key="i">
                {{ detail }}
              </li>
            </ul>
            <div class="py-6 text-center">
              <h4 class="text-xl font-semibold text-gray-800 dark:text-white/80 mb-4">{{ $t('projects.technologiesUsed') }}</h4>
              <div class="flex flex-wrap gap-3 justify-center">
                <span v-for="tech in project.technologies" :key="tech" class="bg-accent/30 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Sección de Otros Proyectos -->
    <div v-if="otherProjects.length > 0" class="mt-24 px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">{{ $t('projects.otherProjects') }}</h2>
        <p class="text-gray-500 dark:text-gray-400">{{ $t('projects.otherProjectsDescription') }}</p>
      </div>

      <!-- Grid de 2 columnas para proyectos secundarios -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div
          v-for="project in otherProjects"
          :key="project.id"
          class="group bg-gray-800/10 dark:bg-gray-500/10 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] transform cursor-pointer"
          @click="goToProjectDetail(project.id)"
        >
          <!-- MacBook Pro Container Mini -->
          <div class="relative w-full perspective p-4 pb-0">
            <div class="macbook-mini">
              <div class="screen-container-mini">
                <div class="notch-mini"><div class="camera-mini"></div></div>
                <div class="screen-mini overflow-hidden relative">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <img 
                      :src="getImageUrl(project.image)" 
                      :alt="project.title" 
                      class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    >
                    <!-- Overlay con efecto hover -->
                    <div class="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500 flex items-center justify-center">
                      <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <span class="bg-white/90 dark:bg-gray-900/90 text-accent font-semibold px-6 py-3 rounded-full shadow-lg backdrop-blur-sm">
                          {{ $t('projects.viewDetails') }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="base-mini">
                <div class="base-top-mini"></div>
                <div class="base-bottom-mini"></div>
              </div>
            </div>
          </div>

          <!-- Project Description -->
          <div class="p-6 text-center">
            <span class="text-accent font-semibold text-sm">{{ project.company }}</span>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-accent transition-colors duration-300">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{{ project.description }}</p>
            
            <!-- Tech badges -->
            <div class="flex flex-wrap gap-2 justify-center">
              <span 
                v-for="tech in project.technologies?.slice(0, 3)" 
                :key="tech" 
                class="bg-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.technologies?.length > 3" 
                class="bg-gray-500/20 text-gray-500 dark:text-gray-400 text-xs font-medium px-3 py-1 rounded-full"
              >
                +{{ project.technologies.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: grid-template-rows 0.5s ease, opacity 0.5s ease;
  grid-template-rows: 1fr;
  opacity: 1;
}

.expand-enter-from,
.expand-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}
</style>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import gsap from 'gsap';

const { tm } = useI18n();
const router = useRouter();

// Separar proyectos principales (primeros 2) de los secundarios
const allProjects = computed(() => tm('projects.list'));
const mainProjects = computed(() => allProjects.value.slice(0, 2));
const otherProjects = computed(() => allProjects.value.slice(2));

const getImageUrl = (path) => {
  return new URL(`../${path}`, import.meta.url).href;
};

const expandedProjectId = ref(null);

const toggleDetails = (projectId) => {
  if (expandedProjectId.value === projectId) {
    expandedProjectId.value = null;
  } else {
    expandedProjectId.value = projectId;
  }
};

const goToProjectDetail = (projectId) => {
  router.push({ name: 'ProjectDetail', params: { id: projectId } });
};

onMounted(() => {
  // Animación del MacBook
  gsap.from('.macbook', {
    rotateX: 45,
    duration: 1.5,
    ease: 'power2.out'
  })

  // Animación de los MacBook mini
  gsap.from('.macbook-mini', {
    rotateX: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
    delay: 0.5
  })

  // Animaciones de typing
  gsap.from('.typing-text', {
    width: 0,
    duration: 1.5,
    ease: 'steps(25)',
    delay: 1
  })

  gsap.from('.typing-text-2', {
    width: 0,
    duration: 1.5,
    ease: 'steps(20)',
    delay: 2.5
  })
})
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}

.macbook {
  @apply relative w-full aspect-[16/10];
  transform-style: preserve-3d;
  transform: rotateX(5deg);
}

.screen-container {
  @apply relative w-full h-full bg-gray-800 rounded-[20px] p-[2%] shadow-2xl;
  border: 2px solid #2a2a2a;
  background: linear-gradient(to bottom, #424242, #363636);
}

.notch {
  @apply absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[10px] bg-gray-800 rounded-b-lg z-10;
  border: 2px solid #2a2a2a;
  border-top: none;
  background: linear-gradient(to bottom, #363636, #2a2a2a);
}

.camera {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full;
  background: #1a1a1a;
  box-shadow: inset 0 0 2px rgba(255,255,255,0.2);
}

.screen {
  @apply w-full h-full rounded-[10px] overflow-hidden;
  @apply bg-gray-950 dark:bg-gray-950;
  @apply bg-white/90 dark:bg-gray-950;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}

.terminal {
  @apply h-full flex flex-col;
  @apply bg-white dark:bg-transparent;
}

.terminal-header {
  @apply flex items-center px-4 py-2 border-b;
  @apply bg-gray-100 border-gray-200 dark:bg-gray-900 dark:border-gray-800;
  background: linear-gradient(to bottom, #f3f4f6, #e5e7eb);
  .dark & {
    background: linear-gradient(to bottom, #363636, #2a2a2a);
  }
}

.terminal-buttons {
  @apply flex gap-2;
}

.terminal-buttons > div {
  @apply w-3 h-3 rounded-full;
  box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
}

.close { 
  @apply bg-red-500;
  background: linear-gradient(to bottom, #ff5f57, #ff3b30);
}

.minimize { 
  @apply bg-yellow-500;
  background: linear-gradient(to bottom, #ffbd2e, #f7b529);
}

.maximize { 
  @apply bg-green-500;
  background: linear-gradient(to bottom, #28c940, #24b238);
}

.terminal-title {
  @apply flex-1 text-center text-sm font-mono;
  @apply text-gray-600 dark:text-gray-400;
}

.terminal-content {
  @apply p-4 font-mono text-sm space-y-4 flex-1;
  @apply bg-white dark:bg-transparent;
}

.command-block {
  @apply space-y-2;
}

.command {
  @apply flex items-center;
  @apply text-accent/90 dark:text-accent;
}

.prompt {
  @apply mr-2;
}

.output {
  @apply pl-4;
  @apply text-gray-600 dark:text-gray-400;
}

.typing-text, .typing-text-2 {
  @apply inline-block overflow-hidden border-r-2 whitespace-nowrap;
  @apply border-accent/70 dark:border-accent;
  animation: blink 0.75s step-end infinite;
}

.base {
  @apply absolute -bottom-3 left-1/2 transform -translate-x-1/2;
  width: 120%;
}

.base-top {
  @apply h-3 bg-gray-800 rounded-b-lg;
  border: 2px solid #2a2a2a;
  border-top: none;
  background: linear-gradient(to bottom, #363636, #2a2a2a);
}

.base-bottom {
  @apply h-1 bg-gray-700 rounded-lg mx-auto;
  width: 20%;
  background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: currentColor }
}

/* MacBook Mini Styles */
.macbook-mini {
  @apply relative w-full aspect-[16/10];
  transform-style: preserve-3d;
  transform: rotateX(5deg);
}

.screen-container-mini {
  @apply relative w-full h-full bg-gray-800 rounded-[12px] p-[2%] shadow-xl;
  border: 2px solid #2a2a2a;
  background: linear-gradient(to bottom, #424242, #363636);
}

.notch-mini {
  @apply absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[6px] bg-gray-800 rounded-b-md z-10;
  border: 1px solid #2a2a2a;
  border-top: none;
  background: linear-gradient(to bottom, #363636, #2a2a2a);
}

.camera-mini {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full;
  background: #1a1a1a;
  box-shadow: inset 0 0 1px rgba(255,255,255,0.2);
}

.screen-mini {
  @apply w-full h-full rounded-[6px] overflow-hidden;
  @apply bg-white/90 dark:bg-gray-950;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
}

.base-mini {
  @apply absolute -bottom-2 left-1/2 transform -translate-x-1/2;
  width: 120%;
}

.base-top-mini {
  @apply h-2 bg-gray-800 rounded-b-md;
  border: 1px solid #2a2a2a;
  border-top: none;
  background: linear-gradient(to bottom, #363636, #2a2a2a);
}

.base-bottom-mini {
  @apply h-1 bg-gray-700 rounded-md mx-auto;
  width: 20%;
  background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
}

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>