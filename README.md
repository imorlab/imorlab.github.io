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
- Generación automática de CV en PDF
- Construido con las últimas tecnologías web

## Tecnologías Utilizadas

- **Frontend Framework:** Vue.js 3
- **Build Tool:** Vite
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

4. **Construir para producción**
   ```bash
   npm run build
   ```

## Estructura del Proyecto

```
imorlab-portfolio/
├── src/
│   ├── assets/         # Imágenes y recursos estáticos
│   ├── components/     # Componentes Vue reutilizables
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

- **Website:** [imorlab.com](https://imorlab.github.io/imorlab-portfolio/)
- **GitHub:** [@imorlab](https://github.com/imorlab)
- **LinkedIn:** [Israel Moreno](https://linkedin.com/in/imorlab)
