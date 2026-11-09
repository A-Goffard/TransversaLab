<template>
  <section id="contacto" class="section" aria-labelledby="contacto-titulo">
    <div class="container">
      <div class="contacto">
        <div class="contacto__texto">
          <h2 id="contacto-titulo">{{ t.contacto.titulo }}</h2>
          <p>{{ t.contacto.texto }}</p>
        </div>

        <ul class="contacto__datos" role="list">
          <li>
            <AppIcon name="correo" />
            <div>
              <span class="contacto__etiqueta">{{ t.contacto.emailEtiqueta }}</span>
              <a :href="`mailto:${t.contacto.email}`" class="contacto__valor" ref="emailEl">{{ t.contacto.email }}</a>
              <!-- Por si el enlace no abre ningún programa de correo: botón para copiar la dirección.
                   Solo aparece cuando hay JavaScript (sin JS no podría funcionar). -->
              <span v-if="montado" class="contacto__copiar">
                <button type="button" class="btn btn--secundario btn--peque" @click="copiar">
                  <AppIcon name="copiar" />
                  {{ t.contacto.copiar }}
                </button>
                <span class="contacto__estado" role="status" aria-live="polite">{{ estado }}</span>
              </span>
            </div>
          </li>
          <!-- El teléfono solo aparece cuando se rellena en content/es.js -->
          <li v-if="t.contacto.telefono">
            <AppIcon name="telefono" />
            <div>
              <span class="contacto__etiqueta">{{ t.contacto.telefonoEtiqueta }}</span>
              <a :href="`tel:${t.contacto.telefono.replace(/\s+/g, '')}`" class="contacto__valor">{{ t.contacto.telefono }}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useContenido } from '../../content/index.js'
import AppIcon from '../AppIcon.vue'

const t = useContenido()
const montado = ref(false)
const estado = ref('')
const emailEl = ref(null)
let temporizador

onMounted(() => { montado.value = true })

async function copiar() {
  try {
    await navigator.clipboard.writeText(t.contacto.email)
    estado.value = t.contacto.copiado
  } catch {
    // Si el navegador no deja copiar, seleccionamos la dirección para que se pueda copiar a mano
    const sel = window.getSelection()
    const rango = document.createRange()
    rango.selectNodeContents(emailEl.value)
    sel.removeAllRanges()
    sel.addRange(rango)
    estado.value = t.contacto.copiaManual
  }
  clearTimeout(temporizador)
  temporizador = setTimeout(() => { estado.value = '' }, 4000)
}
</script>

<style scoped>
.contacto {
  display: grid;
  gap: 2rem;
  align-items: center;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: clamp(1.5rem, 1rem + 3vw, 3rem);
  box-shadow: var(--shadow);
}
@media (min-width: 860px) {
  .contacto { grid-template-columns: minmax(0, 1fr) auto; }
}

.contacto__texto { display: grid; gap: 0.75rem; }
.contacto__texto p { color: var(--muted); font-size: var(--step-1); line-height: 1.5; }

.contacto__datos {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.25rem;
}
.contacto__datos li {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: center;
  color: var(--primary);
}
.contacto__datos li > div { display: grid; min-width: 0; }

.contacto__etiqueta { color: var(--muted); font-size: var(--step--1); }
.contacto__valor {
  font-size: var(--step-1);
  font-weight: 700;
  overflow-wrap: anywhere;
  padding-block: 0.2rem;
}

.contacto__copiar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  margin-top: 0.5rem;
}
.btn--peque { min-height: 44px; padding: 0.4rem 0.9rem; font-size: var(--step--1); }
.contacto__estado { color: var(--turquesa); font-weight: 700; font-size: var(--step--1); }
</style>
