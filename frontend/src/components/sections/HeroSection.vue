<template>
  <section class="hero" aria-labelledby="hero-titulo">
    <div class="container hero__inner">
      <div class="hero__texto">
        <p class="hero__antetitulo">{{ t.hero.antetitulo }}</p>
        <h1 id="hero-titulo">{{ t.hero.titulo }}</h1>
        <p class="hero__lead">{{ t.hero.texto }}</p>
        <div class="hero__acciones">
          <a href="#contacto" class="btn">
            {{ t.hero.botonPrincipal }}
            <AppIcon name="flecha" />
          </a>
          <a href="#servicios" class="btn btn--secundario">{{ t.hero.botonSecundario }}</a>
        </div>
      </div>
      <div class="hero__imagen">
        <InfinitoImagen sizes="(min-width: 960px) 460px, 90vw" prioritaria />
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
.hero { padding-block: clamp(3rem, 2rem + 4vw, 6rem); }

.hero__inner {
  display: grid;
  gap: clamp(2rem, 1rem + 3vw, 3.5rem);
  align-items: center;
}

.hero__texto { display: grid; gap: 1.25rem; min-width: 0; }

.hero__antetitulo {
  color: var(--turquesa);
  font-weight: 700;
  font-size: var(--step--1);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero h1 { max-width: 22ch; }

.hero__lead { color: var(--muted); font-size: var(--step-1); line-height: 1.5; }

.hero__acciones { display: flex; flex-wrap: wrap; gap: 0.75rem 1rem; margin-top: 0.5rem; }

.hero__imagen { max-width: 460px; width: 100%; justify-self: center; }

@media (min-width: 960px) {
  .hero__inner { grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); }
}
</style>
