<script lang="ts">
  import { Sign, Figure } from '@daks.dev/svelte.sdk';
  //import { sources as logotypes } from '$lib/content/partners/images';

  import microdata from '$lib/configs/microdata';
  const { logo } = microdata.organization;

  export let project: Project;
  export let customer: undefined | 0 | Partner;
  const {
    address,
    area,
    area_term,
    area_unit,
    units,
    units_term,
    scope,
    scope_term,
    activities,
    note
  } = project;
</script>

<div class="flex flex-col gap-3 md:gap-5">
  <dl class="flex flex-col gap-y-4">
    {#if address}
      <div class="flex flex-wrap gap-x-2">
        <dt class="font-semibold text-slate-500">Адрес:</dt>
        <dd class="flex grow">{address}</dd>
      </div>
    {/if}
    {#if area}
      <div class="flex gap-x-2 whitespace-nowrap">
        <dt class="font-semibold text-slate-500">
          {area_term || 'Общая площадь'}:
        </dt>
        <dd>
          {area.toLocaleString()}
          {@html area_unit || 'м<sup>2</sup>'}
        </dd>
      </div>
    {/if}
    {#if units}
      <div class="flex gap-x-2">
        <dt class="font-semibold text-slate-500">
          {units_term || 'Корпусов'}:
        </dt>
        <dd>{units}</dd>
      </div>
    {/if}
    {#if scope}
      <div class="flex gap-x-2">
        <dt class="font-semibold whitespace-nowrap text-slate-500">
          {scope_term || 'Этажность'}:
        </dt>
        <dd>{scope}</dd>
      </div>
    {/if}
    {#if activities}
      <div class="flex flex-wrap gap-x-2">
        <dt class="font-semibold text-slate-500">Виды работ:</dt>
        <dd class="text-accent">{activities}</dd>
      </div>
    {/if}
    {#if note}
      <div>{note}</div>
    {/if}
  </dl>

  {#if customer}
    <a
      class="
        group oversee:drop-shadow-xs
        relative w-fit drop-shadow-md"
      href="/partners/{customer.id.toString().padStart(3, '0')}">
      <Sign
        class="top-0 left-full ml-1"
        link
        small />
      <Figure
        class="hidden md:flex"
        custom={{ image: 'max-h-44 w-auto border border-slate-400 drop-shadow-sm' }}
        data={customer.images?.sources[0]} />
      <h2 class="font-semibold text-slate-500 md:hidden">
        {customer.name}
      </h2>
    </a>
  {:else}
    <img
      class="mr-auto h-20 w-auto drop-shadow-lg sm:h-24 md:h-28"
      src={logo}
      alt="" />
  {/if}
</div>
