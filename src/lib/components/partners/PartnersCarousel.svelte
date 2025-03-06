<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import { CarouselKit } from '@daks.dev/svelte.sdk';

  let className: ClassName = undefined;
  export { className as class };

  export let partners: Partner[];

  export let show: number | ((x: number) => number) = 1;
  export let ratio = 1;

  const dataset = partners.reduce((res, el) => {
    el.hidden ||
      res.push({
        ...el.images?.squares[0]
        // title: el.name
      });
    return res;
  }, Array(0));

  let visible = false;
  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  <CarouselKit
    class={className}
    {dataset}
    {show}
    {ratio}
    {...$$restProps} />
{:else}
  <slot />
{/if}
