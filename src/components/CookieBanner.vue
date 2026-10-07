<template>
  <Transition name="cookie-banner">
    <section
      v-if="consentBannerOpen"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
      class="fixed z-[60] inset-x-4 bottom-24 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-md
             bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-accent/20 rounded-2xl shadow-2xl
             p-5 text-left text-sm text-gray-600 dark:text-gray-300"
    >
      <h2 id="cookie-banner-title" class="flex items-center gap-2 text-base font-semibold text-gray-800 dark:text-white mb-2">
        <Icon icon="heroicons:shield-check" class="w-5 h-5 text-accent" />
        {{ $t('cookies.title') }}
      </h2>
      <p id="cookie-banner-text">{{ $t('cookies.text', { providers }) }}</p>

      <button
        type="button"
        class="mt-2 p-0 border-0 bg-transparent text-accent hover:underline underline-offset-2"
        :aria-expanded="showDetails"
        aria-controls="cookie-banner-details"
        @click="showDetails = !showDetails"
      >
        {{ showDetails ? $t('cookies.lessInfo') : $t('cookies.moreInfo') }}
      </button>

      <div v-if="showDetails" id="cookie-banner-details" class="mt-3 space-y-3">
        <p>{{ $t('cookies.details') }}</p>
        <div class="max-h-48 overflow-y-auto">
          <table class="w-full text-xs text-left">
            <thead class="text-gray-800 dark:text-white">
              <tr>
                <th scope="col" class="py-1 pr-2 font-semibold">{{ $t('cookies.table.name') }}</th>
                <th scope="col" class="py-1 pr-2 font-semibold">{{ $t('cookies.table.purpose') }}</th>
                <th scope="col" class="py-1 font-semibold">{{ $t('cookies.table.duration') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cookie in cookies" :key="cookie.name" class="border-t border-gray-300/40 dark:border-gray-600/40 align-top">
                <td class="py-1 pr-2 font-mono">{{ cookie.name }}</td>
                <td class="py-1 pr-2">
                  {{ $t(`cookies.purposes.${cookie.purpose}`) }}
                  <a :href="cookie.policy" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">({{ cookie.provider }})</a>
                </td>
                <td class="py-1 whitespace-nowrap">{{ $t(`cookies.durations.${cookie.duration}`) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mt-4 flex gap-3">
        <button type="button" class="cookie-btn" @click="saveConsent(false)">{{ $t('cookies.reject') }}</button>
        <button type="button" class="cookie-btn" @click="saveConsent(true)">{{ $t('cookies.accept') }}</button>
      </div>
    </section>
  </Transition>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { consentBannerOpen, readConsent, saveConsent } from '../utils/consent'
import { CLARITY_ENABLED } from '../utils/analytics'

const { locale } = useI18n()
const showDetails = ref(false)

const GOOGLE_POLICY = 'https://policies.google.com/technologies/cookies'
const MICROSOFT_POLICY = 'https://learn.microsoft.com/clarity/setup-and-installation/clarity-cookies'

const cookies = computed(() => [
  { name: '_ga', provider: 'Google Analytics', policy: GOOGLE_POLICY, purpose: 'gaUser', duration: 'years2' },
  { name: '_ga_6HX5VF642H', provider: 'Google Analytics', policy: GOOGLE_POLICY, purpose: 'gaSession', duration: 'years2' },
  ...(CLARITY_ENABLED
    ? [
        { name: '_clck', provider: 'Microsoft Clarity', policy: MICROSOFT_POLICY, purpose: 'clarityUser', duration: 'year1' },
        { name: '_clsk', provider: 'Microsoft Clarity', policy: MICROSOFT_POLICY, purpose: 'claritySession', duration: 'day1' }
      ]
    : [])
])

// "Google Analytics" / "Google Analytics y Microsoft Clarity"
const providers = computed(() =>
  new Intl.ListFormat(locale.value, { type: 'conjunction' }).format(
    CLARITY_ENABLED ? ['Google Analytics', 'Microsoft Clarity'] : ['Google Analytics']
  )
)

// Solo en el navegador: el HTML estático no sabe si el visitante ya decidió.
onMounted(() => {
  if (!readConsent()) consentBannerOpen.value = true
})
</script>

<style scoped>
/* Aceptar y rechazar con el mismo peso visual (guía de cookies de la AEPD). */
.cookie-btn {
  @apply flex-1 px-4 py-2 rounded-lg border border-accent bg-transparent text-accent font-medium
         hover:bg-accent hover:text-gray-900 transition-colors duration-300
         focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50;
}

.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.cookie-banner-enter-from,
.cookie-banner-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
