<template>
  <HeroSection />
  <ServiciosSection />
  <SobreMiSection />
  <ComoTrabajoSection />
  <ContactoSection />
</template>

<script setup>
import { useContenido } from '../content/index.js'
import { useSeo, datosEstructurados } from '../seo.js'
import HeroSection from '../components/sections/HeroSection.vue'
import ServiciosSection from '../components/sections/ServiciosSection.vue'
import SobreMiSection from '../components/sections/SobreMiSection.vue'
import ComoTrabajoSection from '../components/sections/ComoTrabajoSection.vue'
import ContactoSection from '../components/sections/ContactoSection.vue'

const t = useContenido()

useSeo({
  titulo: t.seo.inicio.titulo,
  descripcion: t.seo.inicio.descripcion,
  ruta: '/',
  jsonLd: datosEstructurados(t)
})
</script>
