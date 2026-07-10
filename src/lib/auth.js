import { supabase } from './supabase.js'

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) throw error
  return data.user
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data.user
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getUser() {
  const { data } = await supabase.auth.getUser()
  return data?.user || null
}

export function onAuthChange(callback) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user || null)
  })
}

export async function sendPasswordReset(email) {
  const redirectTo = window.location.origin + window.location.pathname + '#/account'
  const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo })
  if (error) throw error
}

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin + window.location.pathname + '#/' }
  })
  if (error) throw error
}

export async function getProfile() {
  const { data } = await supabase.auth.getUser()
  const user = data?.user || null
  if (!user) return null
  const { data: profileData } = await supabase.from('user_profiles').select('*').eq('user_id', user.id).single()
  return profileData || { user_id: user.id, display_name: '', username: '', avatar_color: '#2d6a4f' }
}

export async function saveProfile(fields) {
  const { data } = await supabase.auth.getUser()
  const user = data?.user || null
  if (!user) throw new Error('Not logged in')
  const { error } = await supabase.from('user_profiles').upsert({
    user_id: user.id, ...fields, updated_at: new Date().toISOString()
  })
  if (error) throw error
}

export async function updatePassword(newPassword) {
  const { error } = await supabase.auth.updateUser({ password: newPassword })
  if (error) throw error
}

export async function updateEmail(newEmail) {
  const { error } = await supabase.auth.updateUser({ email: newEmail })
  if (error) throw error
}
