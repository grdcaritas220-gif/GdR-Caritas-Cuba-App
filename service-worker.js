// ============================================
// SERVICE WORKER - GdR Cáritas Cuba
// ============================================
// IMPORTANTE: cada vez que cambies CUALQUIER archivo de la app
// (contenido, código o estilos), cambia VERSION. Si no, los teléfonos
// seguirán mostrando la versión vieja guardada en caché.
const VERSION = '2026.10.27-2';
const CACHE_NAME = 'gdr-caritas-' + VERSION;

// Sin estos archivos la app no puede funcionar offline.
// Si alguno falla al descargarse, la instalación se cancela y el teléfono
// conserva la versión anterior que ya funcionaba.
const ARCHIVOS_CRITICOS = [
    './',
    './index.html',
    './manifest.json',
    './css/estilos.css',
    './css/presentacion.css',
    './js/config-ia.js',
    './js/chart.js',
    './js/riesgos.js',
    './js/mejoras.js',
    './js/app.js',
    './datos/motor_reglas.json',
    './datos/diocesis.json',
    './datos/biblioteca.json',
    './datos/formacion.json',
    './datos/guia-uso.md',
    './datos/privacidad.md',
    './iconos/icono-192.png',
    './iconos/icono-512.png'
];

// Documentos de la biblioteca: si alguno aún no existe, no bloquea la instalación.
const ARCHIVOS_OPCIONALES = [
    './datos/documentos/caritas-guia.md',
    './datos/documentos/esfera-resumen.md',
    './datos/documentos/ley-149.md',
    './datos/documentos/glosario-grd.md',
    './datos/documentos/defensa-civil-caritas.md'
];

// ===== INSTALACIÓN =====
self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);

        const criticos = await Promise.allSettled(
            ARCHIVOS_CRITICOS.map((url) => cache.add(url))
        );
        const fallidos = ARCHIVOS_CRITICOS.filter((_, i) => criticos[i].status === 'rejected');
        if (fallidos.length > 0) {
            // Cancelar: mejor conservar la versión anterior completa que una incompleta.
            await caches.delete(CACHE_NAME);
            throw new Error('Archivos críticos no disponibles: ' + fallidos.join(', '));
        }

        await Promise.allSettled(ARCHIVOS_OPCIONALES.map((url) => cache.add(url)));
        await self.skipWaiting();
    })());
});

// ===== ACTIVACIÓN: borrar cachés viejas =====
self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        const nombres = await caches.keys();
        await Promise.all(
            nombres
                .filter((n) => n.startsWith('gdr-caritas') && n !== CACHE_NAME)
                .map((n) => caches.delete(n))
        );
        await self.clients.claim();
    })());
});

// ===== FETCH: caché primero =====
self.addEventListener('fetch', (event) => {
    const req = event.request;

    // Solo gestionamos GET del mismo origen. La llamada a la API de IA (POST,
    // otro dominio) pasa directo, sin tocar la caché.
    if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) {
        return;
    }

    event.respondWith((async () => {
        const enCache = await caches.match(req, { ignoreSearch: true });
        if (enCache) return enCache;

        try {
            const red = await fetch(req);
            if (red && red.status === 200) {
                const copia = red.clone();
                caches.open(CACHE_NAME).then((c) => c.put(req, copia)).catch(() => { });
            }
            return red;
        } catch (e) {
            if (req.mode === 'navigate') {
                const inicio = await caches.match('./index.html');
                if (inicio) return inicio;
            }
            return new Response('Sin conexión y archivo no disponible.', {
                status: 503,
                headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            });
        }
    })());
});
