import { supabase } from '$lib/db';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const category = formData.get('category');

    const { error, data, status } = await supabase
      .from('items')
      .insert({ name, category_id: category });

    if (error) {
      return fail(status, { name: name ?? '', category: category ?? '' });
    }

    return { data };
  },
};
