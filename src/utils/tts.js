let voices = []
window.speechSynthesis.onvoiceschanged = () => { voices = speechSynthesis.getVoices() }

function getBestVoice() {
  if (!voices.length) voices = speechSynthesis.getVoices()
  return voices.find(v => v.lang === 'en-GB' && v.localService) ||
    voices.find(v => v.lang === 'en-US' && v.localService) ||
    voices.find(v => v.lang.startsWith('en')) ||
    null
}

export function speak(text, rate = 0.9) {
  if (!window.speechSynthesis) return
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'en-US'
  u.rate = rate
  const voice = getBestVoice()
  if (voice) u.voice = voice
  speechSynthesis.cancel()
  speechSynthesis.speak(u)
}

export function speakSlow(text) {
  speak(text, 0.65)
}

export function ttsButton(text, title = 'ฟังเสียง') {
  return `<button class="tts-btn" data-speak="${text.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" title="${title}" onclick="event.stopPropagation()">🔊</button>`
}

export function attachTtsListeners(container) {
  container.querySelectorAll('[data-speak]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      speak(btn.dataset.speak)
    })
  })
}
