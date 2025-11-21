const CACHE = 'beekeeper-v1';
const FILES = ['/', 'index.html', 'manifest.json', 'assets/icon.png', 'hornisse.html', 'varroa.html', 'drohnenbrut.html', 'pollen.html', 'schwarm.html', 'queen.html', 'js/config.js', 'js/camera.js', 'js/model-loader.js', 'js/alarm.js', 'js/ui.js', 'js/modes/hornisse.js', 'js/modes/varroa.js', 'js/modes/drohnenbrut.js', 'js/modes/pollen.js', 'js/modes/schwarm.js', 'js/modes/queen.js'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
