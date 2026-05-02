import { supabase } from '$lib/db';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const { data: item } = await supabase.from('items').select().eq('id', params.id).single();
  const { data: categories } = await supabase.from('categories').select('id, name');

  return {
    item,
    categories: categories ?? [],
  };
}) satisfies PageLoad;
