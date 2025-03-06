import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';

import DB from '../sqlite3';

const placeholder = '/assets/icons/system/image.svg';
const pad = 3;

export async function getProject(id: number): Promise<Project> {
  const slug = id.toString().padStart(pad, '0');

  const data = await stat(resolve(process.cwd(), 'src/lib/content/projects', slug, 'index.ts'))
    .then(async () => (await import(`../../../content/projects/${slug}/index.ts`)).default)
    .catch(() => []);

  return Object.assign(DB.prepare('SELECT * FROM projects WHERE id = ?').get(id) as Project, {
    images: {
      sources: data.sources || [
        {
          src: placeholder,
          width: 1280,
          height: 720
        }
      ],
      squares: data.squares || [
        {
          src: placeholder,
          width: 320,
          height: 320
        }
      ],
      screens: data.squares || [
        {
          src: placeholder,
          width: 320,
          height: 180
        }
      ]
    }
  });
}

export async function getProjects(customer?: number): Promise<Project[]> {
  const records = (
    customer
      ? DB.prepare('SELECT * FROM projects WHERE customer = ?').all(customer)
      : DB.prepare('SELECT * FROM projects').all()
  ) as Project[];

  for (let i = 0; i < records.length; i++) {
    records[i] = await getProject(records[i].id);
  }

  return records;
}
