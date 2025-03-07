<script lang="ts">
  import { YandexMap, YandexMetrikaHit } from '@daks.dev/svelte.sdk';
  import { navigate } from '@daks.dev/svelte.sdk/stores';
  import Aside from './Aside.svelte';
  import Data from './Data.svelte';
  import Toast from './Toast.svelte';

  import type { PageData } from './$types';
  export let data: PageData;
  const { project, prev, next, customer } = data;
  const { id, name, location, title, description } = project;

  $navigate = { prev, next };

  const geometry = location.split(', ').map((x: string) => Number(x));

  const geodata = {
    locations: [
      {
        geometry,
        properties: {
          iconContent: `
            <strong class="hidden sm:block pointer: coarsemax-w-[16rem] md:max-w-xs lg:max-w-none truncate">${name}</strong>
            <strong class="sm:hidden">${id}</strong>`
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: geometry,
      zoom: 16,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    },
    options: {
      autoFitToViewport: 'always',
      suppressMapOpenBlock: true
    }
  };
</script>

<YandexMetrikaHit
  title="ГК ССК • {title || name}"
  description={description || `ГК ССК : ${title || name}`} />

<main
  class="grow gap-8"
  itemprop="mainContentOfPage">
  <header
    class="
      frame mb-0
      flex items-start gap-2 lg:gap-4">
    <h1 class="title">{name}</h1>
    <small class="text-accent font-semibold">({id})</small>
  </header>

  <div
    class="
      frame
      flex justify-between gap-8 max-md:flex-col">
    <Data
      {project}
      {customer} />

    <Aside
      sources={project.images?.sources}
      thumbnails={project.images?.screens} />
  </div>

  <div
    class="
      frame xs:h-[35vmax] flex
      h-[40vmax] grow sm:h-[30vmax] md:h-[25vmax] lg:h-auto">
    <YandexMap
      class="
        bg--waiting bg-25% sm:bg-20%
        md:bg-10% min-h-full w-full overflow-hidden border-4 border-slate-400 bg-gray-100 bg-center
        bg-no-repeat dark:bg-slate-200"
      data={geodata} />
  </div>
</main>

<Toast />
