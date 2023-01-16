import { supabase } from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const result = await supabase
        .from('inventory')
        .select('quantity, items (name)');

    if (result.error) {
        throw error(500, 'Something happened');
    }

    return {
        rows: result.data ?? [],
    };
}