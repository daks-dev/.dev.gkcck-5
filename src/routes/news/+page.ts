import type { PageLoad } from './$types';

import placeholder from '$lib/assets/images/logo.png?w=288&aspect=16:9&fit=contain&meta';

type MDData = {
  metadata: {
    title: string;
    description: string;
  };
};

const promises = {
  mds: import.meta.glob('$lib/content/news/**/index.md', {
    eager: true
  }),
  images: import.meta.glob('$lib/content/news/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    eager: true,
    query: { w: 288, aspect: '16:9', fit: 'cover', meta: true },
    import: 'default'
  })
};

const filter = (obj: Record<string, unknown>, dir: string | undefined) =>
  Object.keys(obj).filter((x) => x.split('/').at(-2) === dir);

export const load = (async () => {
  const items = await Promise.all(
    Object.keys(promises.mds)
      .sort((x, y) => (x > y ? -1 : 1))
      .map(async (path) => {
        const slug = path.split('/').at(-2);

        const {
          metadata: { title, description }
        } = promises.mds[path] as MDData;
        // } = (await promises.mds[path]()) as MDData;

        const images: ImageMetadata[] = [];
        for (const image of filter(promises.images, slug))
          images.push(promises.images[image] as ImageMetadata);
          // images.push((await promises.images[image]()) as ImageMetadata);
        if (!images.length) images[0] = placeholder;

        return { slug, title, description, images };
      })
  );
  return { items };
}) satisfies PageLoad;
