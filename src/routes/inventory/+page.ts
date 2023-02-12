import { supabase } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
  const filter = url.searchParams.get('filter') ?? '';

  const query = supabase
    .from('inventory')
    .select('id, quantity, item:items(name)')
    .order('quantity');

  if (filter === 'toBuy') {
    query.eq('quantity', 0);
  }

  const result = await query;

  if (result.error) {
    throw error(result.status, result.error.message);
  }

  return {
    rows: result.data ?? [],
    filter,
  };
}) satisfies PageLoad;
