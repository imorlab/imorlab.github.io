# CLAUDE.md

Portfolio personal de Israel Moreno (https://imorlab.github.io): sitio estático bilingüe (es/en)
prerenderizado con vite-ssg y desplegado en GitHub Pages. Responde y comenta el código en español.

## Stack
- Vue 3.5 (Composition API, `<script setup>`), Vite 5, vite-ssg 27, vue-router 4, vue-i18n 10
  (`legacy: false`), @unhead/vue 2, Tailwind CSS 3 (`darkMode: 'class'`). Alias `@` → `src/`.
- JavaScript, sin TypeScript. Extras: GSAP, three.js + postprocessing (`PixelBlast`),
  jsPDF + html2canvas (CV en PDF), EmailJS (formulario de contacto).
- Gestor: npm. El CI instala con `npm ci`, que falla si `package-lock.json` no coincide con
  `package.json`: actualiza ambos juntos. No crees `pnpm-lock.yaml` ni `yarn.lock`.
- No hay tests, linter ni type-check: la única comprobación automática es la compilación.

## Cómo trabajar
- Antes de editar, lee el código afectado y sigue sus patrones; `git log` explica muchas decisiones
  (hubo merges que borraron contenido: comprueba que no reintroduces versiones antiguas).
- Ajusta el esfuerzo al riesgo: un cambio acotado se hace directamente; si toca varias áreas
  (contenido, SEO, analítica, build, despliegue), presenta antes un plan breve.
- Busca la causa raíz. Si la petición o el código existente tiene un problema técnico, dilo y
  propón una alternativa en lugar de aplicarlo en silencio.
- Cambios mínimos y del alcance pedido: sin refactors, dependencias ni archivos no solicitados.
- Comentarios breves en español que expliquen el porqué, como en el código actual.

## Arquitectura que hay que respetar
- **SSG**: cada ruta se renderiza en Node durante el build. No uses `window`, `document`,
  `localStorage` ni `navigator` a nivel de módulo ni en `setup` fuera de `onMounted` o de una
  guarda `isClient`. vite-ssg renderiza páginas en paralelo: el estado va por app (ver
  `createI18nInstance` en `src/main.js`), nunca en singletons de módulo.
- **Rutas e idioma** (`src/router/index.js`): español sin prefijo, inglés bajo `/en`. Los enlaces
  internos usan `useLocalePath()` y cada página llama a `usePageMeta()` (title, canonical,
  hreflang, Open Graph). Una página nueva también debe añadirse a `PAGES` en
  `scripts/generate-seo.mjs`. `/demo` es un banco de pruebas fuera del sitemap.
- **Contenido**: textos, proyectos y experiencia viven en `src/i18n/{es,en}.json` y se replican en
  el chatbot. Procedimiento en `.claude/rules/contenido.md`.
- **Tema**: los colores son tokens HSL en `src/assets/main.css` expuestos en Tailwind como
  `primary`, `accent`, `highlight` y `support`. Usa esas clases, no hex sueltos, y revisa el
  resultado en modo claro y oscuro.
- **Analítica y cookies**: eventos con `track()` o atributos `data-track`, documentados en la tabla
  "Analítica" de `README.md`. Privacidad y consentimiento en `.claude/rules/analitica.md`.
- Código sin uso: `src/i18n/index.js` y `src/components/HelloWorld.vue` no se importan. El primero
  accede a `navigator` al cargarse y rompería el SSG: no lo reutilices.

## Seguridad y cambios existentes
- Puede haber cambios del usuario sin confirmar: revisa `git status` al empezar y no reviertas,
  reformatees ni sobrescribas nada ajeno a la tarea.
- `.env` contiene un token real: no lo leas, no lo muestres ni lo copies (su lectura está bloqueada
  en `.claude/settings.json`). Toda variable `VITE_*` se incrusta en el JS público: nunca pongas
  secretos en ellas. Los IDs de GA4 y EmailJS del código son públicos por diseño.
- Un push a `main` publica en producción (`.github/workflows/deploy.yml`). Sin autorización
  explícita no hagas push, force-push, `reset --hard`, rebase de commits publicados ni borres ramas.
  Haz commit solo cuando se pida.
- Cambia dependencias (`package.json`, `package-lock.json`), `vite.config.js`,
  `.github/workflows/` o `.env.example` solo si la tarea lo exige, y dilo en el informe.
- No envíes el formulario de contacto (EmailJS manda correos reales) ni dispares otras acciones con
  efectos externos para probar.

## Verificación
- `npm run build` (unos 15 s): regenera los archivos SEO y compila y prerenderiza todas las rutas.
  Ejecútalo tras cambiar `src/`, `index.html`, `scripts/` o la configuración del build. El aviso de
  tamaño de chunk ya existía.
- El build reescribe `public/sitemap.xml` (cambia `lastmod`), que está versionado. Si estaba limpio
  antes del build y la tarea no cambia contenido, restáuralo con `git restore`. Si cambió el
  contenido, conserva los `public/sitemap.xml`, `public/llms.txt` y `public/llms-full.txt`
  regenerados.
- `npm run seo` regenera solo esos tres archivos.
- Cambios visuales o de interacción: arranca la configuración `vite-dev` de `.claude/launch.json`
  (puerto 5173) y revisa es/en, modo claro/oscuro, móvil y que la consola no tenga errores.
- Que compile no prueba que funcione: di exactamente qué comprobaste y cómo.

## Al terminar
Informa de forma breve:
- Qué cambió y por qué, con los archivos clave.
- Qué verificaste realmente (comando y resultado) y qué quedó sin verificar.
- Los pasos manuales que quedan para el usuario (p. ej. dimensiones en GA4, variables del
  repositorio en GitHub).
Nunca digas que ejecutaste o comprobaste algo que no hiciste.

Commits (solo si se piden): Conventional Commits en español con ámbito, p. ej.
`feat(projects): …` o `fix(analytics): …`. Si el cambio no es trivial, añade un cuerpo con viñetas
que explique el porqué.
