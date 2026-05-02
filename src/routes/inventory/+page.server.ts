import { supabase } from '$lib/db';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const item = formData.get('item');
    const quantity = formData.get('quantity');

    const { error, data, status } = await supabase
      .from('inventory')
      .insert({ item_id: item, quantity });

    if (error) {
      return fail(status, { item_id: item ?? '', quantity: quantity ?? '' });
    }

    return { data };
  },
};
