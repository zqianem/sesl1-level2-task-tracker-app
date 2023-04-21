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

export const actions = {
  add: async ({ locals: { supabase }, request, cookies }) => {
    const user_id = cookies.get('user_id');

    const form_data = await request.formData();
    const title = form_data.get('title') || null;
    const description = form_data.get('desc') || null;
    const due_date = form_data.get('ddate') || null;

    const { error } = await supabase
      .from('tasks')
      .insert({ user_id, title, description, due_date });
    if (error) throw sk_error(500, error);
  },

  delete: async ({ locals: { supabase }, request }) => {
    const form_data = await request.formData();
    const id = form_data.get('id');

    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);
    if (error) throw sk_error(500, error);
  },

  edit: async ({ locals: { supabase }, request }) => {
    const form_data = await request.formData();
    const id = form_data.get('id');
    const title = form_data.get('title') || null;
    const description = form_data.get('desc') || null;
    const status = form_data.get('stat') || null;
    const due_date = form_data.get('ddate') || null;

    const { error } = await supabase
      .from('tasks')
      .update({ title, description, status, due_date })
      .eq('id', id);
    if (error) throw sk_error(500, error);
  },
}
