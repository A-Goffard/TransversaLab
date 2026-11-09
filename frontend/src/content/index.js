// Punto único de acceso a los textos. Hoy solo hay castellano;
// cuando se añada el euskera, aquí se elegirá el idioma según la ruta (/eu/...).
import es from './es.js'

export function useContenido() {
  return es
}
