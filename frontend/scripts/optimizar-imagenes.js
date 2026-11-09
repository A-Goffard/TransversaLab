// Genera las imágenes optimizadas de la web a partir de los originales.
// Uso (desde la carpeta frontend):  npm run images
//
// Lee:     ../imagenes-originales/infinito.png        (infinito sin texto)
//          ../imagenes-originales/logo-con-texto.png  (infinito + "TransversaLab")
// Escribe: public/imagenes/...  (AVIF + WebP con fondo transparente, imagen para redes, iconos)
//
// Solo hace falta ejecutarlo cuando cambien los originales. El resultado se sube a Git,
// así que el servidor no necesita volver a generarlo.

import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const aqui = dirname(fileURLToPath(import.meta.url))
const ORIGINALES = resolve(aqui, '../../imagenes-originales')
const SALIDA = resolve(aqui, '../public/imagenes')
const FONDO_CLARO = '#FAF8FC'

// Convierte el fondo blanco en transparencia sin perder los colores
// (mismo método que "Color a alfa" de GIMP). Así el infinito se ve bien en modo oscuro.
async function blancoATransparente(entrada) {
  const { data, info } = await sharp(entrada)
    .trim({ threshold: 20 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const rgba = Buffer.alloc(info.width * info.height * 4)
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    const a = Math.max(255 - r, 255 - g, 255 - b) // cuánto se aleja del blanco
    if (a === 0) { rgba[j + 3] = 0; continue }
    const k = 255 / a
    rgba[j] = Math.round(255 - (255 - r) * k)
    rgba[j + 1] = Math.round(255 - (255 - g) * k)
    rgba[j + 2] = Math.round(255 - (255 - b) * k)
    rgba[j + 3] = a
  }
  return sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer()
}

async function main() {
  await mkdir(SALIDA, { recursive: true })

  // 1. Infinito transparente en varios tamaños (cabecera y portada)
  const infinito = await blancoATransparente(resolve(ORIGINALES, 'infinito.png'))
  const { width, height } = await sharp(infinito).metadata()
  console.log(`Infinito recortado: ${width}×${height}`)
  for (const ancho of [160, 400, 800, 1200]) {
    const base = sharp(infinito).resize({ width: ancho })
    await base.clone().avif({ quality: 60, effort: 6 }).toFile(`${SALIDA}/infinito-${ancho}.avif`)
    await base.clone().webp({ quality: 82, alphaQuality: 90 }).toFile(`${SALIDA}/infinito-${ancho}.webp`)
  }

  // 2. Imagen para redes sociales (Open Graph): 1200×630 sobre fondo claro
  await sharp(resolve(ORIGINALES, 'logo-con-texto.png'))
    .trim({ threshold: 20 })
    .resize({ width: 1000, height: 520, fit: 'contain', background: FONDO_CLARO })
    .extend({ top: 55, bottom: 55, left: 100, right: 100, background: FONDO_CLARO })
    .flatten({ background: FONDO_CLARO })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(`${SALIDA}/og-transversalab.jpg`)

  // 3. Logo cuadrado para los datos estructurados de Google (512×512)
  await sharp(resolve(ORIGINALES, 'logo-con-texto.png'))
    .trim({ threshold: 20 })
    .resize({ width: 460, height: 460, fit: 'contain', background: '#FFFFFF' })
    .extend({ top: 26, bottom: 26, left: 26, right: 26, background: '#FFFFFF' })
    .flatten({ background: '#FFFFFF' })
    .png({ compressionLevel: 9 })
    .toFile(`${SALIDA}/logo-transversalab.png`)

  // 4. Icono para iPhone/Android (180×180)
  await sharp(infinito)
    .resize({ width: 156, height: 156, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 12, bottom: 12, left: 12, right: 12, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .flatten({ background: '#FFFFFF' })
    .png({ compressionLevel: 9 })
    .toFile(resolve(aqui, '../public/apple-touch-icon.png'))

  console.log('✅ Imágenes generadas en public/imagenes')
}

main().catch((e) => { console.error(e); process.exit(1) })
