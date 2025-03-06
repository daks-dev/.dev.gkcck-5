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
    query: { meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);

export default {
  captions,
  sources
};
