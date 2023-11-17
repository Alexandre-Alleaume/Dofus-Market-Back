-- Revert dofusmarket:6.functions_user from pg

BEGIN;



DROP FUNCTION IF EXISTS administration.insert_user(json);
DROP FUNCTION IF EXISTS administration.delete_user(int);
DROP FUNCTION IF EXISTS administration.get_all_user();
DROP FUNCTION IF EXISTS administration.get_user(int);
DROP FUNCTION IF EXISTS administration.get_user_by_pseudo(text);
DROP FUNCTION IF EXISTS administration.get_user_by_email(text);
DROP FUNCTION IF EXISTS administration.update_user(jsonb);
DROP FUNCTION IF EXISTS administration.check_user(json);



COMMIT;
