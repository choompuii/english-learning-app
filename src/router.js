const routes = []

export function route(pattern, handler) {
  routes.push({ pattern: new RegExp('^' + pattern.replace(/:([^/]+)/g, '([^/]+)') + '$'), keys: extractKeys(pattern), handler })
}

function extractKeys(pattern) {
  const keys = []
  pattern.replace(/:([^/]+)/g, (_, key) => keys.push(key))
  return keys
}

function resolve(path) {
  for (const r of routes) {
    const match = path.match(r.pattern)
    if (match) {
      const params = {}
      r.keys.forEach((k, i) => { params[k] = decodeURIComponent(match[i + 1]) })
      return { handler: r.handler, params }
    }
  }
  return null
}

export function navigate(path) {
  window.location.hash = path
}

export function initRouter() {
  function dispatch() {
    const path = window.location.hash.slice(1) || '/'
    window.scrollTo({ top: 0, behavior: 'instant' })
    const match = resolve(path)
    if (match) {
      match.handler(match.params)
    } else {
      navigate('/')
    }
  }

  window.addEventListener('hashchange', dispatch)
  dispatch()
}

// Intercept hash links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]')
  if (!a) return
  // The skip link targets the <main> element for keyboard/AT users — move focus
  // there instead of treating "#main-content" as a route.
  if (a.classList.contains('skip-link')) {
    e.preventDefault()
    document.getElementById('main-content')?.focus()
    return
  }
  e.preventDefault()
  navigate(a.getAttribute('href').slice(1))
})
