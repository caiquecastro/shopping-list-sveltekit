import { supabase } from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const result = await supabase.from('items')
    .select('id, name, category:categories(id, name)')
    .order('name');

  if (result.error) {
    throw error(result.status, result.error.message);
  }

  return {
    items: result.data ?? [],
  };
}
