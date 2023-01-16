import { supabase } from '$lib/db';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const category = formData.get('category');

    const { error, data, status } = await supabase.from('items').insert({ name, category });

    if (error) {
      return fail(status, { name: name ?? '', category: category ?? '' });
    }

    return { data };
  },
};
