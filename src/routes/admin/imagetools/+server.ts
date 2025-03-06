import { resolve } from 'node:path';
import { DEV } from 'esm-env';
import { json } from '@sveltejs/kit';
import { fs } from '@daks.dev/svelte.sdk/server';
import { getPartners, getProjects } from '$lib/shared/sql/server';

const data: Record<string, string[]> = {};

const pad = 3;

const __dirname = fs.__dirname(import.meta.url);

async function copy(src: string, change = false) {
  const source = fs.rootpath(`./src/lib/content/${src}`);
  data[src] = (await fs.readSubdirs(source)) ?? [];
  for (const val of data[src]) {
    const dest = resolve(source, val.toString(), 'index.ts');
    change && (await fs.remove(dest));
    await fs.access(dest, async () => await fs.copyFile(resolve(__dirname, `${src}.ts`), dest));
  }
}

if (DEV) {
  (await getPartners()).forEach((val) =>
    fs.makeDir(fs.rootpath(`./src/lib/content/partners/${val.id.toString().padStart(pad, '0')}`))
  );
  (await getProjects()).forEach((val) =>
    fs.makeDir(fs.rootpath(`./src/lib/content/projects/${val.id.toString().padStart(pad, '0')}`))
  );

  await copy('partners', true);
  await copy('projects', true);
}

export const prerender = false;

export const GET = async () => json(data);
