import { supabase } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const { data: items } = await supabase
        .from('items')
        .select('id, name, category');

    return {
        items: items ?? [],
    };
}