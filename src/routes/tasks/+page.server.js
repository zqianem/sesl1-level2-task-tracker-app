import { error as sk_error } from '@sveltejs/kit';

export async function load({ locals: { supabase } }) {
  const { data, error } = await supabase
    .from('tasks')
    .select();

  if (error) throw sk_error(500, error);
  return {"tasks":data};
}
