import { supabase } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type CategoryRelation = { id: string; name: string } | { id: string; name: string }[] | null;

const firstRelation = (relation: CategoryRelation) => {
  return Array.isArray(relation) ? relation[0] : relation;
};

export const load = (async () => {
  const result = await supabase
    .from('items')
    .select('id, name, category:categories(id, name)')
    .order('name');

  if (result.error) {
    throw error(result.status, result.error.message);
  }

  return {
    items: (result.data ?? []).map((item) => ({
      ...item,
      category: firstRelation(item.category),
    })),
  };
}) satisfies PageLoad;
