---
paths:
  - "src/utils/analytics.js"
  - "src/utils/consent.js"
  - "src/components/CookieBanner.vue"
  - "index.html"
---
# Analítica, consentimiento y privacidad

- GA4 (`G-6HX5VF642H`) se carga en `index.html` con Consent Mode v2 denegado por defecto. Clarity
  solo se carga si existe `VITE_CLARITY_ID`. Los dos miden sin cookies hasta que el visitante acepta.
- La clave `cookie-consent` y la caducidad de un año están duplicadas en `index.html` y
  `src/utils/consent.js`: si cambias una, cambia la otra.
- Eventos nuevos: usa `track()` o `data-track` + `data-track-*` (ver la cabecera de
  `analytics.js`), con nombres y parámetros en snake_case. Todo se ejecuta solo en el cliente.
- No envíes datos personales ni texto libre del visitante (mensajes del chatbot, campos del
  formulario, emails). `link_url` se envía sin query string.
- Documenta cada evento o parámetro nuevo en la tabla "Analítica" de `README.md`. Los parámetros
  nuevos hay que registrarlos a mano en GA4 como dimensiones personalizadas de ámbito evento:
  menciónalo al usuario como paso pendiente.
- Sin autorización explícita, no debilites el consentimiento: nada de cookies antes de aceptar,
  rechazar debe pesar visualmente lo mismo que aceptar y toda cookie nueva se declara en
  `CookieBanner.vue`. Hay implicaciones legales (RGPD/ePrivacy).
