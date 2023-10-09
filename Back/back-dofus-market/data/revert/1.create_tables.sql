-- Revert dofusmarket:1.create_tables from pg
BEGIN;

DROP TABLE web.favoris,
web.hdv,
web.items_generic,
administration.user CASCADE;

-- Revoke privileges from the dofusmarket_group_web role on functions in the 'web' schema
REVOKE EXECUTE ON ALL FUNCTIONS IN SCHEMA web
FROM
  dofusmarket_group_web;

-- Drop the 'web' schema
DROP SCHEMA IF EXISTS web CASCADE;

-- Drop the 'administration' schema
DROP SCHEMA IF EXISTS administration CASCADE;

COMMIT;