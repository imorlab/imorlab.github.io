import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFileSync } from 'fs'

// Plugin para crear .nojekyll en GitHub Pages
const createNojekyllPlugin = () => {
  return {
    name: 'create-nojekyll',
    writeBundle() {
      writeFileSync('dist/.nojekyll', '')
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/imorlab-portfolio/' : '/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('ion-')
        }
      }
    }),
    createNojekyllPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    }
  }
})
