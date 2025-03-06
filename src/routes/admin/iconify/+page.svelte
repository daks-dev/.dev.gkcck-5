<script lang="ts">
  import { Head, IconifyAdmin } from '@daks.dev/svelte.sdk';
  import { navigate } from '@daks.dev/svelte.sdk/stores';

  $navigate = {
    prev: {
      href: '/admin',
      title: 'Admin'
    },
    next: { href: '' }
  };

  import type { PageData } from './$types';
  export let data: PageData;
  const { meta, local, bundles } = data;

  const robots = 'noindex, follow';
  const title = 'ГК ССК • Admin [ Iconify ]';
</script>

<Head
  {robots}
  {title} />

<main>
  <header class="frame">
    <h1 class="title">Iconify</h1>
  </header>

  <IconifyAdmin
    {meta}
    {local}
    {bundles} />
</main>
