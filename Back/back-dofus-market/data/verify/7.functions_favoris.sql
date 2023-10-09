-- Verify dofusmarket:7.functions_favoris on pg

BEGIN;

SELECT pg_catalog.pg_function_exists('web.insert_favoris');
SELECT pg_catalog.pg_function_exists('web.delete_favoris');
SELECT pg_catalog.pg_function_exists('web.get_all_favoris');
SELECT pg_catalog.pg_function_exists('web.get_favoris');
SELECT pg_catalog.pg_function_exists('web.get_user_favoris');


ROLLBACK;
