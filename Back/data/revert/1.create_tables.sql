-- Revert dofusmarket:1.create_tables from pg
BEGIN;

DROP TABLE favoris,
hdv,
items_generic,
user;

-- Revoke privileges from the dofusmarket_group_web role on functions in the 'web' schema
REVOKE EXECUTE ON ALL FUNCTIONS IN SCHEMA web
FROM
  dofusmarket_group_web;

-- Drop the 'web' schema
DROP SCHEMA IF EXISTS web CASCADE;

-- Drop the 'administration' schema
DROP SCHEMA IF EXISTS administration CASCADE;

COMMIT;