<template>
  <a class="skip-link" href="#contenido">{{ t.cabecera.saltarContenido }}</a>
  <SiteHeader />
  <main id="contenido" tabindex="-1">
    <RouterView />
  </main>
  <SiteFooter />
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { useContenido } from './content/index.js'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const t = useContenido()

// Idioma de la página (vite-ssg pondría "en" por defecto). Para el euskera será "eu".
useHead({ htmlAttrs: { lang: 'es' } })
</script>
