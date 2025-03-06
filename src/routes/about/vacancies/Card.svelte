<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let title: string;
</script>

<div
  class={twMerge('mx-auto w-full max-w-xs p-4', 'flex flex-col', 'rounded-md border-2', className)}>
  <h4 class="text-accent mb-4 text-center sm:h-12">
    {title}
  </h4>
  <slot />
</div>
