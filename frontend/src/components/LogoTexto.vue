<template>
  <!-- Las letras van por separado para colorearlas; los lectores de pantalla leen solo "TransversaLab" -->
  <span class="logo-text" :class="{ 'logo-text--small': pequeno }" role="img" aria-label="TransversaLab">
    <span v-for="(letra, i) in letras" :key="i" :class="`c${i + 1}`" aria-hidden="true">{{ letra }}</span>
    <span class="lab" aria-hidden="true">Lab</span>
  </span>
</template>

<script setup>
defineProps({ pequeno: { type: Boolean, default: false } })
const letras = 'Transversa'.split('')
</script>
