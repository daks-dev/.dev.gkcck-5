<script lang="ts">
  import { onMount } from 'svelte';
  import { placeholder } from '@daks.dev/svelte.sdk';
  import { YandexMetrikaHit } from '@daks.dev/svelte.sdk';
  import { Toast } from '$lib/components';
  import { sources as images } from '$lib/content/permissions';

  const title = 'ГК ССК • Допуски';
  const description = 'Допуски группы компаний «ССК»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Допуски и сертификаты</h1>
  </header>

  <div class="readable frame text-justify">
    <p>
      <strong>ГК&nbsp;ССК </strong>аккредитована в нескольких строительных, проектном, а также
      изыскательном СРО с уровнем ответственности, достаточным для работы на уникальных и особо
      опасных объектах. Это дает право осуществлять работы, которые оказывают влияние на
      безопасность объектов капитального строительства. Имеет Свидетельство об аккредитации на право
      проведения негосударственной экспертизы проектной документации и негосударственной экспертизы
      результатов инженерных изысканий.
    </p>
    <p>
      Сертифицирована по стандарту ГОСТ Р ИСО 9001-2015, а также имеет лицензию Министерства
      культуры для работы на объектах культурного наследия. Гражданская ответственность Компании
      застрахована в одной из старейших российских страховых компаний — «Zetta Страхование».
    </p>
    <p>
      Имеет собственный лицензированный учебный центр, аккредитованный в Министерстве Труда, МЧС.
    </p>
    <p>
      Входит в попечительский совет МГСУ, с которым тесно сотрудничает по созданию уникальных
      учебных программ для обучения молодых специалистов
      <em
        class="
      lg:ga-4 xs:text-lg
      mt-2 flex w-full justify-center gap-1 not-italic
      sm:gap-2 sm:text-xl sm:tracking-wider lg:tracking-widest 2xl:gap-8">
        <span class="first-letter:text-brand">Современным</span>
        <span class="first-letter:text-brand">Стандартам</span>
        <span class="first-letter:text-brand">Качества</span>
      </em>
    </p>

    <hr class="border-brand my-7" />
  </div>

  <section class="readable frame">
    <h1 class="mb-4 text-center uppercase">Допуски СРО</h1>

    <div class="grid items-center gap-5 sm:grid-cols-[240px_minmax(0,_1fr)]">
      <h2 class="col-span-full uppercase">Строительство:</h2>
      <img
        class="
          lazy
          bg-20% bg--loading
          rounded-sm border bg-white bg-center bg-no-repeat drop-shadow-md"
        src={placeholder}
        data-src={images[0].src}
        width={images[0].width}
        height={images[0].height}
        alt=""
        decoding="async"
        loading="lazy" />
      <p class="max-sm:-mt-4">
        Ассоциация «Саморегулируемая организация «Объединение строительных организаций «Эксперт
        Строй» <span class="font-semibold whitespace-nowrap">№ СРО-С-265-253-7715093478.01</span>
      </p>
      <img
        class="
          lazy
          bg-20% bg--loading
          rounded-sm border bg-white bg-center bg-no-repeat drop-shadow-md"
        src={placeholder}
        data-src={images[1].src}
        width={images[1].width}
        height={images[1].height}
        alt=""
        decoding="async"
        loading="lazy" />
      <p class="max-sm:-mt-4">
        Ассоциация «Саморегулируемая организация «Объединение подрядных организаций»
        <span class="font-semibold whitespace-nowrap">№ СРО-С-185-26012010</span>
      </p>

      <h2 class="col-span-full uppercase">Проектирование:</h2>
      <img
        class="
          lazy
          bg-20% bg--loading
          rounded-sm border bg-white bg-center bg-no-repeat drop-shadow-md"
        src={placeholder}
        data-src={images[2].src}
        width={images[2].width}
        height={images[2].height}
        alt=""
        decoding="async"
        loading="lazy" />
      <p class="max-sm:-mt-4">
        Ассоциация «Саморегулируемая организация «Объединение проектных организации»
        <span class="font-semibold whitespace-nowrap">№ СРО-П-120-18012010</span>
      </p>

      <h2 class="col-span-full uppercase">Изыскания:</h2>
      <img
        class="
          lazy
          bg-20% bg--loading
          rounded-sm border bg-white bg-center bg-no-repeat drop-shadow-md"
        src={placeholder}
        data-src={images[3].src}
        width={images[3].width}
        height={images[3].height}
        alt=""
        decoding="async"
        loading="lazy" />
      <p class="max-sm:-mt-4">
        Ассоциация Саморегулируемая организация «Объединение изыскательских организаций
        транспортного комплекса»
        <span class="font-semibold whitespace-nowrap">№ СРО-И-023-14012010</span>
      </p>
    </div>

    <hr class="border-brand my-7" />
  </section>

  <section class="readable frame">
    <h1 class="mb-4 text-center uppercase">Сертификаты и лицензии</h1>

    <h4 class="mb-2">
      Сертификат соответствия системы менеджмента качества
      <span class="whitespace-nowrap">ГОСТ Р ИСО 9001-2015</span>
    </h4>
    <p>
      Внедрённая в Компании СМК, основанная на принципах ГОСТ Р ИСО 9001–2008, позволила настроить:
    </p>
    <ul class="mb-4 ml-2">
      <li>оптимальную организационную структуру ГК;</li>
      <li>
        систему административного управления, направленную на совершенствование деятельности
        Компании;
      </li>
      <li>
        систему управления персоналом, которая позволила повысить ответственность каждого сотрудника
        и уровень их профессиональной подготовки;
      </li>
      <li>систему документооборота;</li>
      <li>
        систему разработки и оказания услуг, направленную на удовлетворение потребностей Заказчиков;
      </li>
      <li>
        систему внутреннего контроля качества выполняемых работ по всем направлениям деятельности
        ГК&nbsp;ССК.
      </li>
    </ul>

    <h4 class="mb-2">
      Лицензия Министерства Культуры Российской Федерации
      <span class="whitespace-nowrap">№ МКРФ 20297</span>
    </h4>
    <p>
      Лицензия дает право на осуществление деятельности по сохранению объектов культурного наследия
      (памятников истории и культуры народов) Российской федерации:
    </p>
    <ul class="ml-2">
      <li>
        Разработка проектной документации по консервации, реставрации и воссозданию объектов
        культурного наследия (памятников истории и культуры) народов Российской Федерации;
      </li>
      <li>
        Разработка проектной документации по ремонту и приспособлению объектов культурного наследия
        (памятников истории и культуры) народов Российской Федерации;
      </li>
      <li>
        Реставрация, консервация и воссоздание оснований, фундаментов, кладок, ограждающих
        конструкций и распорных систем;
      </li>
      <li>
        Ремонт и приспособление объектов культурного наследия (памятников истории и культуры)
        народов Российской Федерации.
      </li>
    </ul>

    <hr class="border-brand my-7" />
  </section>

  <section class="readable frame">
    <h1 class="mb-4 text-center uppercase">Аккредитации</h1>

    <div class="flex justify-around gap-8 max-md:flex-wrap">
      <div>
        <h4 class="mb-2">
          Свидетельство
          <span class="whitespace-nowrap">№ RA.RU.611860</span>
        </h4>
        <p class="mb-4 font-semibold">
          Аккредитация юридических лиц на право проведения негосударственной экспертизы проектной
          документации и (или) негосударственной экспертизы результатов инженерных изысканий
        </p>
        <ul>
          <li>Аккредитация на право негосударственной экспертизы проектной документации.</li>
        </ul>
      </div>
      <div>
        <h4 class="mb-2">
          Свидетельство
          <span class="whitespace-nowrap">№ RA.RU.611860</span>
        </h4>
        <p class="mb-4 font-semibold">
          Аккредитация юридических лиц на право проведения негосударственной экспертизы проектной
          документации и (или) негосударственной экспертизы результатов инженерных изысканий
        </p>
        <ul>
          <li>Аккредитация на право негосударственной экспертизы проектной документации.</li>
        </ul>
      </div>
    </div>

    <hr class="border-brand my-7" />
  </section>

  <section class="readable frame">
    <h1 class="mb-4 text-center uppercase">Учебный центр</h1>

    <ul class="lg:text-lg">
      <li>
        Лицензия на осуществление образовательной деятельности от 05 октября 2020 года
        <span class="font-semibold whitespace-nowrap">№ 041025</span>;
      </li>
      <li>
        Заключения о соответствии образовательных программ ПТМ и ГО/ЧС обязательным требованиям в
        области пожарной безопасности УНД ГУ МЧС России по г. Москве от 24 ноября 2020 года
        <span class="font-semibold whitespace-nowrap">№ ИВ-108-2235</span>;
      </li>
      <li>
        Уведомления Минтруда России от 17 февраля 2021 года
        <span class="font-semibold whitespace-nowrap">№ 15-4/В-616</span>
        «О внесении в реестр аккредитованных организаций, оказывающих услуги в области охраны труда».
      </li>
    </ul>

    <hr class="border-brand my-7" />
  </section>

  <section class="readable frame">
    <h1 class="mb-4 text-center uppercase">Работа с НИУ МГСУ</h1>

    <p class="text-justify">
      С 2021 года ГК&nbsp;ССК входит в попечительский совет НИУ&nbsp;МГСУ в состав Попечительского
      совета вошли представители и руководители строительного комплекса, Правительства Москвы и
      Московской области, крупных строительных, научных и проектных организаций, заинтересованных в
      высококвалифицированных выпускниках университета, а также в использовании на практике научных
      и проектных разработок вузовской науки.Обеспечивая взаимодействие со строительным комплексом
      Москвы и другими организациями, Попечительский совет связывает производство и профессиональное
      образование. Большое внимание уделяется подготовке, переподготовке и повышению квалификации
      кадров по заказам строительных организаций, трудоустройству выпускников на строительных
      предприятиях города Москвы и страны. Также внедряется программа по подготовке и обновлению
      кадрового состава самого университета, нуждающегося в пополнении молодыми сотрудниками,
      прошедшими производственную строительную школу.Финансовым инструментом работы Попечительского
      совета НИУ&nbsp;МГСУ является созданная по его решению Некоммерческая организация «Фонд
      развития строительного образования и науки». Цель Фонда — управление средствами для
      финансирования Программ развития НИУ&nbsp;МГСУ и входящих в него институтов.
    </p>
  </section>
</main>

<Toast once="init" />
