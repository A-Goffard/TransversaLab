# TransversaLab · web

Web de [transversalab.com](https://transversalab.com): formación, acompañamiento y asesoramiento en
neuroeducación, DUA y neurodiversidad para centros, docentes y familias.

**Vue 3 + Vite + vite-ssg** (cada página se genera como HTML estático) servida con **Nginx en Docker** en el VPS,
igual que [aintzanegoffard.com](https://aintzanegoffard.com) y Geobizi.

## Estructura

```
imagenes-originales/      # logos en alta resolución (no se publican tal cual)
frontend/
  public/                 # favicon, robots.txt e imágenes ya optimizadas
  scripts/                # optimizar-imagenes.js (npm run images)
  src/
    content/es.js         # ← TODOS LOS TEXTOS SE EDITAN AQUÍ
    site.js               # dominio y páginas del sitemap
    seo.js                # title, description, Open Graph y datos estructurados
    styles/tokens.css     # colores (claro/oscuro automático), tipografía, espacios
    styles/base.css       # estilos comunes y accesibilidad
    components/           # cabecera, pie, logo, iconos
    components/sections/  # una sección de la portada por archivo
    pages/                # portada, aviso legal, privacidad, 404
  vite.config.js          # generación estática + sitemap.xml
  transversalab.conf      # Nginx del contenedor (404 reales, caché)
  seguridad.conf          # cabeceras de seguridad
  Dockerfile.prod
docker-compose.yml        # producción: 127.0.0.1:8082
docker-compose.dev.yml    # desarrollo con recarga en caliente
.github/workflows/deploy.yml
```

## Tareas habituales

- **Cambiar un texto:** edita `frontend/src/content/es.js`.
- **Poner tu foto:** guarda `aintzane.avif` y `aintzane.webp` (cuadradas, unos 480 px) en
  `frontend/public/imagenes/` y escribe `foto: 'aintzane'` en `sobreMi` dentro de `es.js`.
- **Mostrar el teléfono:** rellena `contacto.telefono` en `es.js`.
- **Cambiar el logo:** sustituye los PNG de `imagenes-originales/` y ejecuta `npm run images` en `frontend/`.
- **Cambiar colores:** `frontend/src/styles/tokens.css` (comprueba el contraste, mínimo 4,5:1).

## Desarrollo (Windows, PowerShell)

```powershell
cd frontend
npm install        # solo la primera vez
npm run dev        # http://localhost:5173
npm run build      # genera dist/ como en producción
```

Probar la versión de producción con Docker (en la carpeta raíz):

```powershell
docker compose up -d --build   # http://localhost:8082
docker compose down
```

## Por qué no hay Soft 404

- Cada página llega a Google como HTML completo (texto, title, description, JSON-LD).
- Nginx no reenvía las URL desconocidas a `index.html`: devuelve **404** con `404.html` (`noindex`).
- El despliegue comprueba automáticamente que una URL inventada devuelve 404.

## Despliegue

Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, que entra por SSH al VPS y:

1. actualiza el código en `/root/transversalab`,
2. construye la imagen (si falla, la web en marcha no se toca),
3. sustituye el contenedor `transversalab_frontend` en `127.0.0.1:8082`,
4. comprueba que la portada responde y que una URL inexistente da 404,
5. limpia imágenes viejas.

Secrets en GitHub: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` y, opcional, `VPS_FINGERPRINT`.

### Nginx del VPS

```nginx
server {
    server_name transversalab.com;

    location / {
        proxy_pass http://127.0.0.1:8082;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# www -> sin www (una sola versión para Google)
server {
    server_name www.transversalab.com;
    return 301 https://transversalab.com$request_uri;
}
# certbot añade los bloques "listen 443 ssl" y la redirección de http a https
```

## Privacidad

Sin cookies, sin analítica, sin formularios y sin llamadas a terceros: las tipografías
(Atkinson Hyperlegible Next y Baloo 2) se sirven desde el propio servidor.

## Licencia

El **código** se distribuye bajo licencia MIT. **No** están cubiertos por ella los textos, el logotipo,
las imágenes ni los datos personales, que no pueden usarse sin autorización expresa.
