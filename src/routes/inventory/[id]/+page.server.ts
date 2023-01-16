import { supabase } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ params }: { params: Record<string, string> }) => {
    const { error, status } = await supabase.from('inventory').delete().eq('id', params.id);

    if (error) {
      throw fail(status);
    }

    throw redirect(303, '/inventory');
  },
};
