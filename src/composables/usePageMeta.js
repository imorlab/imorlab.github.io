import { computed, toValue } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { localizePath, LOCALES } from '../router'

export const SITE_URL = 'https://imorlab.github.io'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const OG_LOCALES = { es: 'es_ES', en: 'en_US' }

const absolute = (path) => `${SITE_URL}${path}`

/**
 * Metadatos por página: title, description, canonical, hreflang, Open Graph y Twitter.
 * @param {string} page       clave dentro de i18n `meta.*`
 * @param {string|Function} path  ruta base (sin prefijo de idioma), p. ej. '/about'.
 *                                Acepta un getter/ref para rutas dinámicas (/projects/:id).
 * @param {{title?: any, description?: any}} overrides  title/description propios (ref o getter),
 *                                                      para páginas sin clave fija en `meta.*`.
 */
export function usePageMeta(page, path = '/', overrides = {}) {
  const { t, locale } = useI18n()
  const basePath = computed(() => toValue(path))
  const url = computed(() => absolute(localizePath(basePath.value, locale.value)))
  const title = computed(() => toValue(overrides.title) || t(`meta.${page}.title`))
  const description = computed(() => toValue(overrides.description) || t(`meta.${page}.description`))
  const ogLocale = computed(() => OG_LOCALES[locale.value] || OG_LOCALES.es)
  const ogAlternates = computed(() =>
    LOCALES.filter((l) => l !== locale.value).map((l) => ({ property: 'og:locale:alternate', content: OG_LOCALES[l] }))
  )

  useHead({
    title,
    htmlAttrs: { lang: locale },
    link: computed(() => [
      { rel: 'canonical', href: url.value },
      ...LOCALES.map((l) => ({ rel: 'alternate', hreflang: l, href: absolute(localizePath(basePath.value, l)) })),
      { rel: 'alternate', hreflang: 'x-default', href: absolute(localizePath(basePath.value, 'es')) }
    ]),
    meta: [
      { name: 'title', content: title },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:locale', content: ogLocale },
      ...ogAlternates.value,
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE }
    ]
  })
}
