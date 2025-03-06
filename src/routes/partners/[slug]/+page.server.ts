import { error } from '@sveltejs/kit';
import { getPartner, getPartners, getProjects } from '$lib/shared/sql/server';
import type { PageServerLoad } from './$types';

// export const prerender = 'auto';

export const load = (async ({ params }) => {
  if (/^\d\d\d$/.test(params.slug)) {
    const id = Number(params.slug);
    const partner = await getPartner(id);
    if (partner) {
      const partners = await getPartners();
      const idx = partners.reduce((res, el, idx) => {
        if (el.id === id) res = idx;
        return res;
      }, 0);
      const next = partners[idx < partners.length - 1 ? idx + 1 : 0];
      const prev = partners[idx > 0 ? idx - 1 : partners.length - 1];
      return {
        partner,
        prev: {
          href: `/partners/${prev.id.toString().padStart(3, '0')}`,
          title: prev.name
        },
        next: {
          href: `/partners/${next.id.toString().padStart(3, '0')}`,
          title: next.name
        },
        projects: await getProjects(partner.id)
      };
    }
    throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
}) satisfies PageServerLoad;
