-- Revert dofusmarket:7.functions_favoris from pg

BEGIN;


DROP FUNCTION IF EXISTS web.insert_favoris(json);
DROP FUNCTION IF EXISTS web.delete_favoris(int);
DROP FUNCTION IF EXISTS web.get_all_favoris();
DROP FUNCTION IF EXISTS web.get_favoris(int);
DROP FUNCTION IF EXISTS web.get_user_favoris(int);


COMMIT;
