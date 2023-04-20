import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '$env/static/private';

export async function handle({ event, resolve }) {
  event.locals.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  return resolve(event);
}