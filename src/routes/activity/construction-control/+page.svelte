<script lang="ts">
  import { onMount } from 'svelte';
  import {
    ImagePlaceholder,
    TextPlaceholder,
    TestimonialPlaceholder,
    WidgetPlaceholder,
    YandexMetrikaHit,
    audio
  } from '@daks.dev/svelte.sdk';

  const title = 'ГК ССК • Строительный контроль';
  const description = 'Выполнение строительного контроля группой компаний «ССК»';

  onMount(() => setTimeout(() => audio.beep(250, 150, 75), 800));
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Строительный контроль</h1>
  </header>

  <div class="frame space-y-8">
    <ImagePlaceholder />
    <div class="flex gap-8 max-md:flex-col">
      <div class="flex grow flex-col justify-center gap-16 max-md:order-1">
        <TextPlaceholder class="w-full" />
        <TestimonialPlaceholder class="mx-auto w-full max-w-sm" />
      </div>
      <WidgetPlaceholder class="mx-auto" />
    </div>
  </div>
</main>
