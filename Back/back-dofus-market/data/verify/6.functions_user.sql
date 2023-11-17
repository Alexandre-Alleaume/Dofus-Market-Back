-- Verify dofusmarket:6.functions_user on pg

BEGIN;

SELECT pg_catalog.pg_function_exists('administration.insert_user');
SELECT pg_catalog.pg_function_exists('administration.delete_user');
SELECT pg_catalog.pg_function_exists('administration.get_all_user');
SELECT pg_catalog.pg_function_exists('administration.get_user');
SELECT pg_catalog.pg_function_exists('administration.get_user_by_pseudo');
SELECT pg_catalog.pg_function_exists('administration.get_user_by_email');
SELECT pg_catalog.pg_function_exists('administration.update_user');
SELECT pg_catalog.pg_function_exists('administration.check_user');

ROLLBACK;
