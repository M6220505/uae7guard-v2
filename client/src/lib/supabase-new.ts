import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://juhpmjixqkpnjkzyxmse.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1aHBtaml4cWtwbmprenl4bXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NjgxNjMsImV4cCI6MjA4NTA0NDE2M30.DfgThnFjB1xI7Ydr37oSW4A_g-ZoLboBqeNQ0b_iEOo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
