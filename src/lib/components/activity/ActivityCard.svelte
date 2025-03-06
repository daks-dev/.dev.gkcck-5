<script lang="ts">
  import { Icon, Sign } from '@daks.dev/svelte.sdk';
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let href: undefined | string = undefined;

  export let size: number | string = '4em';
  export let animate = ''; // 'animate-pulse oversee:animation-paused';
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  class={twMerge(
    'group relative p-7 py-4',
    'flex flex-col',
    'text-slate-600 dark:text-slate-400',
    'rounded-sm border border-current shadow-sm',
    animate,
    className
  )}
  {href}>
  <Sign
    class="top-1 left-1"
    link
    small />
  <slot name="title" />
  <div class="mt-2 mb-7 flex grow flex-col justify-center pl-4">
    <slot>
      <div class="">
        Объектов реализовано:
        <span class="text-brand text-2xl">...</span>
      </div>
      <div class="">
        Объекты в работе:
        <span class="text-brand text-2xl">...</span>
      </div>
    </slot>
  </div>
  <div class="flex items-start gap-5">
    <Icon
      class="
        transition-easy group-oversee:drop-shadow-md
        drop-shadow-lg"
      icon="ic:round-account-circle"
      {size} />
    <div class="flex grow flex-col gap-3 opacity-75">
      <small>руководитель направления:</small>
      <div
        class="
          transition-easy group-oversee:drop-shadow-none flex grow
          flex-col
          gap-2 opacity-75
          drop-shadow-lg">
        <div class="h-2.5 w-3/4 rounded-full bg-current"></div>
        <div class="h-2 w-full rounded-full bg-current"></div>
      </div>
    </div>
  </div>
  <span class="sr-only">loading...</span>
</svelte:element>
