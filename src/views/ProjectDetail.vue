<template>
  <div class="min-h-[calc(100vh-4rem)] py-16">
    <!-- Back Button -->
    <!-- <div class="px-4 mb-8 max-w-6xl mx-auto">
      <button
        @click="goBack"
        class="group inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-300"
      >
        <svg
          class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="font-medium">{{ $t('projects.backToProjects') }}</span>
      </button>
    </div> -->

    <!-- Project Not Found -->
    <div v-if="!project" class="text-center py-20">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">{{ $t('projects.notFound') }}</h2>
      <router-link 
        to="/projects" 
        class="text-accent hover:underline"
      >
        {{ $t('projects.backToProjects') }}
      </router-link>
    </div>

    <!-- Project Content -->
    <div v-else class="px-4 max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="bg-gray-800/10 dark:bg-gray-500/10 rounded-2xl overflow-hidden shadow-2xl mb-12">
        <!-- MacBook Pro Container Large -->
        <div class="relative w-full perspective p-6 md:p-12 pb-0 md:pb-0">
          <div class="macbook-large mx-auto max-w-2xl">
            <div class="screen-container-large">
              <div class="notch-large"><div class="camera-large"></div></div>
              <div class="screen-large overflow-hidden relative">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="hidden md:block relative" style="transform: scale(0.35);">
                    <iframe
                      :src="project.url"
                      class="hidden md:block w-[1920px] h-[1080px] border-0"
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
            <div class="base-large">
              <div class="base-top-large"></div>
              <div class="base-bottom-large"></div>
            </div>
          </div>
        </div>

        <!-- Project Header -->
        <div class="p-8 md:p-12 text-center">
          <span class="inline-block text-accent font-semibold mb-2 text-lg">{{ project.company }}</span>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">{{ project.title }}</h1>
          <p class="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">{{ project.description }}</p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-wrap justify-center gap-4">
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-white hover:text-white/80 font-bold py-4 px-8 border border-accent hover:bg-accent/10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {{ $t('projects.visitSite') }}
            </a>
          </div>
        </div>
      </div>

      <!-- Project Details -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Description Section -->
          <div class="bg-gray-800/10 dark:bg-gray-500/10 rounded-xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <span class="w-1 h-8 bg-accent rounded-full"></span>
              {{ $t('projects.aboutProject') }}
            </h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>{{ project.long_description }}</p>
              <p v-if="project.long_description_2">{{ project.long_description_2 }}</p>
              <p v-if="project.long_description_3">{{ project.long_description_3 }}</p>
            </div>
          </div>

          <!-- Features/Details Section -->
          <div v-if="project.details" class="bg-gray-800/10 dark:bg-gray-500/10 rounded-xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <span class="w-1 h-8 bg-accent rounded-full"></span>
              {{ $t('projects.keyFeatures') }}
            </h2>
            <ul class="space-y-4">
              <li 
                v-for="(detail, i) in project.details" 
                :key="i"
                class="flex items-start gap-4 text-gray-600 dark:text-gray-300"
              >
                <span class="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                  <svg class="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="text-lg text-left">{{ detail }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Technologies -->
          <div class="bg-gray-800/10 dark:bg-gray-500/10 rounded-xl p-6 shadow-lg sticky top-24">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <span class="w-1 h-6 bg-accent rounded-full"></span>
              {{ $t('projects.technologiesUsed') }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="tech in project.technologies" 
                :key="tech" 
                class="bg-accent/20 text-accent font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-accent/30 transition-colors duration-300"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Quick Link -->
            <!-- <div class="mt-8 pt-6 border-t border-gray-700/30">
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center bg-transparent border-2 border-accent hover:bg-accent text-accent hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                {{ $t('projects.visitSite') }}
              </a>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Navigation to Other Projects -->
      <div class="border-t border-gray-700/30 pt-12">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-2xl font-bold text-gray-800 dark:text-white">{{ $t('projects.exploreMore') }}</h3>
          <router-link
            to="/projects"
            class="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors duration-300"
          >
            {{ $t('projects.viewAllProjects') }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
        
        <!-- Related Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link
            v-for="relatedProject in relatedProjects"
            :key="relatedProject.id"
            :to="{ name: 'ProjectDetail', params: { id: relatedProject.id } }"
            class="group bg-gray-800/10 dark:bg-gray-500/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] transform"
          >
            <!-- Project Image with Browser Bar -->
            <div class="relative">
              <div class="bg-gray-100 dark:bg-gray-800 px-3 py-2 flex items-center gap-2">
                <div class="flex gap-1">
                  <div class="w-2 h-2 rounded-full bg-red-500"></div>
                  <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div class="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div class="flex-1 bg-white dark:bg-gray-700 rounded px-2 py-0.5 text-[10px] text-gray-500 dark:text-gray-400 truncate ml-1">
                  {{ relatedProject.url.replace('https://', '') }}
                </div>
              </div>
              <div class="relative overflow-hidden">
                <img 
                  :src="getImageUrl(relatedProject.image)" 
                  :alt="relatedProject.title" 
                  class="w-full h-36 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            <!-- Project Info -->
            <div class="p-5">
              <span class="text-accent text-xs font-semibold uppercase tracking-wider">{{ relatedProject.company }}</span>
              <h4 class="text-lg font-bold text-gray-800 dark:text-white mt-1 mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">{{ relatedProject.title }}</h4>
              
              <!-- Tech badges -->
              <div class="flex flex-wrap gap-1.5 items-center justify-center">
                <span 
                  v-for="tech in relatedProject.technologies?.slice(0, 3)" 
                  :key="tech" 
                  class="bg-accent/15 text-accent text-[10px] font-medium px-2 py-0.5 rounded-full"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="relatedProject.technologies?.length > 3" 
                  class="bg-gray-500/20 text-gray-500 dark:text-gray-400 text-[10px] font-medium px-2 py-0.5 rounded-full"
                >
                  +{{ relatedProject.technologies.length - 3 }}
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import gsap from 'gsap';

const route = useRoute();
const router = useRouter();
const { tm } = useI18n();

const projectId = computed(() => parseInt(route.params.id));

// Use tm directly in computed - the issue was the spread operator breaking reactivity
const project = computed(() => {
  const projects = tm('projects.list');
  if (!projects) return null;
  return projects.find(p => p.id === projectId.value);
});

// Get 3 related projects (excluding current project)
const relatedProjects = computed(() => {
  const projects = tm('projects.list');
  if (!projects || !projects.length) return [];
  return projects.filter(p => p.id !== projectId.value).slice(0, 3);
});

const getImageUrl = (path) => {
  return new URL(`../${path}`, import.meta.url).href;
};

const goBack = () => {
  router.push({ name: 'Projects' });
};

onMounted(() => {
  // Animación de entrada solo para el MacBook
  gsap.from('.macbook-large', {
    rotateX: 45,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out'
  });
});
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}

/* MacBook Large Styles */
.macbook-large {
  @apply relative w-full aspect-[16/10];
  transform-style: preserve-3d;
  transform: rotateX(5deg);
}

.screen-container-large {
  @apply relative w-full h-full bg-gray-800 rounded-[20px] p-[2%] shadow-2xl;
  border: 2px solid #2a2a2a;
  background: linear-gradient(to bottom, #424242, #363636);
}

.notch-large {
  @apply absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[10px] bg-gray-800 rounded-b-lg z-10;
  border: 2px solid #2a2a2a;
  border-top: none;
  background: linear-gradient(to bottom, #363636, #2a2a2a);
}

.camera-large {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full;
  background: #1a1a1a;
  box-shadow: inset 0 0 2px rgba(255,255,255,0.2);
}

.screen-large {
  @apply w-full h-full rounded-[10px] overflow-hidden;
  @apply bg-white/90 dark:bg-gray-950;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}

.base-large {
  @apply absolute -bottom-3 left-1/2 transform -translate-x-1/2;
  width: 120%;
}

.base-top-large {
  @apply h-3 bg-gray-800 rounded-b-lg;
  border: 2px solid #2a2a2a;
  border-top: none;
  background: linear-gradient(to bottom, #363636, #2a2a2a);
}

.base-bottom-large {
  @apply h-1 bg-gray-700 rounded-lg mx-auto;
  width: 20%;
  background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
}
</style>
