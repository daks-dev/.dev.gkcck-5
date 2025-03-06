import { DEV } from 'esm-env';
import { json } from '@sveltejs/kit';
import DB, { getPartners, getOrders } from '$lib/shared/sql/sqlite3';

const data: Record<string, unknown> = {};

if (DEV) {
  getPartners().forEach((el) =>
    DB.prepare('UPDATE partners SET projects = ? WHERE id = ?').run(getOrders(el.id).length, el.id)
  );
}

export const prerender = false;

export const GET = async () => json(data);
