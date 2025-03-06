import { getProjects } from '$lib/shared/sql/sqlite3';
import type { PageServerLoad } from './$types';

export const load = (() => ({
  projects: getProjects()
})) satisfies PageServerLoad;
