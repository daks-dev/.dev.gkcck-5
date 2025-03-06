PRAGMA foreign_keys = off;
BEGIN TRANSACTION;


DROP TABLE IF EXISTS vacancies;
CREATE TABLE vacancies (
  id         INTEGER  PRIMARY KEY NOT NULL,
  title      TEXT     NOT NULL,
  content    TEXT     NOT NULL,
  email      TEXT,
  telephone  TEXT,
  count      INTEGER  DEFAULT 0,
  hidden     INTEGER
);


/*
INSERT INTO vacancies ( title, content ) VALUES (
  '',
  ''
);
*/

DROP INDEX IF EXISTS [vacancies.title];
CREATE INDEX [vacancies.title] ON vacancies (
    title ASC
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
