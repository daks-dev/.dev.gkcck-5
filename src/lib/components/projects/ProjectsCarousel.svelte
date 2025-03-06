<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import { CarouselKit } from '@daks.dev/svelte.sdk';

  let className: ClassName = undefined;
  export { className as class };
  export let custom: Record<string, unknown> = {};
  custom.inner = Object.assign(
    {
      caption: 'absolute right-1 bottom-1 left-1 text-white',
      progress: 'bottom-full'
    },
    custom.inner
  );

  export let projects: Project[];

  export let show = (x: number) =>
    (x < 480 && 1) || (x < 640 && 2) || (x < 1024 && 3) || (x < 1536 && 4) || 5;
  export let ratio = 16 / 9;

  const random = (x?: unknown[]): number => (x?.length ? Math.floor(Math.random() * x.length) : -1);

  const dataset = projects.map((el) => {
    const res = el.images.screens[random(el.images.screens)];
    res.description = el.name;
    return res;
  });

  let visible = false;
  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  <CarouselKit
    class={className}
    {dataset}
    {custom}
    {show}
    {ratio}
    {...$$restProps} />
{/if}
