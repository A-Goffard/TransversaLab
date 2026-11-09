<template>
  <!-- Infinito del logo en AVIF (o WebP si el navegador no lo admite), con el tamaño justo para cada pantalla -->
  <picture class="infinito">
    <source type="image/avif" :srcset="srcset('avif')" :sizes="sizes">
    <img
      :src="`/imagenes/infinito-${fallback}.webp`"
      :srcset="srcset('webp')"
      :sizes="sizes"
      :alt="alt"
      width="1497"
      height="730"
      :loading="prioritaria ? 'eager' : 'lazy'"
      :fetchpriority="prioritaria ? 'high' : 'auto'"
      decoding="async"
    >
  </picture>
</template>

<script setup>
const props = defineProps({
  sizes: { type: String, default: '100vw' },
  anchos: { type: Array, default: () => [400, 800, 1200] },
  fallback: { type: Number, default: 800 },
  alt: { type: String, default: '' },
  prioritaria: { type: Boolean, default: false }
})

const srcset = (formato) =>
  props.anchos.map((w) => `/imagenes/infinito-${w}.${formato} ${w}w`).join(', ')
</script>

<style scoped>
.infinito img {
  width: 100%;
  height: auto;
  filter: var(--img-filter);
}
</style>
