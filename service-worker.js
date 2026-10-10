// ============================================
// SERVICE WORKER - GdR Cáritas Cuba
// ============================================

const CACHE_NAME = 'gdr-caritas-v7';

// Archivos que se guardan para funcionar offline
const ARCHIVOS_CACHE = [
    './',
    './index.html',
    './css/estilos.css',
    './js/app.js',
    './js/riesgos.js',
    './datos/motor_reglas.json',
    './datos/diocesis.json',
    './datos/guia-uso.md',
    './manifest.json',
    './iconos/icono-192.png',
    './iconos/icono-512.png'
];

// ===== INSTALACIÓN: Guardar archivos =====
self.addEventListener('install', (event) => {
    console.log('📦 Service Worker: instalando...');

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('📦 Guardando archivos en caché');
            return cache.addAll(ARCHIVOS_CACHE);
        }).then(() => {
            console.log('✅ Service Worker: instalado');
            return self.skipWaiting();
        })
    );
});

// ===== ACTIVACIÓN: Limpiar cachés viejas =====
self.addEventListener('activate', (event) => {
    console.log('🚀 Service Worker: activando...');

    event.waitUntil(
        caches.keys().then((nombres) => {
            return Promise.all(
                nombres.map((nombre) => {
                    if (nombre !== CACHE_NAME) {
                        console.log('🗑️ Eliminando caché antigua:', nombre);
                        return caches.delete(nombre);
                    }
                })
            );
        }).then(() => {
            console.log('✅ Service Worker: activado');
            return self.clients.claim();
        })
    );
});

// ===== FETCH: Servir desde caché si no hay internet =====
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((respuesta) => {
            // Si está en caché, devolver desde caché
            if (respuesta) {
                return respuesta;
            }

            // Si no, intentar buscarlo en internet
            return fetch(event.request).then((respuestaRed) => {
                // Guardar copia en caché para la próxima vez
                if (respuestaRed && respuestaRed.status === 200) {
                    const respuestaClonada = respuestaRed.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, respuestaClonada);
                    });
                }
                return respuestaRed;
            }).catch(() => {
                // Si falla todo, devolver index.html (útil para navegación)
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});