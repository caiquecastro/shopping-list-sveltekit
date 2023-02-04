import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  update: async (event) => {
    const { supabaseClient } = await getSupabase(event);
    const { request, params } = event;
    const formData = await request.formData();
    const quantity = formData.get('quantity');

    const { error, status } = await supabaseClient
      .from('inventory')
      .update({ quantity })
      .eq('id', params.id);

    if (error) {
      throw fail(status);
    }

    throw redirect(303, '/inventory');
  },
  delete: async (event) => {
    const { supabaseClient } = await getSupabase(event);
    const { params } = event;
    const { error, status } = await supabaseClient.from('inventory').delete().eq('id', params.id);

    if (error) {
      throw fail(status);
    }

    throw redirect(303, '/inventory');
  },
};
