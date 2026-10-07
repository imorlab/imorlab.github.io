# Portfolio Personal - Israel Moreno

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Portfolio web personal desarrollado con Vue.js 3 y Tailwind CSS, mostrando mis habilidades, proyectos y experiencia profesional.

## Características

- Diseño moderno y minimalista
- Totalmente responsivo
- Tema oscuro con acentos personalizados
- Animaciones y transiciones suaves
- Optimizado para SEO
- **🤖 Chatbot inteligente integrado** con IA local
- Generación automática de CV en PDF
- Construido con las últimas tecnologías web

## Tecnologías Utilizadas

- **Frontend Framework:** Vue.js 3
- **Build Tool:** Vite
- **Static Site Generator:** vite-ssg
- **CSS Framework:** Tailwind CSS
- **Icons:** Heroicons & Iconify
- **Router:** Vue Router 4
- **Animations:** CSS Transitions & Transforms
- **PDF Generation:** jsPDF & html2canvas

## Secciones Principales

- **Inicio:** Presentación personal y tecnologías destacadas
- **Sobre Mí:** Perfil profesional, educación y experiencia
- **Habilidades:** Competencias técnicas y blandas
- **Proyectos:** Portfolio de trabajos destacados
- **Contacto:** Formulario de contacto y redes sociales
- **🤖 Chatbot:** Asistente virtual inteligente para consultas

## 🤖 Chatbot Asistente Virtual

El portfolio incluye un chatbot inteligente con las siguientes características:

### ✨ Funcionalidades Destacadas
- **IA Local**: Sistema de procesamiento de lenguaje natural básico
- **Soporte Bilingüe**: Respuestas en español e inglés
- **Base de Conocimiento Completa**: Información sobre experiencia, habilidades, proyectos
- **Diseño Adaptativo**: Compatible con temas oscuro y claro
- **Respuestas Profesionales**: Formato markdown con call-to-actions

### 💬 Capacidades del Chatbot
- Información personal y profesional
- Detalles sobre experiencia laboral
- Habilidades técnicas y blandas
- Descripción de proyectos
- Metodologías de trabajo (Agile, Scrum)
- Enlaces a GitHub y repositorios
- Información de contacto

### 🎯 Cómo Usar
1. Haz clic en el botón flotante en la esquina inferior derecha
2. Usa las acciones rápidas o escribe preguntas en lenguaje natural
3. Recibe respuestas contextuales y detalladas

**📋 Documentación completa:** Ver `src/components/ChatBot/README.md`

## Generación Automática de CV

El portfolio incluye una función de generación automática de CV en PDF con las siguientes características:

- Diseño profesional y moderno
- Tema oscuro personalizado
- Información actualizada desde el sistema de i18n
- Generación dinámica de secciones:
  - Información personal
  - Experiencia laboral
  - Educación
  - Habilidades técnicas
  - Idiomas

Para generar el CV, simplemente:
1. Navega a la sección "Sobre Mí"
2. Haz clic en el botón "Descargar CV"
3. El sistema generará automáticamente un PDF con tu información actualizada

## Analítica

- **Google Analytics 4** (`G-6HX5VF642H`, en `index.html`): visitas, páginas vistas (medición mejorada, también en la navegación SPA), clics salientes y scroll al 90 %.
- **Eventos propios** (`src/utils/analytics.js`): se envían con `track(evento, parámetros)` o, para clics, marcando el elemento con `data-track="evento"` y `data-track-*` (los atributos pasan a ser parámetros: `data-track-project-id` → `project_id`).
- **Microsoft Clarity** (opcional): mapas de calor y grabaciones. Se activa definiendo `VITE_CLARITY_ID` (en `.env` en local y como variable del repositorio en GitHub Actions).

| Evento | Cuándo | Parámetros |
| --- | --- | --- |
| `generate_lead` | Formulario de contacto enviado | `form` |
| `contact_error` | Fallo al enviar el formulario | `form` |
| `file_download` | Descarga del CV en PDF | `file_name`, `file_extension` |
| `project_visit` | Clic en "Visitar sitio" de un proyecto | `project_id`, `project_name`, `link_url` |
| `social_click` | Clic en LinkedIn / GitHub | `network`, `link_url` |
| `ask_ai` | Clic en "Pregunta a la IA" | `provider`, `link_url` |
| `cta_click` | Botones de la portada | `cta` |
| `chatbot_open` / `chatbot_message` | Abrir el chatbot / enviar un mensaje (sin el texto) | — |
| `chatbot_quick_action` | Acción rápida del chatbot | `topic` |
| `language_change` / `theme_change` | Cambio de idioma / tema | `language` / `theme` |
| `scroll` | 25 %, 50 % y 75 % de la página (el 90 % lo envía GA4) | `percent_scrolled` |
| `page_not_found` | URL inexistente (redirigida a la portada) | `not_found_path` |
| `LCP`, `INP`, `CLS`, `FCP`, `TTFB` | Core Web Vitals de visitas reales | `metric_value`, `metric_rating`, … |

Para ver los parámetros en los informes de GA4 hay que registrarlos en *Administrar → Definiciones personalizadas* como dimensiones de ámbito evento.

## Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/imorlab/imorlab-portfolio.git
   cd imorlab-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción (SSG)**
   ```bash
   npm run build
   ```
   Este proyecto utiliza `vite-ssg` para la Generación de Sitios Estáticos (Static Site Generation). Este comando compila la aplicación y genera archivos HTML para cada ruta, optimizando el rendimiento y el SEO. El resultado se guarda en la carpeta `dist/`.

## Estructura del Proyecto

```
imorlab-portfolio/
├── src/
│   ├── assets/         # Imágenes y recursos estáticos
│   ├── components/     # Componentes Vue reutilizables
│   │   ├── ChatBot/    # 🤖 Sistema de chatbot inteligente
│   │   │   ├── ChatBot.vue          # Componente UI del chat
│   │   │   ├── chatbotService.js    # Motor de IA y respuestas
│   │   │   └── README.md            # Documentación específica
│   │   └── ...
│   ├── composables/    # Composables (SEO, idioma, tema)
│   ├── router/         # Configuración de Vue Router
│   ├── views/          # Componentes de página
│   ├── App.vue         # Componente raíz
│   └── main.js         # Punto de entrada
├── public/             # Archivos públicos
├── index.html          # Plantilla HTML
└── package.json        # Dependencias y scripts
```

## Personalización

El tema y los colores se pueden personalizar en el archivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a1a1a',
      secondary: '#2d2d2d',
      accent: '#64ffda'
    }
  }
}
```

## Responsive Design

El sitio está optimizado para diferentes tamaños de pantalla:
- Móvil (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

- **Website:** [imorlab.com](https://imorlab.github.io)
- **GitHub:** [@imorlab](https://github.com/imorlab)
- **LinkedIn:** [Israel Moreno](https://www.linkedin.com/in/israelmorenolabrador/)
