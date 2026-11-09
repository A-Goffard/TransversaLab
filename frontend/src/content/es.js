// ============================================================
//  TEXTOS DE LA WEB EN CASTELLANO
//  Todo lo que se lee en la web está aquí. Para cambiar un texto,
//  edítalo en este archivo; no hace falta tocar los componentes.
//  (Más adelante se creará eu.js con la misma estructura para el euskera.)
// ============================================================

export default {
  marca: 'TransversaLab',

  // ---- Cabecera ----
  cabecera: {
    saltarContenido: 'Saltar al contenido',
    menuAbrir: 'Menú',
    menuEtiqueta: 'Navegación principal',
    inicioEtiqueta: 'TransversaLab, ir al inicio',
    menu: [
      { id: 'servicios', texto: 'Servicios' },
      { id: 'enfoque', texto: 'Mi enfoque' },
      { id: 'sobre-mi', texto: 'Sobre mí' },
      { id: 'como-trabajo', texto: 'Cómo trabajo' }
    ],
    botonContacto: 'Contacta'
  },

  // ---- Portada ----
  hero: {
    antetitulo: 'Neuroeducación · DUA · Neurodiversidad',
    titulo: 'Formación, acompañamiento y asesoramiento en neuroeducación, DUA y neurodiversidad para centros, docentes, familias y personas adultas.',
    texto: 'Presencial en Bizkaia y online desde cualquier lugar, en castellano y euskera.',
    botonPrincipal: 'Contacta conmigo',
    botonSecundario: 'Ver servicios'
  },

  // ---- Servicios ----
  servicios: {
    titulo: 'Servicios',
    intro: 'Acompaño a quienes enseñan y a quienes aprenden, dentro y fuera del aula.',
    lista: [
      {
        id: 'formacion',
        icono: 'formacion',
        color: 'violeta',
        titulo: 'Formación a profesorado',
        descripcion: 'Cursos y sesiones para claustros y equipos docentes, en formato presencial u online.',
        puntos: [
          'Diseño Universal para el Aprendizaje (DUA)',
          'Neurodivergencias en el aula, también las que no se ven',
          'Metodologías STEAM',
          'Inteligencia artificial en educación'
        ]
      },
      {
        id: 'asesoramiento',
        icono: 'centros',
        color: 'turquesa',
        titulo: 'Asesoramiento a centros',
        descripcion: 'Acompañamiento a equipos directivos y docentes para llevar la inclusión a la práctica diaria.',
        puntos: [
          'Aplicación del Diseño Universal para el Aprendizaje',
          'Diseño curricular inclusivo',
          'Programaciones accesibles',
          'Evaluación inclusiva'
        ]
      },
      {
        id: 'personas',
        icono: 'familias',
        color: 'frambuesa',
        titulo: 'Acompañamiento a personas adultas y familias',
        descripcion: 'Orientación a personas adultas neurodivergentes, con o sin diagnóstico, y a familias de niñas, niños y adolescentes. Con especial atención a las mujeres adultas y a las madres.',
        puntos: [
          'Comprender tu forma de funcionar, con o sin diagnóstico',
          'Estrategias para el trabajo, los estudios y el día a día',
          'Apoyo a madres y padres de hijas e hijos neurodivergentes',
          'Coordinación con el centro educativo'
        ]
      }
    ]
  },

  // ---- Mi enfoque: neurodivergencias que no se ven ----
  enfoque: {
    antetitulo: 'Mi especialización',
    titulo: 'Neurodivergencias que no se ven',
    parrafos: [
      'Hay personas que llevan toda la vida sintiéndose diferentes sin saber por qué. Su TDAH, su autismo, su dislexia o sus altas capacidades no se detectaron en el colegio ni en la consulta, porque aprendieron a compensar y a disimular. Por fuera parece que todo va bien; por dentro, el esfuerzo es enorme.',
      'Ocurre sobre todo en niñas y mujeres, que durante años han quedado fuera de los criterios de detección y de la mirada de los servicios educativos y sanitarios. Muchas lo descubren de adultas, a menudo cuando una hija o un hijo recibe un diagnóstico.',
      'Por eso me estoy especializando en estas neurodivergencias invisibles: para ofrecer lo que tantas veces falta, que es tiempo, escucha y comprensión.'
    ],
    acompanoTitulo: 'Cómo te acompaño',
    acompano: [
      'Entender tu forma de pensar, sentir y aprender, con o sin diagnóstico.',
      'Encontrar estrategias realistas para el trabajo, los estudios y la vida diaria.',
      'Poner palabras a lo que vives para explicarlo en casa, en el trabajo o en el centro educativo.',
      'Orientarte hacia profesionales sanitarios cuando haga falta una evaluación.'
    ],
    // Importante: deja claro que el trabajo es educativo, no clínico (ver NOTAS.md)
    nota: 'No realizo diagnósticos clínicos. Mi trabajo es educativo y de acompañamiento, y complementa el de los profesionales sanitarios.'
  },

  // ---- Sobre mí ----
  // PROVISIONAL: texto de ejemplo para que lo edites.
  sobreMi: {
    titulo: 'Sobre mí',
    nombre: 'Aintzane Goffard',
    rol: 'Docente y diseñadora pedagógica STEAM',
    parrafos: [
      'Soy docente y diseñadora pedagógica STEAM. También soy geóloga y desarrolladora, y esa mezcla me ha enseñado a mirar el aprendizaje desde muchos ángulos.',
      'Estoy cursando el Máster Universitario en Neuropsicología y Educación, y centro mi especialización en las neurodivergencias que pasan desapercibidas, sobre todo en mujeres adultas.',
      'En TransversaLab uno la neuroeducación, el Diseño Universal para el Aprendizaje y la experiencia en el aula para ayudar a centros, docentes, familias y personas adultas a crear entornos donde cada cual pueda aprender y vivir a su manera.'
    ],
    formacionTitulo: 'Formación',
    formacion: [
      { titulo: 'Máster Universitario en Neuropsicología y Educación', centro: 'UNIR', nota: 'En curso' },
      { titulo: 'Máster Universitario en Formación del Profesorado', centro: 'VIU' },
      { titulo: 'Licenciatura en Geología', centro: 'UPV/EHU' }
    ],
    // Cuando tengas la foto: ponla en public/imagenes/ y escribe aquí su nombre (sin extensión),
    // por ejemplo 'aintzane'. Debe existir en .avif y .webp. Mientras sea null se muestra el infinito.
    foto: null,
    fotoAlt: 'Aintzane Goffard',
    enlace: {
      texto: 'Conoce mi trayectoria en aintzanegoffard.com',
      url: 'https://aintzanegoffard.com'
    }
  },

  // ---- Cómo trabajo ----
  comoTrabajo: {
    titulo: 'Cómo trabajo',
    items: [
      {
        icono: 'presencial',
        titulo: 'Presencial en Bizkaia',
        texto: 'Voy a tu centro o nos reunimos en persona en cualquier punto de Bizkaia.'
      },
      {
        icono: 'online',
        titulo: 'Online desde cualquier lugar',
        texto: 'Sesiones, formaciones y seguimiento por videollamada, estés donde estés.'
      },
      {
        icono: 'idiomas',
        titulo: 'En castellano y euskera',
        texto: 'Trabajo en el idioma que prefieras: gaztelaniaz eta euskaraz.'
      }
    ]
  },

  // ---- Contacto ----
  contacto: {
    titulo: 'Contacto',
    texto: 'Cuéntame qué necesitas y te respondo lo antes posible.',
    emailEtiqueta: 'Correo electrónico',
    email: 'info@transversalab.com',
    copiar: 'Copiar',
    copiado: 'Correo copiado',
    copiaManual: 'Pulsa Ctrl + C para copiarlo',
    telefonoEtiqueta: 'Teléfono',
    // Cuando quieras mostrar un teléfono, escríbelo aquí, por ejemplo: '+34 600 000 000'
    telefono: null
  },

  // ---- Pie ----
  pie: {
    avisoLegal: 'Aviso legal',
    privacidad: 'Política de privacidad',
    portfolio: 'Portfolio de Aintzane Goffard',
    portfolioUrl: 'https://aintzanegoffard.com',
    enlacesEtiqueta: 'Enlaces legales'
  },

  // ---- Página 404 ----
  noEncontrada: {
    titulo: 'No encontramos esta página',
    texto: 'Puede que el enlace esté mal escrito o que la página ya no exista.',
    boton: 'Volver al inicio'
  },

  // ---- Aviso de textos pendientes ----
  pendiente: 'Texto provisional, pendiente de revisar.',

  // ---- SEO: título y descripción de cada página ----
  seo: {
    inicio: {
      titulo: 'TransversaLab | Neuroeducación, DUA y neurodiversidad en Bizkaia',
      descripcion: 'Formación, acompañamiento y asesoramiento en neuroeducación, DUA y neurodiversidad para centros, docentes, familias y personas adultas. Bizkaia y online.'
    },
    avisoLegal: {
      titulo: 'Aviso legal | TransversaLab',
      descripcion: 'Aviso legal del sitio web transversalab.com.'
    },
    privacidad: {
      titulo: 'Política de privacidad | TransversaLab',
      descripcion: 'Cómo trata TransversaLab los datos personales: sin cookies, sin analítica y sin formularios.'
    },
    noEncontrada: {
      titulo: 'Página no encontrada | TransversaLab',
      descripcion: 'La página que buscas no existe.'
    },
    imagenAlt: 'Logotipo de TransversaLab: un símbolo de infinito con los colores del arcoíris'
  }
}
