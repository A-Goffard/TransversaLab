<template>
  <section id="enfoque" class="section" aria-labelledby="enfoque-titulo">
    <div class="container enfoque">
      <div class="enfoque__texto">
        <p class="enfoque__antetitulo">{{ t.enfoque.antetitulo }}</p>
        <h2 id="enfoque-titulo">{{ t.enfoque.titulo }}</h2>
        <p v-for="(p, i) in t.enfoque.parrafos" :key="i">{{ p }}</p>
      </div>

      <aside class="enfoque__caja" aria-labelledby="enfoque-acompano">
        <h3 id="enfoque-acompano">{{ t.enfoque.acompanoTitulo }}</h3>
        <ul class="enfoque__lista">
          <li v-for="item in t.enfoque.acompano" :key="item">{{ item }}</li>
        </ul>
        <p class="enfoque__nota">{{ t.enfoque.nota }}</p>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { useContenido } from '../../content/index.js'

const t = useContenido()
</script>

<style scoped>
.enfoque {
  display: grid;
  gap: clamp(2rem, 1rem + 3vw, 4rem);
  align-items: start;
}
@media (min-width: 960px) {
  .enfoque { grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); }
}

.enfoque__texto { display: grid; gap: 1.1rem; min-width: 0; }

.enfoque__antetitulo {
  color: var(--frambuesa);
  font-weight: 700;
  font-size: var(--step--1);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.enfoque__caja {
  display: grid;
  gap: 1rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-left: 6px solid var(--frambuesa);
  border-radius: var(--radius);
  padding: clamp(1.25rem, 1rem + 1.5vw, 2rem);
  box-shadow: var(--shadow);
}

.enfoque__caja h3 { color: var(--frambuesa); }

.enfoque__lista {
  padding-left: 1.2rem;
  display: grid;
  gap: 0.6rem;
}
.enfoque__lista li::marker { color: var(--frambuesa); }

.enfoque__nota {
  font-size: var(--step--1);
  color: var(--muted);
  border-top: 1px solid var(--line);
  padding-top: 1rem;
}
</style>
