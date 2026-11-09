<template>
  <section class="section">
    <div class="container nf">
      <div class="nf__imagen">
        <InfinitoImagen :anchos="[400]" :fallback="400" sizes="220px" />
      </div>
      <h1>{{ t.noEncontrada.titulo }}</h1>
      <p>{{ t.noEncontrada.texto }}</p>
      <a href="/" class="btn">{{ t.noEncontrada.boton }}</a>
    </div>
  </section>
</template>

<script setup>
import { useContenido } from '../content/index.js'
import { useSeo } from '../seo.js'
import InfinitoImagen from '../components/InfinitoImagen.vue'

const t = useContenido()

// Página de error: no se indexa. Nginx la sirve con código 404 real (ver transversalab.conf).
useSeo({
  titulo: t.seo.noEncontrada.titulo,
  descripcion: t.seo.noEncontrada.descripcion,
  indexar: false
})
</script>

<style scoped>
.nf {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 1.25rem;
  min-height: 50vh;
  align-content: center;
}
.nf__imagen { width: 220px; }
.nf p { color: var(--muted); }
</style>
