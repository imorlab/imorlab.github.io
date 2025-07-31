// Servicio del chatbot que proporciona respuestas inteligentes sobre Israel Moreno
export const chatbotService = {
  // Base de conocimiento sobre Israel Moreno
  knowledgeBase: {
    es: {
      // Información personal básica
      personal: {
        name: "Israel Moreno",
        role: "Desarrollador Web Full Stack",
        location: "España",
        experience: "más de 3 años de experiencia profesional",
        specialization: "desarrollo con Laravel (PHP)",
        description: "Me apasiona el universo de la programación web, el diseño y desarrollo web y la tecnología en general."
      },

      // Experiencia profesional
      experience: {
        current: {
          role: "Web Developer",
          company: "beon. worldwide",
          period: "Mayo 2023 - Actualidad",
          location: "Sevilla, Andalucía, España (Híbrido)",
          type: "Jornada completa",
          responsibilities: [
            "Desarrollo web: Creación y mantenimiento de plataformas escalables y de alto rendimiento con Laravel (PHP)",
            "Gestión de reservas: Diseño de sistemas intuitivos para optimizar la experiencia del usuario",
            "Integraciones avanzadas: Implementación de API de OpenAI para personalización y automatización",
            "Pasarelas de pago: Configuración e integración segura para transacciones globales",
            "Frontend interactivo: Interfaces dinámicas con Laravel Livewire y Vue.js",
            "Soporte al cliente: Interacción directa para adaptar funcionalidades y ofrecer soluciones"
          ]
        },
        previous: {
          role: "Programador Web",
          company: "Iwan21",
          period: "Marzo 2020 - Junio 2020",
          location: "Sevilla, Andalucía, España",
          type: "Prácticas"
        }
      },

      // Habilidades técnicas
      skills: {
        backend: ["PHP", "Laravel", "Livewire", "MySQL"],
        frontend: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
        tools: ["Git", "GitHub", "Trello"],
        design: ["Adobe XD", "Photoshop"],
        cms: ["WordPress"],
        soft: [
          "Trabajo en equipo",
          "Comunicación efectiva", 
          "Resolución de problemas",
          "Adaptabilidad",
          "Gestión del tiempo",
          "Aprendizaje continuo"
        ]
      },

      // Proyectos destacados
      projects: [
        {
          name: "Multisite Web - beon. Entertainment",
          description: "Desarrollo de la web principal de beon. Entertainment, enfocada en la presentación de producciones y venta de entradas",
          technologies: ["Laravel", "Livewire", "Tailwind CSS", "Docker", "GSAP"],
          url: "https://beon-entertainment.com/"
        },
        {
          name: "Landing Page - Finca Alfoliz Origen",
          description: "Landing page optimizada para evento con sistema integrado para gestión y venta de entradas",
          technologies: ["Laravel", "Livewire", "Tailwind CSS", "JavaScript", "Docker"],
          url: "https://fincaalfolizorigen.com/"
        },
        {
          name: "Landing Page - CTX Tech Experience",
          description: "Landing page minimalista y moderna con enfoque en la experiencia del usuario y la conversión",
          technologies: ["Laravel", "Livewire", "Tailwind CSS", "Flux"],
          url: "https://ctx-tech.com/"
        }
      ],

      // Educación
      education: [
        {
          degree: "Ciclo Formativo de Grado Superior",
          field: "Desarrollo de Aplicaciones Web",
          school: "Cesur",
          period: "2020"
        },
        {
          degree: "Acceso a la Universidad",
          field: "Prueba de acceso a la Universidad",
          school: "Universidad Nacional de Educación a Distancia - U.N.E.D.",
          period: "2015"
        }
      ],

      // Información de contacto
      contact: {
        message: "Israel está disponible para nuevos proyectos y colaboraciones. Puedes contactarlo a través del formulario de contacto en este portfolio.",
        socialMedia: "También puedes encontrarlo en LinkedIn y GitHub.",
        preferred: "El formulario de contacto del portfolio es la mejor manera de contactarlo para propuestas profesionales."
      },

      // Metodologías y enfoques de trabajo
      methodologies: {
        agile: "Experiencia trabajando con metodologías ágiles",
        tools: "Uso de herramientas como Trello para gestión de proyectos",
        approach: "Enfoque colaborativo y adaptativo en el desarrollo"
      },

      // Enlaces importantes
      links: {
        github: "GitHub: https://github.com/imorlab",
        linkedin: "LinkedIn: https://www.linkedin.com/in/israelmorenolabrador/",
        portfolio: "Este portfolio contiene ejemplos detallados de proyectos"
      }
    },

    en: {
      // Información personal básica
      personal: {
        name: "Israel Moreno",
        role: "Full Stack Web Developer",
        location: "Spain",
        experience: "over 3 years of professional experience",
        specialization: "Laravel (PHP) development",
        description: "I love the universe of web programming, design and web development, and general technology."
      },

      // Experiencia profesional
      experience: {
        current: {
          role: "Web Developer",
          company: "beon. worldwide",
          period: "May 2023 - Present",
          location: "Seville, Andalusia, Spain (Hybrid)",
          type: "Full-time",
          responsibilities: [
            "Web Development: Creation and maintenance of scalable, high-performance platforms with Laravel (PHP)",
            "Reservation Management: Design of intuitive systems to optimize user experience",
            "Advanced Integrations: Implementation of OpenAI API for customization and automation",
            "Payment Gateways: Secure configuration and integration for global transactions",
            "Interactive Frontend: Dynamic interfaces with Laravel Livewire and Vue.js",
            "Customer Support: Direct interaction to adapt functionalities and provide solutions"
          ]
        },
        previous: {
          role: "Web Developer",
          company: "Iwan21",
          period: "March 2020 - June 2020",
          location: "Seville, Andalusia, Spain",
          type: "Internship"
        }
      },

      // Habilidades técnicas
      skills: {
        backend: ["PHP", "Laravel", "Livewire", "MySQL"],
        frontend: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
        tools: ["Git", "GitHub", "Trello"],
        design: ["Adobe XD", "Photoshop"],
        cms: ["WordPress"],
        soft: [
          "Teamwork",
          "Effective Communication",
          "Problem Solving", 
          "Adaptability",
          "Time Management",
          "Continuous Learning"
        ]
      },

      // Proyectos destacados
      projects: [
        {
          name: "Multisite Web - beon. Entertainment",
          description: "Development of beon. Entertainment's main website, focused on production presentation and ticket sales",
          technologies: ["Laravel", "Livewire", "Tailwind CSS", "Docker", "GSAP"],
          url: "https://beon-entertainment.com/"
        },
        {
          name: "Landing Page - Finca Alfoliz Origen",
          description: "Optimized landing page for event with integrated system for ticket management and sales",
          technologies: ["Laravel", "Livewire", "Tailwind CSS", "JavaScript", "Docker"],
          url: "https://fincaalfolizorigen.com/"
        },
        {
          name: "Landing Page - CTX Tech Experience", 
          description: "Minimalist and modern landing page focused on user experience and conversion",
          technologies: ["Laravel", "Livewire", "Tailwind CSS", "Flux"],
          url: "https://ctx-tech.com/"
        }
      ],

      // Educación
      education: [
        {
          degree: "Higher Technical Certificate",
          field: "Web Application Development",
          school: "Cesur",
          period: "2020"
        },
        {
          degree: "University Access",
          field: "University Entrance Examination",
          school: "National University of Distance Education - U.N.E.D.",
          period: "2015"
        }
      ],

      // Información de contacto
      contact: {
        message: "Israel is available for new projects and collaborations. You can contact him through the contact form on this portfolio.",
        socialMedia: "You can also find him on LinkedIn and GitHub.",
        preferred: "The portfolio contact form is the best way to reach him for professional proposals."
      },

      // Metodologías y enfoques de trabajo
      methodologies: {
        agile: "Experience working with agile methodologies",
        tools: "Use of tools like Trello for project management",
        approach: "Collaborative and adaptive approach to development"
      },

      // Enlaces importantes
      links: {
        github: "GitHub: github.com/imorlab",
        linkedin: "Professional LinkedIn available",
        portfolio: "This portfolio contains detailed project examples"
      }
    }
  },

  // Función principal para obtener respuesta del chatbot
  async getResponse(question, locale = 'es') {
    const kb = this.knowledgeBase[locale] || this.knowledgeBase.es;
    const normalizedQuestion = question.toLowerCase().trim();
    
    // Detectar intención de la pregunta
    const intent = this.detectIntent(normalizedQuestion, locale);
    
    // Generar respuesta basada en la intención
    return this.generateResponse(intent, kb, locale);
  },

  // Detectar la intención de la pregunta del usuario
  detectIntent(question, locale) {
    const patterns = {
      es: {
        greeting: /\b(hola|buenos días|buenas tardes|buenas noches|saludos|hey|que tal|que hay)\b/i,
        farewell: /\b(adiós|hasta luego|hasta la vista|nos vemos|chao|bye|despedida)\b/i,
        thanks: /\b(gracias|muchas gracias|te agradezco|muy amable)\b/i,
        personal: /\b(quién eres|quién es|nombre|edad|dónde vives|dónde está|ubicación|personal|sobre ti|sobre israel)\b/i,
        experience: /\b(experiencia|trabajo|empleo|empresa|puesto|cargo|profesional|laboral|carrera)\b/i,
        skills: /\b(habilidades|skills|tecnologías|lenguajes|frameworks|herramientas|conocimientos|sabe|puede hacer)\b/i,
        projects: /\b(proyectos|trabajos|desarrollos|portfolio|sitios web|aplicaciones|websites)\b/i,
        education: /\b(educación|estudios|formación|universidad|título|grado|certificado)\b/i,
        contact: /\b(contacto|contactar|email|correo|teléfono|linkedin|github|cómo contactar)\b/i,
        availability: /\b(disponible|disponibilidad|freelance|trabajar|colaborar|contratar)\b/i,
        technologies: /\b(laravel|php|javascript|vue|mysql|html|css|tailwind|bootstrap|git)\b/i,
        methodologies: /\b(metodologías|agile|scrum|kanban|metodología|proceso|enfoque|workflow)\b/i,
        github: /\b(github|git|repositorio|código|source code|repos)\b/i,
        cv: /\b(cv|curriculum|resumé|resume|descargar|pdf)\b/i
      },
      en: {
        greeting: /\b(hello|hi|good morning|good afternoon|good evening|hey|greetings|what's up|how are you)\b/i,
        farewell: /\b(goodbye|bye|see you|farewell|see you later|take care)\b/i,
        thanks: /\b(thank you|thanks|thank you very much|much appreciated|thanks a lot)\b/i,
        personal: /\b(who are you|who is|name|age|where do you live|where is|location|personal|about you|about israel)\b/i,
        experience: /\b(experience|work|job|company|position|role|professional|career)\b/i,
        skills: /\b(skills|technologies|languages|frameworks|tools|knowledge|knows|can do)\b/i,
        projects: /\b(projects|work|developments|portfolio|websites|applications|sites)\b/i,
        education: /\b(education|studies|training|university|degree|certificate)\b/i,
        contact: /\b(contact|email|phone|linkedin|github|how to contact)\b/i,
        availability: /\b(available|availability|freelance|work|collaborate|hire)\b/i,
        technologies: /\b(laravel|php|javascript|vue|mysql|html|css|tailwind|bootstrap|git)\b/i,
        methodologies: /\b(methodologies|agile|scrum|kanban|methodology|process|approach|workflow)\b/i,
        github: /\b(github|git|repository|code|source code|repos)\b/i,
        cv: /\b(cv|curriculum|resume|download|pdf)\b/i
      }
    };

    const currentPatterns = patterns[locale] || patterns.es;

    // Buscar coincidencias por prioridad
    if (currentPatterns.greeting.test(question)) return 'greeting';
    if (currentPatterns.farewell.test(question)) return 'farewell';
    if (currentPatterns.thanks.test(question)) return 'thanks';
    if (currentPatterns.experience.test(question)) return 'experience';
    if (currentPatterns.skills.test(question)) return 'skills';
    if (currentPatterns.projects.test(question)) return 'projects';
    if (currentPatterns.education.test(question)) return 'education';
    if (currentPatterns.contact.test(question)) return 'contact';
    if (currentPatterns.availability.test(question)) return 'availability';
    if (currentPatterns.technologies.test(question)) return 'technologies';
    if (currentPatterns.methodologies.test(question)) return 'methodologies';
    if (currentPatterns.github.test(question)) return 'github';
    if (currentPatterns.cv.test(question)) return 'cv';
    if (currentPatterns.personal.test(question)) return 'personal';

    return 'general';
  },

  // Generar respuesta basada en la intención detectada
  generateResponse(intent, kb, locale) {
    const responses = {
      es: {
        greeting: [
          "¡Hola! Soy el asistente virtual de Israel Moreno. ¿En qué puedo ayudarte hoy?",
          "¡Buenos días! Estoy aquí para contarte todo sobre Israel. ¿Qué te gustaría saber?",
          "¡Hola! ¿Te interesa conocer más sobre la experiencia y proyectos de Israel?"
        ],

        farewell: [
          "¡Hasta luego! Ha sido un placer hablar contigo. ¡No dudes en volver si necesitas más información sobre Israel!",
          "¡Nos vemos! Espero haberte ayudado. ¡Que tengas un excelente día!",
          "¡Adiós! Recuerda que puedes contactar a Israel para cualquier proyecto. ¡Hasta pronto!"
        ],

        thanks: [
          "¡De nada! Me alegra poder ayudarte con información sobre Israel. ¿Hay algo más que te gustaría saber?",
          "¡Un placer ayudarte! Si tienes más preguntas sobre Israel, estaré aquí para responderlas.",
          "¡Para eso estoy aquí! ¿Te gustaría conocer más detalles sobre algún proyecto o habilidad específica de Israel?"
        ],
        
        personal: [
          `¡Hola! Te cuento sobre Israel. Es un desarrollador web full stack que vive en España y lleva más de 3 años creando soluciones web realmente interesantes. Se especializa principalmente en Laravel (PHP), que es donde más brilla, pero también maneja Vue.js y otras tecnologías modernas.

Lo que más me gusta de él es que realmente se apasiona por la programación web, el diseño y la tecnología en general. No es solo trabajo para él, ¡se nota que le encanta lo que hace!

¿Te gustaría saber algo más específico sobre él?`,
          
          `Israel es uno de esos desarrolladores que encuentras de vez en cuando que realmente sabe lo que hace. Está ubicado en España y tiene una sólida experiencia de más de 3 años en desarrollo web full stack.

Su fuerte es Laravel - ahí es donde realmente se destaca - pero también tiene buen manejo de Vue.js y otras tecnologías del ecosistema web moderno. Lo que más me impresiona es su enfoque: no solo programa, sino que realmente entiende cómo crear experiencias web que funcionan bien.

¿Hay algo específico de su background que te interese conocer?`
        ],

        experience: [
          `Te cuento sobre la experiencia actual de Israel - está trabajando como Web Developer en **beon. worldwide** desde mayo de 2023, en Sevilla con modalidad híbrida.

**Lo que hace día a día:**
- Desarrolla plataformas web súper escalables con Laravel (es su especialidad)
- Diseña sistemas de reservas que realmente funcionan bien para los usuarios
- Integra APIs de OpenAI para automatización (¡está al día con la IA!)
- Configura pasarelas de pago seguras para clientes internacionales
- Crea interfaces dinámicas con Livewire y Vue.js
- Da soporte directo a clientes, adaptando funcionalidades según sus necesidades

Lo que más me llama la atención es que no solo programa - también interactúa directamente con los clientes para entender qué necesitan realmente. Eso le da una perspectiva súper valiosa.

¿Te interesa saber más sobre algún aspecto específico de su trabajo?`,
          
          `La experiencia de Israel es bastante sólida. Actualmente está en **beon. worldwide** como Web Developer, donde lleva desde mayo de 2023.

**Sus principales fortalezas:**
✨ **Backend robusto** - Laravel es su zona de confort, ahí realmente domina
🔧 **Integraciones complejas** - APIs externas, sistemas de pago, OpenAI... lo que necesites
🎨 **Frontend moderno** - Livewire y Vue.js para interfaces que realmente funcionan
👥 **Trato directo con clientes** - no es solo un programador que recibe tickets, sino que entiende el negocio

Ha trabajado en sistemas multisite complejos y optimización de rendimiento para aplicaciones de alto tráfico. Antes también tuvo una experiencia como programador web en Iwan21 durante sus prácticas.

¿Quieres que te cuente sobre algún proyecto específico donde aplicó estas habilidades?`
        ],

        skills: [
          `Israel tiene una combinación muy sólida de habilidades técnicas. Te cuento lo que maneja:

**Su fuerte (nivel avanzado):**
**Backend** - PHP, Laravel, Livewire, MySQL (aquí es donde realmente domina)

**Frontend (nivel intermedio-avanzado):**
JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS, Vue.js

**Otras herramientas:** Git, GitHub, Trello, Adobe XD, Photoshop

**Un ejemplo práctico:** En beon. Entertainment desarrolló un sistema multisite súper complejo que maneja múltiples producciones teatrales. Usó Laravel para el backend robusto, Livewire para interfaces dinámicas, Tailwind CSS para que se vea genial en todos los dispositivos, y MySQL para gestionar todos los datos.

**Sus habilidades blandas también son geniales:**
${kb.skills.soft.join(' • ')}

Lo que más me gusta es que no solo sabe programar - entiende el negocio y puede hablar tanto con el equipo técnico como con los clientes.

¿Te interesa saber cómo aplicó alguna de estas tecnologías en algún proyecto específico?`,
          
          `Las habilidades de Israel están muy bien balanceadas entre backend y frontend, con una especialización clara en Laravel.

**Lo que realmente domina:**
🚀 **Laravel/PHP** - 3+ años desarrollando aplicaciones complejas (este es su superpoder)
💻 **Frontend moderno** - JavaScript ES6+, Vue.js, Tailwind CSS
🎨 **UI/UX** - Diseño responsive y experiencia de usuario
🔧 **DevOps** - Git, Docker, optimización de rendimiento

**Su enfoque de desarrollo:**
- Código limpio y mantenible (no de esos que escriben código "rápido y sucio")
- Optimización de rendimiento real
- Experiencia de usuario como prioridad
- Integración continua y buenas prácticas

En CTX Tech Experience, por ejemplo, utilizó Laravel + Livewire + Tailwind para crear una landing page optimizada que logró excelentes métricas de conversión.

¿Quieres que te cuente más sobre su experiencia con alguna tecnología específica?`
        ],

        projects: [
          `¡Los proyectos de Israel están geniales! Te cuento sobre los tres más destacados:

**1. Multisite Web - beon. Entertainment**
<a href="${kb.projects[0].url}" target="_blank">${kb.projects[0].url}</a>
Es la plataforma principal para presentar producciones teatrales y vender entradas. Lo interesante es que maneja múltiples sitios desde una sola instalación - súper eficiente. Tecnologías: Laravel, Livewire, Tailwind CSS, Docker, GSAP.

**2. Finca Alfoliz Origen**
<a href="${kb.projects[1].url}" target="_blank">${kb.projects[1].url}</a>
Una landing page optimizada para un evento, pero con un sistema integrado completo para gestión y venta de entradas. No es solo una página bonita, ¡funciona de verdad!

**3. CTX Tech Experience**
<a href="${kb.projects[2].url}" target="_blank">${kb.projects[2].url}</a>
Esta me encanta por su diseño minimalista y moderno. Está súper enfocada en la experiencia del usuario y la conversión. Desarrollada con Laravel, Livewire, Tailwind CSS y Flux.

Lo que más me llama la atención es la variedad: desde plataformas complejas hasta landing pages optimizadas. ¡Israel realmente sabe adaptarse a diferentes necesidades!

¿Te gustaría saber más detalles técnicos de alguno de estos proyectos?`,
          
          `Los proyectos de Israel demuestran su versatilidad muy bien:

🎭 **Plataformas de entretenimiento** con gestión completa de reservas
🎫 **Sistemas de venta de entradas** integrados y funcionales  
🚀 **Landing pages** súper optimizadas para conversión
⚡ **Sitios web de alto rendimiento** que realmente funcionan

**Los highlights:**
- **beon. Entertainment**: Sistema multisite complejo que gestiona múltiples producciones
- **Finca Alfoliz Origen**: Landing con sistema de gestión integrado
- **CTX Tech Experience**: Diseño minimalista enfocado en resultados

Todos desarrollados con su stack favorito: Laravel, Livewire y tecnologías modernas. Lo que más me gusta es que no son solo proyectos técnicos - cada uno resuelve un problema real de negocio.

¿Hay algún aspecto técnico específico de estos proyectos que te interese conocer?`
        ],

        education: [
          `Formación académica de Israel:

🎓 <strong>Ciclo Formativo de Grado Superior</strong>
📚 Desarrollo de Aplicaciones Web - Cesur (2020)

🎯 <strong>Acceso a la Universidad</strong>
📚 U.N.E.D. (2015)

Su formación se complementa con aprendizaje continuo en tecnologías web modernas.`
        ],

        contact: [
          `¡Perfecto! Si quieres contactar con Israel, te cuento las mejores formas:

**Para propuestas de proyectos y trabajo:** 
📧 **Formulario de contacto del portfolio** - Esta es la opción que más recomienda para temas profesionales. Es la forma más directa y él suele responder dentro de 24-48 horas.

**Para networking y consultas técnicas:**
💼 **LinkedIn** - Perfil profesional completo
💻 **GitHub** - ${kb.links.github} (aquí puedes ver ejemplos de su código)

**Tipos de consultas que maneja:**
- Propuestas de nuevos proyectos
- Colaboraciones a largo plazo  
- Consultoría técnica
- Desarrollo de MVPs
- Optimización de aplicaciones existentes

Israel está disponible para proyectos freelance y colaboraciones. Le gusta trabajar tanto en proyectos desde cero como mejorar aplicaciones que ya existen.

¿Tienes algún proyecto específico en mente? ¡Cuéntame y te puedo dar algunos tips sobre cómo planteárselo!`
        ],

        availability: [
          `## Disponibilidad y Colaboraciones

Israel está actualmente disponible para nuevos proyectos y colaboraciones, especializándose en desarrollo web full-stack con Laravel.

### Tipos de Proyectos Ideales
💼 <strong>Desarrollo de aplicaciones web</strong> - Sistemas complejos y escalables
🔧 <strong>Integración de APIs</strong> - Servicios externos y automatización
🎨 <strong>Interfaces modernas</strong> - UX/UI responsive y dinámico
⚡ <strong>Optimización de rendimiento</strong> - Mejora de aplicaciones existentes

### Modalidades de Trabajo
- Proyectos freelance
- Colaboraciones a largo plazo
- Desarrollo de MVPs
- Consultoría técnica

### Proceso de Colaboración
1. <strong>Consulta inicial:</strong> Análisis de requisitos y objetivos
2. <strong>Propuesta técnica:</strong> Planificación y estimación
3. <strong>Desarrollo iterativo:</strong> Entregas regulares con feedback
4. <strong>Soporte post-lanzamiento:</strong> Mantenimiento y mejoras

### Siguiente Paso
Para discutir rates específicos, tiempos de entrega y detalles del proyecto, utiliza el formulario de contacto del portfolio.

<strong>¿Tienes un proyecto específico en mente? ¡Cuéntame más detalles!</strong>`
        ],

        technologies: [
          `## Stack Tecnológico Moderno

Israel trabaja con un conjunto cuidadosamente seleccionado de tecnologías modernas, optimizadas para crear aplicaciones web escalables y mantenibles.

### Tecnologías Core
🚀 <strong>Laravel</strong> - Framework PHP robusto para aplicaciones empresariales
⚡ <strong>Livewire</strong> - Interfaces dinámicas sin complejidad JavaScript excesiva
💻 <strong>Vue.js</strong> - Framework reactivo para experiencias de usuario fluidas
🎨 <strong>Tailwind CSS</strong> - Framework CSS utilitario para diseño eficiente
🗄️ <strong>MySQL</strong> - Base de datos relacional confiable

### Enfoque de Selección
Cada tecnología es elegida por su capacidad de resolver problemas específicos y su integración con el ecosistema general.

### Ejemplo Práctico
En CTX Tech Experience, utilizó Laravel + Livewire + Tailwind para crear una landing page optimizada que logró excelentes métricas de conversión.

<strong>¿Te interesa conocer cómo aplica alguna de estas tecnologías en proyectos específicos?</strong>`
        ],

        methodologies: [
          `## Metodologías y Enfoques de Trabajo

Israel combina metodologías ágiles con un enfoque pragmático, adaptándose a las necesidades específicas de cada proyecto.

### Metodologías Aplicadas
🔄 <strong>Agile/Scrum:</strong> ${kb.methodologies.agile}
📋 <strong>Gestión de Proyectos:</strong> ${kb.methodologies.tools}
🤝 <strong>Colaboración:</strong> ${kb.methodologies.approach}

### Proceso de Desarrollo
1. <strong>Análisis y Planificación:</strong> Comprensión profunda de requisitos
2. <strong>Desarrollo Iterativo:</strong> Entregas incrementales y feedback continuo
3. <strong>Testing y Optimización:</strong> Pruebas rigurosas y mejora continua
4. <strong>Implementación:</strong> Despliegue seguro y monitoreo

### Herramientas de Colaboración
- Trello para gestión de tareas
- Git para control de versiones colaborativo
- Comunicación directa con clientes y equipos

<strong>¿Te gustaría conocer cómo implementa estas metodologías en proyectos reales?</strong>`
        ],

        github: [
          `## Repositorios y Código Fuente

Israel mantiene un portafolio activo de código que demuestra su experiencia y evolución como desarrollador.

### Perfil GitHub
🔗 <strong>${kb.links.github}</strong>
📊 Contribuciones regulares y proyectos diversos
🚀 Código limpio y bien documentado

### Qué Encontrarás
- Proyectos de práctica y experimentación
- Snippets y utilidades útiles
- Ejemplos de implementaciones técnicas
- Colaboraciones en proyectos open source

### Proyectos Destacados
Los repositorios incluyen ejemplos de desarrollo con Laravel, Vue.js, y herramientas modernas de desarrollo web.

### Nota Importante
Algunos proyectos comerciales no están disponibles públicamente por acuerdos de confidencialidad, pero los ejemplos disponibles demuestran calidad de código y buenas prácticas.

<strong>¿Te interesa revisar algún tipo específico de proyecto o implementación técnica?</strong>
<strong>También puedes contactarlo directamente para discutir proyectos comerciales.</strong>`
        ],

        cv: [
          `## Curriculum y Documentación Profesional

Israel mantiene su información profesional actualizada y accesible para oportunidades de colaboración.

### Acceso al CV
📄 <strong>Descarga disponible</strong> en la sección "Sobre Mí" del portfolio
📋 Información completa de experiencia, educación y proyectos
🔄 Actualizado regularmente con nuevos proyectos y habilidades

### Contenido del CV
- Experiencia profesional detallada
- Proyectos destacados con tecnologías utilizadas
- Formación académica y certificaciones
- Habilidades técnicas y blandas
- Información de contacto profesional

### Formato y Accesibilidad
El CV está diseñado para ser claro, profesional y fácil de revisar, tanto en formato digital como impreso.

### Para Reclutadores y Clientes
Si necesitas información específica sobre rates, disponibilidad detallada o referencias, ${kb.contact.preferred}

<strong>¿Te gustaría que te guíe a la sección de descarga del CV?</strong>
<strong>¿O prefieres usar el formulario de contacto para consultas específicas?</strong>`
        ],

        general: [
          `¡Excelente pregunta! Estoy aquí para contarte todo sobre Israel Moreno y su experiencia como desarrollador.

**Puedo ayudarte con:**
- 💼 **Su experiencia profesional** - qué hace actualmente, sus responsabilidades y logros
- 🛠️ **Habilidades técnicas** - su stack principal y en qué es realmente bueno
- 🚀 **Proyectos destacados** - ejemplos reales de su trabajo con detalles técnicos
- 📞 **Cómo contactarlo** - las mejores formas según tu tipo de consulta
- 🎯 **Disponibilidad** - tipos de proyectos que le interesan y modalidades de trabajo

**Algunas preguntas populares:**
"¿Qué experiencia tiene con Laravel?" "¿Cuáles son sus proyectos más interesantes?" "¿Cómo puedo contactarlo para un proyecto?"

¿Qué aspecto específico te gustaría explorar primero? ¡Pregúntame lo que quieras!`,
          
          `¡Genial! Me encanta que tengas curiosidad por conocer más sobre Israel.

Tengo información súper completa sobre su trayectoria profesional, y puedo contarte desde detalles técnicos específicos hasta cómo es su enfoque de trabajo.

**Lo que más le gusta preguntar a la gente:**
� Su experiencia actual en beon. worldwide
� Sus habilidades con Laravel y Vue.js  
🌟 Los proyectos más cool en los que ha trabajado
📬 La mejor forma de contactarlo según tu necesidad

**Dato curioso:** Israel no es solo un programador típico - también interactúa directamente con clientes, lo que le da una perspectiva única sobre cómo crear soluciones que realmente funcionen en el mundo real.

¿Por dónde te gustaría empezar? ¡Puedes preguntarme cualquier cosa específica!`,
          
          `¡Perfecto! Estás en el lugar indicado para conocer todo sobre Israel Moreno.

Es un desarrollador full-stack que realmente sabe lo que hace, especializado en crear soluciones web robustas y escalables. Lo que más me gusta de él es que combina conocimiento técnico sólido con experiencia práctica en proyectos reales.

**Highlights rápidos:**
✨ **3+ años** de experiencia profesional
🚀 **Especialista en Laravel** con experiencia en sistemas complejos
🎯 **Enfoque en resultados** con ejemplos medibles de éxito
🤝 **Colaborador efectivo** tanto con equipos como con clientes

**Siguientes pasos sugeridos:**
1. Pregúntame sobre sus proyectos para ver ejemplos reales
2. Conoce su stack tecnológico y nivel de experiencia  
3. Averigua sobre su disponibilidad si tienes un proyecto en mente
4. Descubre la mejor forma de contactarlo

¿Qué te llama más la atención? ¡Estoy aquí para resolver todas tus dudas!`
        ]
      },

      en: {
        greeting: [
          "Hello! I'm Israel Moreno's virtual assistant. How can I help you today?",
          "Good day! I'm here to tell you all about Israel. What would you like to know?",
          "Hi! Are you interested in learning more about Israel's experience and projects?"
        ],

        farewell: [
          "Goodbye! It was a pleasure talking with you. Don't hesitate to come back if you need more information about Israel!",
          "See you later! I hope I was helpful. Have an excellent day!",
          "Farewell! Remember you can contact Israel for any project. See you soon!"
        ],

        thanks: [
          "You're welcome! I'm glad I could help you with information about Israel. Is there anything else you'd like to know?",
          "My pleasure to help! If you have more questions about Israel, I'll be here to answer them.",
          "That's what I'm here for! Would you like to know more details about any specific project or skill of Israel's?"
        ],
        
        personal: [
          `Israel Moreno is a ${kb.personal.role} based in ${kb.personal.location}. He has ${kb.personal.experience} and specializes in ${kb.personal.specialization}. ${kb.personal.description}`,
          `Let me tell you about Israel: he's a full stack web developer located in Spain, with over 3 years creating innovative web solutions with Laravel and other modern technologies.`
        ],

        experience: [
          `Israel has solid professional experience:

<strong>Currently:</strong>
🏢 ${kb.experience.current.role} at ${kb.experience.current.company}
📅 ${kb.experience.current.period}
📍 ${kb.experience.current.location}

His main responsibilities include Laravel development, reservation management, OpenAI API integration, payment gateway implementation, and creating dynamic interfaces.`,
          
          `Israel's experience focuses on:

✨ Developing scalable platforms with Laravel
🔧 API and payment system integration
🎨 Creating dynamic interfaces with Livewire and Vue.js
👥 Direct customer support and functionality adaptation`
        ],

        skills: [
          `Israel masters a wide range of technologies:

<strong>Backend:</strong> ${kb.skills.backend.join(', ')}
<strong>Frontend:</strong> ${kb.skills.frontend.join(', ')}
<strong>Tools:</strong> ${kb.skills.tools.join(', ')}
<strong>Design:</strong> ${kb.skills.design.join(', ')}

Additionally, he excels in soft skills like teamwork, effective communication, and problem-solving.`,
          
          `Israel's technical skills include:

🚀 Specialization in Laravel and PHP
💻 Modern frontend with JavaScript, HTML5, CSS3
🎨 Frameworks like Tailwind CSS and Bootstrap
🔧 Version control with Git and GitHub
🎯 Design with Adobe XD and Photoshop`
        ],

        projects: [
          `Israel has worked on notable projects:

<strong>1. Multisite Web - beon. Entertainment</strong>
🔗 <a href="${kb.projects[0].url}" target="_blank">${kb.projects[0].url}</a>
Main web platform for production presentation and ticket sales.

<strong>2. Finca Alfoliz Origen</strong>
🔗 <a href="${kb.projects[1].url}" target="_blank">${kb.projects[1].url}</a>
Optimized landing page with integrated ticket management system.

<strong>3. CTX Tech Experience</strong>
🔗 <a href="${kb.projects[2].url}" target="_blank">${kb.projects[2].url}</a>
Minimalist landing page focused on conversion.`,
          
          `Israel's projects demonstrate his versatility:

🎭 Entertainment platforms with reservation management
🎫 Integrated ticket sales systems
🚀 Conversion-optimized landing pages
⚡ High-performance websites

All developed with Laravel, Livewire and modern technologies.`
        ],

        education: [
          `Israel's academic background:

🎓 <strong>Higher Technical Certificate</strong>
📚 Web Application Development - Cesur (2020)

🎯 <strong>University Access</strong>
📚 U.N.E.D. (2015)

His training is complemented by continuous learning in modern web technologies.`
        ],

        contact: [
          `Want to contact Israel? 📬

${kb.contact.message}

${kb.contact.socialMedia}

Don't hesitate to get in touch to discuss projects or collaborations! 🚀`
        ],

        availability: [
          `Israel is available for new projects and collaborations. His experience in full stack web development with Laravel makes him an ideal candidate for:

💼 Web application development
🔧 API and system integration
🎨 Modern interface creation
⚡ Performance optimization

Contact him to discuss your project!`
        ],

        technologies: [
          `Israel works primarily with modern technologies:

🚀 <strong>Laravel</strong> - PHP framework for robust applications
⚡ <strong>Livewire</strong> - Dynamic interfaces without complex JavaScript
💻 <strong>Vue.js</strong> - Reactive JavaScript framework
🎨 <strong>Tailwind CSS</strong> - Utility-first CSS framework
🗄️ <strong>MySQL</strong> - Relational database

His tech stack is optimized for creating modern and scalable web applications.`
        ],

        general: [
          "Interesting question. I can tell you about Israel's experience, technical skills, notable projects, or how to contact him. What would you like to know specifically?",
          "Would you like to know more about any specific aspect of Israel? I can talk about his professional experience, projects, technical skills, or education.",
          "Of course! I'm here to help. Are you interested in learning about Israel's experience, his projects, or perhaps how to contact him?"
        ]
      }
    };

    const intentResponses = responses[locale]?.[intent] || responses[locale]?.general || responses.es.general;
    const randomIndex = Math.floor(Math.random() * intentResponses.length);
    
    // Convertir saltos de línea a HTML
    const response = intentResponses[randomIndex];
    return response.replace(/\n/g, '<br>');
  }
};
