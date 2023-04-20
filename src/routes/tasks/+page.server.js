import { error as sk_error } from '@sveltejs/kit';

export async function load({ locals: { supabase } }) {
  const { data, error } = await supabase
    .from('tasks')
    .select()
     ;
    console.log(data)

  if (error) throw sk_error(500, error);
  return {"tasks":data};
}

// export const actions = {
//   default: async ({ locals: { supabase }, platform }) => {
//     const { error } = await supabase
//       .from('clicks')
//       .insert({ country: platform?.context.geo.country.name ?? null });

//     if (error) throw sk_error(500, error);
//   },
// };