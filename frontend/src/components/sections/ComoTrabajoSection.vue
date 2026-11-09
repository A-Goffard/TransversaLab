<template>
  <section id="como-trabajo" class="section" aria-labelledby="como-trabajo-titulo">
    <div class="container">
      <div class="section__head">
        <h2 id="como-trabajo-titulo">{{ t.comoTrabajo.titulo }}</h2>
      </div>
      <ul class="modos" role="list">
        <li v-for="item in t.comoTrabajo.items" :key="item.titulo" class="modo">
          <span class="modo__icono"><AppIcon :name="item.icono" /></span>
          <div class="modo__texto">
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.texto }}</p>
          </div>
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
.modos {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.75rem 2rem;
}
@media (min-width: 860px) {
  .modos { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

.modo {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
}

.modo__icono {
  display: inline-grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-sm);
  background: var(--primary);
  color: var(--on-primary);
}

.modo__texto { display: grid; gap: 0.35rem; }
.modo__texto p { color: var(--muted); }
</style>
