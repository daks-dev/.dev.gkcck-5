<script lang="ts">
  import { beforeUpdate, afterUpdate } from 'svelte';
  import { sineIn, sineOut } from 'svelte/easing';
  import { blur, fade } from 'svelte/transition';
  import { Icon, Figure, Sign, scroll } from '@daks.dev/svelte.sdk';
  import { YandexMap } from '$lib/components';

  export let projects: Project[];
  export let mode = 0;

  export let grayscale = false;

  export let center: undefined | string = undefined;
  export let zoom = 10;
  // (x: number) => (x < 768 && 10) || (x < 1024 && 10.3) || (x < 1280 && 10) || 10.3;

  let innerWidth: number = 0;
  $: mapper = innerWidth >= 640;

  const transition = {
    in: { duration: 300, delay: 100, amount: 5, easing: sineIn },
    out: { duration: 200, easing: sineOut }
  };

  const random = (x?: Metadata[]): number =>
    x?.length ? Math.floor(Math.random() * x.length) : -1;

  beforeUpdate(() => mode === 2 && (mode = mapper ? 2 : 0));
  afterUpdate(() => {
    mode || document?.lazyload.update();
    mode === 2 && setTimeout(() => scroll.toObj('#ymap', { offset: -96, duration: 2100 }), 700);
  });
</script>

<svelte:window bind:innerWidth />

<div
  class="
    frame mb-4 flex
    items-center gap-4 overflow-hidden">
  <span class="mr-auto p-1.5">[{projects.length}]</span>
  <button
    on:click={() => (mode = 0)}
    class="
      oversee:bg-gray-300 dark:oversee:bg-gray-700
      rounded-sm p-1.5
      disabled:text-cyan-600 dark:disabled:text-cyan-700"
    type="button"
    disabled={!mode || undefined}>
    <Icon
      icon="ic:round-apps"
      size="1.5em" />
  </button>
  <button
    on:click={() => (mode = 1)}
    class="
      oversee:bg-gray-300 dark:oversee:bg-gray-700
      rounded-sm p-1.5
      disabled:text-cyan-600 dark:disabled:text-cyan-700"
    type="button"
    disabled={mode === 1 || undefined}>
    <Icon
      icon="ic:round-format-list-bulleted"
      size="1.5em" />
  </button>
  <button
    on:click={() => (mode = 2)}
    class="
      oversee:bg-gray-300 dark:oversee:bg-gray-700
      hidden rounded
      p-1.5 disabled:text-cyan-600
      sm:block dark:disabled:text-cyan-700"
    type="button"
    disabled={mode === 2 || undefined}>
    <Icon
      icon="ic:round-map"
      size="1.5em" />
  </button>
</div>

{#if !mode}
  <div
    in:blur={transition.in}
    out:fade={transition.out}
    class="
      frame-xl
      flex flex-wrap justify-center gap-8">
    {#each projects as { id, name, address, images }}
      {@const idx = random(images?.squares)}
      {@const data = { ...images?.squares[idx], title: name, description: address }}
      <a
        class="group relative"
        href={`/projects/${id.toString().padStart(3, '0')}`}>
        <Sign
          class="top-2 left-2"
          link
          dark />
        <Figure
          class="
            transition-easy
            group-oversee:drop-shadow-md pointer-events-none overflow-hidden
            rounded-sm border
            border-slate-400
            drop-shadow-lg"
          custom={{
            image: grayscale ? 'transition-easy group-oversee:grayscale-0 grayscale' : undefined,
            caption: `
              group-oversee:opacity-0 absolute bottom-0 left-0 flex h-20 w-full
              flex-col justify-start overflow-hidden
              bg-gray-700/70 p-2 text-ellipsis
              text-white
              transition-opacity duration-1000 ease-in-out`
          }}
          {data} />
        {#if idx >= 0}
          <link
            rel="image"
            itemprop="image"
            href={images?.sources[idx].src} />
          <link
            rel="image"
            itemprop="thumbnailUrl"
            href={images?.squares[idx].src} />
        {/if}
      </a>
    {/each}
  </div>
{:else if mode === 1}
  <div
    in:blur={transition.in}
    out:fade={transition.out}
    class="
      frame
      flex flex-col">
    {#each projects as { id, name, address, area, area_unit }, idx}
      <a
        class="
          group oversee:bg-slate-400 oversee:drop-shadow-md
          dark:oversee:bg-slate-700 grid grid-cols-[32px_minmax(0,_1fr)_96px] items-center
          px-2 py-4
          odd:bg-slate-400/25 md:grid-cols-[32px_256px_minmax(0,_1fr)_96px] dark:even:bg-slate-700/25"
        href={`/projects/${id.toString().padStart(3, '0')}`}>
        <small>{idx + 1}</small>
        <span
          class="group-oversee:text-sky-700
            max-xs:col-span-2 text-cyan-700 dark:text-cyan-600">
          {name}
        </span>
        <small class="max-md:hidden">{address}</small>
        <span class="max-xs:hidden text-right">
          {Number(area).toLocaleString()}
          {@html area_unit || 'м<sup>2</sup>'}
        </span>
      </a>
    {/each}
  </div>
{:else}
  <div class="frame-xl hidden sm:block">
    <YandexMap
      class="
        bg--waiting bg-25% sm:bg-20%
        md:bg-10% aspect-square w-full border-4 border-slate-400 bg-gray-100 bg-center bg-no-repeat
        lg:aspect-video dark:bg-slate-200"
      {projects}
      {center}
      {zoom} />
  </div>
{/if}
