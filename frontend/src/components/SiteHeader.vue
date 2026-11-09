<template>
  <header class="header">
    <div class="container header__inner">
      <a href="/" class="brand" :aria-label="t.cabecera.inicioEtiqueta">
        <InfinitoImagen class="brand__infinito" :anchos="[160]" :fallback="160" sizes="80px" prioritaria />
        <LogoTexto pequeno />
      </a>

      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="abierto ? 'true' : 'false'"
        aria-controls="menu-principal"
        @click="abierto = !abierto"
      >
        <AppIcon :name="abierto ? 'cerrar' : 'menu'" />
        <span>{{ t.cabecera.menuAbrir }}</span>
      </button>

      <nav
        id="menu-principal"
        class="nav"
        :class="{ 'is-open': abierto }"
        :aria-label="t.cabecera.menuEtiqueta"
      >
        <ul class="nav__list">
          <li v-for="item in t.cabecera.menu" :key="item.id">
            <a :href="`${base}#${item.id}`" class="nav__link" @click="abierto = false">{{ item.texto }}</a>
          </li>
          <li>
            <a :href="`${base}#contacto`" class="btn nav__cta" @click="abierto = false">{{ t.cabecera.botonContacto }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useContenido } from '../content/index.js'
import AppIcon from './AppIcon.vue'
import InfinitoImagen from './InfinitoImagen.vue'
import LogoTexto from './LogoTexto.vue'

const t = useContenido()
const route = useRoute()
const abierto = ref(false)

// En la portada, las anclas son "#servicios"; en las demás páginas, "/#servicios"
const base = computed(() => (route.path === '/' ? '' : '/'))

// La tecla Escape cierra el menú en móvil
function alPulsarTecla(e) {
  if (e.key === 'Escape' && abierto.value) abierto.value = false
}
onMounted(() => document.addEventListener('keydown', alPulsarTecla))
onBeforeUnmount(() => document.removeEventListener('keydown', alPulsarTecla))
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
}

.header__inner {
  min-height: var(--header-h);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  padding-block: 0.6rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  font-size: 1.6rem;
  padding: 4px 6px 6px 0;
}
.brand__infinito { width: 64px; flex: none; }

.menu-toggle { display: none; }

.nav__list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem 1.5rem;
}
.nav__link {
  color: var(--fg);
  font-weight: 700;
  text-decoration: none;
  padding: 0.5rem 0.1rem;
  display: inline-block;
}
.nav__link:hover { color: var(--primary); text-decoration: underline; }

@media (max-width: 860px) {
  .nav { flex-basis: 100%; }
  .nav__list {
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    padding-block: 0.5rem 1rem;
  }
  .nav__link { display: block; padding: 0.75rem 0.25rem; border-bottom: 1px solid var(--line); }
  .nav__cta { margin-top: 0.75rem; }
}

@media (max-width: 400px) {
  .brand { font-size: 1.35rem; }
  .brand__infinito { width: 52px; }
}
</style>

<style>
/* ---- Móvil: el menú se pliega tras un botón, solo si hay JavaScript ----
   (sin ámbito "scoped" porque depende de la clase .js que index.html pone en <html>;
   sin JavaScript el menú se ve siempre desplegado) */
@media (max-width: 860px) {
  .js .menu-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 48px;
    padding: 0.5rem 0.9rem;
    border: 2px solid var(--line);
    border-radius: var(--radius-sm);
    background: var(--surface);
    color: var(--fg);
    font: inherit;
    font-weight: 700;
    cursor: pointer;
  }
  .js .nav:not(.is-open) { display: none; }
}
</style>
