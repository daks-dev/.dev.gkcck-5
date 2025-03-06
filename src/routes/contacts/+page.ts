import type { PageLoad } from './$types';

export const load = (async () => ({
  thumbnail: (await import('$lib/content/contacts/00.webp?w=320&meta')).default,
  sources: [
    (await import('$lib/content/contacts/00.webp?meta')).default,
    (await import('$lib/content/contacts/01.webp?meta')).default
  ]
})) satisfies PageLoad;
