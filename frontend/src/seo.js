// SEO de cada página en un solo sitio: title, description, canonical, Open Graph y robots.
// Con vite-ssg todo esto se escribe dentro del HTML generado (lo ve Google sin ejecutar JS).
import { useHead } from '@unhead/vue'
import { SITE_URL } from './site.js'
import { useContenido } from './content/index.js'

const OG_IMAGEN = `${SITE_URL}/imagenes/og-transversalab.jpg`

export function useSeo({ titulo, descripcion, ruta = '/', indexar = true, jsonLd = null }) {
  const t = useContenido()
  const url = `${SITE_URL}${ruta}`

  const meta = [
    { name: 'description', content: descripcion },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'es_ES' },
    { property: 'og:site_name', content: t.marca },
    { property: 'og:title', content: titulo },
    { property: 'og:description', content: descripcion },
    { property: 'og:url', content: url },
    { property: 'og:image', content: OG_IMAGEN },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: t.seo.imagenAlt },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
  if (!indexar) meta.push({ name: 'robots', content: 'noindex' })

  useHead({
    title: titulo,
    meta,
    link: indexar ? [{ rel: 'canonical', href: url }] : [],
    script: jsonLd
      ? [{ type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }]
      : []
  })
}

// Datos estructurados de la portada: quién es TransversaLab, qué ofrece y dónde.
// Ayudan a Google a distinguir esta web de otras empresas con nombre parecido.
export function datosEstructurados(t) {
  const org = {
    '@type': ['ProfessionalService', 'EducationalOrganization'],
    '@id': `${SITE_URL}/#organizacion`,
    name: t.marca,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/imagenes/logo-transversalab.png`,
    image: OG_IMAGEN,
    description: t.seo.inicio.descripcion,
    email: t.contacto.email,
    areaServed: { '@type': 'AdministrativeArea', name: 'Bizkaia' },
    availableLanguage: ['es', 'eu'],
    knowsAbout: [
      'Neuroeducación',
      'Diseño Universal para el Aprendizaje',
      'Neurodiversidad',
      'Neurodivergencia en personas adultas',
      'Neurodivergencia en mujeres',
      'Neuropsicología y educación',
      'Educación inclusiva',
      'Educación STEAM',
      'Inteligencia artificial en educación'
    ],
    founder: {
      '@type': 'Person',
      name: 'Aintzane Goffard Sevillano',
      url: 'https://aintzanegoffard.com/',
      sameAs: ['https://aintzanegoffard.com/']
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.servicios.titulo,
      itemListElement: t.servicios.lista.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.titulo, description: s.descripcion }
      }))
    }
  }
  if (t.contacto.telefono) org.telephone = t.contacto.telefono

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#web`,
        name: t.marca,
        url: `${SITE_URL}/`,
        inLanguage: 'es',
        publisher: { '@id': `${SITE_URL}/#organizacion` }
      },
      org
    ]
  }
}
