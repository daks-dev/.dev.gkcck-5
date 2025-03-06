<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure, FormattedDate, Sign, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import type { PageData } from './$types';
  export let data: PageData;
  const { items } = data;

  const title = 'ГК ССК • Новости';
  const description = 'Новости группы компаний «ССК»';

  // const random = (x?: unknown[]): number => (x?.length ? Math.floor(Math.random() * x.length) : -1);

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage snap-start">
  <header class="frame">
    <h1 class="title">Новости</h1>
  </header>

  <div class="frame xs:grid-cols-2 grid grid-cols-1 gap-8 md:grid-cols-3">
    {#each items as { slug, title, description, images }}
      <a
        class="group oversee:text-sky-500 relative place-self-center"
        href="/news/{slug}">
        <Sign
          class="top-10 left-2"
          link
          dark />
        <Figure
          custom={{
            image: [
              'mb-2 aspect-video w-48 lg:w-auto',
              'group-oversee:scale-105 rounded-md bg-neutral-500/10',
              'transition-transform duration-300'
            ]
          }}
          data={{
            ...images[0],
            title,
            description
          }}>
          <FormattedDate
            slot="before"
            class="mb-2 block tracking-wide text-slate-600 dark:text-slate-400"
            date={slug}
            parse="YY-MM-DD" />
        </Figure>
      </a>
      <!--article
        class="flex gap-4 -bp:flex-col"
        aria-posinset={idx + 1}
        aria-setsize={items.length}>
        <a
          class="shadow-md shadow-gray-800 oversee:shadow-lg oversee:shadow-gray-900"
          href="/news/{slug}">
          {#if images.length}
            {@const { src, width, height } = images[0]}
            <img
              class="aspect-video max-w-xs max-sm:w-full"
              {src}
              {width}
              {height}
              alt="" />
          {/if}
        </a>
        <div>
          <FormattedDate
            class="mb-2 block tracking-wide text-slate-600 dark:text-slate-400"
            date={slug}
            parse="YY-MM-DD" />
          <p class="font-semibold">{title}</p>
          <p>{description}</p>
        </div>
      </article-->
    {:else}
      <p>Новостей нет!</p>
    {/each}
  </div>
</main>
