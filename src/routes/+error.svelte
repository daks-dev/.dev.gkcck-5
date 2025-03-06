<script lang="ts">
  import { page } from '$app/stores';

  const online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
  <title>ГК ССК • {$page.status}</title>
  <meta
    name="description"
    content="Ошибка в работе приложения" />
</svelte:head>

<main class="frame grow justify-center">
  {#if online}
    <h1
      class="
        font-mono text-[35vh] leading-none font-bold
        text-slate-500 dark:text-slate-500">
      {$page.status}
    </h1>

    <div
      class="
        rounded-sm bg-rose-600
        px-12 py-8 text-xl text-gray-200">
      {#if $page.error?.message}
        {$page.error.message}
      {:else}
        Обнаружена ошибка {$page.status}
      {/if}
    </div>

    <!--
    {#if $page.status >= 500}
      {#if dev && $page.error?.stack}
        <pre>{$page.error.stack}</pre>
      {:else}
        <p>Please try reloading the page.</p>
      {/if}
    {/if}
    -->
  {:else}
    <h1 class="text-4xl leading-loose">Похоже отсутствует подключение к интернету</h1>

    <p>Перегрузите страницу при восстановлении соединения.</p>
  {/if}
</main>
