import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { SITE_URL, PAGINAS_INDEXABLES } from './src/site.js'

export default defineConfig({
  plugins: [vue()],

  server: {
    port: 5173,
    host: true // necesario para que funcione también dentro de Docker (docker-compose.dev.yml)
  },

  build: {
    sourcemap: false
  },

  // Generación estática (SSG): cada página sale del build como un HTML completo,
  // con su texto, title, description y datos estructurados. Google no tiene que ejecutar JS.
  ssgOptions: {
    // "flat": /aviso-legal -> aviso-legal.html (sin barra final ni redirecciones)
    dirStyle: 'flat',

    // Rutas a generar: las normales + /404 (que sale como 404.html para Nginx)
    includedRoutes(paths) {
      return [...paths.filter((p) => !p.includes(':')), '/404']
    },

    // Al terminar, escribimos sitemap.xml con las páginas indexables
    async onFinished() {
      const urls = PAGINAS_INDEXABLES.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
      await writeFile(resolve('dist', 'sitemap.xml'), xml, 'utf8')
      console.log('✅ sitemap.xml generado')

      // Archivos internos del build que no deben publicarse
      await rm(resolve('dist', '.vite'), { recursive: true, force: true })
    }
  }
})
