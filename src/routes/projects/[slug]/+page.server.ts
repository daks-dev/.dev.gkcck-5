import { error } from '@sveltejs/kit';
import { getPartner, getProject, getProjects } from '$lib/shared/sql/server';
import type { PageServerLoad } from './$types';

// export const prerender = 'auto';

export const load = (async ({ params }) => {
  if (/^\d\d\d$/.test(params.slug)) {
    const id = Number(params.slug);
    const project = await getProject(id);
    if (project) {
      const projects = await getProjects();
      const idx = projects.reduce((res, el, idx) => {
        if (el.id === id) res = idx;
        return res;
      }, 0);
      const next = projects[idx < projects.length - 1 ? idx + 1 : 0];
      const prev = projects[idx > 0 ? idx - 1 : projects.length - 1];
      return {
        project,
        prev: {
          href: `/projects/${prev.id.toString().padStart(3, '0')}`,
          title: prev.name
        },
        next: {
          href: `/projects/${next.id.toString().padStart(3, '0')}`,
          title: next.name
        },
        customer: project.customer && (await getPartner(project.customer))
      };
    }
    throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
}) satisfies PageServerLoad;
