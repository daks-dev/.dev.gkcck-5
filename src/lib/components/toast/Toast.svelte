<script lang="ts">
  import { Icon, Toast } from '@daks.dev/svelte.sdk';

  export let ontouch = !$$slots.default;
</script>

<Toast
  let:touch
  {ontouch}
  {...$$restProps}>
  <slot {touch}>
    <Icon
      class="-ml-1 h-7 w-7"
      icon="ic:round-touch-app" />
    <div>
      на устройствах с сенсорным вводом для навигации по ссылкам верхнего меню доступно
      горизонтальное пролистывание экрана
    </div>
  </slot>
</Toast>
