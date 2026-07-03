export function createProgressRing(container, percent, size = 120, color = '#1F6B47') {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  canvas.style.display = 'block'
  container.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  const cx = size / 2
  const cy = size / 2
  const radius = (size / 2) - 12
  const lineWidth = 10
  const startAngle = -Math.PI / 2

  const bg = getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || '#D4DDD6'

  let current = 0
  const target = Math.min(100, Math.max(0, percent))

  function draw(p) {
    ctx.clearRect(0, 0, size, size)

    // Track
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.strokeStyle = bg
    ctx.lineWidth = lineWidth
    ctx.stroke()

    // Fill
    if (p > 0) {
      ctx.beginPath()
      ctx.arc(cx, cy, radius, startAngle, startAngle + (Math.PI * 2 * p / 100))
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      ctx.lineCap = 'round'
      ctx.stroke()
    }

    // Text
    ctx.fillStyle = color
    ctx.font = `bold ${size * 0.22}px Space Grotesk, system-ui, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(Math.round(p) + '%', cx, cy)
  }

  // Animate
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    draw(target)
    return
  }

  const duration = 600
  const start = performance.now()

  function animate(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    current = eased * target
    draw(current)
    if (progress < 1) requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}
