import { error as sk_error } from '@sveltejs/kit';

export async function load({ locals: { supabase }, cookies }) {
  const username = cookies.get('username');
  const { data, error } = await supabase
    .from('tasks')
    .select('*, users!inner(*)')
    .eq('users.username', username);

  if (error) throw sk_error(500, error);

  return { tasks: data, username };
}
