BEGIN;

-- je viens énumérer les colonnes pour tester leur existance
SELECT
  *
FROM
  web.items_generic;

ROLLBACK;