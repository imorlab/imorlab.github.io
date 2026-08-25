<template>
  <div class="w-full">
    <p class="text-sm uppercase tracking-wider text-gray-400 dark:text-gray-400 mb-3">
      {{ $t(title) }}
    </p>
    <div class="flex flex-wrap gap-3" :class="align === 'center' ? 'justify-center' : 'justify-center md:justify-start'">
      <a
        v-for="provider in providers"
        :key="provider.id"
        :href="provider.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="$t('askAi.tooltip', { provider: provider.name })"
        :aria-label="$t('askAi.tooltip', { provider: provider.name })"
        class="inline-flex items-center gap-2 px-4 py-2.5
               border border-gray-300/60 dark:border-gray-600/60
               bg-primary/40 backdrop-blur-sm
               text-gray-600 dark:text-gray-200
               hover:border-accent hover:text-accent
               transition-all duration-300 rounded-lg
               text-sm font-medium"
      >
        <Icon :icon="provider.icon" class="w-5 h-5" :style="{ color: provider.color }" />
        {{ provider.name }}
        <Icon icon="heroicons:arrow-top-right-on-square" class="w-3.5 h-3.5 opacity-50" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

defineProps({
  align: { type: String, default: 'start' }, // 'start' | 'center'
  title: { type: String, default: 'askAi.title' } // clave i18n
})

const { t } = useI18n()

const NAME = 'Israel Moreno'
const DOMAIN = 'https://imorlab.github.io/'

const prompt = computed(() => t('askAi.prompt', { name: NAME, domain: DOMAIN }))
const encoded = computed(() => encodeURIComponent(prompt.value))

const providers = computed(() => [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    icon: 'simple-icons:openai',
    color: '#10a37f',
    url: `https://chatgpt.com/?q=${encoded.value}`
  },
  {
    id: 'claude',
    name: 'Claude',
    icon: 'simple-icons:claude',
    color: '#d97757',
    url: `https://claude.ai/new?q=${encoded.value}`
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    icon: 'simple-icons:perplexity',
    color: '#20808d',
    url: `https://www.perplexity.ai/search?q=${encoded.value}`
  },
  {
    id: 'gemini',
    name: 'Gemini',
    icon: 'simple-icons:googlegemini',
    color: '#4e8cf7',
    // Google AI Mode (Gemini) acepta el prompt por URL con udm=50
    url: `https://www.google.com/search?udm=50&q=${encoded.value}`
  }
])

</script>
