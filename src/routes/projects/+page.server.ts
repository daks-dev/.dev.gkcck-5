import { getProjects } from '$lib/shared/sql/server';
import type { PageServerLoad } from './$types';

export const load = (async () => ({
  projects: await getProjects()
})) satisfies PageServerLoad;
