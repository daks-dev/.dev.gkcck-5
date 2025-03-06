import { getPartners, getProjects } from '$lib/shared/sql/server';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => ({
  projects: await getProjects(),
  partners: await getPartners()
});
