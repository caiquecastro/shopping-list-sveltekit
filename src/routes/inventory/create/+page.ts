import { supabase } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const { data: items } = await supabase.from('items').select('id, name');

  return {
    items: items ?? [],
  };
}
