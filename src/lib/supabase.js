import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ifbpedgoznlrrfifaxyr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYnBlZGdvem5scnJmaWZheHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0OTAxOTgsImV4cCI6MjA5OTA2NjE5OH0.zzmgx8jA82BNtBlxQXfFNyPv_OMg92D3UhAvORSZU8s'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
