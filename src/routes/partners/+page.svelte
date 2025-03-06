<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure, Sign, YandexMetrikaHit } from '@daks.dev/svelte.sdk';
  import { Toast } from '$lib/components';

  import type { PageData } from './$types';
  export let data: PageData;
  const { partners } = data;

  const title = 'ГК ССК • Партнёры';
  const description = 'Партнёры группы компаний «ССК»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Партнёры</h1>
  </header>

  <div class="frame-xl flex flex-wrap justify-center gap-2">
    {#each partners as { id, projects, hidden, images }}
      {@const data = {
        ...images?.squares[0],
        ...(projects ? { subtitle: `${projects}` } : undefined)
      }}
      {#if !hidden}
        <a
          class="group relative"
          href={`/partners/${id.toString().padStart(3, '0')}`}>
          <Sign
            class="top-2 left-2"
            link
            light />
          <Figure
            class="oversee:drop-shadow-xs drop-shadow-md"
            custom={{
              caption: `
              group-oversee:opacity-100 absolute right-1 bottom-1 flex h-8 w-8
              flex-col items-center justify-center rounded-full
              bg-black/30 px-2 py-1
              text-white opacity-50`
            }}
            {data} />
        </a>
      {/if}
    {/each}
  </div>
</main>

<Toast once="init" />
