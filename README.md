# TransversaLab

Web de [transversalab.com](https://transversalab.com): formación, acompañamiento y asesoramiento en
neuroeducación, Diseño Universal para el Aprendizaje (DUA) y neurodiversidad para centros, docentes y familias.

## Tecnología

- **Vue 3 + Vite + vite-ssg**: cada página se genera como HTML estático completo.
- **Nginx en Docker**: sirve los archivos y devuelve códigos 404 reales.
- **Despliegue continuo** con GitHub Actions.

## Accesibilidad y sostenibilidad

- Contraste WCAG AA en modo claro y oscuro (automático según el sistema).
- Tipografía Atkinson Hyperlegible Next, foco visible, HTML semántico y respeto a `prefers-reduced-motion`.
- Sin cookies, sin analítica y sin llamadas a terceros: las fuentes se sirven desde el propio servidor.
- Imágenes en AVIF/WebP y muy pocas dependencias.

## Desarrollo

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

Versión de producción con Docker (desde la raíz):

```bash
docker compose up -d --build
```

## Licencia

El **código** se distribuye bajo licencia MIT. **No** están cubiertos por ella los textos, el logotipo,
las imágenes ni los datos personales, que no pueden usarse sin autorización expresa.
