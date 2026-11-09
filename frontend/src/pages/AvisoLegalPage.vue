<template>
  <article class="section">
    <div class="container prose">
      <h1>Aviso legal</h1>
      <p class="aviso-pendiente" role="note">{{ t.pendiente }}</p>

      <!-- PROVISIONAL: completar los datos marcados [PENDIENTE] y revisar el texto completo -->
      <h2>Titular del sitio web</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio
        Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
      </p>
      <ul>
        <li>Titular: Aintzane Goffard Sevillano</li>
        <li>Nombre comercial: TransversaLab</li>
        <li>NIF: [PENDIENTE]</li>
        <li>Domicilio: [PENDIENTE]</li>
        <li>Correo electrónico: <a :href="`mailto:${t.contacto.email}`">{{ t.contacto.email }}</a></li>
      </ul>

      <h2>Objeto</h2>
      <p>
        Este sitio web informa sobre los servicios de formación, acompañamiento y asesoramiento en
        neuroeducación, Diseño Universal para el Aprendizaje (DUA) y neurodiversidad que ofrece TransversaLab.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, imágenes, logotipos y demás contenidos de este sitio pertenecen a su titular o se usan con
        autorización. No se permite su reproducción, distribución o modificación sin permiso expreso.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        La titular procura que la información publicada sea correcta y esté actualizada, pero no se hace
        responsable de los errores u omisiones que pudiera contener ni del uso que se haga de ella. Los enlaces
        a otros sitios web se ofrecen como referencia; la titular no controla ni responde de sus contenidos.
      </p>

      <h2>Legislación aplicable</h2>
      <p>Este aviso legal se rige por la legislación española.</p>
    </div>
  </article>
</template>

<script setup>
import { useContenido } from '../content/index.js'
import { useSeo } from '../seo.js'

const t = useContenido()
useSeo({ titulo: t.seo.avisoLegal.titulo, descripcion: t.seo.avisoLegal.descripcion, ruta: '/aviso-legal' })
</script>
