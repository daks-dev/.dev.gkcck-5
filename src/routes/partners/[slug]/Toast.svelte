<script lang="ts">
  import { Icon } from '@daks.dev/svelte.sdk';
  import { Toast } from '$lib/components';
</script>

<Toast
  let:touch
  once="partners"
  top>
  <div class="max-xs:hidden flex gap-2">
    <Icon
      class="-ml-1 h-7 w-7"
      icon="ic:round-play-arrow"
      hFlip />
    <Icon
      class="h-7 w-7"
      icon="ic:round-play-arrow" />
  </div>
  <div class="max-xs:hidden">используйте для навигации внутри каталога партнёров</div>
  {#if touch}
    <Icon
      class="xs:mt-4 -ml-1 h-7 w-7"
      icon="ic:round-touch-app" />
    <div>
      на устройствах с сенсорным вводом
      <span class="xs:hidden">для навигации внутри каталога партнёров</span>
      <span class="max-xs:hidden">для этого также</span>
      доступно горизонтальное пролистывание экрана
    </div>
  {/if}
</Toast>
