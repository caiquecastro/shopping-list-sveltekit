import { supabase } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { data: item } = await supabase.from('items').select().eq('id', params.id).single();
  const { data: categories } = await supabase.from('categories').select('id, name');

  console.log({ item });

  return {
    item,
    categories: categories ?? [],
  };
}
