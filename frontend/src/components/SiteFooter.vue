<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__marca">© {{ anio }} {{ t.marca }}</p>
      <nav :aria-label="t.pie.enlacesEtiqueta">
        <ul class="footer__links">
          <li><a href="/aviso-legal">{{ t.pie.avisoLegal }}</a></li>
          <li><a href="/privacidad">{{ t.pie.privacidad }}</a></li>
          <li><a :href="t.pie.portfolioUrl">{{ t.pie.portfolio }}</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { useContenido } from '../content/index.js'

const t = useContenido()
const anio = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--surface);
  border-top: 1px solid var(--line);
  padding-block: 2rem;
  font-size: var(--step--1);
}
.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 2rem;
}
.footer__marca { color: var(--muted); }
.footer__links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
}
.footer__links a { display: inline-block; padding-block: 0.4rem; }
</style>
