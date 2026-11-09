<template>
  <section id="sobre-mi" class="section section--alt" aria-labelledby="sobre-mi-titulo">
    <div class="container sobre">
      <div class="sobre__foto">
        <!-- Cuando haya foto (contenido: sobreMi.foto), se muestra; si no, el infinito como marcador -->
        <picture v-if="t.sobreMi.foto">
          <source type="image/avif" :srcset="`/imagenes/${t.sobreMi.foto}.avif`">
          <img
            :src="`/imagenes/${t.sobreMi.foto}.webp`"
            :alt="t.sobreMi.fotoAlt"
            width="480"
            height="480"
            loading="lazy"
            decoding="async"
          >
        </picture>
        <div v-else class="sobre__marcador">
          <InfinitoImagen :anchos="[400, 800]" :fallback="400" sizes="(min-width: 900px) 280px, 60vw" />
        </div>
      </div>

      <div class="sobre__texto">
        <h2 id="sobre-mi-titulo">{{ t.sobreMi.titulo }}</h2>
        <p class="sobre__rol">
          <strong>{{ t.sobreMi.nombre }}</strong> · {{ t.sobreMi.rol }}
        </p>
        <p v-for="(p, i) in t.sobreMi.parrafos" :key="i">{{ p }}</p>

        <p>
          <a :href="t.sobreMi.enlace.url" class="sobre__enlace">{{ t.sobreMi.enlace.texto }}<AppIcon name="externo" /></a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContenido } from '../../content/index.js'
import AppIcon from '../AppIcon.vue'
import InfinitoImagen from '../InfinitoImagen.vue'

const t = useContenido()
</script>

<style scoped>
.sobre {
  display: grid;
  gap: clamp(2rem, 1rem + 3vw, 4rem);
  align-items: center;
}
@media (min-width: 900px) {
  .sobre { grid-template-columns: 340px minmax(0, 1fr); }
}

.sobre__foto { max-width: 340px; width: 100%; justify-self: center; }
.sobre__foto img { border-radius: 50%; aspect-ratio: 1; object-fit: cover; width: 100%; }

.sobre__marcador {
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  padding: 12%;
}
.sobre__marcador :deep(.infinito) { width: 100%; }

.sobre__texto { display: grid; gap: 1rem; min-width: 0; }
.sobre__rol { color: var(--muted); font-size: var(--step-1); }
.sobre__rol strong { color: var(--fg); }

.sobre__enlace {
  font-weight: 700;
  padding-block: 0.4rem;
}
/* La flecha va pegada a la última palabra aunque el enlace ocupe dos líneas */
.sobre__enlace :deep(.icon) {
  display: inline-block;
  width: 1.1em;
  height: 1.1em;
  margin-left: 0.2em;
  vertical-align: -0.15em;
}
</style>
