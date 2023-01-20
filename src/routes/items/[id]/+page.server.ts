import { supabase } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  update: async ({ request, params }: { params: Record<string, string> }) => {
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
