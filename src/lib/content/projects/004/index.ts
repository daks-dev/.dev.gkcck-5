import { globIndex, globInfoset, globDataset } from '@daks.dev/svelte.sdk';

const idxs = globIndex(
  import.meta.glob('./*.(heic|heif|avif|jpeg|jpg|png|tiff|webp|gif)', {
    import: 'default',
    eager: true
  })
);

export const captions = globInfoset(
  idxs,
  import.meta.glob('./*.(json|yaml|yml)', {
    import: 'default',
    eager: true
  })
);

export const sources = globDataset(
  idxs,
  captions,
  import.meta.glob('./*.(heic|heif|avif|jpeg|jpg|png|tiff|webp|gif)', {
    query: { w: 1280, h: 720, meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);

export const squares = globDataset(
  idxs,
  captions,
  import.meta.glob('./*.(heic|heif|avif|jpeg|jpg|png|tiff|webp|gif)', {
    query: { w: 320, h: 320, meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);

export const screens = globDataset(
  idxs,
  captions,
  import.meta.glob('./*.(heic|heif|avif|jpeg|jpg|png|tiff|webp|gif)', {
    query: { w: 320, h: 180, meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);

export default {
  captions,
  sources,
  squares,
  screens
};
