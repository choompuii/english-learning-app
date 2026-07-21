/* LearnEN service worker — offline app shell + runtime caching.
   Bumping CACHE_VERSION invalidates all previously cached assets. */
const CACHE_VERSION = 'learnen-v1'
const APP_SHELL = ['/', '/index.html', '/manifest.webmanifest', '/icon.svg', '/icon-maskable.svg']

// Cross-origin hosts whose responses are safe to cache for offline use (fonts).
const CACHEABLE_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  const sameOrigin = url.origin === self.location.origin

  // Never intercept Supabase (or any other API) — always hit the network.
  if (!sameOrigin && !CACHEABLE_HOSTS.includes(url.hostname)) return

  // App navigations: network-first so users get fresh HTML, fall back to the
  // cached shell when offline (keeps the SPA bootable without a connection).
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE_VERSION).then((c) => c.put('/', copy))
          return res
        })
        .catch(() => caches.match('/').then((c) => c || caches.match('/index.html')))
    )
    return
  }

  // Assets (JS/CSS/fonts/images): stale-while-revalidate — serve cache instantly,
  // refresh in the background so the next load is up to date.
  event.respondWith(
    caches.open(CACHE_VERSION).then((cache) =>
      cache.match(request).then((cached) => {
        const network = fetch(request)
          .then((res) => {
            if (res && res.status === 200) cache.put(request, res.clone())
            return res
          })
          .catch(() => cached)
        return cached || network
      })
    )
  )
})
