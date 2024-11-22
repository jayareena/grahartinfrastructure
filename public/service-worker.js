// This is a basic service worker for caching assets
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    event.waitUntil(
      caches.open('static-cache').then((cache) => {
        return cache.addAll([
          '/', // Add your app's main page or any other critical assets
          '/index.html',
          '/favicon.ico',
          '/logo.png',
          // Add other assets you want to cache for offline use
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  