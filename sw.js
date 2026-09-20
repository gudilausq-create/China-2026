const CACHE='china-2026-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./CENTRAL_DE_COMANDO_CHINA_2026_APROVADA.png','./ROTEIRO_CHINA_2026_BASE_OFICIAL_APROVADA_18-09-2026.jpeg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
