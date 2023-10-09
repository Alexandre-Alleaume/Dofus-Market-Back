-- Revert dofusmarket:4.functions_items_generic from pg

BEGIN;

DROP FUNCTION IF EXISTS web.insert_item_generic(jsonb);
DROP FUNCTION IF EXISTS web.delete_item_generic(int);
DROP FUNCTION IF EXISTS web.get_all_item_generic();
DROP FUNCTION IF EXISTS web.get_item_generic(int);
DROP FUNCTION IF EXISTS web.get_item_generic_by_name(text);
DROP FUNCTION IF EXISTS web.update_item_generi(jsonb);

COMMIT;
