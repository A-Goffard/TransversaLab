<template>
  <article class="section">
    <div class="container prose">
      <h1>Política de privacidad</h1>
      <p class="aviso-pendiente" role="note">{{ t.pendiente }}</p>

      <!-- PROVISIONAL: completar los datos marcados [PENDIENTE] y revisar el texto completo -->
      <h2>Resumen</h2>
      <ul>
        <li>Esta web no usa cookies.</li>
        <li>No usa herramientas de analítica ni publicidad.</li>
        <li>No tiene formularios: solo recibo los datos que tú me envíes por correo electrónico.</li>
        <li>Las tipografías se sirven desde el propio servidor, sin llamadas a terceros.</li>
      </ul>

      <h2>Responsable del tratamiento</h2>
      <ul>
        <li>Aintzane Goffard Sevillano (TransversaLab)</li>
        <li>NIF: [PENDIENTE]</li>
        <li>Correo electrónico: <a :href="`mailto:${t.contacto.email}`">{{ t.contacto.email }}</a></li>
      </ul>

      <h2>Qué datos trato y para qué</h2>
      <p>
        Si me escribes por correo electrónico o me llamas, trataré tu nombre, tu dirección de correo o tu
        teléfono y la información que me cuentes, solo para responder a tu consulta y, si llegamos a un acuerdo,
        para prestarte el servicio.
      </p>

      <h2>Base legal</h2>
      <p>
        El tratamiento se basa en tu consentimiento al contactar conmigo y, en su caso, en la ejecución del
        servicio que contrates.
      </p>

      <h2>Cuánto tiempo guardo los datos</h2>
      <p>
        Mientras sea necesario para atender tu consulta o prestar el servicio, y después durante los plazos que
        exija la ley.
      </p>

      <h2>Con quién se comparten</h2>
      <p>
        No cedo tus datos a terceros salvo obligación legal. El alojamiento web y el correo electrónico los
        presta [PENDIENTE: proveedor], que actúa como encargado del tratamiento.
      </p>

      <h2>Registros del servidor</h2>
      <p>
        Como cualquier servidor web, este guarda de forma temporal registros técnicos de las visitas (dirección
        IP, fecha y página solicitada) por motivos de seguridad. No se usan para identificar a nadie.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedir el acceso, la rectificación, la supresión, la limitación u oposición al tratamiento y la
        portabilidad de tus datos escribiendo a
        <a :href="`mailto:${t.contacto.email}`">{{ t.contacto.email }}</a>.
        Si crees que no se han respetado tus derechos, puedes reclamar ante la Agencia Española de Protección de
        Datos (<a href="https://www.aepd.es">www.aepd.es</a>).
      </p>
    </div>
  </article>
</template>

<script setup>
import { useContenido } from '../content/index.js'
import { useSeo } from '../seo.js'

const t = useContenido()
useSeo({ titulo: t.seo.privacidad.titulo, descripcion: t.seo.privacidad.descripcion, ruta: '/privacidad' })
</script>
