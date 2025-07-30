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
        github: "GitHub: github.com/imorlab",
        linkedin: "LinkedIn profesional disponible",
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
          `Israel Moreno es un ${kb.personal.role} con sede en ${kb.personal.location}. Tiene ${kb.personal.experience} y se especializa en ${kb.personal.specialization}. ${kb.personal.description}`,
          `Te cuento sobre Israel: es desarrollador web full stack ubicado en España, con más de 3 años creando soluciones web innovadoras con Laravel y otras tecnologías modernas.`
        ],

        experience: [
          `## Experiencia Profesional de Israel

Israel cuenta con una sólida trayectoria en desarrollo web, combinando experiencia técnica con habilidades de colaboración.

### Puesto Actual
🏢 <strong>${kb.experience.current.role}</strong> en ${kb.experience.current.company}
📅 ${kb.experience.current.period}
📍 ${kb.experience.current.location}

### Responsabilidades Clave
- Desarrollo y mantenimiento de plataformas escalables con Laravel
- Implementación de APIs avanzadas (incluyendo OpenAI)
- Gestión de sistemas de reservas y pasarelas de pago
- Creación de interfaces dinámicas con Livewire y Vue.js
- Soporte directo al cliente y adaptación de funcionalidades

### Logros Destacados
Desarrollo de sistemas complejos multisite y optimización de rendimiento para aplicaciones de alto tráfico.

<strong>¿Te interesa conocer detalles sobre algún proyecto específico o aspecto técnico?</strong>`,
          
          `## Stack Tecnológico y Enfoque

Israel se especializa en el ecosistema Laravel con un enfoque full-stack moderno.

### Áreas de Expertise
✨ <strong>Backend:</strong> Desarrollo de APIs robustas y sistemas escalables
🔧 <strong>Integraciones:</strong> APIs externas, sistemas de pago, OpenAI
🎨 <strong>Frontend:</strong> Interfaces reactivas con Livewire y Vue.js
👥 <strong>Colaboración:</strong> Trabajo directo con clientes y equipos

### Experiencia Práctica
Más de 3 años resolviendo desafíos reales en entornos de producción, desde startups hasta empresas establecidas.

<strong>¿Quieres explorar algún proyecto específico donde aplicó estas habilidades?</strong>`
        ],

        skills: [
          `## Habilidades Técnicas y Nivel de Dominio

Israel posee un conjunto completo de habilidades para desarrollo web moderno, con especial expertise en el ecosistema PHP/Laravel.

### Stack Principal
<strong>Backend (Avanzado):</strong> ${kb.skills.backend.join(', ')}
<strong>Frontend (Intermedio-Avanzado):</strong> ${kb.skills.frontend.join(', ')}
<strong>Herramientas:</strong> ${kb.skills.tools.join(', ')}
<strong>Diseño:</strong> ${kb.skills.design.join(', ')}

### Ejemplo de Aplicación
En beon. Entertainment, implementó un sistema multisite complejo que gestiona múltiples producciones teatrales con:
\`\`\`
- Laravel para backend robusto
- Livewire para interfaces dinámicas
- Tailwind CSS para diseño responsive
- MySQL para gestión de datos
\`\`\`

### Habilidades Blandas
${kb.skills.soft.join(' • ')}

<strong>¿Te gustaría ver ejemplos específicos de cómo aplicó estas tecnologías en proyectos reales?</strong>`,
          
          `## Especialización y Experiencia Práctica

Israel combina conocimiento técnico profundo con experiencia práctica en proyectos de producción.

### Áreas de Especialización
🚀 <strong>Laravel/PHP:</strong> 3+ años desarrollando aplicaciones complejas
💻 <strong>Frontend Moderno:</strong> JavaScript ES6+, Vue.js, Tailwind CSS
🎨 <strong>UI/UX:</strong> Diseño responsive y experiencia de usuario
🔧 <strong>DevOps:</strong> Git, Docker, optimización de rendimiento

### Enfoque de Desarrollo
- Código limpio y mantenible
- Optimización de rendimiento
- Experiencia de usuario centrada
- Integración continua

<strong>¿Quieres conocer más sobre su experiencia con alguna tecnología específica?</strong>`
        ],

        projects: [
          `Israel ha trabajado en proyectos destacados:

<strong>1. Multisite Web - beon. Entertainment</strong>
🔗 <a href="${kb.projects[0].url}" target="_blank">${kb.projects[0].url}</a>
Plataforma web principal para presentación de producciones y venta de entradas.

<strong>2. Finca Alfoliz Origen</strong>
🔗 <a href="${kb.projects[1].url}" target="_blank">${kb.projects[1].url}</a>
Landing page optimizada con sistema de gestión de entradas.

<strong>3. CTX Tech Experience</strong>
🔗 <a href="${kb.projects[2].url}" target="_blank">${kb.projects[2].url}</a>
Landing page minimalista enfocada en conversión.`,
          
          `Los proyectos de Israel demuestran su versatilidad:

🎭 Plataformas de entretenimiento con gestión de reservas
🎫 Sistemas de venta de entradas integrados
🚀 Landing pages optimizadas para conversión
⚡ Sitios web de alto rendimiento

Todos desarrollados con Laravel, Livewire y tecnologías modernas.`
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
          `## Contacto y Medios de Comunicación

Israel mantiene varios canales de comunicación para diferentes tipos de consultas profesionales.

### Contacto Preferido para Proyectos
📧 <strong>Formulario de Contacto del Portfolio</strong> - Ideal para propuestas profesionales
${kb.contact.preferred}

### Redes Profesionales
💼 <strong>LinkedIn:</strong> Perfil profesional y networking
� <strong>GitHub:</strong> ${kb.links.github}

### Información Adicional Disponible
- ${kb.contact.message}
- ${kb.contact.socialMedia}

### Tipos de Consultas
- <strong>Propuestas de proyectos:</strong> Usa el formulario de contacto
- <strong>Consultas técnicas:</strong> GitHub o LinkedIn
- <strong>Networking profesional:</strong> LinkedIn
- <strong>Colaboraciones:</strong> Cualquier canal

### Tiempo de Respuesta
Israel generalmente responde a consultas profesionales dentro de 24-48 horas.

<strong>¿Prefieres que te guíe al formulario de contacto?</strong>
<strong>¿O necesitas información sobre algún canal específico?</strong>`
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
          `## ¡Excelente pregunta!

Estoy aquí para proporcionarte información detallada sobre la experiencia y habilidades de Israel Moreno.

### Puedo ayudarte con:
- <strong>Experiencia profesional:</strong> Roles, responsabilidades y logros específicos  
- <strong>Habilidades técnicas:</strong> Nivel de dominio y ejemplos de aplicación
- <strong>Proyectos destacados:</strong> Detalles técnicos, desafíos y soluciones implementadas
- <strong>Metodologías de trabajo:</strong> Enfoques Agile y herramientas de colaboración
- <strong>Disponibilidad:</strong> Tipos de proyectos y modalidades de colaboración
- <strong>Contacto:</strong> Mejores canales según tu tipo de consulta

### Sugerencias de Consulta
¿Te interesa conocer sobre alguna tecnología específica como Laravel o Vue.js? ¿O prefieres información sobre algún proyecto particular?

<strong>¿Qué aspecto específico de la experiencia de Israel te gustaría explorar?</strong>`,
          
          `## Información Disponible sobre Israel

Como asistente virtual, tengo acceso a información completa sobre la trayectoria profesional de Israel.

### Áreas de Expertise que Puedo Detallarte:
📊 <strong>Experiencia laboral:</strong> 3+ años en desarrollo web profesional
🛠️ <strong>Stack tecnológico:</strong> Laravel, Vue.js, MySQL, Tailwind CSS
🚀 <strong>Proyectos reales:</strong> Desde landing pages hasta sistemas complejos
🤝 <strong>Metodologías:</strong> Agile, colaboración directa con clientes

### Llamadas a la Acción Disponibles:
- Revisar proyectos específicos en GitHub
- Contactar para discutir colaboraciones
- Explorar secciones del portfolio
- Descargar CV completo

<strong>¿Por dónde te gustaría comenzar? ¡Pregúntame sobre cualquier aspecto específico!</strong>`,
          
          `## ¡Perfecto! Estás en el lugar correcto

Israel es un desarrollador full-stack especializado en crear soluciones web robustas y escalables.

### Lo Más Destacado:
✨ <strong>Especialista en Laravel</strong> con experiencia en proyectos complejos
🎯 <strong>Enfoque en resultados</strong> con ejemplos medibles de éxito
🔧 <strong>Integrador de tecnologías</strong> (APIs, pagos, IA)
👥 <strong>Colaborador efectivo</strong> con equipos y clientes

### Próximos Pasos Sugeridos:
1. Explora sus proyectos destacados para ver ejemplos reales
2. Revisa su stack tecnológico y nivel de experiencia
3. Conoce su disponibilidad para nuevos proyectos
4. Contacta directamente para propuestas específicas

<strong>¿Qué te gustaría saber primero sobre Israel y su experiencia?</strong>`
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
