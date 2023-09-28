-- Revert dofusmarket:5.functions_hdv from pg

BEGIN;

DROP FUNCTION IF EXISTS web.insert_hdv(jsonb);
DROP FUNCTION IF EXISTS web.delete_hdv(int);
DROP FUNCTION IF EXISTS web.get_all_hdv();
DROP FUNCTION IF EXISTS web.get_hdv(int);
DROP FUNCTION IF EXISTS web.get_hdv_by_generic(int);
DROP FUNCTION IF EXISTS web.get_user_hdv(int);
DROP FUNCTION IF EXISTS web.update_hdv(jsonb);
DROP FUNCTION IF EXISTS web.filter_hdv(jsonb);

COMMIT;
