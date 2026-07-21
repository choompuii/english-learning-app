// Service-worker registration. Registered only for production builds so it never
// interferes with Vite's dev server / HMR (which serves unhashed modules).
export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return
  if (!import.meta.env.PROD) return

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.error('SW registration failed', err)
    })
  })
}
