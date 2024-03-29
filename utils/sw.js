var cacheName = "thegospel-pwa";
var filesToCache = ["../", "../index.html", "../assets/css/style.css","../assets/js/user.js","../assets/js/actions.js","../assets/js/fontActions.js",'../assets/data/bibleData.js'];
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});
/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
