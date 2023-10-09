-- check if the function exists
BEGIN;

SELECT pg_catalog.pg_function_exists('web.insert_hdv');
SELECT pg_catalog.pg_function_exists('web.delete_hdv');
SELECT pg_catalog.pg_function_exists('web.get_all_hdv');
SELECT pg_catalog.pg_function_exists('web.get_hdv');
SELECT pg_catalog.pg_function_exists('web.get_hdv_by_generic');
SELECT pg_catalog.pg_function_exists('web.get_user_hdv');
SELECT pg_catalog.pg_function_exists('web.update_hdv');
SELECT pg_catalog.pg_function_exists('web.filter_hdv');

ROLLBACK;