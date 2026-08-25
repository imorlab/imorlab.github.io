// Genera public/sitemap.xml, public/llms.txt y public/llms-full.txt a partir de
// las traducciones (src/i18n/*.json). Se ejecuta automáticamente en `npm run build`.
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => JSON.parse(readFileSync(resolve(root, p), 'utf-8'))
const write = (p, c) => writeFileSync(resolve(root, p), c, 'utf-8')

const SITE = 'https://imorlab.github.io'
const NAME = 'Israel Moreno'
const LINKS = {
  github: 'https://github.com/imorlab',
  linkedin: 'https://www.linkedin.com/in/israelmorenolabrador/'
}
const es = read('src/i18n/es.json')
const en = read('src/i18n/en.json')
const now = new Date().toISOString()

const PAGES = [
  { path: '/', key: 'home', priority: '1.0' },
  { path: '/about', key: 'about', priority: '0.8' },
  { path: '/projects', key: 'projects', priority: '0.8' },
  { path: '/contact', key: 'contact', priority: '0.6' }
]
const url = (path, lang) => (lang === 'es' ? `${SITE}${path}` : `${SITE}/en${path === '/' ? '' : path}`)

// ---------- sitemap.xml ----------
const sitemapUrls = PAGES.flatMap((p) =>
  ['es', 'en'].map((lang) => `  <url>
    <loc>${url(p.path, lang)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${url(p.path, 'es')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${url(p.path, 'en')}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(p.path, 'es')}" />
  </url>`)
).join('\n')

write('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls}
</urlset>
`)

// ---------- llms.txt (resumen) ----------
const pageList = (lang, msgs) =>
  PAGES.map((p) => `- [${msgs.meta[p.key].title}](${url(p.path, lang)}): ${msgs.meta[p.key].description}`).join('\n')

const skillNames = Object.values(es.about.skills.categories)
  .filter((c) => c.items)
  .map((c) => `${c.title}: ${c.items.map((i) => (typeof i === 'string' ? i : i.name)).join(', ')}`)

write('public/llms.txt', `# ${NAME} — ${es.home.role} / ${en.home.role}

> ${es.meta.home.description}
> ${en.meta.home.description}

## Quién es / Who
- Nombre / Name: ${NAME}
- Rol / Role: ${es.home.role} (${en.home.role})
- Ubicación / Location: ${es.about.experience.positions[0].location}
- Trabajo actual / Current job: ${es.about.experience.positions[0].role} en ${es.about.experience.positions[0].company} (${es.about.experience.positions[0].period})
- Formación / Education: ${es.about.education.items[0].degree} — ${es.about.education.items[0].field} (${es.about.education.items[0].school}, ${es.about.education.items[0].period})

## Habilidades / Skills
${skillNames.map((s) => `- ${s}`).join('\n')}

## Páginas (español)
${pageList('es', es)}

## Pages (English)
${pageList('en', en)}

## Contacto / Contact
- Web: ${SITE}/
- Formulario / Form: ${url('/contact', 'es')}
- GitHub: ${LINKS.github}
- LinkedIn: ${LINKS.linkedin}

## Versión extendida / Full version
- ${SITE}/llms-full.txt
`)

// ---------- llms-full.txt (contenido completo, ES + EN) ----------
const section = (lang, m) => {
  const a = m.about
  const positions = a.experience.positions.map((p) => `### ${p.role} — ${p.company}
- ${p.period} · ${p.location} · ${p.type}
${(p.responsibilities || []).map((r) => `- ${r}`).join('\n')}
- ${lang === 'es' ? 'Tecnologías' : 'Technologies'}: ${(p.skills || []).join(', ')}`).join('\n\n')

  const education = a.education.items.map((e) => `- ${e.degree} — ${e.field}. ${e.school}, ${e.period}${e.skills ? `. ${e.skills}` : ''}`).join('\n')

  const projects = m.projects.list.map((p) => `### ${p.title} — ${p.company}
- URL: ${p.url}
- ${p.description}
${[p.long_description, p.long_description_2, p.long_description_3].filter(Boolean).map((d) => `- ${d}`).join('\n')}
${(p.details || []).map((d) => `- ${d}`).join('\n')}
- ${lang === 'es' ? 'Tecnologías' : 'Technologies'}: ${(p.technologies || []).join(', ')}`).join('\n\n')

  return `# ${NAME} — ${m.home.role}

${a.intro}

${a.description}

${a.mission}

## ${a.experience.title}
${positions}

## ${a.education.title}
${education}

## ${a.skills.title}
${Object.values(a.skills.categories).filter((c) => c.items).map((c) => `- ${c.title}: ${c.items.map((i) => (typeof i === 'string' ? i : i.name)).join(', ')}`).join('\n')}

## ${m.projects.title}
${projects}

## ${m.contact.title}
- ${m.contact.getInTouch}
- ${lang === 'es' ? 'Formulario' : 'Form'}: ${url('/contact', lang)}
- GitHub: ${LINKS.github}
- LinkedIn: ${LINKS.linkedin}

## ${lang === 'es' ? 'Páginas' : 'Pages'}
${pageList(lang, m)}
`
}

write('public/llms-full.txt', `${section('es', es)}

---

${section('en', en)}`)

console.log(`[generate-seo] sitemap.xml (${PAGES.length * 2} URLs), llms.txt y llms-full.txt generados · ${now}`)
