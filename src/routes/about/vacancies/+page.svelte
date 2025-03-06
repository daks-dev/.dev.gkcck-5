<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure, Icon, YandexMetrikaHit } from '@daks.dev/svelte.sdk';
  import image from '$lib/assets/images/team.jpg?w=320&meta';
  import Card from './Card.svelte';

  import microdata from '$lib/configs/microdata';
  const { email } = microdata.organization;

  const title = 'ГК ССК • Вакансии';
  const description = 'Вакансии группы компаний «ССК»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Вакансии</h1>
  </header>

  <div class="readable frame">
    <p class="text-justify">
      В <strong>Группе компаний ССК</strong> работают люди самых разных специальностей: инженеры,
      руководители проектов, проектировщики, сметчики, лаборанты, геодезисты и т.д. Каждый из них
      является высококвалифицированным специалистом в своей сфере. Большая команда единомышленников
      которая работает, применяя
      <em
        class="
          lg:ga-4 xs:text-lg
          mt-4 flex w-full justify-center gap-1 not-italic
          sm:gap-2 sm:text-xl sm:tracking-wider lg:tracking-widest 2xl:gap-8">
        <span class="first-letter:text-brand">Современные</span>
        <span class="first-letter:text-brand">Стандарты</span>
        <span class="first-letter:text-brand">Качества</span>
      </em>
    </p>

    <hr class="border-brand my-8" />

    <h2 class="text-brand mb-4 text-xl">
      Наша Компания заинтересована в талантливых, ответственных и способных работать в команде
      сотрудников!
    </h2>

    <div class="flex gap-4 sm:justify-around">
      <div>
        <h4 class="mb-1">Работа в ГК ССК это:</h4>
        <ul class="ml-2">
          <li><span style="font-size: 17px;">Успешная карьера</span></li>
          <li><span style="font-size: 17px;">Стабильность</span></li>
          <li><span style="font-size: 17px;">Социальные гарантии</span></li>
          <li><span style="font-size: 17px;">Достойная зарплата</span></li>
          <li>
            <span style="font-size: 17px;">Возможность профессионального роста и развития</span>
          </li>
        </ul>
      </div>

      <Figure
        class="hidden sm:flex"
        custom={{ image: 'h-full object-cover' }}
        data={image} />
    </div>

    <hr class="border-brand my-8" />

    <h2 class="mb-8 text-center">Открытые вакансии на данный момент:</h2>

    <div class="mb-12 grid grid-cols-none gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card title="Технический заказчик">
        <ul>
          <li>Инженер строительного контроля (бакалавр)</li>
          <li>Инженер ПТО (BIM/ТИМ)</li>
          <li>Инженер строительного контроля (ОВ/ВК, ЭОМ/СС)</li>
        </ul>
      </Card>
      <Card title="Комплексное проектирование">
        <ul>
          <li>Архитектор</li>
          <li>Инженер-конструктор</li>
          <li>Инженер &mdash; проектировщик (ОВИК, ВК, ЭОМ, СС)</li>
        </ul>
      </Card>
      <Card
        class="max-lg:col-span-full"
        title="Строительная лаборатория">
        <ul>
          <li>Инженер — лаборант</li>
          <li>Техник</li>
          <li>Инженер — геодезист</li>
        </ul>
      </Card>
    </div>
  </div>

  <a
    class="
      group button
      oversee:border-brand
      mx-auto rounded-md border border-slate-500
      bg-slate-300 text-xl
      uppercase dark:bg-slate-600"
    href="mailto:{email}?subject=заявка о приёме на работу"
    target="_blank"
    itemprop="email">
    <Icon
      class="group-oversee:text-brand mr-4 h-8 w-8 text-sky-700 dark:text-sky-600"
      icon="ic:round-mail-outline" />
    Отправить заявку
  </a>
</main>
