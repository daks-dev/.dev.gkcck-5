import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';

import DB from '../sqlite3';

const placeholder = '/assets/icons/system/image.svg';
const pad = 3;

export async function getPartner(id: number): Promise<Partner> {
  const slug = id.toString().padStart(pad, '0');

  const data = await stat(resolve(process.cwd(), 'src/lib/content/partners', slug, 'index.ts'))
    .then(async () => (await import(`../../../content/partners/${slug}/index.ts`)).default)
    .catch(() => []);

  return Object.assign(DB.prepare('SELECT * FROM partners WHERE id = ?').get(id) as Partner, {
    images: {
      sources: data.sources || [
        {
          src: placeholder,
          width: 320,
          height: 320
        }
      ],
      squares: data.squares || [
        {
          src: placeholder,
          width: 320,
          height: 320
        }
      ]
    }
  });
}

export async function getPartners(): Promise<Partner[]> {
  const records = DB.prepare('SELECT id FROM partners').all() as Partner[];
  for (let i = 0; i < records.length; i++) {
    records[i] = await getPartner(records[i].id);
  }
  return records;
}
