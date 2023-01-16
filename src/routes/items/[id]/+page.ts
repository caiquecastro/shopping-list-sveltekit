import { supabase } from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { data: item } = await supabase
        .from('items')
        .select('id, name, category')
        .eq('id', params.id)
        .maybeSingle();

    if (!item) {
        throw error(404, 'Not found');
    }

    return {
        item: item,
    };
}