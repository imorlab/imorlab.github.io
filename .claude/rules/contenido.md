---
paths:
  - "src/i18n/*.json"
  - "src/components/ChatBot/chatbotService.js"
  - "src/components/CvGenerator.js"
  - "src/views/{About,Projects,ProjectDetail}.vue"
  - "scripts/generate-seo.mjs"
  - "src/assets/images/projects/**"
---
# Contenido del portfolio (textos, proyectos, experiencia, habilidades)

`src/i18n/es.json` y `src/i18n/en.json` son la fuente de verdad. De ellos dependen:
- Las vistas (`$t`, `tm`), el CV en PDF (`About.vue` → `CvGenerator.js`) y
  `scripts/generate-seo.mjs` (sitemap, `llms.txt`, `llms-full.txt`).
- Las rutas prerenderizadas: cada `id` de `es.projects.list` genera `/projects/:id` y `/en/projects/:id`
  (`includedRoutes` en `src/main.js`) y sus entradas del sitemap.

El chatbot NO lee i18n: `src/components/ChatBot/chatbotService.js` tiene su propia `knowledgeBase`
(es y en) y respuestas con el texto duplicado. Ya se desincronizó antes (ver `git log`).

Al cambiar contenido:
1. Edita los dos idiomas con las mismas claves y los mismos `id` y orden en los arrays
   (`projects.list`, `about.experience.positions`, `about.education.items`…). Diferencia
   preexistente: `skills.soft` (es) frente a `skills.softSkills` (en); no la unifiques sin
   comprobar antes quién usa cada clave.
2. Proyectos: `id` numérico, único y estable, porque forma parte de URLs ya publicadas e indexadas
   (no lo reutilices ni renumeres). La imagen va en `src/assets/images/projects/` en `.avif` y el
   campo `image` es relativo a `src/` (`assets/images/projects/<nombre>.avif`).
3. Si cambian la experiencia, los proyectos, las habilidades o los datos de contacto, actualiza
   también la `knowledgeBase` y las respuestas del chatbot en los dos idiomas.
4. Ejecuta `npm run build` y conserva en el cambio los `public/sitemap.xml`, `public/llms.txt` y
   `public/llms-full.txt` regenerados.
5. Comprueba en es y en el listado, el detalle y, si cambió "Sobre mí", el CV descargado.
