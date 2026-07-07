// fallseed · Ring 0 substrate root · service worker v1
const V = 'fallseed-v1';
const CORE = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(V).then(cache =>
      cache.match(e.request).then(cached =>
        cached || fetch(e.request).then(res => {
          if (res.ok && res.type === 'basic') cache.put(e.request, res.clone());
          return res;
        }).catch(() => cached)
      )
    )
  );
});
