import { getPartners } from '$lib/shared/sql/server';
import type { PageServerLoad } from './$types';

export const load = (async () => ({
  partners: await getPartners()
})) satisfies PageServerLoad;
