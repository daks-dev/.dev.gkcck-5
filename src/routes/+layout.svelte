<script lang="ts">
  import { BROWSER } from 'esm-env';
  import {
    lazyload,
    Head,
    Footer,
    NavbarKit,
    RouteTransition,
    ScreenBlock,
    YandexMetrikaInit
  } from '@daks.dev/svelte.sdk';
  import { NavPath } from '$lib/components';

  import '../app.css';
  import '$iconify';

  import type { LayoutData } from './$types';
  export let data: LayoutData;

  import { app, nav } from '$lib/configs';

  BROWSER && (document.lazyload ??= lazyload());
</script>

<Head {app} />

<RouteTransition
  class="flex grow flex-col"
  refresh={data.refresh}
  mode="1">
  <slot />
</RouteTransition>

<!-- class="max-lg:snap-end" -->
<Footer {...nav.footer} />

<NavbarKit
  let:custom
  {...nav.navbar}>
  <!-- icon="ic:round-forward" -->
  <NavPath class={custom.button} />
</NavbarKit>

<ScreenBlock />

<YandexMetrikaInit />
