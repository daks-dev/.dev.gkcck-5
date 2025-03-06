<script lang="ts">
  import { YandexMetrikaHit } from '@daks.dev/svelte.sdk';
  import { ProjectsList, Toast } from '$lib/components';

  import type { PageData } from './$types';
  export let data: PageData;
  const { projects } = data;

  const title = 'ГК ССК • Проекты';
  const description = 'Проекты группы компаний «ССК»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame mb-3">
    <h1 class="title">Проекты</h1>
  </header>

  <ProjectsList
    {projects}
    grayscale />
</main>

<Toast once="init" />
