<script lang="ts">
  import { Toast } from '$lib/components';
</script>

<slot />

<Toast once="init" />
