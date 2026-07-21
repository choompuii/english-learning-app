// Daily study reminder — a local browser notification fired while the app tab is
// open. There's no push server (the app stays free/serverless), so reminders only
// fire when LearnEN is open in a tab; that's communicated in the settings UI.
import { shouldRemindNow, markReminderNotified, getReminderSettings } from '../store.js'
import { navigate } from '../router.js'

const CHECK_INTERVAL_MS = 60 * 1000 // re-check every minute

export function notificationsSupported() {
  return typeof window !== 'undefined' && 'Notification' in window
}

export function notificationPermission() {
  return notificationsSupported() ? Notification.permission : 'denied'
}

export async function requestNotificationPermission() {
  if (!notificationsSupported()) return 'denied'
  if (Notification.permission === 'granted') return 'granted'
  try {
    return await Notification.requestPermission()
  } catch {
    return 'denied'
  }
}

function fireReminder() {
  if (notificationPermission() !== 'granted') return
  markReminderNotified()
  try {
    const n = new Notification('ถึงเวลาเรียนภาษาอังกฤษแล้ว! 📚', {
      body: 'มาสะสม XP รักษา streak ของคุณกันเถอะ',
      icon: '/icon.svg',
      badge: '/icon.svg',
      tag: 'learnen-daily-reminder',
    })
    n.onclick = () => {
      window.focus()
      navigate('/')
      n.close()
    }
  } catch {
    // Some browsers throw when constructing Notification outside a SW; ignore.
  }
}

function check() {
  const { enabled } = getReminderSettings()
  if (!enabled) return
  if (notificationPermission() !== 'granted') return
  if (shouldRemindNow()) fireReminder()
}

let _timer = null

// Starts the once-a-minute reminder loop. Safe to call more than once.
export function initReminders() {
  if (!notificationsSupported()) return
  if (_timer) return
  check()
  _timer = setInterval(check, CHECK_INTERVAL_MS)
}
