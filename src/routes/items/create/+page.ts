import { supabase } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const { data: categories, error } = await supabase
        .from('categories')
        .select('id, name');

    return {
        categories: categories ?? [],
    };
}