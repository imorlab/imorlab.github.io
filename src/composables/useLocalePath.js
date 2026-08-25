import { useI18n } from 'vue-i18n'
import { localizePath } from '../router'

/** Devuelve una función que prefija las rutas internas con el idioma activo. */
export function useLocalePath() {
  const { locale } = useI18n()
  return (path) => localizePath(path, locale.value)
}
