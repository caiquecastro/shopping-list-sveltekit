import { supabase } from '$lib/db';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ params }) => {
    await supabase.from('items').delete().eq('id', params.id);

    throw redirect(303, '/items');
  },
};
