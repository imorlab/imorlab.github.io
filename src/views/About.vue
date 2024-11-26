<template>
  <div class="min-h-[calc(100vh-4rem)] py-16">
    <div class="max-w-7xl mx-auto px-0 lg:px-8 relative z-10">
      <h1 class="text-4xl text-gray-500 dark:text-gray-100 font-bold text-center mb-16">
        {{ $t('about.title_first') }} <span class="text-accent">{{ $t('about.title_second') }}</span>
      </h1>

      <!-- Main Grid Layout -->
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-8">
          <!-- Profile Section -->
          <div class="bg-primary/70 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:user" class="w-8 h-8 text-accent" />
              {{ $t('about.title') }}
            </h2>
            <div class="space-y-4">
              <p class="text-gray-500 dark:text-gray-100">{{ $t('about.intro') }}</p>
              <p class="text-gray-500 dark:text-gray-100">{{ $t('about.description') }}</p>
              <p class="text-gray-500 dark:text-gray-100">{{ $t('about.mission') }}</p>
            </div>
          </div>

          <!-- Education Section -->
          <div class="bg-primary/70 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:academic-cap" class="w-8 h-8 text-accent" />
              {{ $t('about.education.title') }}
            </h2>
            <div class="space-y-6">
              <div v-for="(edu, index) in educationItems" :key="index" class="border-l-2 border-accent pl-4 text-start">
                <h3 class="font-semibold text-accent">{{ edu.degree }}</h3>
                <p class="text-gray-400 dark:text-gray-100">{{ edu.field }}</p>
                <p class="text-gray-400 dark:text-gray-100">{{ edu.school }}</p>
                <p class="text-sm text-gray-500">{{ edu.period }}</p>
                <p v-if="edu.skills" class="text-sm text-gray-400 mt-2">{{ edu.skills }}</p>
              </div>
            </div>
          </div>

          <!-- Skills Section -->
          <div class="bg-primary/70 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:code-bracket" class="w-8 h-8 text-accent" />
              {{ $t('about.skills.title') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(category, key) in Object.entries(skillsCategories).filter(([k]) => k !== 'soft')" :key="key" 
                class="bg-primary/5 rounded-lg p-4 hover:bg-primary/70 transition-all duration-300">
                <h3 class="font-semibold text-accent flex items-center gap-2 mb-3">
                  <Icon :icon="category[1].icon" class="w-5 h-5" />
                  {{ category[1].title }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(item, i) in category[1].items" :key="i" 
                    class="px-3 py-1.5 bg-primary/20 rounded-full text-sm text-gray-500 hover:bg-primary/700 transition-colors duration-300 cursor-default">
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
            <!-- Soft Skills Section -->
            <div v-if="skillsCategories.soft" class="mt-6">
              <div class="bg-primary/5 rounded-lg p-4 hover:bg-primary/70 transition-all duration-300">
                <h3 class="font-semibold text-accent flex items-center gap-2 mb-3">
                  <Icon :icon="skillsCategories.soft.icon" class="w-5 h-5" />
                  {{ skillsCategories.soft.title }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(item, i) in skillsCategories.soft.items" :key="i" 
                    class="px-3 py-1.5 bg-primary/20 rounded-full text-sm text-gray-500 hover:bg-primary/700 transition-colors duration-300 cursor-default">
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-8 text-start">
          <!-- Experience Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-primary/70 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">{{ $t('about.experience.stats.years') }}</span>
                <span class="text-sm text-gray-500 mt-2 text-center">{{ $t('about.experience.title') }}</span>
              </div>
            </div>
            <div class="bg-primary/70 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">{{ $t('about.experience.stats.projects') }}</span>
                <span class="text-sm text-gray-500 mt-2 text-center">{{ $t('about.experience.stats.projects_label') }}</span>
              </div>
            </div>
            <div class="bg-primary/70 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">{{ $t('about.experience.stats.technologies') }}</span>
                <span class="text-sm text-gray-500 mt-2 text-center">{{ $t('about.experience.stats.technologies_label') }}</span>
              </div>
            </div>
            <div class="bg-primary/70 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">{{ $t('about.experience.stats.development') }}</span>
                <span class="text-sm text-gray-500 mt-2 text-center">{{ $t('about.experience.stats.development_label') }}</span>
              </div>
            </div>
          </div>

          <!-- Professional Experience -->
          <div class="bg-primary/70 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:briefcase" class="w-8 h-8 text-accent" />
              {{ $t('about.experience.title') }}
            </h2>
            <div class="space-y-8">
              <div v-for="(position, index) in experiencePositions" :key="index" 
                class="border-l-2 border-accent pl-4">
                <h3 class="font-semibold text-accent">{{ position.role }}</h3>
                <p class="text-gray-400">{{ position.company }}</p>
                <p class="text-sm text-gray-500">{{ position.period }}</p>
                <p class="text-sm text-gray-400">{{ position.location }}</p>
                <p class="text-sm text-gray-500">{{ position.type }}</p>
                <div v-if="position.skills" class="flex flex-wrap gap-2 mt-2">
                  <span v-for="(skill, i) in position.skills" :key="i"
                    class="px-2 py-1 bg-primary/10 rounded-full text-xs text-gray-400">
                    {{ skill }}
                  </span>
                </div>
                <div v-if="position.responsibilities" class="mt-2">
                  <ul class="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li v-for="(resp, i) in position.responsibilities" :key="i">
                      {{ resp }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- GitHub Stats -->
          <div class="bg-primary/70 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:chart-bar" class="w-8 h-8 text-accent" />
              GitHub
            </h2>
            <div class="flex justify-center">
              <img 
                :src="'https://github-readme-stats.vercel.app/api/top-langs/?username=imorlab&layout=compact&theme=dark&hide_border=true&title_color=64ffda&text_color=ffffff&bg_color=242424'" 
                alt="GitHub Languages Stats" 
                class="rounded-lg max-w-full"
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
import { useI18n } from 'vue-i18n'
import { computed, onMounted } from 'vue'

const { t, locale, messages } = useI18n()

const educationItems = computed(() => {
  return messages.value[locale.value].about.education.items || []
})

const skillsCategories = computed(() => {
  return messages.value[locale.value].about.skills.categories || {}
})

const experiencePositions = computed(() => {
  return messages.value[locale.value].about.experience.positions || []
})

onMounted(() => {
  console.log('Current locale:', locale.value)
  console.log('Messages:', messages.value)
  console.log('Education items:', educationItems.value)
  console.log('Skills categories:', skillsCategories.value)
  console.log('Experience positions:', experiencePositions.value)
})
</script>
