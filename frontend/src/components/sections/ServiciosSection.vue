<template>
  <section id="servicios" class="section section--alt" aria-labelledby="servicios-titulo">
    <div class="container">
      <div class="section__head">
        <h2 id="servicios-titulo">{{ t.servicios.titulo }}</h2>
        <p class="section__intro">{{ t.servicios.intro }}</p>
      </div>

      <ul class="servicios" role="list">
        <li v-for="s in t.servicios.lista" :key="s.id" class="servicio" :class="`servicio--${s.color}`">
          <article :aria-labelledby="`servicio-${s.id}`">
            <span class="servicio__icono"><AppIcon :name="s.icono" /></span>
            <h3 :id="`servicio-${s.id}`">{{ s.titulo }}</h3>
            <p class="servicio__desc">{{ s.descripcion }}</p>
            <ul class="servicio__puntos">
              <li v-for="p in s.puntos" :key="p">{{ p }}</li>
            </ul>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useContenido } from '../../content/index.js'
import AppIcon from '../AppIcon.vue'

const t = useContenido()
</script>

<style scoped>
.servicios {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.25rem;
}
@media (min-width: 900px) {
  .servicios { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

.servicio { --c: var(--primary); }
.servicio--turquesa { --c: var(--turquesa); }
.servicio--frambuesa { --c: var(--frambuesa); }

.servicio article {
  height: 100%;
  display: grid;
  align-content: start;
  gap: 0.9rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-top: 6px solid var(--c);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.servicio__icono {
  display: inline-grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: var(--c);
  border: 2px solid var(--c);
}

.servicio h3 { color: var(--c); }
.servicio__desc { color: var(--muted); }

.servicio__puntos {
  padding-left: 1.2rem;
  display: grid;
  gap: 0.35rem;
}
.servicio__puntos li::marker { color: var(--c); }
</style>
