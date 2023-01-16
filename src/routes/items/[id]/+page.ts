import { supabase } from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { data: item } = await supabase
        .from('items')
        .select('id, name, category')
        .eq('id', params.id)
        .maybeSingle();

    return {
        item: item,
    };
}