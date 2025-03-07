<script lang="ts">
  import { onMount } from 'svelte';
  import { Sign, YandexMetrikaHit } from '@daks.dev/svelte.sdk';
  import {
    ActivityCard,
    HomeHeader,
    PartnersCarousel,
    ProjectsCarousel,
    YandexMap
  } from '$lib/components';

  import type { PageData } from './$types';
  export let data: PageData;
  const { projects, partners } = data;

  import { nav } from '$lib/configs';
  const activity = Object.values(nav.navbar.links).find((el) => el.href === '/activity');

  const title = 'ГК ССК • Современные Стандарты Качества';
  const description = 'Группа компаний «ССК»: cовременные cтандарты rачества';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="relative min-h-screen"
  itemprop="mainContentOfPage">
  <HomeHeader />

  <ProjectsCarousel
    {projects}
    duration={15000}
    controls="play move"
    progress
    stream
    grayscale
    check />

  {#if activity?.links?.length}
    <!--
      flex flex-wrap justify-around gap-y-8 gap-x-16
    -->
    <section class="frame pt-12 lg:pt-16">
      <h2 class="text-brand mb-8">Направления деятельности</h2>
      <div
        class="
          mx-auto grid w-fit
          max-w-full grid-cols-none gap-8 md:grid-cols-2 lg:gap-x-16 2xl:gap-x-32">
        {#each activity.links as { href, label }}
          <ActivityCard
            class="oversee:bg-slate-500/20 dark:oversee:bg-slate-300/20 w-full"
            href="/activity{href}">
            <div
              slot="title"
              class="
                transition-easy
                text-accent group-oversee:text-brand group-oversee:drop-shadow-deep
                text-xl">
              {@html label}
            </div>
          </ActivityCard>
        {/each}
      </div>
    </section>
  {/if}

  <YandexMap
    class={[
      'hidden',
      'mx-auto mt-16 aspect-video w-full max-w-xl overflow-hidden',
      'bg--waiting bg-20% bg-neutral-300 bg-center bg-no-repeat',
      'border-4 border-slate-400',
      'transition duration-500',
      'sm:block',
      'md:max-w-2xl',
      'xl:absolute',
      'xl:top-[5vh] xl:right-[5vw] xl:aspect-4/3 xl:max-w-md xl:rounded-lg',
      'xl:drop-shadow-brand xl:oversee:drop-shadow-hard xl:border',
      '2xl:right-[10vw]',
      '3xl:right-[18vw] 3xl:top-[8vh]'
    ]}
    {projects}
    scaled />

  <section class="frame pt-12 lg:pt-16">
    <h2 class="text-brand mb-8">О нас</h2>
    <div class="flex justify-center gap-8 max-md:flex-wrap">
      <a
        class="
          group oversee:drop-shadow-xs
          relative order-1 h-fit
          w-80 shrink-0
          drop-shadow-md md:order-none"
        href="/partners"
        aria-label="партнёры">
        <span class="sr-only">партнёры</span>
        <Sign
          class="top-2 left-2"
          link
          light />
        <PartnersCarousel
          class="pointer-events-none overflow-hidden rounded-sm border"
          {partners}
          controls=""
          duration={500}
          delay={3500}
          stream>
          парнёры
        </PartnersCarousel>
      </a>
      <div class="readable text-justify">
        <p>
          <strong>Группа компаний «ССК»</strong> создана в 2000 году. Она включает в себя динамично развивающиеся
          компании, работающие в сфере строительства и реализующие амбициозные и уникальные проекты.
        </p>
        <p>
          Сегодня <strong>ГК ССК</strong> является одним из лидеров в строительной отрасли и осуществляет
          следующие функции: технического заказчика, строительный контроль, проектирование, а так же
          лабораторные испытания на базе собственной строительной лаборатории.
        </p>
        <p>
          Наличие штата квалифицированных специалистов практически всех основных строительных
          специальностей позволяет работать с объектами разной степени сложности.
          <b>ГК&nbsp;«ССК»</b> по праву гордится широким портфолио выполненных работ и положительными
          рекомендациями клиентов &mdash; государственных и частных заказчиков работ и услуг в сфере
          строительства.
        </p>
      </div>
    </div>
  </section>
</main>
