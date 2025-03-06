<script lang="ts">
  import { page } from '$app/stores';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import { Icon, Link } from '@daks.dev/svelte.sdk';
  import { navigate, routeTransitionMode } from '@daks.dev/svelte.sdk/stores';
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let icon = 'ic:round-play-arrow';
  export let size: number | string = '1.375em';

  const modeDefault = $routeTransitionMode;

  // const click = (next = true) => $routeTransitionMode && ($routeTransitionMode = next ? 2 : 1);
  // TODO:
  const click = (next = true) => next ?? ($routeTransitionMode = 0);

  beforeNavigate(navigate.clear);
  afterNavigate(() => ($routeTransitionMode = modeDefault));
</script>

{#if /^\/(projects|partners)\/\d{3}$/.test($page.url.pathname)}
  {#key $navigate}
    <div
      class="
        xs:flex mr-auto hidden
        gap-8 lg:gap-[.7vw] xl:gap-8 2xl:gap-16">
      <Link
        on:click={() => click(false)}
        class={twMerge(className)}
        href={$navigate?.prev?.href}
        title={$navigate?.prev?.title}>
        <Icon
          class="pointer-events-none"
          {icon}
          {size}
          hFlip>
          {$navigate?.prev?.title || null}
        </Icon>
      </Link>

      <Link
        on:click={() => click()}
        class={twMerge(className)}
        href={$navigate?.next?.href}
        title={$navigate?.next?.title}>
        <Icon
          class="pointer-events-none"
          {icon}
          {size}>
          {$navigate?.next?.title || null}
        </Icon>
      </Link>
    </div>
  {/key}
{/if}
