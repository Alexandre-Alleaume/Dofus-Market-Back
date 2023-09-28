-- check if the function exists
SELECT pg_catalog.pg_function_exists('web.insert_item_generic');
SELECT pg_catalog.pg_function_exists('web.delete_item_generic');
SELECT pg_catalog.pg_function_exists('web.get_all_item_generic');
SELECT pg_catalog.pg_function_exists('web.get_item_generic');
SELECT pg_catalog.pg_function_exists('web.get_item_generic_by_name');
SELECT pg_catalog.pg_function_exists('web.update_item_generic');