import { error as sk_error } from '@sveltejs/kit';

export async function load({ locals: { supabase }, cookies }) {
  const username = cookies.get('username');
  const user_id = cookies.get('user_id');
  const { data, error } = await supabase
    .from('tasks')
    .select()
    .eq('user_id', user_id);

  if (error) throw sk_error(500, error);

  return { tasks: data, username };
}
