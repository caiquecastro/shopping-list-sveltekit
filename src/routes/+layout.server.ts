import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

const authRoutes = [
  '/auth/login',
  '/auth/register',
];

export const load: LayoutServerLoad = async (event) => {
  const session = await getServerSession(event);

  if (!session && !authRoutes.includes(event.url.pathname)) {
    throw redirect(307, '/auth/login');
  }

  if (session && event.url.pathname === '/auth/login') {
    throw redirect(307, '/');
  }

  return {
    session,
  };
};
