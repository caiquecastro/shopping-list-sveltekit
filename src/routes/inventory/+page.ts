import { supabase } from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const result = await supabase.from('inventory').select('quantity, item:items(name)');

  if (result.error) {
    throw error(result.status, result.error.message);
  }

  return {
    rows: result.data ?? [],
  };
}
