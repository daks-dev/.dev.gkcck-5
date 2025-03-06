import sqlite from 'better-sqlite3';

const DB = new sqlite('src/lib/content/db.sqlite3');

/*
const schema = `
CREATE TABLE IF NOT EXISTS projects(
  id       INTEGER  NOT NULL  PRIMARY KEY,
  name     TEXT     NOT NULL,
  address  TEXT     NOT NULL
);
CREATE TABLE IF NOT EXISTS partners(
  id      INTEGER  NOT NULL PRIMARY KEY,
  name    TEXT     NOT NULL,
  hidden  INTEGER  DEFAULT 0
)`;
DB.exec(schema);
*/

export const getProjects = (): Project[] => DB.prepare('SELECT * FROM projects').all() as Project[];
export const getProject = (id: number): Project =>
  DB.prepare('SELECT * FROM projects WHERE id = ?').get(id) as Project;

export const getOrders = (customer: number): Project[] =>
  DB.prepare('SELECT * FROM projects WHERE customer = ?').all(customer) as Project[];

export const getPartners = (): Partner[] => DB.prepare('SELECT * FROM partners').all() as Partner[];
export const getPartner = (id: number): Partner =>
  DB.prepare('SELECT * FROM partners WHERE id = ?').get(id) as Partner;

export default DB;
