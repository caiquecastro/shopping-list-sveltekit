import { supabase } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  update: async ({ request, params }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const category = formData.get('category');

    const { error, status } = await supabase
      .from('items')
      .update({ name, category_id: category })
      .eq('id', params.id);

    if (error) {
      throw fail(status);
    }

    throw redirect(303, '/items');
  },
  delete: async ({ params }) => {
    await supabase.from('items').delete().eq('id', params.id);

    throw redirect(303, '/items');
  },
};
