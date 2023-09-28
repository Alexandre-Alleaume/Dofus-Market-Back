-- Revert dofusmarket:3.create_view_hdv_generic from pg

BEGIN;

-- Revert the creation of the web.hdv_generic view
DROP VIEW IF EXISTS web.hdv_generic CASCADE;


COMMIT;
