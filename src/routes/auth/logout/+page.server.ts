import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const actions = {
  default: async (event) => {
    const { supabaseClient } = await getSupabase(event);

    await supabaseClient.auth.signOut();

    throw redirect(307, '/auth/login');
  },
};
