// Páginas de la web. Cada una se genera como un HTML independiente al compilar.
// Para el euskera (más adelante) se añadirán las mismas rutas bajo /eu/.

export const routes = [
  { path: '/', name: 'inicio', component: () => import('./pages/HomePage.vue') },
  { path: '/aviso-legal', name: 'aviso-legal', component: () => import('./pages/AvisoLegalPage.vue') },
  { path: '/privacidad', name: 'privacidad', component: () => import('./pages/PrivacidadPage.vue') },
  // Cualquier otra ruta: página de error. Se genera como 404.html y Nginx la sirve con código 404.
  { path: '/:pathMatch(.*)*', name: 'no-encontrada', component: () => import('./pages/NotFoundPage.vue') }
]
