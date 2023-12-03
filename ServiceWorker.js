const cachesFiles = [
  "./",
  "./index.html",
  "./src/style.css",
  "./src/script.js",
  "./assets/favicon.png",
  "./assets/icons/icon-72x72.png",
  "./assets/icons/icon-96x96.png",
  "./assets/icons/icon-128x128.png",
  "./assets/icons/icon-144x144.png",
  "./assets/icons/icon-152x152.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll(cachesFiles);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
