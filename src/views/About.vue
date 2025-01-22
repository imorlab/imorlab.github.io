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
          <div class="bg-primary/40 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:user" class="w-6 h-6 text-accent" />
              {{ $t('about.title') }}
            </h2>
            <div class="space-y-4 text-start">
              <p class="text-gray-500 dark:text-gray-100">{{ $t('about.intro') }}</p>
              <p class="text-gray-500 dark:text-gray-100">{{ $t('about.description') }}</p>
              <p class="text-gray-500 dark:text-gray-100">{{ $t('about.mission') }}</p>
              <div class="pt-3 text-center">
                <button
                  @click="generateAndDownloadCV"
                  class="inline-flex items-center px-6 py-3 bg-accent/80 text-white dark:text-gray-800 rounded-lg hover:bg-accent/90 transition-colors duration-300 shadow-lg hover:shadow-accent/20 border-none"
                >
                  <Icon icon="heroicons:document-arrow-down" class="w-5 h-5 mr-2" />
                  {{ $t('about.download_cv') }}
                </button>
              </div>
            </div>
          </div>

          <!-- Education Section -->
          <div class="bg-primary/40 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:academic-cap" class="w-6 h-6 text-accent" />
              {{ $t('about.education.title') }}
            </h2>
            <div class="space-y-8">
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
          <div class="bg-primary/40 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:code-bracket" class="w-6 h-6 text-accent" />
              {{ $t('about.skills.title') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div v-for="(category, key) in Object.entries(skillsCategories).filter(([k]) => k !== 'soft')" :key="key" 
                class="bg-primary/5 rounded-lg p-4 hover:border hover:border-accent transition-ease-in-out duration-300">
                <h3 class="font-semibold text-accent flex items-center gap-2 mb-3">
                  <Icon :icon="category[1].icon" class="w-6 h-6" />
                  {{ category[1].title }}
                </h3>
                <div class="gap-2">
                  <span v-for="(item, i) in category[1].items" :key="i" 
                    class="ps-3 py-1.5 text-sm text-gray-500 dark:text-gray-300 hover:bg-primary/700 transition-colors duration-300 cursor-default flex items-center gap-2">
                    <component 
                      v-if="item.component"
                      :is="components.LivewireIcon"
                      class="w-6 h-6"
                    />
                    <Icon 
                      v-else
                      :icon="isDark.value && item.darkIcon ? item.darkIcon : item.icon" 
                      :class="[
                        'w-6 h-6',
                        isDark.value && item.name === 'GitHub' ? 'text-white' : '',
                        isDark.value && item.name === 'WordPress' ? 'text-white' : '',
                      ]"
                    />
                    {{ item.name }}
                  </span>
                </div>
              </div>
            </div>
            <!-- Soft Skills Section -->
            <div v-if="skillsCategories.soft" class="mt-6">
              <div class="bg-primary/5 rounded-lg p-4 hover:border hover:border-accent transition-ease-in-out duration-300">
                <h3 class="font-semibold text-accent flex items-center gap-2 mb-3">
                  <Icon :icon="skillsCategories.soft.icon" class="w-6 h-6" />
                  {{ skillsCategories.soft.title }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(item, i) in skillsCategories.soft.items" :key="i" 
                    class="px-3 py-1.5 bg-primary/20 rounded-full text-sm text-gray-500 dark:text-gray-300 hover:bg-primary/700 transition-colors duration-300 cursor-default">
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
            <div class="bg-primary/40 backdrop-blur-sm rounded-lg p-2 py-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">
                  +<NumberFlow :value="stats.years" :duration="3000" />
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-300 mt-2 text-center">{{ $t('about.experience.title') }}</span>
              </div>
            </div>
            <div class="bg-primary/40 backdrop-blur-sm rounded-lg p-2 py-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">
                  +<NumberFlow :value="stats.projects" :duration="3000" />
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-300 mt-2 text-center">{{ $t('about.experience.stats.projects_label') }}</span>
              </div>
            </div>
            <div class="bg-primary/40 backdrop-blur-sm rounded-lg px-2 py-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">
                  +<NumberFlow :value="stats.technologies" :duration="3000" />
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-300 mt-2 text-center">{{ $t('about.experience.stats.technologies_label') }}</span>
              </div>
            </div>
            <div class="bg-primary/40 backdrop-blur-sm rounded-lg px-2 py-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <div class="flex flex-col items-center">
                <span class="text-3xl font-bold text-accent">
                  +<NumberFlow :value="stats.development" :duration="3000" />
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-300 mt-2 text-center">{{ $t('about.experience.stats.development_label') }}</span>
              </div>
            </div>
          </div>

          <!-- Professional Experience -->
          <div class="bg-primary/40 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:briefcase" class="w-6 h-6 text-accent" />
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
                  <ul class="list-disc space-y-1 pl-5 text-sm text-gray-400">
                    <li v-for="(resp, i) in position.responsibilities" :key="i" class="pl-1">
                      {{ resp }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- GitHub Stats -->
          <div class="bg-primary/40 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            <h2 class="text-2xl text-gray-500 dark:text-gray-100 font-semibold mb-6 flex items-center gap-3">
              <Icon icon="heroicons:chart-bar" class="w-6 h-6 text-accent" />
              GitHub
            </h2>
            <div class="space-y-5">
              <div class="flex justify-center bg-primary/5 rounded-lg border border-accent p-4">
                <div class="w-full">
                  <h3 class="text-lg text-accent font-semibold mb-2 text-center">{{ t('about.github.contributions') }}</h3>
                  <img 
                    :src="chartUrl"
                    alt="Israel Moreno's Github chart"
                    class="w-full opacity-80"
                  />
                </div>
              </div>
              <div class="flex justify-center bg-primary/5 rounded-lg border border-accent p-4">
                <img 
                  :src="githubStatsUrl" 
                  alt="GitHub Languages Stats" 
                  class="rounded-lg max-w-full"
                />
              </div>
              <div class="flex justify-center bg-primary/5 rounded-lg border border-accent p-4">
                <img 
                  :src="streakStatsUrl" 
                  alt="GitHub Streak Stats" 
                  class="rounded-lg max-w-full"
                />
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
import { useI18n } from 'vue-i18n'
import LivewireIcon from '../components/icons/LivewireIcon.vue'
import { computed, onMounted, markRaw, ref } from 'vue'
import { useTheme } from '../composables/theme'
import NumberFlow from '@number-flow/vue'
import { generateCV } from '../components/CvGenerator'

const { t, locale, messages } = useI18n()

// Registramos el componente LivewireIcon para uso dinámico
const components = {
  LivewireIcon: markRaw(LivewireIcon)
}

const educationItems = computed(() => {
  return messages.value[locale.value].about.education.items || []
})

const skillsCategories = computed(() => {
  return messages.value[locale.value].about.skills.categories || {}
})

const experiencePositions = computed(() => {
  return messages.value[locale.value].about.experience.positions || []
})

const { isDark } = useTheme()

const chartUrl = computed(() => {
  return 'https://ghchart.rshah.org/imorlab'
})

const accentColor = computed(() => {
  return isDark.value ? '64ffda' : '0891b2'
})

const githubStatsUrl = computed(() => {
  return `https://github-readme-stats.vercel.app/api/top-langs/?username=imorlab&layout=compact&theme=dark&hide_border=true&title_color=${accentColor.value}&text_color=${isDark.value ? 'ffffff' : '6B7280'}&bg_color=ffffff00&include_all_commits=true&count_private=true&hide=others`
})

const streakStatsUrl = computed(() => {
  return `https://streak-stats.vercel.app?user=imorlab&theme=dark&hide_border=true&background=ffffff00&ring=${accentColor.value}&fire=${accentColor.value}&currStreakLabel=${accentColor.value}&stroke=${isDark.value ? 'ffffff' : '6B7280'}&sideLabels=${isDark.value ? 'ffffff' : '6B7280'}&currStreakNum=${isDark.value ? 'ffffff' : '6B7280'}&sideNums=${isDark.value ? 'ffffff' : '6B7280'}&dates=${isDark.value ? 'ffffff' : '6B7280'}`
})

const stats = ref({
  years: 0,
  projects: 0,
  technologies: 0,
  development: 0
})

const fetchGithubContributions = async () => {
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            user(login: "imorlab") {
              contributionsCollection {
                totalCommitContributions
                totalIssueContributions
                totalPullRequestContributions
                totalPullRequestReviewContributions
                totalRepositoryContributions
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `
      })
    })
    
    const { data } = await response.json()
    const contributions = data.user.contributionsCollection
    const totalFromCollection = 
      contributions.totalCommitContributions +
      contributions.totalIssueContributions +
      contributions.totalPullRequestContributions +
      contributions.totalPullRequestReviewContributions +
      contributions.totalRepositoryContributions

    // Usar el número del calendario que coincide con lo que muestra GitHub
    stats.value.development = contributions.contributionCalendar.totalContributions
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    // Si hay error, usar el valor por defecto de las traducciones
    stats.value.development = Number(t('about.experience.stats.development').replace('+', ''))
  }
}

const generateAndDownloadCV = async () => {
  try {
    // Recopilar datos para el CV
    const cvData = {
      education: {
        items: educationItems.value
      },
      skills: {
        categories: skillsCategories.value,
        soft: {
          title: messages.value[locale.value].about.skills.categories.soft.title,
          items: messages.value[locale.value].about.skills.categories.soft.items
        }
      },
      experience: {
        positions: experiencePositions.value
      }
    }

    // Generar el PDF
    const pdf = await generateCV(cvData, { t })
    
    // Descargar el PDF
    pdf.save(`israel-moreno-cv-${locale.value}.pdf`)
  } catch (error) {
    console.error('Error generating CV:', error)
  }
}

onMounted(() => {
  // Simular un pequeño retraso para la animación
  setTimeout(() => {
    stats.value = {
      years: Number(t('about.experience.stats.years').replace('+', '')),
      projects: Number(t('about.experience.stats.projects').replace('+', '')),
      technologies: Number(t('about.experience.stats.technologies').replace('+', '')),
      development: Number(t('about.experience.stats.development').replace('+', ''))
    }
    
    // Obtener las contribuciones reales de GitHub
    fetchGithubContributions()
  }, 500)
})
</script>
