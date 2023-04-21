import { fail, error as sk_error, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ locals: { supabase }, cookies, request }) => {
    const form_data = await request.formData();
    const username = form_data.get('username');
    if (!username) {
      return fail(400, { missing: true });
    }

    // add user to database if not already in it
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('username', username);
    if (error) throw sk_error(500, error);
    if (data.length === 0) {
      const { error } = await supabase
        .from('users')
        .insert({ username });
      if (error) throw sk_error(500, error);
    }

    cookies.set('username', username);
    throw redirect(303, '/tasks');
  },
}
