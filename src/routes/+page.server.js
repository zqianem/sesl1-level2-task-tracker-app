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

    let user_id;
    if (data.length === 0) {
      const { data, error } = await supabase
        .from('users')
        .insert({ username });
      if (error) throw sk_error(500, error);
      user_id = data[0].id;

    } else {
      user_id = data[0].id;
    }

    cookies.set('username', username);
    cookies.set('user_id', user_id);
    throw redirect(303, '/tasks');
  },
}
