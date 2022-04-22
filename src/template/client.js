import Nullstack from 'nullstack'
import Application from './src/Application'
import { createClient } from '@supabase/supabase-js'

const context = Nullstack.start(Application)

context.start = async function start() {
  const { settings } = context

  // Create a single supabase client for interacting with your database
  context.supabase = createClient(settings.supabaseEndpoint, settings.supabaseAnonkey)
}

export default context