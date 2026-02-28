const CACHE_NAME = "ndi-pos-v1";
const urlsToCache = ["/"];

// Proses Install: Menyimpan aset ke memori HP
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Proses Fetch: Mengambil data dari memori jika internet mati
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
